# Jaydeep Jogdand – Full-Stack Developer Portfolio

> **Candidate:** Jaydeep Jogdand  
> **Role:** Software Engineer | Core Java & Spring Boot Developer  
> **Document Reference:** SRS v2.1.0 (Zero-Cost Hosting Architecture)  
> **Tech Stack:** React.js, Tailwind CSS, Lucide Icons, Node.js, Express, Helmet, Nodemailer  

---

## 1. Project Overview

A production-grade, responsive full-stack developer portfolio showcasing Jaydeep's work at **CCTech** (Enterprise CAD Automation, Spring Boot REST services, React visualization), **ChatsApp** (Spring Boot WebSocket STOMP real-time messaging, Spring Security JWT), 400+ LeetCode DSA problem solutions, and 9.04 CGPA academic background.

The application is architected to run permanently on **100% free-tier cloud infrastructure** ($0.00/month) with zero runtime fees while mitigating free-tier cold-starts.

---

## 2. System Architecture & Zero-Cost Topology

```
                       [ Recruiter Enters Portfolio ]
                                      │
                                      ▼
                       ┌──────────────────────────────┐
                       │    React.js SPA (Vercel)     │
                       │  - Global Edge CDN           │
                       │  - Instant 0ms Cold Start    │
                       └──────────────┬───────────────┘
                                      │
                  ┌───────────────────┴───────────────────┐
                  │ (1) Immediate Prefetch Ping            │ (2) Form Submission
                  │     GET /api/v1/health                │     POST /api/v1/contact
                  ▼                                       ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │                      Node.js / Express (Render.com)                    │
 │   - Awakened proactively in background while recruiter reads Hero      │
 │   - Rate-Limited, Helmet & CORS Hardened                               │
 └────────────────────────────────────┬───────────────────────────────────┘
                                      │
                                      ▼
                       ┌──────────────────────────────┐
                       │    Transactional SMTP Relay   │
                       │     (Gmail App Password)     │
                       └──────────────┬───────────────┘
                                      │
                                      ▼
                       [ Inbound Email to Jaydeep ]
                      (jaydeepjogdand@gmail.com)

 ┌────────────────────────────────────────────────────────────────────────┐
 │ Heartbeat Keeper: External Cron-Job (UptimeRobot / cron-job.org)       │
 │ Fires HTTP GET /api/v1/health every 14 mins to keep container warm     │
 └────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Directory Layout

```
portfolio/
├── client/                     # React 18 + Vite + Tailwind CSS
│   ├── public/
│   │   └── Jaydeep_Jogdand_Resume.pdf  # Static resume asset (instant download)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx              # Responsive nav, mobile drawer, dark/light switch
│   │   │   ├── Hero.jsx                # Recruiter intro, badges, CTAs, metrics
│   │   │   ├── About.jsx               # Engineering philosophy (OOP, SOLID, JUnit, Agile)
│   │   │   ├── Skills.jsx              # Interactive categorized tech grid & badges
│   │   │   ├── Experience.jsx          # CCTech full-stack history & CAD automation
│   │   │   ├── Projects.jsx            # ChatsApp deep-dive & architectural blueprint
│   │   │   ├── Achievements.jsx        # LeetCode 400+ DSA & HackerRank 5-Star
│   │   │   ├── Education.jsx           # B.E. 9.04 CGPA, Diploma, High School
│   │   │   ├── Contact.jsx             # Validated contact form + wake status
│   │   │   ├── ResumeModal.jsx         # In-browser PDF previewer & download
│   │   │   └── Footer.jsx              # Zero-cost cloud badge & copyright
│   │   ├── context/
│   │   │   └── ThemeContext.jsx        # Dark/Light theme with localStorage
│   │   ├── hooks/
│   │   │   └── useKeepAliveWarm.js     # Non-blocking prefetch hook (FREE-02)
│   │   ├── data/
│   │   │   └── portfolioData.js        # Centralized resume dataset
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Node.js + Express REST API
│   ├── controllers/
│   │   └── portfolioController.js      # Health, metadata, contact mailer, resume stream
│   ├── middleware/
│   │   ├── rateLimiter.js              # 3 req/10 min rate limit for contact (SEC-03)
│   │   └── sanitize.js                 # Input sanitization & XSS protection (SEC-04)
│   ├── routes/
│   │   └── apiRoutes.js                # /api/v1/...
│   ├── services/
│   │   └── mailService.js              # Nodemailer with Gmail/Brevo support + mock logger
│   ├── public/
│   │   └── Jaydeep_Jogdand_Resume.pdf  # PDF streamed via GET /api/v1/resume
│   ├── server.js                       # Express app with Helmet, CORS whitelist
│   ├── .env.example
│   └── package.json
│
└── package.json                # Root orchestrator scripts
```

---

## 4. Local Development Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Steps
1. Open a terminal in `e:\SpringBoot\portfolio`:
   ```bash
   # 1. Install dependencies for both client and server:
   npm run install:all
   ```

2. Start the backend REST API:
   ```bash
   npm run dev:server
   # Runs on http://localhost:5000
   ```

3. Start the frontend React app in another terminal:
   ```bash
   npm run dev:client
   # Runs on http://localhost:5173
   ```

4. Open your browser at `http://localhost:5173`.
   - Contact form submissions will be securely validated and logged to the server console in development mode (if SMTP is unconfigured) or dispatched via email (if SMTP is configured).

