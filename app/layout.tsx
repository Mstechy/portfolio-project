import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vermaxx - Digital Solutions & Skills That Elevate Your Business",
  description:
    "Professional web development, SEO, and branding services. We help businesses grow with digital tools that actually work.",
  generator: "v0.app",
  keywords: "web development, SEO, digital marketing, branding, business growth",
  authors: [{ name: "Vermaxx Team" }],
  openGraph: {
    title: "Vermaxx - Digital Solutions That Elevate Your Business",
    description: "Professional web development, SEO, and branding services for business growth.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
