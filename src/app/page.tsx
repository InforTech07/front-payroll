import HeaderBlog from '@/components/blog/header';
import Stats from '@/components/blog/stats';
import Feature from '@/components/blog/features';
import Testimonials from '@/components/blog/testimonial';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
      <main className="bg-gray-900">
        <HeaderBlog />
        <Stats />
        <Feature />
        <Testimonials />
        <Footer />
      </main>
  )
}
