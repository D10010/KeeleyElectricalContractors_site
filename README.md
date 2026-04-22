# Keeley Electrical Contractors — Website

## Project Overview
- **Name**: Keeley Electrical Contractors, Inc.
- **Goal**: Lead intake and credibility infrastructure for a Maine-based commercial/industrial electrical contractor
- **Tagline**: Electrical · Site · Utility
- **Founded**: 1978 | **Phone**: (207) 797-3772 | **Email**: info@keeleyelectrical.com
- **Location**: Portland, ME | **Licensed**: ME · NH · MA

## Completed Features (Phase 1)

### Pages
| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero, services overview, stats, certs, process, CTA |
| Services | `/services` | Service index — 3 category cards with scope lists |
| Electrical | `/services/electrical` | Individual service detail page |
| Site Work | `/services/site-work` | Individual service detail page |
| Utility | `/services/utility` | Individual service detail page |
| Capabilities | `/capabilities` | Licensing, certifications, insurance, bonding, territory |
| About | `/about` | History, values, team, field photos |
| Contact | `/contact` | Multi-step intake form with progress bar, sidebar |
| 404 | any invalid path | Page not found with nav links |
| Privacy Policy | `/privacy` | GDPR/CCPA privacy policy |
| Terms & Conditions | `/terms` | Terms with workmanship guarantee callout |

### Global Components
- **Emergency Bar**: Red 24/7 bar with phone number
- **Navigation**: Sticky dark nav, 58px height, green accent border, mobile hamburger
- **Footer**: 4-column grid with full NAP, service territory, legal links
- **Scroll-to-Top**: Appears on scroll

### SEO
- Unique `<title>` and `<meta description>` per page
- JSON-LD `LocalBusiness` schema on Home and Contact
- JSON-LD `BreadcrumbList` on all interior pages
- `<link rel="canonical">` on every page
- `robots.txt` at `/robots.txt`
- `sitemap.xml` at `/sitemap.xml`
- Consistent NAP in footer on every page

### Contact Form Features
- 3-step wizard: Contact Info → Project Details → Review & Submit
- Live progress bar (% completion)
- Green checkmark validation on required fields
- Service type checkbox selection (Electrical, Site Work, Utility)
- Project size selector (Small <$25K / Medium+ $25K+)
- Referral source multi-select with conditional detail field
- Review summary before submission
- Thank-you state with 3-step next-steps sequence

### Design Tokens (exact values from wireframes)
```css
--ink:       #141414   /* primary text, nav background */
--ink-2:     #3a3a3a   /* secondary text */
--ink-3:     #6b6b6b   /* muted text, labels */
--rule:      #d8d5cf   /* borders, dividers */
--surface:   #f7f6f3   /* light section backgrounds */
--white:     #ffffff
--bg:        #eeece7   /* page background */
--accent:    #30AE67   /* green — CTAs, active states */
--accent-2:  #0660B6   /* blue — secondary CTAs, phone icons */
--emergency: #c0392b   /* red — emergency bar only */
```

### Typography
- **Headings**: Barlow Condensed (400, 600, 700, 800) — Google Fonts
- **Body**: Barlow (300, 400, 500, 600) — Google Fonts

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Build**: Vite + @hono/vite-build
- **Platform**: Cloudflare Pages
- **Frontend**: Vanilla JS, CSS custom properties, Font Awesome 6
- **No frameworks**: No React/Vue/Tailwind — clean semantic HTML + CSS

## URLs
- **Preview**: (sandbox URL active during development)
- **Production**: To be deployed to Cloudflare Pages

## Not Yet Implemented (Phase 2)
- Portfolio / Projects gallery
- Location page
- Blog / Resources
- Equipment page
- Careers page
- Booking page
- Service Index (detailed electrical sub-services)
- Products / Rates
- Social Hub
- Real project photos (currently using placeholders)
- Real team photos and names
- License numbers in Capabilities
- Google Maps embed on Contact page
- File upload on Contact form

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: Development
- **Build**: `npm run build` → `dist/`
- **Last Updated**: April 2026
