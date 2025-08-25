"use client"

import { useState } from "react"

const faqData = [
  {
    id: 1,
    question: "What is TeamBrain and how does it work?",
    answer:
      "TeamBrain is an AI-powered assistant built for product development teams. It's built for Microsoft Teams and connects to the tools you already use—like Confluence, Jira, and Azure DevOps—listens to your meetings, pulls context from your knowledge bases, and automatically creates agendas, captures decisions, and generates project artifacts. The result? Meetings that drive progress, knowledge that's never lost, and workflows that run smoothly without extra effort.",
  },
  {
    id: 2,
    question: "How is TeamBrain different from other AI tools?",
    answer:
      "Unlike generic AI assistants, TeamBrain is context-aware. It doesn't just transcribe meetings—it understands your product, your backlog, and your documentation. It proactively asks the right questions, ensures decisions are captured in real time, and creates accurate, actionable outputs tailored to your team's unique workflows.",
  },
  {
    id: 3,
    question: "Will TeamBrain fit into our current workflow?",
    answer:
      "Yes. TeamBrain is designed to work where your team already works. It integrates seamlessly with Microsoft Teams for collaboration and connects to Confluence, Jira, and Azure DevOps to use and update your existing knowledge. There's no need to change how you operate—TeamBrain enhances your processes without adding overhead.",
  },
  {
    id: 4,
    question: "How secure is TeamBrain?",
    answer:
      "Security is our top priority. TeamBrain only accesses data you authorize, encrypts all data in transit and at rest, and complies with enterprise-grade security standards. You have full control over what information TeamBrain can access and can revoke permissions at any time.",
  },
  {
    id: 5,
    question: "How long does it take to get started?",
    answer:
      "Setup takes minutes. Connect TeamBrain to your Microsoft Teams environment, link your Confluence, Jira, and Azure DevOps accounts, and it's ready to start adding value right away. Most teams see measurable improvements in meeting efficiency and knowledge sharing within the first week.",
  },
  {
    id: 6,
    question: "What ROI can we expect?",
    answer:
      "Teams using TeamBrain typically save hours each week by reducing meeting prep time, eliminating manual note-taking, and automating artifact creation. More importantly, critical knowledge stays captured and accessible, reducing bottlenecks and accelerating project delivery.",
  },
]

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TeamBrain and how it transforms your team's productivity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex items-center justify-between p-6 w-full text-left cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-brand-primary transform transition-transform ${
                      openItem === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItem === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
