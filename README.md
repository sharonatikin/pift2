# PIFT — Pinnacle Institute of Fashion & Technology

A high-end Next.js 14 multi-route design academy platform featuring three specialized program pages.

## Routes

| Route | Program |
|---|---|
| `/` | Knitwear Design |
| `/textile` | Textile Design |
| `/interior` | Interior Design |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Images:** Unsplash (via next/image)
- **Language:** JavaScript (JSX)

## Project Structure

```
pift-platform/
├── app/
│   ├── layout.jsx          # Root layout with Header + Footer
│   ├── page.jsx            # Knitwear Design route (/)
│   ├── textile/
│   │   └── page.jsx        # Textile Design route (/textile)
│   └── interior/
│       └── page.jsx        # Interior Design route (/interior)
├── components/
│   ├── common/
│   │   └── Header.jsx
│   ├── knitwear/           # 7 section components
│   ├── textile/            # 15 section components
│   └── interior/           # 6 section components
└── styles/
    └── globals.css
```