---

## 5. 100% Free Cloud Deployment Guide

### A. Deploy Backend to Render.com (100% Free)
1. Push your repository to GitHub (`https://github.com/Geeker02/portfolio`).
2. Log in to [Render.com](https://render.com) (sign in with GitHub).
3. Click **New +** -> **Web Service**.
4. Select your GitHub repository.
5. Fill in the configuration:
   - **Name:** `jaydeep-portfolio-api`
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free` (0.1 CPU, 512 MB RAM)
6. Add **Environment Variables** in Render's dashboard:
   - `NODE_ENV` = `production`
   - `PORT` = `5000`
   - `FRONTEND_URL` = `https://your-portfolio.vercel.app` (update once frontend is deployed)
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `jaydeepjogdand@gmail.com`
   - `SMTP_PASS` = `<Your-16-Character-Google-App-Password>`
   - `RECEIVER_EMAIL` = `jaydeepjogdand@gmail.com`
7. Click **Create Web Service**. Note your Render URL (e.g. `https://jaydeep-portfolio-api.onrender.com`).

---

### B. Eliminate Render Cold-Starts (Free Keep-Alive Setup)
Free Render containers sleep after 15 minutes of inactivity. To keep it 100% warm 24/7 without paying:
1. Go to [UptimeRobot.com](https://uptimerobot.com) (free plan: 50 monitors).
2. Click **Add New Monitor**:
   - **Monitor Type:** `HTTP(s)`
   - **Friendly Name:** `Portfolio API Keep-Alive`
   - **URL (or IP):** `https://jaydeep-portfolio-api.onrender.com/api/v1/health`
   - **Monitoring Interval:** Every `14 minutes`
3. Save. UptimeRobot will ping your `/health` endpoint every 14 minutes, preventing Render from ever sleeping!

---

### C. Deploy Frontend to Vercel (100% Free)
1. Go to [Vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** -> **Project**.
3. Import your portfolio repository.
4. In the project setup:
   - **Root Directory:** click Edit and select `client`
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Configure Rewrites/Environment:
   - To route `/api` directly to your Render backend without CORS overhead, create `client/vercel.json`:
     ```json
     {
       "rewrites": [
         {
           "source": "/api/:path*",
           "destination": "https://jaydeep-portfolio-api.onrender.com/api/:path*"
         }
       ]
     }
     ```
6. Click **Deploy**. Your portfolio will go live on Vercel's global CDN within 30 seconds!

---

### D. Generating a Google App Password for Email Dispatch
1. Open your Google Account: [https://myaccount.google.com/security](https://myaccount.google.com/security).
2. Ensure **2-Step Verification** is enabled.
3. Search for **App Passwords** in the search bar.
4. Enter an app name (e.g. `Portfolio Contact Form`).
5. Copy the generated 16-character password and paste it into `SMTP_PASS` in your Render Environment Variables.

---

## 6. REST API Endpoints Specification

| Method | Endpoint | Description | Rate Limit |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Uptime check & client warming ping | Unlimited |
| `GET` | `/api/v1/portfolio` | Full structured JSON resume data | 60 req/min |
| `POST` | `/api/v1/contact` | Validated contact form submission | 3 req/10 min |
| `GET` | `/api/v1/resume` | Streams `Jaydeep_Jogdand_Resume.pdf` | 10 req/min |
