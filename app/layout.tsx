import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZeoFlow",
  description: "ZeoFlow is a tool for generating static dummy data, allowing developers to simulate real-world API responses for endpoints during development without using live data.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
