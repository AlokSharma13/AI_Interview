<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,45:10b981,100:14b8a6&height=230&section=header&text=InterviewIQ.AI&fontSize=58&fontColor=ffffff&animation=twinkling&fontAlignY=36" width="100%" alt="InterviewIQ.AI animated banner" />

<a href="https://ai-interview-1-im9s.onrender.com/">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=22&pause=900&color=10B981&center=true&vCenter=true&width=820&lines=AI-Powered+Mock+Interviews;Resume-Based+Question+Generation;Smart+Voice+Interview+Experience;AI+Feedback+%26+Performance+Analytics" alt="Typing animation" />
</a>

<p><strong>Practice smarter. Speak confidently. Improve continuously.</strong><br/>A full-stack AI interview platform for realistic role-based mock interviews, adaptive questioning, AI evaluation, performance tracking, and downloadable reports.</p>

<p>
  <a href="https://ai-interview-1-im9s.onrender.com/"><img src="https://img.shields.io/badge/%E2%9A%A1%20LIVE%20DEMO-10B981?style=for-the-badge&logo=render&logoColor=white" alt="Live demo" /></a>
  <a href="https://github.com/AlokSharma13/AI_Interview"><img src="https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub repository" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111827" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-ESM-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5-111827?style=flat-square&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Motion-Animations-000000?style=flat-square&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/OpenRouter-GPT--4o--mini-7C3AED?style=flat-square" alt="OpenRouter" />
</p>

</div>

---

## ✨ What is InterviewIQ.AI?

**InterviewIQ.AI** turns a candidate's role, experience, interview mode, and optional resume into a realistic mock interview session.

The application generates **5 questions** with increasing difficulty, guides the candidate through a timed interview with voice interaction, evaluates each answer across **confidence, communication, and correctness**, and produces an analytics-rich report.

