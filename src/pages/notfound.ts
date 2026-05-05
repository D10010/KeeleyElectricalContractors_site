import { layout } from '../components/layout'

export function notFoundPage(): string {
  const body = `
<section class="section" style="text-align:center;padding:6rem 2rem;">
  <div class="container" style="max-width:600px;">
    <div class="not-found__num">404</div>
    <h1 class="h2" style="margin-bottom:1rem;">Page Not Found</h1>
    <p style="font-size:1.1rem;color:var(--ink-2);margin-bottom:2rem;">Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
      <a href="/" class="btn btn--primary">Back to Home</a>
      <a href="/services" class="btn btn--secondary">View Services</a>
      <a href="/contact" class="btn btn--secondary">Contact Us</a>
    </div>
  </div>
</section>
`
  return layout({
    title: '404 Page Not Found | Keeley Electrical Contractors',
    description: 'The page you are looking for does not exist. Return to the Keeley Electrical Contractors homepage.',
    canonical: 'https://keeleyelectric.com/404'
  }, body)
}
