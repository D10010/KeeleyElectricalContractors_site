export function robotsTxt(): string {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://keeleyelectrical.com/sitemap.xml
`
}

export function sitemapXml(): string {
  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services/electrical', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services/site-work', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services/utility', priority: '0.8', changefreq: 'monthly' },
    { loc: '/capabilities', priority: '0.7', changefreq: 'monthly' },
    { loc: '/about', priority: '0.7', changefreq: 'monthly' },
    { loc: '/careers', priority: '0.6', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.9', changefreq: 'monthly' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
  ]

  const today = new Date().toISOString().split('T')[0]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>https://keeleyelectrical.com${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
}
