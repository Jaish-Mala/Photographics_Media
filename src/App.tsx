import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import FeaturedStory from '@/components/FeaturedStory';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import SocialSection from '@/components/SocialSection';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FeaturedStory />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <SocialSection />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
