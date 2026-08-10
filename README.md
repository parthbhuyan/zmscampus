<div align="center">

  <!-- Animated Header Banner -->
  <a href="https://zmscampus.gt.tc/">
    <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=800&size=32&duration=3000&pause=1000&color=EE4826&center=true&vCenter=true&width=750&lines=ZION+MISSION+SCHOOL;ZMS+Campus+ERP+System;Smart+Attendance+%26+Syllabus+Tracker;Powered+by+PHP+8.3+%26+PWA" alt="ZMS Campus Animated Header" />
  </a>

  <br />

  <img src="static/assets/images/zms_logo.png" alt="Zion Mission School Logo" width="130" style="filter: drop-shadow(0 6px 16px rgba(238, 72, 38, 0.3)); margin: 15px 0;" />

  # 🏫 ZMS Campus — Smart School ERP Platform

  **A Unique Educational Institution of Amba, Doimukh, Papumpare, Arunachal Pradesh**  
  *Affiliation Code: `ZMS-AMBA-2026` • Run by Zion Mission Society, Nirjuli*

  <br />

  <!-- Animated Tech Badges -->
  <p align="center">
    <a href="https://zmscampus.gt.tc/">
      <img src="https://img.shields.io/badge/Live_Portal-https%3A%2F%2Fzmscampus.gt.tc%2F-EE4826?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Portal" />
    </a>
    <a href="https://www.zionmissionschool.org/">
      <img src="https://img.shields.io/badge/School_Website-zionmissionschool.org-F59E0B?style=for-the-badge&logo=globe&logoColor=white" alt="Official Website" />
    </a>
    <a href="https://parthbhuyan.github.io/">
      <img src="https://img.shields.io/badge/Architect-Partha_Bhuyan-6366F1?style=for-the-badge&logo=github&logoColor=white" alt="Architect" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/PHP-8.3-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP 8.3" />
    <img src="https://img.shields.io/badge/Database-MySQL_PDO-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
    <img src="https://img.shields.io/badge/PWA-Chrome%2FEdge-10B981?style=flat-square&logo=pwa&logoColor=white" alt="PWA" />
    <img src="https://img.shields.io/badge/Theme-Glassmorphism_Light-EE4826?style=flat-square" alt="Glassmorphism" />
    <img src="https://img.shields.io/badge/Security-256bit_BCrypt-black?style=flat-square&logo=letsencrypt" alt="Security" />
  </p>

</div>

---

## 🌟 Overview

**ZMS Campus** is an enterprise-grade Progressive Web Application (PWA) built specifically for **Zion Mission School, Amba**. Designed with custom PHP 8.3 MVC architecture and a clean Apple-level Glassmorphism light design system, it empowers faculty, administrators, and students with real-time academic workflows.

