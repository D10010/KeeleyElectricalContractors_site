# Keeley Electrical Contractors — Website

## Project Overview
- **Name:** Keeley Electrical Contractors, Inc.
- **Goal:** Professional commercial/industrial contractor website serving as lead intake and credibility infrastructure
- **Tagline:** Electrical · Site · Utility
- **Founded:** 1978 · Family-owned, third generation
- **Location:** Portland, ME · Licensed in ME, NH, MA

## URLs
- **Sandbox:** https://3000-i3tfead6cuphbcu52newi-2e1b9533.sandbox.novita.ai
- **Phone:** (207) 797-3772
- **Email:** info@keeleyelectrical.com

## Completed Features (Phase 1)

### Pages
| Page | URL | Status |
|------|-----|--------|
| Home | `/` | ✅ Complete |
| Services Index | `/services` | ✅ Complete |
| Electrical Service | `/services/electrical` | ✅ Complete |
| Site Work Service | `/services/site-work` | ✅ Complete |
| Utility Service | `/services/utility` | ✅ Complete |
| Capabilities | `/capabilities` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| 404 | (any unknown URL) | ✅ Complete |
| Privacy Policy | `/privacy` | ✅ Complete |
| Terms & Conditions | `/terms` | ✅ Complete |

### SEO
| Feature | Status |
|---------|--------|
| Unique `<title>` per page | ✅ |
| Unique `<meta description>` per page | ✅ |
| One `<h1>` per page | ✅ |
| `<link rel="canonical">` | ✅ |
| JSON-LD LocalBusiness (Home + Contact) | ✅ |
| JSON-LD BreadcrumbList (interior pages) | ✅ |
| NAP in footer (every page) | ✅ |
| `robots.txt` | ✅ |
| `sitemap.xml` | ✅ |

### Global Components
- **Emergency Bar:** Red bar with 24/7 service notice + phone number
- **Navigation:** Sticky dark nav (58px) with green accent border, responsive hamburger menu
- **Footer:** 4-column grid with full NAP, license states, privacy/terms links
- **Scroll-to-top button**

### Contact Form Features
- 3-step multi-step form with progress bar
- Step 1: Service type selection (Electrical / Site Work / Utility) with conditional sub-services
- Step 1: Project size selector (Small / Medium+)
- Step 1: Utility-specific education blocks (CMP CIAC, Portland Water District)
- Step 2: Contact fields with live validation (green checkmarks)
- Step 3: Project details (address, state, timeline, GC involvement, contract type, description, financing)
- Step 3: Referral source tracking (multi-select with conditional detail)
- Step 3: Terms & Conditions checkbox
- Thank-you page with 3-step next-steps sequence
- Sidebar: Why Keeley trust signals, phone, email, service territory, emergency CTA

### Design Tokens
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

### Fonts
- **Heading:** Barlow Condensed (400, 600, 700, 800)
- **Body:** Barlow (300, 400, 500, 600)

## Tech Stack
- **Framework:** Hono (TypeScript)
- **Build:** Vite + @hono/vite-build
- **Deployment Target:** Cloudflare Pages
- **Frontend:** Vanilla CSS + JS, Google Fonts CDN, Font Awesome CDN
- **No frameworks/libraries** beyond Hono

## Features Not Yet Implemented (Phase 2)
- Portfolio / Projects showcase
- Blog / Resources
- Careers page
- Equipment page
- Booking system
- Location page with Google Maps integration
- E-commerce / Products & Rates
- Social Hub
- Real images (currently using placeholders)
- Google Analytics / Tag Manager integration
- Real contact form backend (email/CRM)

## Deployment
- **Platform:** Cloudflare Pages
- **Status:** ✅ Dev server running
- **Last Updated:** April 22, 2026
