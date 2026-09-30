# LuontoAI — Turning Waste Into Sustainable Possibilities

**LuontoAI** ("Luonto" means "nature" in Finnish) is an AI-powered sustainable resource discovery web application. It discovers high-value resource and product possibilities hidden inside everyday waste streams across hospitality, tourism, communities, and light industry.

---

## Overview

Traditional recycling tools act as passive waste bins or generic classifiers. **LuontoAI** operates as a proactive **sustainable resource discovery engine**:

$$\text{WASTE} \longrightarrow \text{RESOURCE} \longrightarrow \text{PRODUCT} \longrightarrow \text{NEW LIFE}$$

### What Questions Does LuontoAI Answer?
- **Resource Potential:** What useful biochemical or physical resource can this waste provide?
- **Product Possibilities:** What 3–5 viable circular products could be manufactured from it?
- **Replacement Opportunity:** What virgin, petroleum, or mineral material can it displace?
- **Transformation Journey:** What are the sequential 5 steps (Collect $\to$ Sort $\to$ Process $\to$ Create $\to$ Reuse)?
- **Feasibility & Limitations:** What are the practical logistics, moisture, or contamination limits?

---

## Architecture & Features

- **Frontend:** Next.js App Router (TypeScript, React, Tailwind CSS, Lucide Icons).
- **Nordic Editorial Aesthetic:** Minimalist Scandinavian design palette with deep pine, off-whites, muted Finnish blue, and clean typography.
- **AI Intelligence:** Native server-side integration with **Groq Cloud API** (`https://api.groq.com/openai/v1/chat/completions`) using high-speed LPU inference with `llama-3.3-70b-versatile` and structured JSON responses.
- **Robust Fallback Engine:** Curated Nordic bioeconomy benchmark profiles for Coffee Grounds, Plastic Bottles, Cardboard, Food Waste, Old Textiles, Glass Bottles, Wood Waste, Aluminium Cans, Used Paper, and Coconut Shells if no API key is configured or when offline.
- **Interactive Session Impact Tracker:** Client-side exploration metrics saved across the active browser session.
- **Zero Greenwashing:** Clear illustrative disclaimers for scores and lifecycle assessments.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI Provider:** Groq API (`GROQ_MODEL=llama-3.3-70b-versatile`)
- **Deployment:** Vercel

---

## Local Setup

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-username/luontoai.git
cd luontoai
npm install
```

### 2. Configure Environment Variables

Create `.env.local` in the root directory:

```bash
cp .env.example .env.local
```

Add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

> **Security Notice:** Never commit `.env.local` or expose your `GROQ_API_KEY` to client-side code.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To verify production readiness:

```bash
npm run build
npm run start
```

---

## Vercel Deployment

LuontoAI is architected for zero-configuration deployment to [Vercel](https://vercel.com):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. In the Vercel Dashboard, select **Add New Project** and import the repository.
3. In **Environment Variables**, configure:
   - `GROQ_API_KEY`: Your Groq API Key
   - `GROQ_MODEL`: `llama-3.3-70b-versatile`
4. Click **Deploy**.

---

## Context & Initiative

*Student Innovation Project · Finland · World Tourism Day 2026*
