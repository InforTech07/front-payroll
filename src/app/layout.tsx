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
  return (
    <html lang="en" data-theme="corporate">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
