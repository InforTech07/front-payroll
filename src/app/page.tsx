"use client";
import { useSession } from 'next-auth/react'
import HeaderBlog from '@/components/blog/header';
import Stats from '@/components/blog/stats';
import Feature from '@/components/blog/features';
import Testimonials from '@/components/blog/testimonial';
import Footer from '@/components/footer/footer';

export default function Home() {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'unauthenticated') {
    return <p>Access Denied</p>
  }
  return (
    <>
      <main className="space-y-40 mb-40">
        <HeaderBlog />
        <Stats />
        <Feature />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
