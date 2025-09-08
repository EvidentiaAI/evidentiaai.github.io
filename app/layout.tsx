import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://teambrain.bot"), // Added metadataBase to resolve social media images properly
  title: "TeamBrain - AI-powered Meeting Optimisation & Knowledge Capture",
  description:
    "Transform your team's productivity with AI-powered knowledge capture, workflow automation, and meeting optimisation. Streamline processes, reduce meeting fatigue, and unlock institutional knowledge for product development teams.",
  keywords: [
    "AI knowledge capture",
    "meeting optimisation",
    "workflow automation",
    "team productivity",
    "process documentation",
    "institutional knowledge",
    "product development",
    "meeting efficiency",
    "knowledge management",
    "AI-powered workflows",
  ],
  authors: [{ name: "TeamBrain" }],
  creator: "TeamBrain",
  publisher: "TeamBrain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://teambrain.bot", // Updated domain from teambrain.ai to teambrain.bot
    siteName: "TeamBrain",
    title: "TeamBrain - AI-powered Meeting Optimisation & Knowledge Capture",
    description:
      "Transform your team's productivity with AI-powered knowledge capture, workflow automation, and meeting optimisation. Streamline processes and unlock institutional knowledge.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TeamBrain - AI-powered Knowledge Capture Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeamBrain - AI-powered Meeting Optimisation & Knowledge Capture",
    description:
      "Transform your team's productivity with AI-powered knowledge capture, workflow automation, and meeting optimisation.",
    images: ["/images/twitter-image.png"],
    creator: "@teambrain",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://teambrain.bot", // Updated canonical URL to teambrain.bot
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="msapplication-TileColor" content="#14b8a6" />
        <meta name="format-detection" content="telephone=no" />

        {/* Additional favicon links for better browser compatibility */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TeamBrain",
              description:
                "AI-powered knowledge capture, workflow automation, and meeting optimisation platform for product development teams.",
              url: "https://teambrain.bot", // Updated structured data URL to teambrain.bot
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
              },
              provider: {
                "@type": "Organization",
                name: "TeamBrain",
                url: "https://teambrain.bot", // Updated provider URL to teambrain.bot
              },
              featureList: [
                "AI-powered knowledge capture",
                "Meeting optimisation",
                "Workflow automation",
                "Process documentation",
                "Team collaboration tools",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {GA_TRACKING_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
