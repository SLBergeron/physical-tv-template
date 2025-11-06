# PhysicalTV Studios Website - Template Documentation

## Project Overview

**Client:** Frederick Light / PhysicalTV Studios
**Purpose:** Creative intelligence company website showcasing media architecture and strategic frameworks
**Tech Stack:** Next.js 15.1.0, React 19, Tailwind CSS 3.4.1, Framer Motion
**Design Direction:** Japanese minimalism, B&W + subtle blue accents, clean and professional
**Deployment:** Vercel + GitHub (zero hosting costs)

---

## Original Template: "Everything AI"

This is a modern Next.js SaaS/AI landing page template that we're adapting surgically for PhysicalTV Studios.

### Directory Structure

```
/
├── app/                          # Next.js app directory
│   ├── (marketing)/              # Marketing pages group
│   │   ├── page.tsx             # Home page - MAIN FOCUS
│   │   ├── layout.tsx           # Marketing layout with navbar/footer
│   │   ├── pricing/             # Pricing page - HIDDEN but kept
│   │   ├── contact/             # Contact form page
│   │   ├── blog/                # Blog with MDX support - TEMPLATE FOR PROJECTS
│   │   └── projects/            # NEW: Projects/clients page (cloned from blog)
│   ├── (auth)/                  # Auth pages - HIDDEN but kept
│   │   ├── login/
│   │   └── signup/
│   ├── globals.css              # Global styles and Tailwind directives
│   └── favicon.ico
├── components/                   # 36+ React components
│   ├── navbar/                  # Navigation - MODIFIED for section links
│   ├── logo.tsx                 # Logo component - MODIFIED with PhysicalTV logo
│   ├── hero.tsx                 # Hero section
│   ├── features.tsx             # Feature grid
│   ├── contact.tsx              # Contact form
│   └── [... 30+ other components]
├── layouts/                     # Layout components
├── constants/                   # Configuration constants
├── context/                     # React context providers
├── lib/                         # Utility functions
└── public/                      # Static assets - ADDED Frederick's headshot
```

---

## Key Template Features (All Preserved)

### Components Library (36 total)

**Navigation:**
- `navbar.tsx` / `navbar-desktop.tsx` / `navbar-mobile.tsx` - Responsive navigation
- `logo.tsx` - Brand logo component

**Hero & Features:**
- `hero.tsx` - Main hero section with CTA
- `features.tsx` - 4-feature grid with animated skeletons
- `grid-features.tsx` - Alternative feature layout
- `skeleton-first.tsx` through `skeleton-fourth.tsx` - Animated feature demos

**Social Proof:**
- `companies.tsx` - Logo grid showcase
- `testimonials.tsx` - Testimonial cards
- `featured-testimonials.tsx` - Highlighted testimonials
- `infinite-moving-cards.tsx` - Auto-scrolling testimonials

**Forms:**
- `contact.tsx` - Contact form with validation
- `login.tsx` / `signup.tsx` - Auth forms
- `password.tsx` - Password input with toggle
- Form primitives: `button.tsx`, `label.tsx`, `form.tsx`

**Layout:**
- `container.tsx` - Max-width wrapper
- `background.tsx` - Animated grid/dot pattern
- `footer.tsx` - Multi-column footer
- `cta.tsx` - Call-to-action section

**Effects & Animations:**
- `blur-image.tsx` - Progressive image loading
- `animated-tooltip.tsx` - Hover tooltips
- `globe.tsx` - 3D globe visualization (COBE)
- `grid-lines.tsx` - Decorative lines
- `horizontal-gradient.tsx` - Gradient overlays
- `in-view-div.tsx` - Scroll-triggered animations

**Blog/Content:**
- `blog-layout.tsx` - Blog post layout
- `blog-card.tsx` - Blog card component
- `pricing.tsx` - Pricing table

---

## Surgical Modifications Made

### 1. Documentation
- ✅ Created this `claude.md` file for future reference and continuity

### 2. Branding Assets
- ✅ Logo replaced in `components/logo.tsx` with `logo-physical-tv-studio.svg`
- ✅ Frederick's headshot added to `/public/Image-Profile-Frederick.jpeg`

### 3. Navigation Structure
- ✅ Updated `components/navbar-desktop.tsx` to include section links:
  - About → `#about`
  - Services → `#services`
  - Process → `#process`
  - Projects → `/projects` (new page)
  - Contact → `#contact`
- ✅ Updated mobile navigation accordingly

### 4. New Pages
- ✅ Created `/app/(marketing)/projects/` by cloning blog structure
- ✅ Maintains MDX support for future project case studies
- ✅ Updated metadata for "Projects & Clients" branding

---

## Content Architecture (From Brief)

### Home Page Sections (app/(marketing)/page.tsx)

**Section Flow:** Hook → Who → What → Why → How → Frederick → Contact

1. **Hero/Hook**
   - "Creative intelligence company shaping media ecosystems"
   - PhysicalTV Studios positioning
   - CTA buttons

2. **Who We Are** (`#about`)
   - Studio introduction
   - "How ideas take shape, move through culture, and create impact"
   - Led by Frederick Light

