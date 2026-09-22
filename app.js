/**
 * SMS Campaign Manager — Interactive Showcase Engine
 * Replicates the Kotlin Android logic (SmsCalculator, SimManager, Dispatch Engine)
 * Author: Evostackr
 */

// Preset Recipient Groups
const RECIPIENT_GROUPS = {
  retail: [
    { name: "Aarav Sharma", phone: "+91 98234 11201", deal: "40% OFF", code: "SAVE40" },
    { name: "Priya Patel", phone: "+91 97120 54321", deal: "Buy 1 Get 1 Free", code: "BOGO2026" },
    { name: "Rahul Verma", phone: "+91 99881 23456", deal: "₹500 Cashback", code: "CASH500" },
    { name: "Sneha Nair", phone: "+91 94471 98765", deal: "Free Shipping + 20% OFF", code: "FREESHIP" },
    { name: "Vikram Malhotra", phone: "+91 98110 33445", deal: "30% VIP Voucher", code: "VIP30" }
  ],
  vip: [
    { name: "Ananya Iyer", phone: "+91 98401 22334", deal: "50% Platinum Perk", code: "PLATINUM" },
    { name: "Rohan Gupta", phone: "+91 98102 55667", deal: "Double Reward Points", code: "2XPOINTS" },
    { name: "Kavita Reddy", phone: "+91 98490 88776", deal: "₹1,000 Luxury Gift Card", code: "GIFT1000" },
    { name: "Aditya Joshi", phone: "+91 98220 44556", deal: "Exclusive Early Access", code: "EARLYBIRD" },
    { name: "Meera Sen", phone: "+91 98300 11998", deal: "Free Express Delivery", code: "EXPRESS" },
    { name: "Arjun Singhania", phone: "+91 98200 99887", deal: "Complimentary Suite Upgrade", code: "SUITE" },
    { name: "Divya Pillai", phone: "+91 94460 77889", deal: "Special 35% Discount", code: "DIVYA35" },
    { name: "Siddharth Jain", phone: "+91 98290 66554", deal: "₹750 Voucher", code: "JAIN750" },
    { name: "Neha Saxena", phone: "+91 98180 33221", deal: "Free Goodie Box", code: "GOODIE" },
    { name: "Manish Chawla", phone: "+91 98101 22446", deal: "45% Flat Off", code: "FLAT45" }
  ],
  leads: [
    { name: "Abhishek", phone: "+91 98711 00112", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Tanvi", phone: "+91 98722 00223", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Gaurav", phone: "+91 98733 00334", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Ritika", phone: "+91 98744 00445", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Manav", phone: "+91 98755 00556", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Sonali", phone: "+91 98766 00667", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Harsh", phone: "+91 98777 00778", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Kunal", phone: "+91 98788 00889", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Deepak", phone: "+91 98799 00990", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Ishaan", phone: "+91 98800 11001", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Swati", phone: "+91 98811 22112", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Varun", phone: "+91 98822 33223", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Simran", phone: "+91 98833 44334", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Nitin", phone: "+91 98844 55445", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Payal", phone: "+91 98855 66556", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Rohit", phone: "+91 98866 77667", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Preeti", phone: "+91 98877 88778", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Tarun", phone: "+91 98888 99889", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Geeta", phone: "+91 98899 00991", deal: "Free Masterclass Pass", code: "LEARN" },
    { name: "Karan", phone: "+91 98900 11002", deal: "Free Masterclass Pass", code: "LEARN" }
  ]
};

// Simulation State
let currentSimSlot = 1;
let currentGroupKey = 'retail';
let intervalDelaySeconds = 2.0;
let isDispatching = false;
let dispatchTimer = null;
let currentDispatchIndex = 0;
let eventCount = 0;

// Raw Dirty Contacts for Cleanser Demo
const SAMPLE_DIRTY_DATA = [
  { raw: "9823411201", issue: "Missing Country Code" },
  { raw: "+91 982-341-1201", issue: "Hyphens & Extra Spacing" },
  { raw: "09823411201 (Repeated)", issue: "Duplicate Contact Entry" },
  { raw: "9823411201", issue: "Exact Duplicate Entry" },
  { raw: "+91-97120-54321#VIP", issue: "Invalid Suffix Characters" },
  { raw: "9988123456", issue: "Local Format (Missing +91)" }
];

