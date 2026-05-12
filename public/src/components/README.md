# Pero Clash — Landing Page

Premium black + red esports landing page for the **Pero Clash** Free Fire tournament app.
Built with **Vite + React 18 + Tailwind CSS + Framer Motion**.

> _Be Pero. Be Fearless._

---

## Tech Stack

- ⚡ Vite (lightning-fast build)
- ⚛️ React 18
- 🎨 Tailwind CSS
- 🎬 Framer Motion (animations)
- 🔣 lucide-react (icons)
- 🔤 Orbitron + Rajdhani (Google Fonts)

No backend, no database — pure static site. Deploys in under 60 seconds on Vercel.

---

## Folder Structure

```
pero-clash/
├── public/
│   ├── pero-logo.png        ← brand logo (used everywhere)
│   └── app.apk              ← REPLACE this placeholder with your real APK
├── src/
│   ├── components/
│   │   ├── PeroBrand.jsx        # Logo + wordmark (single source of truth)
│   │   ├── Navbar.jsx           # Fixed top navbar
│   │   ├── Hero.jsx             # Hero with CTA + offer badge
│   │   ├── Features.jsx         # 7 feature cards
│   │   ├── DownloadSection.jsx  # Secondary APK download
│   │   └── Footer.jsx           # Contact + copyright
│   ├── App.jsx              # Page composition
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind + custom esports styles
├── index.html               # HTML shell + fonts + SEO meta
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json              # Vercel deploy config (already set up)
├── .gitignore
└── README.md
```

---

## 1. Local Development (run on your computer)

### Prerequisites
- [Node.js](https://nodejs.org/) **v18 or higher** installed
- Any code editor (VS Code recommended)

### Steps

```bash
# 1. Install dependencies (only first time)
npm install

# 2. Run the dev server
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`) in your browser.
Edits to any `.jsx` / `.css` file will hot-reload instantly.

### Build for production (optional local test)

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## 2. Where to put your APK file

Place your signed Android APK at:

```
public/app.apk
```

That's it. The Download APK buttons all point to `/app.apk`, which Vite serves from the `public/` folder.

> ⚠️ Vercel has a **100 MB file size limit** per deployment file. If your APK is larger, host it on a CDN (Cloudflare R2, GitHub Releases, Firebase Storage, etc.) and update the `href="/app.apk"` references in `Hero.jsx`, `Navbar.jsx`, and `DownloadSection.jsx` to that URL.

The included `vercel.json` already sets the correct `Content-Type` (`application/vnd.android.package-archive`) so the file downloads instead of opening in the browser.

---

## 3. Deploy to Vercel — Beginner Step-by-Step

You have two options. Option A (GitHub) is recommended.

### Option A — Deploy via GitHub (recommended)

**Step 1 — Push to GitHub**

```bash
# from inside the pero-clash folder
git init
git add .
git commit -m "Initial commit"
git branch -M main

# create an empty repo on github.com first, copy its URL, then:
git remote add origin https://github.com/YOUR_USERNAME/pero-clash.git
git push -u origin main
```

**Step 2 — Connect to Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account).
2. Click **Add New… → Project**.
3. Find your `pero-clash` repository and click **Import**.
4. Vercel auto-detects Vite. Confirm these settings (they should be pre-filled):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Root Directory**: `./`
5. Click **Deploy**.

Wait ~30–60 seconds. You'll get a live URL like `https://pero-clash.vercel.app`.

**Step 3 — Custom domain (optional)**

Settings → Domains → add your domain (e.g. `peroclash.com`). Vercel gives you DNS records to add at your domain registrar (GoDaddy / Namecheap / Cloudflare).

### Option B — Deploy via Vercel CLI (no GitHub)

```bash
npm install -g vercel
vercel login        # follow the prompt
vercel              # answer the questions; defaults are fine
vercel --prod       # promote to production
```

---

## 4. Vercel Configuration Cheatsheet

| Setting          | Value             |
| ---------------- | ----------------- |
| Framework        | Vite              |
| Build Command    | `npm run build`   |
| Output Directory | `dist`            |
| Install Command  | `npm install`     |
| Node Version     | 18.x or 20.x      |
| Environment vars | **None required** |

Already pre-configured inside `vercel.json` — Vercel will read it automatically.

---

## 5. Updating Site Content

| Want to change…                  | Edit                                      |
| -------------------------------- | ----------------------------------------- |
| Hero tagline / description       | `src/components/Hero.jsx`                 |
| Feature cards (titles / icons)   | `src/components/Features.jsx`             |
| Contact email                    | `src/components/Footer.jsx` → `CONTACT_EMAIL` |
| APK button text or link          | search for `/app.apk` across project      |
| Logo image                       | `public/pero-logo.png`                    |
| Limited time offer text          | `Hero.jsx` and `DownloadSection.jsx`      |
| Brand red color                  | `src/index.css` → `--pc-red`              |
| Page title / SEO description     | `index.html`                              |

After editing, commit and push to GitHub — Vercel auto-deploys every push to `main`.

```bash
git add .
git commit -m "Update hero text"
git push
```

---

## 6. Troubleshooting

**Build fails on Vercel: "Module not found"**
→ Make sure you committed `package.json` and that all files have correct case-sensitive paths (Linux is case-sensitive; Windows/Mac is not).

**APK button opens APK in browser instead of downloading**
→ The included `vercel.json` already fixes this. If you're hosting elsewhere, make sure the server sends `Content-Type: application/vnd.android.package-archive` and `Content-Disposition: attachment`.

**Fonts look wrong**
→ The site loads Orbitron + Rajdhani from Google Fonts via `index.html`. Make sure you aren't behind a network that blocks `fonts.googleapis.com`.

**Animations feel laggy on low-end phones**
→ The site already respects `prefers-reduced-motion`. You can further reduce the particle count in `Hero.jsx` (the `Sparks` component, default 10).

---

## License

Private — © Pero Clash. All rights reserved.
