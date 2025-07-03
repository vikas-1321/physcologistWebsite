import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIHelp from "@/components/HowIHelp";
import Experiance from "@/components/Experiance";
import Bookapp from "@/components/Bookapp"; 
import About from "@/components/About";
import Testimonianls from "@/components/Testimonials";
import Books from "@/components/Books";
import LatestBlogs from "@/components/LatestBlogs";
import FAQ from "@/components/FAQ"; 
import Quote from "@/components/Quote";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Experiance />
      <HowIHelp />
      <Services />
      <Bookapp />
      <About />
      <Testimonianls />
      <Books />
      <LatestBlogs />
      <FAQ />
      <Quote />
      <ContactSection />
      <Footer />
    </>
  );
}
