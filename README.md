<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:EE4826,50:F5A623,100:10B981&height=220&section=header&text=ZMS%20Campus&fontSize=48&fontColor=ffffff&fontAlignY=36&desc=Zion%20Mission%20School%2C%20Amba%20%E2%80%94%20Smart%20Attendance%20%26%20ERP%20Portal&descSize=17&descAlignY=58&animation=fadeIn" width="100%" alt="ZMS Campus banner"/>

<img src="assets/images/zms_logo.png" alt="Zion Mission School crest" width="100" />

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=22&duration=2800&pause=1000&color=EE4826&center=true&vCenter=true&width=680&lines=A+Unique+Educational+Institution+of+Amba%2C+Arunachal+Pradesh;Run+by+the+Zion+Mission+Society%2C+Nirjuli;Affiliation+Code+%3A+ZMS-AMBA-2026" alt="Typing SVG"/>

<br/>

<p>
  <a href="https://zmscampus.gt.tc/"><img src="https://img.shields.io/badge/🔐_Live_Portal-zmscampus.gt.tc-EE4826?style=for-the-badge&labelColor=1a1a2e" alt="Live Portal"/></a>
  <a href="https://www.zionmissionschool.org/"><img src="https://img.shields.io/badge/🏫_School_Website-zionmissionschool.org-F5A623?style=for-the-badge&labelColor=1a1a2e" alt="Official Website"/></a>
  <a href="https://parthbhuyan.github.io/"><img src="https://img.shields.io/badge/👨‍💻_Developer-Partha_Bhuyan-6366F1?style=for-the-badge&labelColor=1a1a2e" alt="Developer"/></a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Theme-Glassmorphism_Light-EE4826?style=flat-square" alt="Glassmorphism"/>
  <img src="https://img.shields.io/badge/PWA-ready-10B981?style=flat-square&logo=pwa&logoColor=white" alt="PWA ready"/>
  <img src="https://img.shields.io/badge/Responsive-320px%E2%80%931440px+-6366F1?style=flat-square" alt="Responsive"/>
  <img src="https://img.shields.io/badge/Dependencies-zero-10B981?style=flat-square" alt="Zero dependencies"/>
</p>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:EE4826,50:F5A623,100:10B981&height=4&section=header" width="70%" alt="divider"/>

</div>

<br/>

## 📋 Table of Contents

