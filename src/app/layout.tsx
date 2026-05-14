import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Restaurant SaaS",
  description: "Restaurant food ordering system",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}