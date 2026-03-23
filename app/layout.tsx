import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Skill Insight Engine - Analyze AI Skills Instantly',
  description: 'Automatically analyze AI skill documentation and get structured insights using Pollinations AI. Get summaries, functionalities, use cases, and improvement suggestions in seconds.',
  keywords: ['AI', 'skill analysis', 'Pollinations AI', 'documentation', 'insights'],
  authors: [{ name: 'SobatAnonimak' }],
  openGraph: {
    title: 'AI Skill Insight Engine',
    description: 'Analyze AI skills instantly with AI-powered insights',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
