# Keeley Electrical Contractors Website

## Project Overview
- **Name**: Keeley Electrical Contractors, Inc.
- **Tagline**: Electrical - Site - Utility
- **Goal**: Lead-generation website for a commercial/industrial electrical contractor based in Portland, ME
- **Brand**: Family-owned since 1978, third generation, licensed in ME, NH, MA

## Live Preview
- **Development URL**: https://3000-i3tfead6cuphbcu52newi-2e1b9533.sandbox.novita.ai

## Completed Features (Phase 1)

### Pages
| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Complete |
| Services Index | `/services` | Complete |
| Electrical (service detail) | `/services/electrical` | Complete |
| Site Work (service detail) | `/services/site-work` | Complete |
| Utility (service detail) | `/services/utility` | Complete |
| Capabilities | `/capabilities` | Complete |
| About | `/about` | Complete |
| Careers | `/careers` | Complete |
| Contact | `/contact` | Complete |
| 404 | (any invalid route) | Complete |
| Privacy Policy | `/privacy` | Complete |
| Terms & Conditions | `/terms` | Complete |
| robots.txt | `/robots.txt` | Complete |
| sitemap.xml | `/sitemap.xml` | Complete |

### Global Components
- **Emergency Bar**: Red banner with 24/7 service and phone number, pulsing dot
- **Navigation**: Sticky 58px dark nav with logo, links (Services, Capabilities, About, Careers, Contact), phone, green "Get a Quote" CTA, mobile hamburger drawer with backdrop overlay
- **Footer**: Dark 4-column grid (Brand/NAP, Services, Company, Contact), license states, bottom bar with copyright and legal links
- **Scroll-to-top**: Green floating button appears after 400px scroll
- **Section Reveals**: Intersection-observer animations fade-in sections as user scrolls
- **Smooth Scroll**: Anchor links scroll smoothly to targets

### Home Page Sections
- Dark hero with headline, trust stats, CTAs
- Trust strip (45+ Years, ISN Certified, 900+ Projects, ME-NH-MA, Zero OSHA)
- 3-column service cards
- About strip with image placeholder
- Stats bar (Founded 1978, ISN Certified, Zero OSHA, 3 States)
- Certifications grid
- Featured project placeholder
- Process strip (Inquiry > Budget > Build)
- CTA band

### Contact Page Features
- Multi-step form with 3 steps (Service Type > Your Info > Project Details)
- Progress bar with percentage
- Step indicator
- Conditional logic: electrical/site-work/utility sub-service checkboxes
- Project size selector (Under $25K / $25K+)
- Validation with check-mark icons
- Referral source with "Other" reveal
- Terms acceptance
- Thank-you page with next steps
- Sidebar: trust signals, phone, email, territory pills, emergency card
- API endpoint at POST `/api/contact`

### SEO
- Unique `<title>` (50-60 chars) and `<meta description>` (140-160 chars) per page
- Single `<h1>` per page with primary keyword
- Canonical links
- JSON-LD: `LocalBusiness` on Home and Contact, `BreadcrumbList` on all interior pages
- NAP consistent in footer on every page
- `robots.txt` and `sitemap.xml` at root

### Design System
- **Colors**: `--ink:#141414`, `--accent:#30AE67` (green), `--accent-2:#0660B6` (blue), `--emergency:#c0392b`
- **Fonts**: Barlow Condensed (headings 400-800), Barlow (body 300-600)
- **Responsive**: 3 breakpoints (1024px, 768px, 480px)

### Trust Signals (used throughout)
- Zero OSHA recordables (3 years)
- ISN Network certified
- In business since 1978
- Family-owned, third generation
- TWIC cards
- Licensed ME, NH, MA
- 900+ projects
- Design-assist capability
- 1-day response guarantee

### Visual Polish
- **Scroll-reveal animations**: Below-fold sections and cards fade in via IntersectionObserver; above-fold content remains immediately visible for fast LCP and bot accessibility
- **Hover effects**: Cards lift on hover with shadow transitions (service cards, license cards, cert cards, value cards)
- **Sticky nav shadow**: Navigation gains drop shadow on scroll
- **Active link underline**: Green accent underline on current nav link
- **Phone auto-format**: Contact form phone field formats as (xxx) xxx-xxxx
- **Staggered card animations**: Cards within a group reveal with 0.1s stagger delays
- **Print/no-JS fallback**: `reveal-init` content is visible in print and when JS is disabled

## Tech Stack
- **Framework**: Hono (edge-first web framework)
- **Build**: Vite + @hono/vite-cloudflare-pages
- **Runtime**: Cloudflare Workers / Pages
- **CSS**: Custom design system with CSS variables
- **JS**: Vanilla JS for form logic, mobile nav, scroll-to-top, intersection-observer section reveals
- **Fonts**: Google Fonts (Barlow, Barlow Condensed)
- **Icons**: Font Awesome 6.5

## Project Structure
```
webapp/
  src/
    index.tsx           # Hono router and API
    components/
      layout.ts         # Shared layout, nav, footer
    pages/
      home.ts           # Home page
      services.ts       # Services index
      service.ts        # Service detail template
      capabilities.ts   # Capabilities page
      about.ts          # About page
      careers.ts        # Careers page
      contact.ts        # Contact page with multi-step form
      notfound.ts       # 404 page
      privacy.ts        # Privacy policy
      terms.ts          # Terms & conditions
      robots.ts         # robots.txt and sitemap.xml
  public/
    _routes.json        # Cloudflare Pages routing config
    favicon.svg         # Green K favicon
    static/
      styles.css        # Complete design system CSS
      app.js            # Client-side JS (form, nav, scroll)
```

## Development
```bash
npm run build              # Build for production
pm2 start ecosystem.config.cjs  # Start dev server
curl http://localhost:3000  # Test
```

## Deployment
- **Platform**: Cloudflare Pages
- **Production Branch**: main

## Not Yet Implemented
- Real photo assets (currently using placeholders)
- Actual project/portfolio content
- Real staff photos and bios
- Blog/Resources section
- CRM/email integration for contact form
- Analytics integration
- Google Maps embed on contact page
- PDF download for capabilities statement

## Recommended Next Steps
1. Replace image placeholders with real photos
2. Add actual team member names and photos
3. Integrate contact form with CRM or email service
4. Add Google Analytics / Tag Manager
5. Set up Cloudflare D1 for form submission storage
6. Add real project portfolio with photos and case studies
7. Implement blog/resources section
8. Connect to actual domain (keeleyelectrical.com)

## Last Updated
April 22, 2026
