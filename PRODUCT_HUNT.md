# 🚀 Product Hunt Launch Kit — SMS Campaign Manager

Welcome to the official, launch-ready Product Hunt kit for **SMS Campaign Manager** by **Evostackr**. This document contains everything you need to execute a top-ranking Product Hunt launch: metadata, tagline, maker comments, media copy, promotional distribution templates, and community response scripts.

---

## 📋 1. Product Listing Details

| Field | Content | Note |
| :--- | :--- | :--- |
| **Product Name** | `SMS Campaign Manager` | Official Brand Name |
| **Tagline (<= 60 chars)** | `Turn any Android device into a bulk SMS marketing engine` | Exact 58 chars &bull; Punchy & benefit-driven |
| **Website URL** | `https://evostackr.github.io/SCMweb/` | Live Showcase & Interactive Simulator |
| **Download / Repo URL**| `https://github.com/Evostackr/SmsCampaignManager` | Open Source Repository & Signed Release APK |
| **Pricing Type** | `Free / 100% Open Source (MIT)` | Zero subscription, no hidden in-app fees |
| **Categories / Topics** | `Android`, `Marketing`, `Open Source`, `Privacy`, `Productivity`, `Developer Tools` | High-traffic PH tags |

---

## 💬 2. The First Maker Comment (Pin on Launch)

> **Copy & Paste this as your initial comment the moment the post goes live.**

```markdown
Hey Product Hunt community! 👋

I'm thrilled to introduce **SMS Campaign Manager** — an offline-first, high-throughput Android application engineered to liberate marketers, indie hackers, and businesses from predatory cloud SMS gateway markups.

### 💡 Why we built this:
If you’ve ever run an SMS campaign through cloud gateways like Twilio, Sinch, or enterprise aggregators, you know the pain:
1. **Crazy bills:** Paying $0.015 to $0.05+ for every single text message drains budgets fast.
2. **Third-party data leakage:** You are forced to upload your entire confidential customer phonebook to remote cloud servers.
3. **Regulatory headaches:** Sudden vendor bans, convoluted API approvals, and endless verification bottlenecks.

Yet, sitting right in your pocket, modern Android smartphones come equipped with dual-SIM slots, lightning-fast processors, and carrier plans with thousands of bundled or unlimited SMS texts for a flat, negligible monthly fee.

We asked: **Why not turn any standard Android smartphone into a private, automated high-volume bulk SMS dispatch server?**

---

### ⚡ What makes SMS Campaign Manager special:
- 📶 **Native Dual-SIM Balancing:** Integrates with Android's `SubscriptionManager` to route messages intelligently through SIM 1 (e.g. Jio) or SIM 2 (e.g. Airtel).
- 🧹 **Intelligent CSV Ingestion:** Automatic phone number cleansing, country code normalization to E.164 (+91, +1, etc.), and instant deduplication.
- 🎯 **Dynamic Template Studio:** Live tag personalization (`{name}`, `{product}`, `{discount}`) with a built-in GSM-7 vs. UCS-2 Unicode segment calculator matching carrier billing boundaries.
- 🛡️ **Zero Cloud Telemetry & AES-256 Storage:** 100% offline-first. Your contact databases live inside an encrypted Room SQLite database and never leave your handset.
- ⚡ **Persistent Foreground Dispatch Engine:** Powered by Android's `ForegroundService` with CPU WakeLocks — continues dispatching uninterrupted even when the screen is locked.
- 🔄 **Midnight Auto-Reset & Boot Recovery:** Automatically pauses when daily carrier limits hit and resumes precisely at midnight (00:00) or after phone reboots.
- 📊 **Audit Reports:** Export real-time delivery logs, success rates, and audit reports to CSV or signed PDF.

---

### 🛠️ Open Source & Tech Stack:
- Built with **Kotlin 2.0**, **Jetpack Compose**, **Material Design 3**, **Clean Architecture + MVVM**, **Hilt DI**, and targeting **Android 15 (API 35)**.
- Pre-built cryptographically signed production APK available for instant sideloading.
- 100% Free and licensed under **MIT**.

We would love your feedback, feature ideas, and test runs! Give our live interactive simulator a spin on the web, check out the source code, and tell us what you think in the comments below! 👇

Thank you for your support! 🚀
— The Evostackr Team
```

---

## 📝 3. Detailed Product Description (PH Body)