document.addEventListener('DOMContentLoaded', () => {
  initClock();
  updateTemplateStats();
  renderCleanDemo();
  updatePreviewRecipient(0);

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Real-time Phone Clock
function initClock() {
  const clockElem = document.getElementById('phone-time');
  const update = () => {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (clockElem) clockElem.textContent = `${hrs}:${mins}`;
  };
  update();
  setInterval(update, 30000);
}

// Tab Switching inside Simulator
function switchSimTab(tabName) {
  document.querySelectorAll('.sim-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.sim-tab-content').forEach(content => content.classList.remove('active'));

  const activeBtn = document.getElementById(`tab-${tabName}-btn`);
  const activeContent = document.getElementById(`tab-${tabName}`);

  if (activeBtn) activeBtn.classList.add('active');
  if (activeContent) activeContent.classList.add('active');
}

// SIM Slot Selector
function selectSimSlot(slot) {
  currentSimSlot = slot;
  const chip1 = document.getElementById('sim-chip-1');
  const chip2 = document.getElementById('sim-chip-2');
  const indicator = document.getElementById('sim-carrier-indicator');
  const phoneIndicator = document.getElementById('phone-sim-indicator');

  if (slot === 1) {
    chip1.classList.add('active');
    chip2.classList.remove('active');
    indicator.textContent = 'Active: Jio True 5G';
    phoneIndicator.textContent = 'SIM 1 Jio';
    logTerminal('SIM changed: Switched to Slot 1 (Jio 5G)', 'info');
  } else {
    chip2.classList.add('active');
    chip1.classList.remove('active');
    indicator.textContent = 'Active: Airtel 4G';
    phoneIndicator.textContent = 'SIM 2 Airtel';
    logTerminal('SIM changed: Switched to Slot 2 (Airtel 4G)', 'info');
  }
}

// Group Selection
function onGroupChange() {
  const select = document.getElementById('target-group-select');
  currentGroupKey = select.value;
  const count = RECIPIENT_GROUPS[currentGroupKey].length;
  document.getElementById('group-recipient-count').textContent = `${count} Recipients`;
  updateTemplateStats();
  resetDispatch();
  updatePreviewRecipient(0);
}

// Insert Variable Tag into Textarea
function insertTag(tag) {
  const textarea = document.getElementById('sim-template-input');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;

  textarea.value = text.substring(0, start) + tag + text.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + tag.length;

  updateTemplateStats();
}

/**
 * SMS Calculator (Replicates SmsCalculator.kt from the Android app)
 * GSM 7-bit: 160 chars for single, 153 chars for multi-part
 * Unicode (UCS-2): 70 chars for single, 67 chars for multi-part
 */
function calculateSegments(message) {
  if (!message || message.length === 0) return { segments: 0, isUnicode: false };
  
  // Any character with code > 127 requires UCS-2 encoding in SMS
  let isUnicode = false;
  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) > 127) {
      isUnicode = true;
      break;
    }
  }

  let segments = 1;
  if (isUnicode) {
    if (message.length <= 70) {
      segments = 1;
    } else {
      segments = Math.ceil(message.length / 67);
    }
  } else {
    if (message.length <= 160) {
      segments = 1;
    } else {
      segments = Math.ceil(message.length / 153);
    }
  }

  return { segments, isUnicode };
}

// Update Template Stats & Preview
function updateTemplateStats() {
  const textarea = document.getElementById('sim-template-input');
  const text = textarea.value;
  const len = text.length;

  const { segments, isUnicode } = calculateSegments(text);
  const recipientCount = RECIPIENT_GROUPS[currentGroupKey].length;
  const totalSms = segments * recipientCount;

  document.getElementById('calc-char-count').textContent = len;
  
  const encodingElem = document.getElementById('calc-encoding');
  if (isUnicode) {
    encodingElem.textContent = 'UCS-2 (Unicode)';
    encodingElem.className = 'calc-val text-purple';
  } else {
    encodingElem.textContent = 'GSM 7-bit';
    encodingElem.className = 'calc-val text-blue';
  }

  document.getElementById('calc-segments').textContent = `${segments} SMS`;
  document.getElementById('calc-total-sms').textContent = `${totalSms}`;

  updatePreviewRecipient(currentDispatchIndex);
}

