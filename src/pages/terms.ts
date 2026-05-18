import { layout } from '../components/layout'

export function termsPage(): string {
  const body = `
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">Terms &amp; Conditions</span>
    </nav>
    <h1 class="page-header__title">Terms &amp; Conditions</h1>
    <p class="page-header__desc">Last updated: April 22, 2026</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="legal-layout">
      <div class="legal-content prose">
        <h2 id="estimates">Estimate &amp; Booking Requests</h2>
        <p>All estimates provided by Keeley Electrical Contractors, Inc. are valid for 30 days from the date of issue unless otherwise stated in writing. Estimates are based on the information provided at the time of the request and may be subject to change if project conditions differ from what was described.</p>
        <p>Submitting a project inquiry or estimate request through our website does not constitute a binding contract. A formal agreement is required before any work commences.</p>

        <h2 id="workmanship">Workmanship Guarantee</h2>
        <div class="callout-box">
          <div class="callout-box__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
          <div>
            <h3>Our Commitment to Quality</h3>
            <p>Keeley Electrical Contractors stands behind our work. All electrical installations, site work, and utility projects are performed in accordance with applicable codes, manufacturer specifications, and industry best practices. We are committed to resolving any workmanship issues promptly and professionally.</p>
            <p>Specific warranty terms are included in individual project contracts and may vary based on scope, materials, and client requirements.</p>
          </div>
        </div>

        <h2 id="liability">Limitation of Liability</h2>
        <p>Keeley Electrical Contractors, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of this website or the services described herein.</p>
        <p>Our total liability for any claim arising from our services shall not exceed the amount paid by the client for the specific services giving rise to the claim.</p>
        <p>This limitation of liability applies to the fullest extent permitted by law and survives the termination of any agreement between the parties.</p>

        <h2 id="governing-law">Governing Law</h2>
        <p>These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the State of Maine, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Cumberland County, Maine.</p>

        <h2 id="website-use">Website Use</h2>
        <p>The content on this website is provided for informational purposes only. While we strive to keep the information current and accurate, Keeley Electrical Contractors makes no warranties or representations about the completeness, accuracy, or suitability of the information contained on this website.</p>

        <h2 id="changes">Changes to These Terms</h2>
        <p>We reserve the right to update these Terms &amp; Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after any modifications constitutes acceptance of the revised terms.</p>

        <h2 id="contact-terms">Contact Us</h2>
        <p>If you have questions about these Terms &amp; Conditions, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@keeleyelectric.com">info@keeleyelectric.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+12077973772">(207) 797-3772</a></li>
          <li><strong>Mail:</strong> Keeley Electrical Contractors, Inc. &middot; Portland, ME</li>
        </ul>
      </div>

      <aside class="legal-sidebar">
        <div class="sidebar-card">
          <h3 class="sidebar-card__title">On This Page</h3>
          <nav class="legal-toc">
            <a href="#estimates">Estimate &amp; Booking Requests</a>
            <a href="#workmanship">Workmanship Guarantee</a>
            <a href="#liability">Limitation of Liability</a>
            <a href="#governing-law">Governing Law</a>
            <a href="#website-use">Website Use</a>
            <a href="#changes">Changes to These Terms</a>
            <a href="#contact-terms">Contact Us</a>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Terms & Conditions | Keeley Electrical Contractors',
    description: 'Terms and Conditions for Keeley Electrical Contractors, Inc. Includes workmanship guarantee, liability terms, and governing law.',
    canonical: 'https://keeleyelectric.com/terms',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Terms & Conditions', url: 'https://keeleyelectric.com/terms' }
    ]
  }, body)
}
