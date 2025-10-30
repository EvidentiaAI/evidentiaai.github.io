import { Logo } from "@/components/logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Use | TeamBrain",
  description:
    "Read TeamBrain's privacy policy and terms of use. Learn how we protect your data and the terms governing the use of our AI-powered knowledge management platform.",
  openGraph: {
    title: "Privacy Policy & Terms of Use | TeamBrain",
    description:
      "Read TeamBrain's privacy policy and terms of use. Learn how we protect your data and the terms governing the use of our AI-powered knowledge management platform.",
    url: "https://teambrain.bot/privacy",
    siteName: "TeamBrain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Terms of Use | TeamBrain",
    description:
      "Read TeamBrain's privacy policy and terms of use. Learn how we protect your data and the terms governing the use of our AI-powered knowledge management platform.",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link href="/">
            <Button size="sm" variant="outline">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Privacy Policy & Terms of Use</h1>
          <p className="text-gray-600 text-center mb-12">Last updated: {new Date().toLocaleDateString("en-GB")}</p>

          {/* Privacy Policy Section */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-brand-primary">Privacy Policy</h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
                <p className="leading-relaxed">
                  TeamBrain ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you use our AI-powered knowledge
                  management platform and services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Information We Collect</h3>
                <p className="leading-relaxed mb-3">We collect information that you provide directly to us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Information:</strong> Name, email address, company name, and other registration
                    details
                  </li>
                  <li>
                    <strong>Meeting Data:</strong> Audio recordings, transcripts, and content from meetings where
                    TeamBrain is active
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you interact with our platform, including
                    features used and actions taken
                  </li>
                  <li>
                    <strong>Integration Data:</strong> Information from connected services like Microsoft Teams,
                    Confluence, Jira, and Azure DevOps
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type, device information, and log data
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. How We Use Your Information</h3>
                <p className="leading-relaxed mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and analyse meeting content to generate insights, documents, and artefacts</li>
                  <li>Personalise your experience and provide relevant recommendations</li>
                  <li>Communicate with you about updates, features, and support</li>
                  <li>Ensure security and prevent fraud or abuse</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Conduct research and development to improve our AI capabilities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Data Storage and Security</h3>
                <p className="leading-relaxed mb-3">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data encryption in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centres with physical and digital safeguards</li>
                  <li>Employee training on data protection and privacy practices</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Your data is stored on secure servers and retained only as long as necessary to provide our services
                  or as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Data Sharing and Disclosure</h3>
                <p className="leading-relaxed mb-3">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who assist in providing our services (e.g.,
                    cloud hosting, analytics)
                  </li>
                  <li>
                    <strong>Integration Partners:</strong> Services you've connected to TeamBrain (Microsoft Teams,
                    Confluence, etc.)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, court order, or government request
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </li>
                </ul>
                <p className="leading-relaxed mt-3">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Your Rights and Choices</h3>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of marketing communications</li>
                  <li>Restrict or object to certain data processing activities</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@evidentia.ai" className="text-brand-primary hover:underline">
                    privacy@evidentia.ai
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">7. Cookies and Tracking Technologies</h3>
                <p className="leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyse usage patterns, and
                  improve our services. You can control cookie preferences through your browser settings, though some
                  features may not function properly if cookies are disabled.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">8. International Data Transfers</h3>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place to protect your data in accordance with applicable data protection
                  laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">9. Changes to This Privacy Policy</h3>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by
                  email or through our platform. Your continued use of TeamBrain after changes become effective
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Use Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-6 text-brand-primary">Terms of Use</h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
                <p className="leading-relaxed">
                  By accessing or using TeamBrain, you agree to be bound by these Terms of Use and all applicable laws
                  and regulations. If you do not agree with any of these terms, you are prohibited from using our
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Use Licence</h3>
                <p className="leading-relaxed mb-3">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable
                  licence to access and use TeamBrain for your internal business purposes. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify, copy, or create derivative works of our platform</li>
                  <li>Reverse engineer, decompile, or disassemble any part of our services</li>
                  <li>Remove or alter any proprietary notices or labels</li>
                  <li>Use our services for any illegal or unauthorised purpose</li>
                  <li>Interfere with or disrupt the integrity or performance of our platform</li>
                  <li>Attempt to gain unauthorised access to our systems or networks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. User Accounts</h3>
                <p className="leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities that occur under your account. You agree to notify us immediately of any unauthorised use
                  of your account. We reserve the right to suspend or terminate accounts that violate these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. User Content</h3>
                <p className="leading-relaxed mb-3">
                  You retain ownership of all content you submit to TeamBrain. By submitting content, you grant us a
                  worldwide, royalty-free licence to use, process, and analyse that content to provide and improve our
                  services. You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You own or have the necessary rights to the content you submit</li>
                  <li>Your content does not violate any third-party rights or applicable laws</li>
                  <li>Your content does not contain malicious code or harmful materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Intellectual Property</h3>
                <p className="leading-relaxed">
                  TeamBrain and its original content, features, and functionality are owned by us and are protected by
                  international copyright, trademark, patent, trade secret, and other intellectual property laws. Our
                  trademarks and trade dress may not be used without our prior written consent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Payment and Billing</h3>
                <p className="leading-relaxed">
                  If you purchase a paid subscription, you agree to pay all fees according to the pricing and payment
                  terms in effect at the time. Fees are non-refundable except as required by law or as explicitly stated
                  in our refund policy. We reserve the right to change our pricing with reasonable notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">7. Service Availability</h3>
                <p className="leading-relaxed">
                  We strive to provide reliable service but do not guarantee uninterrupted or error-free access to
                  TeamBrain. We may modify, suspend, or discontinue any aspect of our services at any time with or
                  without notice. We are not liable for any modification, suspension, or discontinuation of services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">8. Disclaimer of Warranties</h3>
                <p className="leading-relaxed">
                  TeamBrain is provided "as is" and "as available" without warranties of any kind, either express or
                  implied. We disclaim all warranties, including but not limited to merchantability, fitness for a
                  particular purpose, and non-infringement. We do not warrant that our services will meet your
                  requirements or that they will be secure, timely, or error-free.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">9. Limitation of Liability</h3>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
                  indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of
                  TeamBrain.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">10. Indemnification</h3>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless TeamBrain and its officers, directors, employees,
                  and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our
                  services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">11. Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales,
                  without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of
                  TeamBrain shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">12. Changes to Terms</h3>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by
                  email or through our platform. Your continued use of TeamBrain after changes become effective
                  constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">13. Contact Information</h3>
                <p className="leading-relaxed">
                  If you have any questions about these Terms or our Privacy Policy, please contact us at:
                </p>
                <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">TeamBrain</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:hello@evidentia.ai" className="text-brand-primary hover:underline">
                      hello@evidentia.ai
                    </a>
                  </p>     
                </div>
              </div>
            </div>
          </section>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <Link href="/">
              <Button size="lg" className="bg-brand-primary hover:bg-teal-600">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Logo className="text-white mx-auto mb-4" />
          <p className="text-gray-400">© {new Date().getFullYear()} TeamBrain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
