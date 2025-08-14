"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    message: "",
  })
  const [emailError, setEmailError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear email error when user starts typing in email field
    if (name === "email" && emailError) {
      setEmailError("")
    }

    // Clear submit status when user makes changes
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email on submit
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // HubSpot Forms API endpoint
      const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/144751094/621a0d95-b518-46fb-bf11-4200606d8d77`

      const fields = [
        { name: "firstname", value: formData.name },
        { name: "email", value: formData.email },
      ]

      // Add optional fields only if they have values
      if (formData.company.trim()) {
        fields.push({ name: "company", value: formData.company })
      }

      if (formData.companySize) {
        fields.push({ name: "company_size", value: formData.companySize })
      }

      if (formData.message.trim()) {
        fields.push({ name: "customer_join_waitlist_note", value: formData.message })
      }

      // Format data for HubSpot API
      const hubspotData = {
        fields,
        context: {
          pageUri: window.location.href,
          pageName: "TeamBrain Waitlist",
        },
      }

      console.log("Submitting to HubSpot:", hubspotData)

      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotData),
      })

      console.log("HubSpot response status:", response.status)
      const responseText = await response.text()
      console.log("HubSpot response:", responseText)

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          companySize: "",
          message: "",
        })
      } else {
        throw new Error(`Failed to submit form: ${response.status} - ${responseText}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="text-green-800 text-sm">
            Thank you! Your request has been submitted successfully. We'll be in touch soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800 text-sm">
            Sorry, there was an error submitting your request. Please try again or contact us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
            required
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company *
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="company-size" className="block text-sm font-medium text-gray-700 mb-1">
          Company Size
        </label>
        <select
          id="company-size"
          name="companySize"
          value={formData.companySize}
          onChange={handleInputChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-1000">201-1000 employees</option>
          <option value="1000+">1000+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>

      <Button type="submit" className="w-full bg-brand-primary hover:bg-teal-600" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}
