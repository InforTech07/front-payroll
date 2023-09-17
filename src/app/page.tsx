import HeaderBlog from '@/components/blog/header';
import Stats from '@/components/blog/stats';
import Feature from '@/components/blog/features';
import Testimonials from '@/components/blog/testimonial';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navs/navbar';

export default function Home() {
  return (
      <main className="bg-gray-900">
        <Navbar />
        <HeaderBlog />
        <Stats />
        <Feature />
        <Testimonials />
        <Footer />
      </main>
  )
}
