import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Civet',
  description: 'Explore Civet, an innovative project on the Solana blockchain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics/>
      <SpeedInsights/>
      </body>
    </html>
  )

}