// Update Rate Limiting Interval
function updateInterval(val) {
  intervalDelaySeconds = parseFloat(val);
  const display = document.getElementById('interval-display');
  display.textContent = `${intervalDelaySeconds.toFixed(1)} seconds`;
  
  // Update live speed
  const smsPerMin = Math.round(60 / intervalDelaySeconds);
  document.getElementById('live-speed-counter').textContent = `${smsPerMin} SMS/min`;
}

// Update Preview with specific recipient data
function updatePreviewRecipient(index) {
  const group = RECIPIENT_GROUPS[currentGroupKey];
  const recipient = group[index % group.length];
  const template = document.getElementById('sim-template-input').value;

  const resolvedMsg = template
    .replace(/\{name\}/g, recipient.name)
    .replace(/\{deal\}/g, recipient.deal)
    .replace(/\{code\}/g, recipient.code);

  const previewBody = document.getElementById('live-preview-body');
  const recipientTag = document.getElementById('live-recipient-tag');

  if (previewBody) previewBody.textContent = resolvedMsg;
  if (recipientTag) recipientTag.textContent = `To: ${recipient.name} (${recipient.phone})`;
}

// Terminal Logging
function logTerminal(message, type = 'info') {
  const terminal = document.getElementById('live-log-terminal');
  if (!terminal) return;

  eventCount++;
  document.getElementById('log-count-badge').textContent = `${eventCount} events`;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  const entry = document.createElement('div');
  entry.className = `log-entry log-${type}`;
  entry.textContent = `[${timeStr}] ${message}`;

  terminal.appendChild(entry);
  terminal.scrollTop = terminal.scrollHeight;
}

// Dispatch Controller (Toggle Start/Pause)
function toggleDispatch() {
  if (isDispatching) {
    pauseDispatch();
  } else {
    startDispatch();
  }
}

function startDispatch() {
  const group = RECIPIENT_GROUPS[currentGroupKey];
  if (currentDispatchIndex >= group.length) {
    resetDispatch();
  }

  isDispatching = true;
  document.getElementById('start-btn-text').textContent = 'Pause Dispatch';
  document.getElementById('start-dispatch-btn').className = 'btn btn-secondary btn-block';
  document.getElementById('live-pulsing-dot').style.display = 'flex';
  document.getElementById('phone-campaign-status').textContent = 'Executing Service...';

  logTerminal(`Campaign dispatch initiated via SIM ${currentSimSlot}. Foreground service running.`, 'info');
  scheduleNextSms();
}

function pauseDispatch() {
  isDispatching = false;
  if (dispatchTimer) clearTimeout(dispatchTimer);
  document.getElementById('start-btn-text').textContent = 'Resume Dispatch';
  document.getElementById('start-dispatch-btn').className = 'btn btn-primary btn-block';
  document.getElementById('live-pulsing-dot').style.display = 'none';
  document.getElementById('phone-campaign-status').textContent = 'Paused';

  logTerminal('Campaign dispatch paused by user.', 'warn');
}

function resetDispatch() {
  if (dispatchTimer) clearTimeout(dispatchTimer);
  isDispatching = false;
  currentDispatchIndex = 0;

  document.getElementById('start-btn-text').textContent = 'Start Live Dispatch';
  document.getElementById('start-dispatch-btn').className = 'btn btn-primary btn-block';
  document.getElementById('live-pulsing-dot').style.display = 'none';
  document.getElementById('phone-campaign-status').textContent = 'Idle • Ready to Dispatch';

  document.getElementById('live-progress-pct').textContent = '0%';
  document.getElementById('live-progress-bar').style.width = '0%';
  
  const group = RECIPIENT_GROUPS[currentGroupKey];
  document.getElementById('live-sent-counter').textContent = `0 / ${group.length} Sent`;

  const terminal = document.getElementById('live-log-terminal');
  terminal.innerHTML = '<div class="log-entry log-system">System reset. Queue cleared.</div>';
  eventCount = 0;
  document.getElementById('log-count-badge').textContent = '0 events';

  updatePreviewRecipient(0);
}

