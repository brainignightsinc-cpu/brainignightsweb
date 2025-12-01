import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrainIgnights - Igniting Intelligent Transformation',
  description: 'Premier digital transformation partner for enterprises seeking to bridge legacy systems with intelligent, AI-powered future through innovative solutions in agentic AI, cloud modernization, and enterprise content intelligence.',
  keywords: 'AI transformation, legacy modernization, cloud migration, IBM FileNet, enterprise content management, data engineering, agentic AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

