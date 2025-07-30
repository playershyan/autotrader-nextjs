import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AutoTrader.lk - Sri Lanka\'s Vehicle Marketplace',
  description: 'Find your perfect vehicle in Sri Lanka. Buy and sell cars, vans, motorcycles with confidence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}