function scheduleNextSms() {
  if (!isDispatching) return;

  const group = RECIPIENT_GROUPS[currentGroupKey];
  if (currentDispatchIndex >= group.length) {
    // Campaign Finished
    isDispatching = false;
    document.getElementById('start-btn-text').textContent = 'Dispatch Complete';
    document.getElementById('start-dispatch-btn').className = 'btn btn-outline btn-block';
    document.getElementById('live-pulsing-dot').style.display = 'none';
    document.getElementById('phone-campaign-status').textContent = 'Completed (100%)';
    logTerminal(`Campaign finished! Successfully sent ${group.length} messages.`, 'success');
    return;
  }

  const recipient = group[currentDispatchIndex];
  updatePreviewRecipient(currentDispatchIndex);

  // Send message
  const simName = currentSimSlot === 1 ? 'SIM1 (Jio)' : 'SIM2 (Airtel)';
  logTerminal(`[SmsSendingService] Outgoing SMS #${currentDispatchIndex + 1} -> ${recipient.phone} (${recipient.name}) via ${simName}`, 'info');

  // Realistic delivery ack timeout (0.5s later)
  setTimeout(() => {
    logTerminal(`[SmsStatusReceiver] DELIVERED: Message ID #${1000 + currentDispatchIndex} to ${recipient.phone}`, 'success');
    currentDispatchIndex++;

    // Update progress
    const pct = Math.round((currentDispatchIndex / group.length) * 100);
    document.getElementById('live-progress-pct').textContent = `${pct}%`;
    document.getElementById('live-progress-bar').style.width = `${pct}%`;
    document.getElementById('live-sent-counter').textContent = `${currentDispatchIndex} / ${group.length} Sent`;

    if (currentDispatchIndex < group.length && isDispatching) {
      // Delay before next message based on slider
      dispatchTimer = setTimeout(scheduleNextSms, intervalDelaySeconds * 1000);
    } else if (currentDispatchIndex >= group.length) {
      scheduleNextSms(); // Trigger finish
    }
  }, 400);
}

// CSV Cleanser Demo
function renderCleanDemo() {
  const rawList = document.getElementById('raw-csv-list');
  const cleanList = document.getElementById('cleaned-csv-list');
  if (!rawList || !cleanList) return;

  rawList.innerHTML = '';
  cleanList.innerHTML = '';

  SAMPLE_DIRTY_DATA.forEach((item) => {
    const rawDiv = document.createElement('div');
    rawDiv.className = 'csv-row-item invalid';
    rawDiv.innerHTML = `<span>${item.raw}</span> <span style="font-size: 0.65rem; opacity: 0.7;">(${item.issue})</span>`;
    rawList.appendChild(rawDiv);
  });

  const uniqueValid = [
    "+91 98234 11201 (Sanitized to E.164)",
    "+91 97120 54321 (Cleaned Suffixes)",
    "+91 99881 23456 (Added Country Code)"
  ];

  uniqueValid.forEach((cleaned) => {
    const cleanDiv = document.createElement('div');
    cleanDiv.className = 'csv-row-item valid';
    cleanDiv.innerHTML = `<span>${cleaned}</span>`;
    cleanList.appendChild(cleanDiv);
  });
}

function shuffleCleanDemo() {
  renderCleanDemo();
  logTerminal('CSV contact importer re-scanned sample records: 6 entries parsed -> 3 verified valid unique numbers.', 'info');
}

// Simulated PDF Export
function simulatePdfExport() {
  alert("📄 PDF Delivery Audit Report Generated!\n\nSummary:\n- Campaign: Festive Launch 2026\n- Total Dispatched: 1,263 SMS\n- Delivered Rate: 98.8%\n- Carrier: Jio True 5G (Dual SIM)\n- Verification: Cryptographically Signed by Evostackr");
  logTerminal('Exported Delivery Audit PDF report to device storage (Downloads/SCM_Report.pdf)', 'success');
}

// FAQ Accordion Toggle
function toggleFaq(button) {
  const item = button.parentElement;
  const isOpen = item.classList.contains('open');

  // Close other open items
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

  if (!isOpen) {
    item.classList.add('open');
  }
}
