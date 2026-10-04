# Hezeki Intoate — Personal Landing & Hub

> **Live Site:** [hezeki.pages.dev](https://hezeki.pages.dev/)  
> **Studio:** [Thingpuisen Studio](https://github.com/thingpuisen-studio)

A high-performance, dark-mode personal landing page and contact hub for **Hezeki Intoate** — Civil Engineer and local ISP operator based in Muolhoi, Haflong, Assam.

Reconstructed and engineered with zero runtime framework bloat using **Vite**, **Vanilla TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Typewriter Splash Sequence:** Iconic opening sequence with dynamic character timing, spinning cursor animation (`|`, `/`, `-`, `\`), and smooth backspacing before revealing the landing card.
- **Single-Row Tagline:** Carefully tuned typography ensures his professional domains (`Civil Engineering & Architecture | Tech enthusiast | ISP Services`) fit on a single continuous line across mobile, tablet, and desktop viewports.
- **Zero-Outline Social Hub:** Borderless, clean circular action buttons with interactive hover scale and white illumination for Instagram, Facebook, WhatsApp, Email, and About Me.
- **In-Place About Modal:** Accessible overlay presenting his civil engineering focus, community infrastructure projects, and local ISP connectivity service.
- **Interactive Letter-by-Letter Wave Footer:** Playful micro-interaction on the copyright notice.
- **Google Search & Entity SEO Gold Standard:**
  - Full `ProfilePage` schema with inlined `Person` entity qualifying for Google Profile Page rich results.
  - Granular geographical linking (`Muolhoi, Haflong, Assam, India`).
  - Canonical Knowledge Graph and Wikidata developer attribution to **Donal Muolhoi** (`kg:/g/11yf0bzxbq` & `Q134733823`).
- **Cloudflare Edge Security:** Strict Transport Security (`HSTS`), `X-Content-Type-Options: nosniff`, and `Referrer-Policy` deployed via `public/_headers`.
- **Complete Favicon Suite:** Multi-resolution ICO (16x16, 32x32, 48x48, 256x256), 48x48, 96x96, 192x192 PNGs, and 180x180 Apple Touch Icon for Google SERP and mobile home screens.

---

## 🛠️ Tech Stack

| Component | Technology | Rationale |
|---|---|---|
| **Bundler** | [Vite 5](https://vitejs.dev/) | Instant HMR and sub-second production builds (~1.1s) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe DOM manipulation and clean structured code |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS, custom keyframes, and zero runtime overhead |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global edge network delivery with instant asset caching |

---

## 📁 Project Structure

```text
hezeki/
├── public/
│   ├── _headers               # Cloudflare Pages HSTS & security headers
│   ├── apple-touch-icon.png   # 180x180 iOS / mobile icon
│   ├── favicon-48x48.png      # Google Search SERP primary target
│   ├── favicon-96x96.png      # High-DPI desktop icon
│   ├── favicon-192x192.png    # Android / Google mobile app icon
│   ├── favicon.ico            # Multi-resolution Windows icon resource
│   ├── robots.txt             # Search engine crawling rules
│   └── sitemap.xml            # Canonical sitemap
├── src/
│   ├── main.ts                # Application logic, splash sequence, modals & DOM rendering
│   └── style.css              # Tailwind directives & custom animation layers
├── index.html                 # Canonical HTML with Schema.org JSON-LD
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/thingpuisen-studio/hezeki.git
cd hezeki

# Install dependencies
npm install
```

### Development

```bash
# Start local development server on port 3000
npm run dev
```

### Production Build

```bash
# Compile optimized static bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 Credits & License

- **Subject Entity:** [Hezeki Intoate](https://hezeki.pages.dev/)
- **Design & Engineering:** [Donal Muolhoi](https://thingpuisen.pages.dev/) · [Thingpuisen Studio](https://github.com/thingpuisen-studio)
- **License:** MIT License
