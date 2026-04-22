import { Hono } from 'hono'
import { homePage } from './pages/home'
import { servicesPage } from './pages/services'
import { servicePage } from './pages/service'
import { capabilitiesPage } from './pages/capabilities'
import { aboutPage } from './pages/about'
import { contactPage } from './pages/contact'
import { notFoundPage } from './pages/notfound'
import { privacyPage } from './pages/privacy'
import { termsPage } from './pages/terms'
import { robotsTxt, sitemapXml } from './pages/robots'

const app = new Hono()

// Pages
app.get('/', (c) => c.html(homePage()))
app.get('/services', (c) => c.html(servicesPage()))
app.get('/services/', (c) => c.html(servicesPage()))
app.get('/services/:slug', (c) => c.html(servicePage(c.req.param('slug'))))
app.get('/capabilities', (c) => c.html(capabilitiesPage()))
app.get('/capabilities/', (c) => c.html(capabilitiesPage()))
app.get('/about', (c) => c.html(aboutPage()))
app.get('/about/', (c) => c.html(aboutPage()))
app.get('/contact', (c) => c.html(contactPage()))
app.get('/contact/', (c) => c.html(contactPage()))
app.get('/privacy', (c) => c.html(privacyPage()))
app.get('/privacy/', (c) => c.html(privacyPage()))
app.get('/terms', (c) => c.html(termsPage()))
app.get('/terms/', (c) => c.html(termsPage()))

// SEO files
app.get('/robots.txt', (c) => {
  c.header('Content-Type', 'text/plain')
  return c.body(robotsTxt())
})
app.get('/sitemap.xml', (c) => {
  c.header('Content-Type', 'application/xml')
  return c.body(sitemapXml())
})

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  try {
    const data = await c.req.json()
    // In production, this would send to email/CRM
    return c.json({ success: true, message: 'Inquiry received. We will respond within one business day.' })
  } catch (e) {
    return c.json({ success: false, message: 'Invalid submission.' }, 400)
  }
})

// 404 fallback
app.notFound((c) => c.html(notFoundPage(), 404))

export default app
