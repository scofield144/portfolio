import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '../components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabio Tales Victorino | Portfolio',
  description: 'IT professional skilled in Cloud and Network management, Programming, and Design',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  )
}