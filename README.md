# Keeley Electrical Contractors Website

## Project Overview
- **Name**: Keeley Electrical Contractors, Inc.
- **Tagline**: Electrical - Site - Utility
- **Goal**: Lead-generation website for a commercial/industrial electrical contractor based in Portland, ME
- **Brand**: Family-owned since 1978, third generation, licensed in ME, NH, MA
- **Address**: 18 Caddie Ln, Portland, ME 04103

## URLs
- **Production**: Cloudflare Pages (main branch)
- **GitHub**: https://github.com/D10010/KeeleyElectricalContractors_site

## Pages

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Complete |
| Services Index | `/services` | Complete |
| Electrical (detail) | `/services/electrical` | Complete |
| Site Work (detail) | `/services/site-work` | Complete |
| Utility (detail) | `/services/utility` | Complete |
| Capabilities | `/capabilities` | Complete |
| About | `/about` | Complete |
| Careers | `/careers` | Complete |
| Contact | `/contact` | Complete |
| 404 | (any invalid route) | Complete |
| Privacy Policy | `/privacy` | Complete |
| Terms & Conditions | `/terms` | Complete |
| robots.txt | `/robots.txt` | Complete |
| sitemap.xml | `/sitemap.xml` | Complete |

## Global Components
- **Emergency Bar**: Red banner with 24/7 service and phone number
- **Navigation**: Sticky dark nav with logo, links, phone, green "Get a Quote" CTA, mobile hamburger drawer
- **Footer**: Dark 4-column grid (Brand/NAP, Services, Company, Contact) with address linked to Google Maps
- **Scroll-to-top**: Green floating button appears after 400px scroll
- **Section Reveals**: IntersectionObserver fade-in animations for below-fold content

## Contact Page
- Multi-step form with 3 sections (Service Type > Your Info > Project Details)
- Progress bar, conditional sub-service checkboxes, project size selector
- Validation with check-mark icons, referral source with "Other" reveal
- Thank-you page with next steps
- Sidebar: "Why Keeley" trust signals, phone, email, address, territory pills
- API endpoint at `POST /api/contact`

## SEO
- Unique `<title>` and `<meta description>` per page
- Single `<h1>` per page, canonical links
- JSON-LD: `LocalBusiness` (with full address) on Home and Contact, `BreadcrumbList` on interior pages
- NAP consistent in footer, `robots.txt` and `sitemap.xml` at root

## Design System
- **Colors**: `--ink:#141414`, `--accent:#30AE67` (green), `--accent-2:#0660B6` (blue), `--emergency:#c0392b`
- **Fonts**: Barlow Condensed (headings), Barlow (body) via Google Fonts
- **Icons**: Font Awesome 6.5
- **Responsive**: 3 breakpoints (1024px, 768px, 480px)

## Tech Stack
- **Framework**: Hono (edge-first web framework)
- **Build**: Vite + @hono/vite-cloudflare-pages
- **Runtime**: Cloudflare Workers / Pages
- **CSS**: Custom design system with CSS variables
- **JS**: Vanilla JS (form logic, mobile nav, scroll-to-top, scroll reveals, hero video autoplay)

## Project Structure
```
.gitignore
package.json
package-lock.json
tsconfig.json
vite.config.ts
wrangler.jsonc
README.md
src/
  index.tsx                # Hono router, API routes, page rendering
  components/
    layout.ts              # Shared layout: nav, footer, emergency bar, mobile drawer
  pages/
    index.ts               # Page export barrel
    home.ts                # Home page (hero with video background, services, about)
    services.ts            # Services index page
    service.ts             # Service detail template (electrical, site-work, utility)
    capabilities.ts        # Capabilities, certifications, insurance, territory
    about.ts               # About page (history, values, team)
    careers.ts             # Careers page (benefits, open positions)
    contact.ts             # Contact page (multi-step form + sidebar)
    notfound.ts            # 404 page
    privacy.ts             # Privacy policy
    terms.ts               # Terms & conditions
    robots.ts              # robots.txt and sitemap.xml generators
public/
  _routes.json             # Cloudflare Pages routing config
  favicon.png              # Favicon (PNG)
  favicon.svg              # Favicon (SVG)
  static/
    styles.css             # Complete design system CSS (~680 lines)
    app.js                 # Client-side JS (form, nav, scroll, video autoplay)
    logo-full.png          # Keeley logo
    hero-bg.mp4            # Hero background video (1080p, 2.9 MB, 8s loop)
    hero-poster.jpg        # Hero video poster/fallback image (346 KB)
```

## Development
```bash
npm run dev                # Vite dev server with HMR
npm run build              # Build for production (outputs to dist/)
wrangler pages dev dist    # Preview production build locally
```

## Deployment
- **Platform**: Cloudflare Pages
- **Production Branch**: main
```bash
npm run build
wrangler pages deploy dist --project-name <project-name>
```

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
7. Connect to actual domain (keeleyelectric.com)

## Last Updated
April 26, 2026
