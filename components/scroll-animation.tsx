"use client"

import { useEffect, useRef } from "react"

export function ScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Initialize the Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // Once the animation is triggered, we don't need to observe this element anymore
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    // Select all elements with the timeline-item class
    const timelineItems = document.querySelectorAll(".timeline-item")
    const featureCards = document.querySelectorAll(".feature-card")
    const useCaseCards = document.querySelectorAll(".use-case-card")

    // Observe each timeline item
    timelineItems.forEach((item) => {
      observerRef.current?.observe(item)
    })

    // Observe each feature card with a delay
    featureCards.forEach((card, index) => {
      setTimeout(() => {
        observerRef.current?.observe(card)
      }, index * 100)
    })

    // Observe each use case card with a delay
    useCaseCards.forEach((card, index) => {
      setTimeout(() => {
        observerRef.current?.observe(card)
      }, index * 100)
    })

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        timelineItems.forEach((item) => {
          observerRef.current?.unobserve(item)
        })
        featureCards.forEach((card) => {
          observerRef.current?.unobserve(card)
        })
        useCaseCards.forEach((card) => {
          observerRef.current?.unobserve(card)
        })
        observerRef.current.disconnect()
      }
    }
  }, [])

  return null
}
