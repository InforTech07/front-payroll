import './globals.css'
import type { Metadata } from 'next'
import { NextAuthProvider } from './providers'

import Navbar from '@/components/navs/navbar'

export const metadata: Metadata = {
  title: 'payroll | Home',
  description: 'payroll platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //saber si es blog aplicar bg-gray-900 diferente a blog bg-white



  return (
    <html lang="en" data-theme="corporate">
      <body className="bg-gray-900">
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
