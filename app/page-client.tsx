"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Logo } from "@/components/logo"

export default function HomeClient() {
  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu")
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden")
    }
  }

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  // Initialize mobile menu button
  useEffect(() => {
    const mobileMenuButton = document.getElementById("mobile-menu-button")
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", toggleMobileMenu)
    }
    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener("click", toggleMobileMenu)
      }
    }
  }, [])

  return (
    <>
      <ScrollAnimation />
      {/* Mobile menu */}
      <div id="mobile-menu" className="fixed inset-0 bg-white z-50 hidden">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
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
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
        <nav className="container mx-auto px-4 py-8">
          <ul className="space-y-6">
            <li>
              <Link href="#" className="text-xl font-medium block py-2" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" className="text-xl font-medium block py-2" onClick={toggleMobileMenu}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#use-cases" className="text-xl font-medium block py-2" onClick={toggleMobileMenu}>
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-xl font-medium block py-2" onClick={toggleMobileMenu}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-xl font-medium block py-2" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <Button className="w-full bg-brand-primary hover:bg-teal-600">Request a Demo</Button>
          </div>
        </nav>
      </div>
    </>
  )
}
