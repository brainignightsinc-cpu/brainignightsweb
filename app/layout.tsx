import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrainIgnights - Igniting Intelligent Transformation',
  description: 'Premier digital transformation partner for enterprises seeking to bridge legacy systems with intelligent, AI-powered future through innovative solutions in agentic AI, cloud modernization, enterprise content intelligence, and automated BI migration.',
  keywords: 'AI transformation, legacy modernization, cloud migration, IBM FileNet, enterprise content management, data engineering, agentic AI, BI migration, Tableau migration, Power BI migration, Apache Superset',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'BrainIgnights - Igniting Intelligent Transformation',
    description:
      'Premier digital transformation partner for enterprises seeking to bridge legacy systems with intelligent, AI-powered future through innovative solutions in agentic AI, cloud modernization, and enterprise content intelligence.',
    url: 'https://www.brainignights.com',
    siteName: 'BrainIgnights',
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'BrainIgnights logo',
      },
    ],
    type: 'website',
  },
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

