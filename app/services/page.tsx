import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import HomeClient from "@/app/page-client"

export const metadata = {
  title: "Professional Services — TeamBrain AI Implementation & Process Optimisation",
  description:
    "Expert services to accelerate your TeamBrain implementation. From process mapping and SOP creation to AI workflow automation and governance frameworks. Transform captured knowledge into operational excellence.",
  keywords: [
    "TeamBrain services",
    "AI implementation services",
    "process mapping",
    "SOP creation",
    "workflow automation",
    "knowledge governance",
    "process optimisation",
    "business process improvement",
    "AI consulting",
    "digital transformation",
  ],
  openGraph: {
    title: "Professional Services — TeamBrain AI Implementation & Process Optimisation",
    description:
      "Expert services to accelerate your TeamBrain implementation. Transform captured knowledge into operational excellence with our proven four-phase approach.",
    url: "https://teambrain.bot/services",
    images: [
      {
        url: "/images/services-og-image.png",
        width: 1200,
        height: 630,
        alt: "TeamBrain Professional Services - AI Implementation & Process Optimisation",
      },
    ],
  },
  twitter: {
    title: "Professional Services — TeamBrain AI Implementation & Process Optimisation",
    description:
      "Expert services to accelerate your TeamBrain implementation. Transform captured knowledge into operational excellence.",
    images: ["/images/services-twitter-image.png"],
  },
  alternates: {
    canonical: "https://teambrain.bot/services",
  },
}

export default function Services() {
  return (
    <div className="min-h-screen">
      <HomeClient />
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Why TeamBrain?
            </Link>
            <Link href="/#use-cases" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Use Cases
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-brand-primary transition-colors">
              How It Works
            </Link>
            <Link href="/services" className="text-sm font-medium text-brand-primary">
              Services
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-brand-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <Link href="/#contact">
            <Button size="sm" className="hidden md:flex bg-brand-primary hover:bg-teal-600">
              Request Early Access
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-6 md:pb-9 bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-75">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(214, 234, 231, 0.9)" />
                <stop offset="100%" stopColor="rgba(186, 220, 216, 0.7)" />
              </linearGradient>
            </defs>
            {/* Connected nodes pattern */}
            <g>
              <circle cx="100" cy="150" r="4" fill="url(#nodeGradient)" />
              <circle cx="300" cy="100" r="3" fill="url(#nodeGradient)" />
              <circle cx="500" cy="200" r="5" fill="url(#nodeGradient)" />
              <circle cx="700" cy="120" r="4" fill="url(#nodeGradient)" />
              <circle cx="900" cy="180" r="3" fill="url(#nodeGradient)" />
              <line x1="100" y1="150" x2="300" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
              <line x1="300" y1="100" x2="500" y2="200" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
              <line x1="500" y1="200" x2="700" y2="120" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
              <line x1="700" y1="120" x2="900" y2="180" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Make captured knowledge operational
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-delay">
              From enablement to process mapping and SOPs — services that build on TeamBrain to deliver business
              outcomes fast.
            </p>

            <div className="mb-8">
              <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How we deliver value</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mb-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-brand-primary text-sm">Discover</h3>
                    <p className="text-xs text-gray-600">Map & Baseline</p>
                  </div>

                  <div className="hidden md:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-primary">
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mb-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-brand-primary text-sm">Design</h3>
                    <p className="text-xs text-gray-600">Standardise & Operationalise</p>
                  </div>

                  <div className="hidden md:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-primary">
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mb-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
                        <circle cx="12" cy="5" r="2" />
                        <path d="m12 7v4" />
                        <line x1="8" y1="16" x2="8" y2="16" />
                        <line x1="16" y1="16" x2="16" y2="16" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-brand-primary text-sm">Automate</h3>
                    <p className="text-xs text-gray-600">AI Workflow Automation</p>
                  </div>

                  <div className="hidden md:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-primary">
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mb-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-brand-primary text-sm">Govern</h3>
                    <p className="text-xs text-gray-600">Run, Assure & Improve</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              TeamBrain's services follow a proven four-phase approach that ensures your team captures knowledge,
              standardises processes, and automates work—while keeping everything accurate, secure, and continuously
              improving.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 pb-16 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            {/* Phase 1 */}
            <div className="relative mb-12 md:mb-16">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">Discover — Map & Baseline</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We start by uncovering how work actually happens today. Using Video Process Capture (VPC) and
                    workshops, we map existing workflows, identify knowledge sources, and baseline key metrics. You'll
                    know exactly where value is hidden and where TeamBrain can deliver the biggest payoff.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-brand-primary">
                    <h4 className="font-semibold text-gray-900 mb-2">What this unlocks:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• A clear inventory of your processes</li>
                      <li>• Process maps (BPMN-style) showing how work really flows</li>
                      <li>• A prioritised list of high-value opportunities for process optimisation</li>
                      <li>• Baselined process metrics to measure improvements</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-12 md:mb-16">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">Design — Standardise & Operationalise</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Next, we transform those insights into clear, usable playbooks. We co-design future-state workflows
                    and build the SOPs and templates your teams need. This step ensures consistency, compliance, and
                    faster process onboarding.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-brand-primary">
                    <h4 className="font-semibold text-gray-900 mb-2">What this unlocks:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Approved to-be process maps</li>
                      <li>• Standardised SOP and training aids</li>
                      <li>• A change and enablement plan to drive adoption</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
            </div>

            {/* Phase 3 */}
            <div className="relative mb-12 md:mb-16">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">Automate — AI Workflow Automation</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    With your knowledge captured and processes standardized, we deploy AI agents that eliminate workflow
                    bottlenecks for good. Smart agents handle process execution, decision routing, and task
                    orchestration—freeing your team from routine work while integrating flawlessly with your existing
                    tools.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-brand-primary">
                    <h4 className="font-semibold text-gray-900 mb-2">What this unlocks:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Ranked automation backlog and ROI model</li>
                      <li>• Implemented AI agent-driven workflows with monitoring dashboards</li>
                      <li>• Runbooks and training so your team stays in control</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
            </div>

            {/* Phase 4 */}
            <div className="relative mb-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">Govern — Run, Assure & Improve</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We ensure your AI-powered knowledge systems deliver lasting value through strategic governance. Our
                    approach keeps knowledge accurate and compliant while continuously identifying new automation
                    opportunities and proving measurable business impact.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-brand-primary">
                    <h4 className="font-semibold text-gray-900 mb-2">What this unlocks:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Knowledge governance framework with clear ownership and accountability</li>
                      <li>• Business impact dashboards tracking adoption, efficiency gains, and cost savings</li>
                      <li>• Continuous optimization pipeline with new automation opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-gradient-to-r from-brand-primary to-teal-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">The Result</h3>
              <p className="text-lg leading-relaxed">
                A smarter, faster, more productive team with lasting knowledge, standardised processes, and AI-powered
                automation—all governed to stay accurate, secure, and valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo className="text-white" />
              <p className="text-gray-400 mt-2">Unlock Knowledge. Unleash Productivity.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                      Why TeamBrain?
                    </Link>
                  </li>
                  <li>
                    <Link href="/#use-cases" className="text-gray-400 hover:text-white transition-colors">
                      Use Cases
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="mailto:hello@evidentia.ai" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
