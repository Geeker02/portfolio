# Jaydeep Jogdand – Personal Developer Portfolio

A full-stack personal developer portfolio web application built with **React.js**, **Tailwind CSS**, and a **Node.js / Express** REST API backend. It showcases my engineering experience at **CCTech**, my full-stack projects including **ChatsApp**, my problem-solving track record on LeetCode and HackerRank, and my academic background.

---

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express, Helmet, CORS, Express Rate Limit, Nodemailer
- **Core Engineering:** Core Java, Spring Boot, RESTful Services, OOP & SOLID principles

---

## Key Features

- **Modern Responsive UI:** Designed for mobile, tablet, and desktop with a smooth collapsible navigation drawer.
- **Theme Switcher:** Dark and Light mode toggle with automatic preference persistence.
- **Professional Experience:** Detailed breakdown of work at CCTech, including CAD automation plugins and Spring Boot backend services.
- **Personal Project Spotlight:** In-depth showcase of **ChatsApp** featuring WebSocket STOMP messaging, Spring Security JWT authentication, and an interactive 5-layer architecture breakdown.
- **Competitive Programming:** Verified milestones on LeetCode (400+ problems solved) and HackerRank (5-Star in Problem Solving).
- **In-Browser Resume Viewer:** Integrated PDF preview modal with direct one-click download.
- **Contact Form with Input Validation:** Sanitized, rate-limited form with real-time feedback and asynchronous submission.

---

## Architecture & Data Flow

```
┌─────────────────────────┐
│     React.js Client     │ ───► User Interface, State Management & PDF Preview
└────────────┬────────────┘
             │
             │ HTTP REST Requests (JSON)
             ▼
┌─────────────────────────┐
│   Node.js / Express API │ ───► Security Headers, Input Sanitization & Rate Limiting
└────────────┬────────────┘
             │
             │ SMTP Relay
             ▼
┌─────────────────────────┐
│      Email Service      │ ───► Direct delivery of messages to inbox
└─────────────────────────┘
```

---

## Project Structure

```
portfolio/
├── client/                 # React frontend application
│   ├── public/             # Static assets & Resume PDF
│   ├── src/
│   │   ├── components/     # UI components (Navbar, Hero, Experience, Projects, etc.)
│   │   ├── context/        # Theme context (Dark / Light mode)
│   │   ├── data/           # Portfolio metadata and resume content
│   │   ├── hooks/          # Custom React hooks
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Express backend API
│   ├── controllers/        # Request handlers (portfolio data, contact, resume)
│   ├── middleware/         # Rate limiting and input sanitization
│   ├── routes/             # REST endpoints (/api/v1/...)
│   ├── services/           # Nodemailer email dispatch service
│   ├── server.js           # Express application entry point
│   └── package.json
│
└── package.json            # Workspace scripts
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Geeker02/portfolio.git
cd portfolio

# Install dependencies for both client and server
npm run install:all
```

### Running Locally

1. **Start the backend server:**
   ```bash
   npm run dev:server
   # Server runs on http://localhost:5000
   ```

2. **Start the frontend client:**
   ```bash
   npm run dev:client
   # Client runs on http://localhost:5173
   ```

---

## REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Service health check and uptime monitor |
| `GET` | `/api/v1/portfolio` | Structured JSON portfolio metadata |
| `POST` | `/api/v1/contact` | Validated contact form submission |
| `GET` | `/api/v1/resume` | Streams resume PDF document |

---

## Environment Variables

To configure the backend email service, create a `.env` file in the `server` directory based on `.env.example`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
RECEIVER_EMAIL=your_email@example.com
```

*(During local development, if SMTP credentials are left blank, submitted messages will safely log to the server console).*

---

## Author

**Jaydeep Jogdand**  
Software Engineer | Core Java & Spring Boot Developer  
- GitHub: [@Geeker02](https://github.com/Geeker02)  
- LinkedIn: [jaydeep-jogdand](https://www.linkedin.com/in/jaydeep-jogdand)  
- Email: [jaydeepjogdand@gmail.com](mailto:jaydeepjogdand@gmail.com)