```markdown
### What is SMS Campaign Manager?
SMS Campaign Manager by Evostackr is a professional, privacy-conscious bulk messaging application designed to help businesses, retail brands, freelancers, and organizations manage contact directories, schedule targeted outreach, and execute high-scale SMS campaigns directly from their Android devices.

By leveraging direct-to-carrier Android system services rather than costly third-party cloud APIs, SMS Campaign Manager enables 100% cost-free SMS sending using your existing carrier SIM card plans.

---

### Key Features

#### 1. Native Dual-SIM Carrier Switching
- Real-time carrier slot detection (Jio, Airtel, Vi, T-Mobile, Vodafone, AT&T, etc.)
- Designate dedicated SIM slots per campaign or alternate between cards to prevent carrier throttling.

#### 2. Robust CSV Contact Importer & Cleanser
- Import thousands of numbers in seconds.
- Automatically handles messy numbers, strips whitespace and special symbols, resolves local 10-digit formats into global E.164, and purges duplicate entries.

#### 3. Live Template Studio & Segment Calculator
- Craft personalized templates with dynamic placeholders like `{name}`, `{company}`, `{code}`, `{date}`.
- Real-time GSM-7 (160-char limit) vs. UCS-2 Unicode (70-char limit) segment detection ensures you never exceed expected carrier SMS counts.

#### 4. Anti-Spam Throttling & Rate Limiting
- Configurable interval delays (e.g. 2s to 10s between messages) with randomized jitter to emulate human sending patterns.
- Custom daily dispatch limits per SIM card.

#### 5. Unstoppable Foreground Dispatch Engine
- Persistent Android Foreground Service ensures background reliability even when you switch apps or lock your phone.
- Integrated BroadcastReceivers (`BootReceiver` and `MidnightResetReceiver`) automatically resume queues if your phone restarts or when carrier daily quotas reset at midnight.

#### 6. Privacy First & Local AES-256 Backups
- Zero tracking SDKs, zero cloud sync.
- 1-tap encrypted database export and full on-device database wipe for total compliance.

---

### Tech Specifications
- **Operating System:** Android 7.0 (API 24) to Android 15 (API 35)
- **UI Toolkit:** Jetpack Compose & Material 3
- **Language:** Kotlin 2.0+
- **Architecture:** Unidirectional Data Flow / MVVM + Hilt DI
- **Database:** Room SQLite + SQLCipher AES-256
- **License:** MIT (Free & Open Source)
```

---

## 🖼️ 4. Gallery & Media Assets Checklist

Prepare the following visuals (1270x760 px or 16:9 ratio) for the Product Hunt gallery:

| Asset | Title / Focus | Visual Elements |
| :--- | :--- | :--- |
| **Thumbnail** (240x240) | Logo / Icon | High-res Evostackr SMS logo with glowing blue border on dark background (or animated GIF showing progress ticker) |
| **Gallery Slide 1** | Hero Showcase | Smartphone frame showing active campaign dispatching with 96.4% progress and live toast |
| **Gallery Slide 2** | Dual-SIM & Zero API Bills | Comparison visual: Cloud Gateways ($0.05/SMS) vs. SMS Campaign Manager ($0.00 direct SIM) |
| **Gallery Slide 3** | CSV Cleanser & Deduplicator | Before/after illustration of messy contact numbers transformed into clean E.164 entries |
| **Gallery Slide 4** | Template Studio & Calculator | Live GSM-7 vs. Unicode segment preview with `{name}` and `{deal}` variable substitution |
| **Gallery Slide 5** | Unstoppable Foreground Engine | Notification bar showing persistent `SmsSendingService` active with screen-off WakeLock |
| **Gallery Slide 6** | Modern Tech Architecture | Jetpack Compose, Material 3, Kotlin, Room SQLite, Target SDK 35 badge grid |

---

## 📣 5. Social Media & Community Distribution Templates

### 🐦 Twitter / X Launch Thread
```text
🚀 Excited to launch SMS Campaign Manager on @ProductHunt! 

Tired of paying $0.03/SMS to Twilio or cloud gateways? 
Turn any Android phone into an automated, private bulk SMS dispatch engine with Dual-SIM support and ZERO cloud markups.

✅ 100% Offline & Private (AES-256)
✅ Dual-SIM auto-switching
✅ Smart CSV contact cleanser & deduplication
✅ Dynamic variable tags ({name}, {deal})
✅ Android 15 / Jetpack Compose ready
✅ 100% Free & Open Source (MIT)

Check out our live web simulator and upvote us today:
👉 https://www.producthunt.com/posts/sms-campaign-manager
👉 Showcase: https://evostackr.github.io/SCMweb/

#AndroidDev #OpenSource #ProductHunt #IndieHacker #Marketing
```

