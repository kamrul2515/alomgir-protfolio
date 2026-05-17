"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border bg-surface-container/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <span className="text-xl font-bold text-foreground font-space-grotesk tracking-widest">আলমগীর কম্পিউটার সেন্টার</span>
          <p className="text-on-surface-variant text-sm">বিশ্বস্ত ও দ্রুত সেবার নির্ভরযোগ্য প্রতিষ্ঠান।</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-6"
        >
          <a href="https://www.facebook.com/alamgirhossain.alamgir" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
            <FaFacebook size={18} />
          </a>
          <a href="https://wa.me/8801723312832" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
            <FaWhatsapp size={18} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-sm"
        >
          © {new Date().getFullYear()} আলমগীর কম্পিউটার. সর্বস্বত্ব সংরক্ষিত.
        </motion.div>
      </div>
    </footer>
  );
}
