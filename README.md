# PhysicalTV Studios Website

A modern, minimalist website for PhysicalTV Studios - a creative intelligence company shaping media ecosystems. Built with Next.js 15, React 19, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15.3.1
- **React:** 19.0.0
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion
- **UI Components:** Custom components + Sonner (toast notifications)
- **Typography:** Geist font family
- **Deployment:** Vercel

## Features

- Japanese minimalist design with black & white aesthetic
- Dark mode support with next-themes
- Smooth scroll animations with Framer Motion
- Responsive navigation with mobile menu
- MDX blog/project support
- Privacy Policy and Terms of Service pages (5th-grade reading level)
- Cookie consent notification with localStorage persistence
- Contact form with validation
- SEO optimized with comprehensive metadata

## Project Structure

```
/
├── app/
│   ├── (marketing)/         # Marketing pages
│   │   ├── page.tsx        # Home page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects showcase
│   │   ├── privacy/        # Privacy Policy
│   │   └── terms/          # Terms of Service
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── navbar/            # Navigation components
│   ├── footer.tsx         # Footer component
│   ├── cookie-consent.tsx # Cookie consent toast
│   └── ui/                # UI components
├── public/                # Static assets
│   ├── logo-physical-tv-studio.svg
│   └── Image-Profile-Frederick.jpeg
└── CLAUDE.md              # Project documentation
```

## Getting Started

### Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

### Lint

Run ESLint:

```bash
npm run lint
```

## Key Pages

- **Home** (`/`) - Main landing page with hero, about, services, process, and contact
- **Projects** (`/projects`) - Project showcase with MDX support
- **Privacy** (`/privacy`) - Privacy Policy in plain English
- **Terms** (`/terms`) - Terms of Service in plain English
- **Contact** (`/contact`) - Contact form

## Deployment

This site is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push to main

Domain: [physical.tv](https://physical.tv)

## Environment Variables

No environment variables required for basic functionality. Add for advanced features:

- `NEXT_PUBLIC_CALENDLY_URL` - For appointment scheduling integration

## Content Management

- Blog/Project posts: Add MDX files to `app/(marketing)/blog/` or `app/(marketing)/projects/`
- Images: Place in `/public/` directory
- Site copy: Edit directly in page components

## Legal Pages

Both Privacy Policy and Terms of Service are written in plain, 5th-grade level English as per requirements:

- Based in Vancouver, BC, Canada
- Minimal data collection (Vercel Analytics only)
- No third-party advertising or data selling
- Cookie consent with Accept/Decline options

## Documentation

See `CLAUDE.md` for comprehensive project documentation including:
- Original template features
- Surgical modifications made
- Design system details
- Content architecture
- Technical decisions

## License

Copyright © 2025 PhysicalTV Studios. All rights reserved.
