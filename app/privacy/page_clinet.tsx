"use client"

import { useEffect } from "react"

export function PrivacyPageClient() {
  useEffect(() => {
    // Scroll to top when the privacy page loads
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return null
}
