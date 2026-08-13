<a name="top"></a>
<div align="center">

<img src="assets/images/zms_logo.png" alt="Zion Mission School crest" width="96" />

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=800&size=34&duration=2600&pause=900&color=EE4826&center=true&vCenter=true&width=760&lines=ZMS+Campus;Zion+Mission+School%2C+Amba" alt="ZMS Campus"/>

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=600&size=17&duration=2800&pause=1000&color=6B7590&center=true&vCenter=true&width=680&lines=A+Unique+Educational+Institution+of+Amba%2C+Arunachal+Pradesh;Run+by+the+Zion+Mission+Society%2C+Nirjuli;Affiliation+Code+%3A+ZMS-AMBA-2026" alt="Typing SVG"/>

<br/><br/>

<p>
  <img src="https://img.shields.io/github/last-commit/parthbhuyan/zmscampus?style=flat-square&color=EE4826&label=last%20updated" alt="Last commit"/>
  <img src="https://img.shields.io/github/repo-size/parthbhuyan/zmscampus?style=flat-square&color=6366F1" alt="Repo size"/>
  <img src="https://img.shields.io/github/languages/top/parthbhuyan/zmscampus?style=flat-square&color=F5A623" alt="Top language"/>
  <img src="https://img.shields.io/badge/license-%C2%A9_2026_ZMS-101A2C?style=flat-square" alt="License"/>
</p>

<p>
  <a href="https://zmscampus.gt.tc/"><img src="https://img.shields.io/badge/🔐_Live_Portal-zmscampus.gt.tc-EE4826?style=for-the-badge&labelColor=1a1a2e" alt="Live Portal"/></a>
  <a href="https://www.zionmissionschool.org/"><img src="https://img.shields.io/badge/🏫_School_Website-zionmissionschool.org-F5A623?style=for-the-badge&labelColor=1a1a2e" alt="Official Website"/></a>
  <a href="https://parthbhuyan.github.io/"><img src="https://img.shields.io/badge/👨‍💻_Developer-Partha_Bhuyan-6366F1?style=for-the-badge&labelColor=1a1a2e" alt="Developer"/></a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/Python-3-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python 3"/>
  <img src="https://img.shields.io/badge/PWA-ready-10B981?style=flat-square&logo=pwa&logoColor=white" alt="PWA ready"/>
  <img src="https://img.shields.io/badge/Responsive-320px%E2%80%931440px+-6366F1?style=flat-square" alt="Responsive"/>
</p>

</div>

<br/>

> [!TIP]
> 🔐 **Live ERP Portal:** [zmscampus.gt.tc](https://zmscampus.gt.tc/) &nbsp;·&nbsp; 🏫 **Official school website:** [zionmissionschool.org](https://www.zionmissionschool.org/)

<br/>

<details open>
<summary><b>📋 Table of Contents</b></summary>
<br/>

- [Overview](#-overview)
- [Highlights](#-highlights)
- [Built With](#-built-with)
- [Structure](#️-structure)
- [Design System](#-design-system)
- [Running it Locally](#-running-it-locally)
- [A Note on Secrets](#-a-note-on-secrets)
- [Developer](#-developer)

</details>

<br/>

## 🌟 Overview

This is the **public marketing homepage** for **ZMS Campus** — the school-management ERP used by **Zion Mission School, Amba**. The homepage itself is a static, dependency‑free page (`index.html` + `style.css` + `script.js`); the ERP it links to runs on **PHP, MySQL** (and Python 3 is used for image/asset tooling in this project). The page introduces the school, showcases what the ERP does, and hands visitors straight to the live portal.

No build step for the homepage itself — open `index.html` and it runs.

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
<img src="https://skillicons.dev/icons?i=html,css,js,php,mysql,py,git,github&theme=light" alt="Tech stack icons"/>
<br/>
<sub>Static homepage: HTML · CSS · JS &nbsp;|&nbsp; ZMS Campus ERP backend: PHP · MySQL &nbsp;|&nbsp; Tooling: Python 3</sub>
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

> [!NOTE]
> The crest image above is referenced as `assets/images/zms_logo.png`, relative to this README — it only resolves on GitHub if the `assets/` folder sits in the **same folder** as this README in the repo. If it ever shows broken again, check that this exact path exists in the repo's file browser.

<br/>

## 🎨 Design System

**Background gradient**

`#FFF6F3` → `#F5F7FF` → `#FBF6FF` → `#F1FDF7`

**Accent palette**

![#EE4826](https://img.shields.io/badge/-EE4826?style=flat-square&color=EE4826) `Brand Red` `#EE4826` &nbsp;&nbsp;
![#F5A623](https://img.shields.io/badge/-F5A623?style=flat-square&color=F5A623) `Brand Gold` `#F5A623` &nbsp;&nbsp;
![#10B981](https://img.shields.io/badge/-10B981?style=flat-square&color=10B981) `Emerald` `#10B981` &nbsp;&nbsp;
![#6366F1](https://img.shields.io/badge/-6366F1?style=flat-square&color=6366F1) `Indigo` `#6366F1` &nbsp;&nbsp;
![#101A2C](https://img.shields.io/badge/-101A2C?style=flat-square&color=101A2C) `Text Primary` `#101A2C`

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

## 🚀 Running it Locally

```bash
git clone https://github.com/parthbhuyan/zmscampus.git
cd zmscampus

# then serve over HTTP (avoids local CORS quirks with fonts/icons)
python3 -m http.server 8080
# or: npx serve .
```

Then open `http://localhost:8080`.

### Deploying

This folder is ready to drop onto **GitHub Pages**, **Netlify**, **Vercel**, or directly into the `static/` (or public web root) of the `zms-campus` PHP application — it's plain HTML/CSS/JS with no build step.

<br/>

## 🔒 A Note on Secrets

> [!WARNING]
> This repo intentionally contains **no database credentials, API keys, or `.env` values** — only static marketing content. If you're wiring this page up inside the larger `zms-campus` PHP app, keep real credentials in an untracked `.env` file and add it to `.gitignore`; never commit them to a public README or repo history. If a real password has ever been committed anywhere in this project's history, **rotate it immediately** — removing it from a later commit does not remove it from git history.

<br/>

## 👨‍💻 Developer

<div align="center">

<a href="https://parthbhuyan.github.io/"><img src="https://img.shields.io/badge/Portfolio-parthbhuyan.github.io-EE4826?style=for-the-badge&logo=github&logoColor=white" alt="Partha Bhuyan"/></a>

**Partha Bhuyan** · System Architect & Full‑Stack Developer

</div>

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=600&size=16&duration=3000&pause=1000&color=6B7590&center=true&vCenter=true&width=600&lines=Thanks+for+visiting+ZMS+Campus;%C2%A9+2026+Zion+Mission+School%2C+Amba" alt="Footer typing SVG"/>

<img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-EE4826?style=flat-square" alt="Made with love"/>

<br/><br/>

<a href="#top">⬆️ Back to top</a>

</div>