> [!IMPORTANT]
> **Production Live ERP Portal**: [https://zmscampus.gt.tc/](https://zmscampus.gt.tc/)  
> **Official Zion Mission School Website**: [https://www.zionmissionschool.org/](https://www.zionmissionschool.org/)

---

## ✨ Key Features & Capabilities

```mermaid
graph TD
    A[ZMS Campus ERP Platform] --> B[Smart Period Attendance Engine]
    A --> C[CBSE Syllabus Tracker]
    A --> D[Examination Intelligence]
    A --> E[Enterprise Security & Audit Logs]
    A --> F[PWA Desktop & Mobile Sync]

    B --> B1[Period-wise Register Class 9-12]
    B --> B2[Automated Low Attendance Alerts <75%]
    
    C --> C1[Unit Progress Tracker IT 802]
    C --> C2[Real-time Completion Metrics]

    D --> D1[1-Click Official PDF Gradebook]
    D --> D2[Excel XLS Summary Export]

    E --> E1[24h Edit Lock Safety Window]
    E --> E2[BCrypt Hashing & Audit Logs]
```

### 📋 Detailed Feature Highlights:

- 📊 **Period-Wise Attendance Engine**: Records class-by-class attendance for senior secondary students, tracking SID and flagging low attendance risks (<75% CBSE threshold).
- 📚 **CBSE Curriculum Progress Tracker**: Monitors unit-by-unit syllabus completion for IT (Code 802), Science, Humanities, and Commerce streams.
- 📄 **1-Click Export Automation**: Generates official CBSE printable PDF gradebooks (via `Dompdf`) and Excel spreadsheet registers (via `PhpSpreadsheet`).
- 🛡️ **Enterprise Security & Audit Trails**: Every record creation, update, and deletion is recorded in real-time with IP tracking and a strict 24-hour edit lock window.
- 📱 **Progressive Web App (PWA)**: Desktop and mobile installable app with offline caching via `sw.js` and custom launcher icons.

---

## 🎨 Glassmorphism Light Design System

The platform features a custom-engineered **Glassmorphism Light Theme**:

```
Background Palette : Warm Rose (#FFF5F2) ➔ Sky Indigo (#F4F7FF) ➔ Silk White (#FFFFFF)
Accent Palette     : Brand Red (#EE4826) • Warm Amber (#F59E0B) • Emerald (#10B981)
Glass Surface      : rgba(255, 255, 255, 0.82) with 24px backdrop-filter blur
Typography         : Google Font 'Plus Jakarta Sans' (Weights: 400, 600, 700, 800)
```

---

## 📁 Project Architecture & Folder Structure

```
zms-campus/
├── 📁 app/                     # Custom PHP 8.3 MVC Backend Architecture
│   ├── 📁 Controllers/         # AuthController, AttendanceController, SyllabusController, AuditController
│   ├── 📁 Models/              # Student, Attendance, Syllabus, AuditLog, AcademicCalendar
│   └── 📁 Views/               # Blade-style PHP Views with Glassmorphic Component UI
├── 📁 assets/                  # Public Web Assets
│   ├── 📁 icons/               # PWA App Icons (72x72 to 512x512)
│   ├── 📁 images/              # High-Res Campus Images (campus_building, computer_lab, etc.)
│   └── 📁 uploads/             # Profile Avatars & Official Documents
├── 📁 config/                  # Environment & PDO Database Singleton Configuration
├── 📁 static/                  # Glassmorphism Landing Page (index.html, style.css, script.js)
├── 📄 .env                    # Production Database Credentials & App Secrets
├── 📄 .htaccess                # Apache URL Rewriting & Physical File Exclusions
├── 📄 index.php                # Front Controller Entry Point
├── 📄 manifest.json            # PWA Manifest Specification
├── 📄 sw.js                    # Service Worker Offline Caching Script
└── 📄 zms_campus.sql           # Database Schema Dump & Initial Seed Data
```

---

## ⚡ Quick Start & Installation

### Prerequisites
- PHP 8.3 or higher with `pdo_mysql`, `gd`, and `mbstring` extensions enabled.
- MySQL 8.0 / MariaDB 10.4 or higher.
- Apache web server with `mod_rewrite` enabled.

### Step 1: Clone Repository
```bash
git clone https://github.com/parthbhuyan/zms-campus.git
cd zms-campus
```

### Step 2: Environment Setup
Create a `.env` file in the root directory:
```ini
APP_NAME="ZMS Campus"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://zmscampus.gt.tc

DB_HOST=sql113.infinityfree.com
DB_PORT=3306
DB_DATABASE=if0_42616947_zms_campus
DB_USERNAME=if0_42616947
DB_PASSWORD=2026ZmsAmba
```

### Step 3: Database Import
Import `zms_campus.sql` into your MySQL server:
```bash
mysql -u if0_42616947 -p if0_42616947_zms_campus < zms_campus.sql
```

---

## 🔒 Security & Data Integrity

> [!TIP]
> **Audit Lock Window**: Records edited after 24 hours require administrative privilege override, preventing unauthorized post-dated grade or attendance tampering.

- 🔑 **BCrypt Hashing**: Passwords stored using `PASSWORD_BCRYPT` with cost factor 12.
- 🛡️ **PDO Prepared Statements**: 100% protection against SQL injection attacks.
- 🔐 **Session Security**: HttpOnly and SameSite cookie policies active.

---

## 👨‍💻 Lead Architect & Developer Credit

<div align="center">

  <a href="https://parthbhuyan.github.io/">
    <img src="https://img.shields.io/badge/Lead_Architect-Partha_Bhuyan-EE4826?style=for-the-badge&logo=github&logoColor=white" alt="Partha Bhuyan" />
  </a>

  ### **Partha Bhuyan**
  *System Architect & Full-Stack Engineer*  
  🌐 **Portfolio**: [https://parthbhuyan.github.io/](https://parthbhuyan.github.io/)

</div>

---

<div align="center">
  <sub>© 2026 <strong>Zion Mission School, Amba</strong>. All Rights Reserved. CBSE Code: <code>ZMS-AMBA-2026</code>.</sub>
</div>
