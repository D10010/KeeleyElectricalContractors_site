import { layout } from '../components/layout'

export function privacyPage(): string {
  const body = `
<section class="page-header page-header--blue">
  <div class="container">
    <h1 class="page-header__title">Privacy Policy</h1>
    <p class="page-header__desc">Last updated: April 22, 2026</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="legal-layout">
      <div class="legal-content prose">
        <h2 id="info-collect">Information We Collect</h2>
        <p>When you visit our website or submit a project inquiry, we may collect the following information:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and company name provided through our contact forms.</li>
          <li><strong>Project Information:</strong> Details about your project including location, scope, timeline, and budget range.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.</li>
          <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers collected automatically through cookies and similar technologies.</li>
        </ul>

        <h2 id="how-use">How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To respond to your project inquiries and provide estimates</li>
          <li>To communicate about ongoing projects and services</li>
          <li>To improve our website and user experience</li>
          <li>To comply with legal obligations and protect our business interests</li>
          <li>To send relevant industry information if you opt in to communications</li>
        </ul>

        <h2 id="data-sharing">Data Sharing &amp; Third Parties</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> We use third-party tools for website analytics, email delivery, and form processing. These providers are bound by confidentiality agreements.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or governmental regulation.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
        </ul>

        <h2 id="cookies">Cookies &amp; Tracking</h2>
        <p>Our website uses cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.</p>

        <h2 id="data-security">Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

        <h2 id="your-rights">Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h2 id="contact-privacy">Contact Us</h2>
        <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
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
            <a href="#info-collect">Information We Collect</a>
            <a href="#how-use">How We Use Your Information</a>
            <a href="#data-sharing">Data Sharing &amp; Third Parties</a>
            <a href="#cookies">Cookies &amp; Tracking</a>
            <a href="#data-security">Data Security</a>
            <a href="#your-rights">Your Rights</a>
            <a href="#contact-privacy">Contact Us</a>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Privacy Policy | Keeley Electrical Contractors',
    description: 'Privacy Policy for Keeley Electrical Contractors, Inc. Learn how we collect, use, and protect your personal information.',
    canonical: 'https://keeleyelectric.com/privacy',

  }, body)
}
