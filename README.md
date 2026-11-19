# The Bored Monkey — Careers & Talent Studio

A modern, high-performance, minimalist Careers & Talent Platform engineered for **The Bored Monkey** (Mumbai, India). Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Prisma 7 + Supabase PostgreSQL**, and **Google Sheets Live Webhook Sync**.

Candidates can explore open agency roles with an editorial non-card layout, experience a custom interactive inverted-lens cursor, apply via an editorial slide-over drawer with PDF resume uploads, and have their applications instantly stored in PostgreSQL while simultaneously synchronizing to the team's live Google Sheet.

---

## ✨ Features & Highlights

- **Editorial Studio Layout**: Premium whitespace, minimalist typography, and non-card job listings (`01`, `02`) with high-contrast pills.
- **Interactive Inverted Lens Cursor**: Precision inner dot + outer ring with 0.16 lerp damping. Expands over headline typography (`WHERE TALENT MEETS OPPORTUNITY`) using `mix-blend-mode: difference` to create an inverted white-on-black lens effect in real time.
- **Slide-Over Application Drawer**: Modern right-hand slide-over sheet over a glass blur backdrop, replacing clunky modal cards.
- **Real PDF Resume Uploads**: Built-in drag-and-drop dropzone supporting up to 12MB PDF resumes, stored securely and served with direct download links.
- **Simultaneous Dual Data Pipeline**:
  - **Supabase PostgreSQL**: Live database persistence with Prisma ORM.
  - **Google Sheets Webhook**: Every application instantly posts candidate details (name, email, phone, role, resume URL, timestamp) to the team's live Google Sheet.
- **Team-Only Job Creator**: Press `Shift + T` anywhere on the site or use the team button to quickly create and publish new positions with zero page refresh.
- **ATS Resume Matcher & Employer Hub**: Full ATS scoring, candidate review dashboard, and skill criteria management.

---

## 🧱 Tech Stack

| Layer | Choice |
| --- | --- |
| **Framework** | Next.js 16 (Turbopack, Server & Client Components) |
| **Styling** | Tailwind CSS v4 + Custom Lucide Icons |
| **Database** | PostgreSQL on Supabase (Tokyo `aws-0-ap-northeast-1`) |
| **ORM** | Prisma 7 (`@prisma/adapter-pg` driver adapter) |
| **Integrations** | Google Apps Script Webhook API |
| **Parsing** | `unpdf` (PDF Parsing) |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Sarvesh30-S/careers-page.git
cd careers-page
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory (based on `.env.example`):

```bash
# Database (Supabase PostgreSQL Connection Strings)
DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres?sslmode=require"
DIRECT_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres?sslmode=require"

# Google Sheets Live Webhook Sync
GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"

# Auth & Secrets
ADMIN_PASSWORD=your_secure_password
ADMIN_JWT_SECRET=your_jwt_secret_token
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the careers page.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `careers-page`.
4. In **Environment Variables**, add:
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `GOOGLE_SHEET_WEBHOOK_URL`
   - `ADMIN_PASSWORD`
   - `ADMIN_JWT_SECRET`
5. Click **Deploy**. Your careers page will be live on your custom domain or Vercel URL!