> 🚀 **[Launch the live app](https://ai-interview-1-im9s.onrender.com/)**

---

## 🚀 Core Features

| Feature | What it does |
|---|---|
| 🤖 **AI Question Generation** | Generates role-aware questions with easy → medium → hard progression. |
| 📄 **Resume Analysis** | Upload a PDF resume and extract role, experience, projects, skills, and resume text. |
| 🎙️ **Smart Voice Interview** | Uses browser speech synthesis and speech recognition for a natural interview flow. |
| ⏱️ **Timed Simulation** | Questions have time limits to simulate interview pressure. |
| 🧠 **AI Answer Evaluation** | Scores confidence, communication, correctness, and a final score for each answer. |
| 📊 **Analytics Dashboard** | Shows overall performance, skill evaluation, question-wise scores, feedback, and trend charts. |
| 📥 **PDF Performance Report** | Exports a report containing scores, advice, question breakdown, and feedback. |
| 🕘 **Interview History** | Revisit previous interviews and open their reports. |
| 🔐 **Google Authentication** | Firebase Google sign-in connects the client with backend auth. |
| 💳 **Credit System** | Interview generation consumes credits and Razorpay can add more credits. |
| 🎨 **Animated UI** | Motion-powered entrance animations, hover effects, gradients, and responsive cards. |

---

## 🧭 How It Works

```text
Google Sign In
     │
     ▼
Choose Role + Experience + Mode
     │
     ├── Optional: Upload Resume ──► AI extracts profile data
     │
     ▼
Generate 5 AI Questions
     │
     ▼
Voice + Timed Interview
     │
     ▼
Submit Answers ──► AI evaluates confidence, communication & correctness
     │
     ▼
Interview Report
     │
     ├── Overall Score
     ├── Skill Evaluation
     ├── Performance Trend
     ├── Question-wise Feedback
     └── Downloadable PDF
```

---

## 🧠 AI Evaluation

Each answer is evaluated across three dimensions:

| Metric | Focus |
|---|---|
| **Confidence** | Clarity, confidence, and presentation |
| **Communication** | Simple, structured, easy-to-understand delivery |
| **Correctness** | Accuracy, relevance, and completeness |

The backend uses OpenRouter to generate interview questions and evaluate answers, with the current service configured for `openai/gpt-4o-mini`.

---

## 🛠️ Tech Stack

### Frontend

- **React 19** + **Vite**
- **React Router**
- **Redux Toolkit / React Redux**
- **Tailwind CSS 4**
- **Motion**
- **Axios**
- **Recharts**
- **jsPDF + jsPDF AutoTable**
- **Firebase Authentication**

### Backend

- **Node.js** + ES modules
- **Express 5**
- **MongoDB + Mongoose**
- **JWT authentication + cookies**
- **Multer** for uploads
- **pdfjs-dist** for PDF text extraction
- **OpenRouter** for AI generation/evaluation
- **Razorpay** for payments
- **CORS, dotenv, cookie-parser**

---

## 📁 Project Structure

```text
AI_Interview/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── HR.png
│   │   │   ├── MM.png
│   │   │   ├── ai-ans.png
│   │   │   ├── confi.png
│   │   │   ├── credit.png
│   │   │   ├── history.png
│   │   │   ├── pdf.png
│   │   │   ├── resume.png
│   │   │   ├── tech.png
│   │   │   └── videos/
│   │   │       ├── female-ai.mp4
│   │   │       └── male-ai.mp4
│   │   ├── components/
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   ├── Step3Report.jsx
│   │   │   └── Timer.jsx
│   │   ├── pages/
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── server/
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── services/
    ├── index.js
    └── package.json
```

---

## 🔌 API Overview

### Authentication

```text
POST /api/auth/google
GET  /api/auth/logout
```

### Interview

```text
POST /api/interview/resume
POST /api/interview/generate-questions
POST /api/interview/submit-answer
POST /api/interview/finish
GET  /api/interview/get-interview
GET  /api/interview/report/:id
```

### Payments

```text
POST /api/payment/order
POST /api/payment/verify
```

Protected routes use the JWT token stored in the `token` cookie.

---

## ⚙️ Local Development

### 1. Clone

```bash
git clone https://github.com/AlokSharma13/AI_Interview.git
cd AI_Interview
```

### 2. Install frontend

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_SERVER_URL=http://localhost:6000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 3. Install backend

```bash
cd ../server
npm install
```

Create `server/.env`:

```env
PORT=6000
CLIENT_URL=http://localhost:5173
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 4. Start backend

```bash
cd server
npm run dev
```

### 5. Start frontend

In another terminal:

```bash
cd client
npm run dev
```

---

## 💳 Credit Plans

The current client configuration contains:

| Plan | Price | Credits |
|---|---:|---:|
| **Free** | ₹0 | 100 |
| **Starter Pack** | ₹100 | 150 |
| **Pro Pack** | ₹500 | 650 |

Generating an interview currently consumes **50 credits**.

---

## 🔒 Security & Configuration

- Keep API keys, database credentials, and JWT secrets in environment variables.
- Authentication is enforced with JWT middleware.
- Resume PDFs are processed server-side and temporary upload files are removed after processing.
- Razorpay signatures are verified server-side before credits are added.
- Do **not** commit `.env` files or secrets to Git.

---

## 🌐 Live Demo

<div align="center">

<a href="https://ai-interview-1-im9s.onrender.com/">
  <img src="https://capsule-render.vercel.app/api?type=rounded&color=0:0f172a,50:10b981,100:14b8a6&height=90&section=header&text=%F0%9F%8E%99%EF%B8%8F%20Start%20Your%20AI%20Interview&fontSize=28&fontColor=ffffff&animation=twinkling" width="100%" alt="Start AI interview" />
</a>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:14b8a6,50:10b981,100:0f172a&height=120&section=footer&animation=twinkling" width="100%" alt="Animated footer" />

### InterviewIQ.AI
**Practice with AI. Perform with confidence.**

</div>
