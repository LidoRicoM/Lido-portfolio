import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Particles } from "@/components/particles"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-effects"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Manuel Lidó Rico - Web Developer & Software Engineer",
  description:
    "Professional portfolio of Manuel Lidó Rico, showcasing innovative web development projects and cutting-edge software engineering expertise.",
  keywords: ["web developer", "software engineer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Manuel Lidó Rico" }],
  creator: "Manuel Lidó Rico",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manuel-portfolio.vercel.app",
    title: "Manuel Lidó Rico - Web Developer & Software Engineer",
    description: "Professional portfolio showcasing innovative web development projects",
    siteName: "Manuel Lidó Rico Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Lidó Rico - Web Developer & Software Engineer",
    description: "Professional portfolio showcasing innovative web development projects",
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Global Effects */}
          <Particles />
          <CustomCursor />
          <ScrollProgress />
          
          {/* Theme Toggle */}
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
