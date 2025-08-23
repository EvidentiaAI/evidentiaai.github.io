import { Button } from "@/components/ui/button"
import { MessageSquare, FileText } from "lucide-react"
import Link from "next/link"
import HomeClient from "./page-client"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { FeaturesSectionClient } from "@/components/features-section-client" // Import the new client component
import { ContactForm } from "@/components/contact-form"
import { HLSVideoPlayer } from "@/components/hls-video-player"

export default function Home() {
  return (
    <div className="min-h-screen" id="top">
      {" "}
      {/* Added id="top" for smooth scrolling to top */}
      <HomeClient />
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#top" className="text-sm font-medium hover:text-brand-primary transition-colors">
              {" "}
              {/* Updated href from "#" to "#top" for smooth scrolling */}
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Why TeamBrain?
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Use Cases
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-brand-primary transition-colors">
              How It Works
            </Link>
          </nav>
          <Link href="#contact">
            <Button size="sm" className="hidden md:flex bg-brand-primary hover:bg-teal-600">
              Join Waitlist
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            id="mobile-menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-teal-50 opacity-70"></div>
          <div className="network-animation absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Supercharge Your Team with TeamBrain
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
              AI-powered meeting optimization, knowledge capture, and workflow automation for product development teams.
            </p>
            <div className="mb-8 text-center">
              <p className="text-lg font-medium mb-6">
                Built for Microsoft Teams.<br />
                Seamlessly integrates with Confluence, Jira, and Azure DevOps
              </p>
              <div className="flex items-center justify-center gap-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft-Teams-Symbol%20-2-rHESfDymve6RibneM8g1bAz6DP2aTE.png"
                  alt="Microsoft Teams logo"
                  className="h-12 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Confluence-Emblem_small-1y2tPigGp1aGDERpkmlQ8I3C5518L4.png"
                  alt="Confluence logo"
                  className="h-12 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jira_Logo%283%29-K8zC4Os0XcCzY1ibPXddfO8AwtAHjU.png"
                  alt="Jira logo"
                  className="h-12 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azure-DevOps-Logo-1-CzgeJXvu7RnelQjzPJPXpfTmC0pAMO.png"
                  alt="Azure DevOps logo"
                  className="h-12 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link href="#contact">
                <Button size="lg" className="bg-brand-primary hover:bg-teal-600">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              {/* HLS Video Player for M3U8 */}
              <HLSVideoPlayer
                src="/media/TeamBrain.m3u8"
                poster="/images/video-thumbnail.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play text-brand-primary"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section - Now a client component */}
      <FeaturesSectionClient />
      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Your Team</h2>
            <p className="text-xl text-gray-600">
              From sprint planning to cross-functional alignment, TeamBrain drives results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all use-case-card">
              <div className="h-48 bg-teal-100">
                <img
                  src="/images/sprint_planning.png"
                  alt="Team collaborating on sprint planning with sticky notes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Development</h3>
                <p className="text-gray-600 mb-4">Streamline sprint planning and automate PRD creation.</p>
                <div className="text-sm text-gray-500 border-t pt-4 mt-2">
                  <p className="italic">
                    "TeamBrain reduced our sprint planning time by 40% and improved our documentation quality."
                  </p>
                  <p className="font-medium mt-2">- Sarah K., Product Manager</p>
                </div>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all use-case-card">
              <div className="h-48 bg-teal-100">
                <img
                  src="/images/dev_team.png"
                  alt="Engineering team collaborating on code"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Engineering</h3>
                <p className="text-gray-600 mb-4">Turn discussions into Jira tickets and process diagrams.</p>
                <div className="text-sm text-gray-500 border-t pt-4 mt-2">
                  <p className="italic">
                    "Our team loves how TeamBrain automatically creates tickets from our discussions, saving hours of
                    manual work."
                  </p>
                  <p className="font-medium mt-2">- Alex M., Engineering Lead</p>
                </div>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all use-case-card">
              <div className="h-48 bg-teal-100">
                <img
                  src="/images/cross_functional.png"
                  alt="Cross-functional teams collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cross-Functional Teams</h3>
                <p className="text-gray-600 mb-4">Centralize knowledge for better alignment.</p>
                <div className="text-sm text-gray-500 border-t pt-4 mt-2">
                  <p className="italic">
                    "TeamBrain has become our single source of truth, making cross-team collaboration seamless."
                  </p>
                  <p className="font-medium mt-2">- Jamie L., Director of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The TeamBrain Flow: From Chaos to Clarity</h2>
            <p className="text-xl text-gray-600">
              Turn team interactions into a powerhouse of productivity with AI that works for you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-16 md:space-y-24">
              {/* Step 1 - Spark the Plan */}
              <div className="relative timeline-item">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-teal-500 to-brand-dark rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M9 11H1l6-6 6 6" />
                          <path d="M9 17l3 3 3-3" />
                          <path d="M22 18.5V2l-7.5 7.5L22 18.5z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Step 1</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Spark the Plan</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      TeamBrain's AI crafts precise agendas in seconds, pulling from your Confluence data to align with
                      your meeting's purpose—sprint planning, requirements gathering, or beyond. Start with focus, every
                      time.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative bg-gradient-to-br from-gray-200 to-teal-50 rounded-2xl p-8 shadow-lg">
                      <div className="absolute top-4 right-4 text-xs text-brand-primary font-medium bg-white px-2 py-1 rounded-full">
                        AI Processing...
                      </div>
                      <div className="space-y-4">
                        {/* Chaotic notes transforming */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <div className="bg-yellow-200 p-2 rounded text-xs transform -rotate-2">Random note</div>
                          <div className="bg-pink-200 p-2 rounded text-xs transform rotate-1">Another idea</div>
                          <div className="bg-green-200 p-2 rounded text-xs transform -rotate-1">Meeting point</div>
                        </div>
                        <div className="text-center text-2xl mb-4">↓</div>
                        {/* Clean agenda */}
                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-brand-primary">
                          <h4 className="font-semibold text-sm mb-2">Sprint Planning Agenda</h4>
                          <ul className="text-xs space-y-1 text-gray-600">
                            <li>• Review previous sprint outcomes</li>
                            <li>• Discuss user story priorities</li>
                            <li>• Estimate story points</li>
                            <li>• Define sprint goals</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Ignite the Conversation */}
              <div className="relative timeline-item">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-brand-primary to-brand-dark rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Step 2</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ignite the Conversation</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      TeamBrain joins your meeting, suggesting smart questions and capturing key moments like action
                      items and user stories in real time. Stay engaged while AI handles the details.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative bg-gradient-to-br from-teal-50 to-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="flex gap-4">
                        {/* Meeting participants */}
                        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <span className="text-xs font-medium">Team Meeting</span>
                          </div>
                          <div className="space-y-2 text-xs text-gray-600">
                            <p>"We need to prioritize the user authentication feature..."</p>
                            <p>"The API integration should be completed first..."</p>
                          </div>
                        </div>
                        {/* AI sidebar */}
                        <div className="w-48 bg-gradient-to-b from-brand-primary to-brand-dark rounded-lg p-3 text-white">
                          <div className="text-xs font-medium mb-2 flex items-center gap-1">
                            <div className="relative h-3 w-3">
                              <Image src="/images/logo.png" alt="TeamBrain Logo" fill className="object-contain" />
                            </div>
                            AI Assistant
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="bg-white/20 rounded p-2">
                              <div className="text-yellow-200 text-xs mb-1">💡 Suggestion</div>
                              "Should we define acceptance criteria for the auth feature?"
                            </div>
                            <div className="bg-white/20 rounded p-2">
                              <div className="text-green-200 text-xs mb-1">✅ Action Item</div>
                              "API integration - John (Due: Friday)"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Capture the Magic */}
              <div className="relative timeline-item">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-brand-primary to-teal-600 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Step 3</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Capture the Magic</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Post-meeting, TeamBrain turns discussions into polished Jira tickets, user stories, or process
                      diagrams, all organized in a Knowledge UI. Every idea is ready to roll.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative bg-gradient-to-br from-gray-200 to-teal-50 rounded-2xl p-8 shadow-lg">
                      <div className="space-y-4">
                        {/* Raw notes transforming */}
                        <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-600">
                          <div className="font-medium mb-1">Meeting Notes:</div>
                          <p>"Discussed user auth, API integration needed, John to handle by Friday..."</p>
                        </div>
                        <div className="text-center text-2xl">↓</div>
                        {/* Organized outputs */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-brand-primary">
                            <div className="text-xs font-medium text-brand-primary mb-1">JIRA Ticket</div>
                            <div className="text-xs font-semibold">AUTH-001</div>
                            <div className="text-xs text-gray-600">Implement user authentication</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-teal-500">
                            <div className="text-xs font-medium text-teal-600 mb-1">User Story</div>
                            <div className="text-xs text-gray-600">As a user, I want to securely log in...</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-brand-dark col-span-2">
                            <div className="text-xs font-medium text-brand-dark mb-1">Process Diagram</div>
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-4 h-4 bg-teal-100 rounded"></div>
                              <span>→</span>
                              <div className="w-4 h-4 bg-teal-200 rounded"></div>
                              <span>→</span>
                              <div className="w-4 h-4 bg-teal-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Unlock Your Knowledge */}
              <div className="relative timeline-item">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-brand-dark to-brand-primary rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                        <div className="relative h-6 w-6">
                          <Image src="/images/logo.png" alt="TeamBrain Logo" fill className="object-contain" />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Step 4</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlock Your Knowledge</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Ask TeamBrain's conversational bot anything about past meetings or your knowledge base, anytime.
                      Get instant, clear answers to keep your team moving forward.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative bg-gradient-to-br from-teal-50 to-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-brand-primary to-brand-dark p-3 text-white">
                          <div className="flex items-center gap-2">
                            <div className="relative h-4 w-4">
                              <Image src="/images/logo.png" alt="TeamBrain Logo" fill className="object-contain" />
                            </div>
                            <span className="text-sm font-medium">TeamBrain Assistant</span>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="bg-gray-100 rounded-lg p-3 text-sm">
                            <div className="font-medium text-gray-800 mb-1">You:</div>
                            <div className="text-gray-600">
                              "What were the action items from last week's sprint planning?"
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-teal-100 to-gray-200 rounded-lg p-3 text-sm">
                            <div className="font-medium text-brand-dark mb-1 flex items-center gap-1">
                              <div className="relative h-3 w-3">
                                <Image src="/images/logo.png" alt="TeamBrain Logo" fill className="object-contain" />
                              </div>
                              TeamBrain:
                            </div>
                            <div className="text-gray-700">
                              "From the March 15th sprint planning meeting, here are the action items:
                              <br />• John: Complete API integration (Due: March 22)
                              <br />• Sarah: Design user auth flow (Due: March 20)
                              <br />• Mike: Set up testing environment (Due: March 18)"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16 timeline-item">
              <div className="bg-gradient-to-r from-brand-primary to-brand-dark rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience the TeamBrain Flow?</h3>
                <p className="text-lg mb-8 opacity-90">Join our waitlist and make your meetings unstoppable.</p>
                <Link href="#contact">
                  <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 font-semibold">
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team?</h2>
            <p className="text-xl text-gray-600">Join the Waitlist or Book a Demo!</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
            <ContactForm />
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
                    <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                      Why TeamBrain?
                    </Link>
                  </li>
                  <li>
                    <Link href="#use-cases" className="text-gray-400 hover:text-white transition-colors">
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
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
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
