"use client"

import { Calendar, MessageSquare, FileText } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function FeaturesSectionClient() {
  const featureCards = [
    {
      id: "smart-meeting-agendas",
      icon: <Calendar className="h-6 w-6 text-brand-primary" />,
      title: "Smart Meeting Agendas",
      description:
        "AI generates tailored agendas for requirements gathering, sprint planning, and more, pulling from your Confluence knowledge base.",
      imageSrc: "/images/meeting_agenda_3.png",
      imageAlt:
        "TeamBrain meeting agenda interface showing an AI-generated sprint planning agenda with detailed objectives and tasks",
      imageCaption: null,
    },
    {
      id: "real-time-insights",
      icon: <MessageSquare className="h-6 w-6 text-brand-primary" />,
      title: "Real-Time Insights",
      description: "TeamBrain listens to meetings, suggests questions, and captures answers in real time.",
      imageSrc: "/images/meeting_bot.png",
      imageAlt:
        "TeamBrain real-time insights interface showing AI-powered meeting assistance with structured questioning for Customer360 dashboard requirements gathering",
      imageCaption: null,
    },
    {
      id: "knowledge-ui",
      icon: <FileText className="h-6 w-6 text-brand-primary" />,
      title: "Knowledge UI",
      description: "Access meeting transcripts, user stories, and artifacts in a centralized hub.",
      imageSrc: "/images/knowledge_ui_2.png",
      imageAlt:
        "TeamBrain knowledge UI interface showing calls, PII data redaction requirements, product documents, user stories, and meeting transcripts in a centralized dashboard",
      imageCaption: null,
    },
    {
      id: "conversational-bot",
      icon: (
        <div className="relative h-6 w-6">
          <Image src="/images/logo.png" alt="TeamBrain Logo" fill className="object-contain" />
        </div>
      ),
      title: "Conversational Bot",
      description: "Query your team's knowledge base anytime with an AI-powered chat interface.",
      imageSrc: "/images/conv_bot.png",
      // Updated alt text to describe the Assist chat interface with meeting summaries
      imageAlt:
        "Assist conversational bot interface showing an AI-powered chat providing detailed meeting summaries and updates on IDMP standard compliance discussions",
      imageCaption: null,
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why TeamBrain?</h2>
          <p className="text-xl text-gray-600">Empower your team with AI-driven productivity tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className={cn(
                "bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 ease-in-out",
                "hover:shadow-2xl hover:border-teal-100 hover:-translate-y-2 hover:z-10 feature-card group",
              )}
            >
              <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>

              {card.imageSrc && (
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-[40rem] group-hover:opacity-100 group-hover:mt-4">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={card.imageSrc || "/placeholder.svg"}
                      alt={card.imageAlt || "Feature image"}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
