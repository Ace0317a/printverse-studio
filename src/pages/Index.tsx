import Navbar from "@/components/print/Navbar";
import Hero from "@/components/print/Hero";
import Marquee from "@/components/print/Marquee";
import Services from "@/components/print/Services";
import Showcase from "@/components/print/Showcase";
import Process from "@/components/print/Process";
import Testimonials from "@/components/print/Testimonials";
import CTA from "@/components/print/CTA";
import Footer from "@/components/print/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Showcase />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