### 💼 LinkedIn Announcement Post
```text
I am thrilled to announce the official release of SMS Campaign Manager on Product Hunt! 🚀

Traditional cloud SMS aggregators charge heavy per-message fees and force businesses to upload confidential customer contact lists to external cloud servers. 

We built SMS Campaign Manager to bring sovereignty back to marketers and business owners:
🔹 Native Android direct-to-carrier SMS dispatching
🔹 Direct Dual-SIM balancing (Jio, Airtel, Vi, etc.)
🔹 Intelligent CSV contact importer & E.164 normalizer
🔹 Dynamic tag personalization ({name}, {code})
🔹 Unstoppable foreground dispatch engine with midnight quota auto-reset
🔹 100% Private — all data resides on your device with local AES encryption

We would love the community's thoughts and feedback!
Join the launch conversation here: [Product Hunt Link]
Website & Simulator: https://evostackr.github.io/SCMweb/
GitHub: https://github.com/Evostackr/SmsCampaignManager

#Android #Kotlin #JetpackCompose #MobileMarketing #OpenSource #SoftwareEngineering
```

### 💬 Reddit (r/androiddev, r/SideProject, r/selfhosted) Post
```text
Title: I built an open-source Android bulk SMS campaign manager that runs 100% locally with Dual-SIM support (No Twilio, No Cloud APIs)

Hey everyone!

I wanted to share SMS Campaign Manager, an open-source Android app built with Kotlin, Jetpack Compose, and Room.

A lot of small businesses and indie developers have simple bulk messaging needs (order alerts, festival greetings, event notifications) but get locked into monthly SaaS retainers or high API charges from cloud SMS gateways.

This app lets you utilize your smartphone's built-in SIM card plans:
- Dual-SIM support: Automatically detect and alternate between Slot 1 and Slot 2.
- CSV Ingestion: Sanitizes dirty phone number strings, deduplicates, and validates E.164 codes.
- Template engine: Replaces dynamic tags in real-time and calculates GSM-7 vs. Unicode SMS segments.
- Resilient background sending: Runs as a Foreground Service with WakeLocks so messages keep dispatching when the screen turns off.
- Privacy-first: Zero analytics SDKs, zero telemetry. Data never leaves the phone.

The signed release APK is available directly on GitHub:
GitHub: https://github.com/Evostackr/SmsCampaignManager
Interactive Web Simulator: https://evostackr.github.io/SCMweb/

Would love any constructive feedback on architecture, battery optimizations, or feature requests!
```

---

## 🙋 6. Anticipated Community Questions & Prepared Maker Answers

### Q1: "Isn't sending bulk SMS from a personal SIM against telecom policies?"
> **Maker Answer:**  
> "Great question! Most telecom carriers allow between 100 to 1,000+ transactional SMS per day on enterprise or personal plans before daily caps apply. SMS Campaign Manager includes built-in anti-spam delay intervals (e.g. 3–10 seconds with randomized jitter) and daily batch limits to respect operator Fair Usage Policies (FUP). The app is built strictly for users messaging their own opt-in customers, clients, or communities."

### Q2: "Can I connect this to external webhooks or an API in the future?"
> **Maker Answer:**  
> "Yes! On our roadmap for v1.1, we plan to add an optional local HTTP/WebSocket bridge so you can trigger campaigns programmatically from your desktop or internal CRM over your local Wi-Fi network without third-party cloud intermediaries."

### Q3: "Does it support scheduled dispatches?"
> **Maker Answer:**  
> "Absolutely. The app integrates Android's `AlarmManager` and `WorkManager`. You can schedule campaigns to trigger at specific dates/times. If your phone restarts in between, our `BootReceiver` restores scheduled alarms automatically."

---

## 🏁 7. Launch Day Execution Checklist

- [ ] **12:01 AM PST:** Verify Product Hunt post is published and visible.
- [ ] **12:05 AM PST:** Post the First Maker Comment (Section 2) and pin it.
- [ ] **12:15 AM PST:** Send announcement to early subscribers, email lists, and team members.
- [ ] **01:00 AM PST:** Share Twitter/X launch thread and LinkedIn post.
- [ ] **Throughout the Day:** Actively respond to every single Product Hunt review, upvote, and question within 15 minutes.
- [ ] **06:00 PM PST:** Post midday milestone update ("We're trending in the top 5! Here is what we're working on next...").
- [ ] **11:59 PM PST:** Post thank-you message to community on Product Hunt and Twitter.

---

*Authored with passion by the **[Evostackr](https://github.com/Evostackr)** engineering team.*
