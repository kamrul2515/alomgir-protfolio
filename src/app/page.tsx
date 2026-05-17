import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechArsenal from "@/components/TechArsenal";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-inter selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="relative overflow-hidden pt-20">
        <Hero />
        <About />
        <Projects />
        <TechArsenal />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
