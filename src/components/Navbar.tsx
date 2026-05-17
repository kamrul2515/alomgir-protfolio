"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "হোম", href: "#home", id: "home" },
    { name: "আমাদের সম্পর্কে", href: "#about", id: "about" },
    { name: "সেবাসমূহ", href: "#services", id: "services" },
    { name: "যোগাযোগ", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = links.map(link => document.getElementById(link.id));
      
      let currentSectionId = "home";
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 dark:border-white/5 border-black/5"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
            <span className="text-primary font-bold text-sm">আ</span>
          </div>
          <span className="text-xl font-bold tracking-widest text-foreground font-space-grotesk">
            আলমগীর কম্পিউটার
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`font-medium transition-colors text-sm uppercase tracking-wider ${
                activeSection === link.id 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-on-surface-variant/20 pl-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-surface-container text-on-surface hover:text-primary transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            )}

            <a href="#contact" className="bg-primary/10 border border-primary/50 text-primary px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-all text-sm">
              যোগাযোগ করুন
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-surface-container text-on-surface hover:text-primary transition-colors"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          )}
          <button 
            className="text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-surface-container border-b border-border px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`transition-colors font-medium ${
                  activeSection === link.id ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center bg-primary/10 border border-primary/50 text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all mt-2">
              যোগাযোগ করুন
            </a>
          </div>
        </motion.div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary origin-left"
      />
    </motion.nav>
  );
}
