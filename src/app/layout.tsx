"use client";
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import type { Metadata } from 'next'
import { NextAuthProvider } from './providers'

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
      <body className='bg-gray-900'>
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
      </body>
    </html>
  )
}