3. **What We Do** (`#services`)
   - Three disciplines: Strategy. Story. System.
   - Three work modes: Consult. Create. Collaborate.

4. **Why Clients Work With Us**
   - "Work that thinks"
   - Bridging intention and impact

5. **How It Works** (`#process`)
   - Begin by listening
   - Map the landscape
   - Design the framework
   - Limited client relationships

6. **About Frederick**
   - Two decades in digital growth
   - Billions of views, millions in ad spend
   - Creator economy expertise
   - Professional headshot

7. **Contact/CTA** (`#contact`)
   - Contact form (existing)
   - Cal.com placeholder integration
   - Clear CTA

### Projects Page (app/(marketing)/projects/page.tsx)

- Portfolio showcase
- Client work examples
- Case studies (future)
- Uses blog infrastructure with MDX support

---

## Design System

### Color Palette
- **Base:** Black & White with grays
- **Accent:** Subtle blue (from logo variations)
- **Mode:** Dark mode default (Frederick's preference)

### Typography
- **Font:** Geist font family
- **Hierarchy:** Clear heading structure with emphasis on key phrases
- **Style:** Clean, minimal, sophisticated

### Animation Philosophy
- Subtle, not flashy
- Smooth scroll-triggered effects
- Framer Motion for sophisticated transitions
- Professional, not gimmicky

---

## Technical Configuration

### Tailwind Config (`tailwind.config.ts`)
- Dark mode: class-based
- Custom colors and shadows
- Animation utilities (scroll, marquee, fade-in)
- Typography plugin for blog/project content

### Next.js Config (`next.config.mjs`)
- MDX support enabled
- Image optimization
- Vercel deployment ready

### Dependencies (Key)
- `next`: 15.1.0
- `react`: 19.0.0
- `tailwindcss`: 3.4.1
- `framer-motion`: 12.0.0-alpha.1
- `react-hook-form`: 7.54.2
- `zod`: 3.24.1
- `@next/mdx`: 15.1.0

---

## Content Assets

### Provided Materials
1. **Logo:** `/public/logo-physical-tv-studio.svg` (626x148px)
2. **Headshot:** `/public/Image-Profile-Frederick.jpeg` (professional, B&W suitable)
3. **Copy:** `Text-elements.md` (complete website copy)
4. **Brief:** `Initial-proposal.md` (project requirements)
5. **Context:** `Frederick-LightConversation.pdf` (design decisions and discussions)

### Key Messaging
- "Work that thinks"
- "How ideas move through people and platforms, from attention to impact"
- "The mechanics of attention"
- "Bridging creativity and commerce"
- "Where story, strategy, and commerce align"

---

## Future Modifications Needed

### Content Population
1. Replace hero content with PhysicalTV messaging
2. Update "Who We Are" section with studio intro
3. Populate "What We Do" with three disciplines
4. Add "Why" value proposition
5. Detail "How It Works" process
6. Insert Frederick bio and headshot
7. Integrate Cal.com booking (placeholder ready)

### Projects Page
1. Add project case studies as MDX files
2. Include client logos when available
3. Add testimonials when received

### Optional Enhancements
1. Terms of Service page
2. Privacy Policy page
3. Blog activation for thought leadership
4. Client logo showcase section
5. Testimonial integration

---

## Hidden But Preserved

These pages exist but are not linked in navigation:
- `/pricing` - Pricing page (for future service tiers)
- `/blog` - Blog infrastructure (for thought leadership)
- `/login` & `/signup` - Auth pages (for future client portal)

All remain functional and can be activated by adding links back to navigation.

---

## Deployment

**Platform:** Vercel
**Domain:** physical.tv
**Cost:** $0 (Vercel free tier)
**GitHub:** Connected for continuous deployment

**Deploy Command:**
```bash
npm run build
```

**Environment Variables:** None required currently (add Cal.com API keys if needed)

---

## Notes & Decisions

### From Client Discovery
- Frederick prefers minimalist aesthetic ("I wear black a lot")
- Serious, professional headshot chosen over casual
- Single-page design preferred (80% of visitors only see home page)
- Focus on legitimacy and conversion
- Permission to make minor logo edits while keeping feeling the same

### Design Philosophy
- Japanese minimalism with small color accents
- Clean B&W with subtle blue highlights
- Professional production company positioning
- Emphasis on frameworks and system-thinking vs typical portfolio showcase

### Technical Choices
- Keep all components (no deletion) for maximum flexibility
- Surgical edits only - adapt existing rather than rebuild
- Maintain template's excellent animation and dark mode infrastructure
- Use shadcn (via MCP) for any additional UI primitives needed

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Build
npm run build           # Production build
npm run start           # Start production server

# Utilities
npm run lint            # Run ESLint

# Deployment
git push origin main    # Triggers Vercel deployment (when connected)
```

---

## Contact & Support

**Client:** Frederick Light
**Project Manager:** Simon Bergeron
**Timeline:** Content by Wednesday → Live by Friday
**Budget:** $500 ($250 deposit paid, $250 on launch)

---

*Last Updated: 2025-11-06*
*Template Version: Everything AI v1.0*
*Adaptation: PhysicalTV Studios*