- [Overview](#-overview)
- [Highlights](#-highlights)
- [Built With](#-built-with)
- [Structure](#️-structure)
- [Design System](#-design-system)
- [Running it Locally](#-running-it-locally)
- [A Note on Secrets](#-a-note-on-secrets)
- [Developer](#-developer)

<br/>

## 🌟 Overview

This is the **public marketing homepage** for **ZMS Campus** — the school-management ERP used by **Zion Mission School, Amba**. It's a static, dependency‑free page (`index.html` + `style.css` + `script.js`) that introduces the school, showcases what the ERP does, and hands visitors straight to the live portal.

> 🔐 **Live ERP Portal:** [zmscampus.gt.tc](https://zmscampus.gt.tc/)
> 🏫 **Official school website:** [zionmissionschool.org](https://www.zionmissionschool.org/)

No build step, no framework, no dependencies to install — open `index.html` and it runs.

<br/>

## ✨ Highlights

<table>
<tr><td>🎨</td><td><b>Glassmorphism light theme</b> — frosted cards, soft mesh gradients, brand red / gold / emerald accents drawn straight from the school crest</td></tr>
<tr><td>🧊</td><td><b>Signature "live ERP" widget</b> — a floating attendance‑ring snapshot on the hero image, animated with <code>requestAnimationFrame</code></td></tr>
<tr><td>📱</td><td><b>Responsive down to 320px</b> — breakpoints at 1180 / 1024 / 768 / 600 / 480 / 360px, plus a short‑landscape query for small phones</td></tr>
<tr><td>🌀</td><td><b>Preloader + scroll‑reveal</b> — a branded loading ring on first paint, then <code>IntersectionObserver</code> fades sections in as you scroll</td></tr>
<tr><td>🧮</td><td><b>Count‑up statistics</b> — school stats and the attendance ring animate into view once, using an eased tween</td></tr>
<tr><td>♿</td><td><b>Accessible tabs & nav</b> — real <code>role="tablist"</code>/<code>tabpanel</code> wiring, arrow‑key tab switching, skip‑link, visible focus states</td></tr>
<tr><td>🕒</td><td><b>Live office‑hours badge</b> — computed client‑side in IST against the school's real Mon–Fri / Sat hours</td></tr>
<tr><td>🧭</td><td><b>Scroll‑spy navigation</b> — the active section highlights itself in the nav as you scroll</td></tr>
<tr><td>🩶</td><td><b><code>prefers-reduced-motion</code> respected</b> — every animation degrades to an instant, static state when requested</td></tr>
<tr><td>🔍</td><td><b>SEO baked in</b> — descriptive meta tags, Open Graph / Twitter cards, canonical link, and JSON‑LD <code>School</code> structured data</td></tr>
<tr><td>🖼️</td><td><b>WebP + JPEG fallbacks</b> — every photo ships as a compressed <code>.webp</code> with a <code>&lt;picture&gt;</code> fallback to <code>.jpg</code></td></tr>
</table>

<br/>

## 🛠 Built With

<div align="center">
<img src="https://skillicons.dev/icons?i=html,css,js,git,github&theme=light" alt="Tech stack icons"/>
</div>

<br/>

## 🗂️ Structure

```
zms-static-site/
├── index.html               # Markup — hero, about, ERP features, modules, events, footer
├── style.css                # Design tokens, glassmorphism theme, animations, breakpoints
├── script.js                 # Preloader, nav, tabs, scroll-reveal, count-up, office-hours
├── favicon.ico
├── assets/
│   └── images/
│       ├── zms_logo.png           # School crest (favicon + logo)
│       ├── campus_building.jpg / .webp
│       ├── computer_lab.jpg / .webp
│       ├── sports_day.jpg / .webp
│       └── children_day.jpg / .webp
└── README.md
```

<br/>

## 🎨 Design System

**Background gradient**

`#FFF6F3` → `#F5F7FF` → `#FBF6FF` → `#F1FDF7`

**Accent palette**

![#EE4826](https://via.placeholder.com/14/EE4826/EE4826.png) `Brand Red` `#EE4826` &nbsp;&nbsp;
![#F5A623](https://via.placeholder.com/14/F5A623/F5A623.png) `Brand Gold` `#F5A623` &nbsp;&nbsp;
![#10B981](https://via.placeholder.com/14/10B981/10B981.png) `Emerald` `#10B981` &nbsp;&nbsp;
![#6366F1](https://via.placeholder.com/14/6366F1/6366F1.png) `Indigo` `#6366F1` &nbsp;&nbsp;
![#101A2C](https://via.placeholder.com/14/101A2C/101A2C.png) `Text Primary` `#101A2C`

**Type & shape**

| Role | Choice |
|---|---|
| Display + body font | `Plus Jakarta Sans` |
| Stats / codes / timestamps | `JetBrains Mono` |
| Glass surfaces | `rgba(255,255,255,.82)` · 20–24px backdrop blur |
| Corner radii | `8 / 14 / 24 / 30px` + full pill for buttons & badges |

<details>
<summary><b>💡 Why a floating attendance‑ring widget?</b></summary>
<br/>
The hero photo alone is a nice campus shot, but it doesn't say "this school runs on software." The floating glass widget — an animated ring counting up to today's attendance percentage — works like a small product screenshot layered over the marketing photo, the same way software landing pages preview their own UI rather than only showing lifestyle imagery. The mock audit‑log rows in the <b>Security</b> tab do the same job further down the page.
</details>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:10B981,50:F5A623,100:EE4826&height=4&section=header" width="70%" alt="divider"/>

<br/>

## 🚀 Running it Locally

No install needed — but serving over HTTP (rather than `file://`) avoids local CORS quirks with fonts/icons:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

### Deploying

This folder is ready to drop onto **GitHub Pages**, **Netlify**, **Vercel**, or directly into the `static/` (or public web root) of the `zms-campus` PHP application — it's plain HTML/CSS/JS with no build step.

<br/>

## 🔒 A Note on Secrets

This repo intentionally contains **no database credentials, API keys, or `.env` values** — only static marketing content. If you're wiring this page up inside the larger `zms-campus` PHP app, keep real credentials in an untracked `.env` file and add it to `.gitignore`; never commit them to a public README or repo history. If a real password has ever been committed anywhere in this project's history, rotate it immediately — removing it from a later commit does not remove it from git history.

<br/>

## 👨‍💻 Developer

<div align="center">

<img src="https://skillicons.dev/icons?i=github&theme=light" width="50"/>

<a href="https://parthbhuyan.github.io/"><img src="https://img.shields.io/badge/Portfolio-parthbhuyan.github.io-EE4826?style=for-the-badge&logo=github&logoColor=white" alt="Partha Bhuyan"/></a>

**Partha Bhuyan** · System Architect & Full‑Stack Developer

</div>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=600&size=16&duration=3000&pause=1000&color=6B7590&center=true&vCenter=true&width=600&lines=Thanks+for+visiting+ZMS+Campus;%C2%A9+2026+Zion+Mission+School%2C+Amba" alt="Footer typing SVG"/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:10B981,50:F5A623,100:EE4826&height=140&section=footer&animation=fadeIn" width="100%" alt="footer wave"/>
