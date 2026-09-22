# SMS Campaign Manager — Official Showcase Website

[![Project Type](https://img.shields.io/badge/type-Showcase%20%26%20Landing%20Page-blue.svg)]()
[![License](https://img.shields.io/badge/license-MIT-purple.svg)]()
[![Evostackr](https://img.shields.io/badge/product-Evostackr-emerald.svg)]()
[![Target App](https://img.shields.io/badge/app-SMSCampaignManager-2563eb.svg)](https://github.com/Evostackr/SmsCampaignManager)

A showcase and interactive web platform for **[SMS Campaign Manager](https://github.com/Evostackr/SmsCampaignManager)** — the enterprise-grade bulk SMS marketing and campaign automation app for Android.

---

## 🌟 Key Showcase Highlights

- **Interactive Campaign Dispatch Simulator:**
  - Real-time dynamic variable tag replacement (`{name}`, `{deal}`, `{code}`)
  - Live character and SMS segment calculator replicating `SmsCalculator.kt` (GSM 7-bit vs UCS-2 Unicode)
  - Selectable SIM slots (Slot 1 vs Slot 2) with active carrier detection
  - Live interactive dispatching with real-time progress bar, speed tracker (SMS/min), and terminal event logs
- **CSV Data Cleaning & Deduplication Demonstration:**
  - Visual before-and-after view of dirty contact inputs converted to standardized E.164 formats with duplicates scrubbed
- **Rich Design System & Aesthetics:**
  - High-tech dark mode with glowing atmospheric gradients, glassmorphism, responsive smartphone mockups, and micro-interactions
  - Built with pure Vanilla HTML5, CSS3, and JavaScript — zero heavy runtime dependencies
- **1-Click Production APK Downloads:**
  - Direct links to download the cryptographically signed release APK (`SMSCampaignManager-signed-production.apk`) from the parent repository

---

## 🚀 Live Preview & Deployment

### Run Locally
To preview locally, open `index.html` in any modern web browser, or launch a quick HTTP server:

```bash
# Python 3
python -m http.server 8080

# Or Node.js npx serve
npx serve .
```

### GitHub Pages Deployment
1. Go to repository **Settings** -> **Pages** in GitHub.
2. Under **Build and deployment**, select **Source** as `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**. Your site will be published live at:
   `https://evostackr.github.io/SCMweb/`

---

## 🛠️ Project Structure

```text
SCMweb/
├── index.html        # Main landing page markup & SEO metadata
├── styles.css        # Vanilla CSS design system & responsive layout
├── app.js            # Interactive dispatch simulator & live logic
├── assets/           # High-resolution logos, icons, and branding
│   ├── app_logo.png
│   └── icon.png
└── README.md         # Documentation
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
Built with passion by **[Evostackr](https://github.com/Evostackr)**.
