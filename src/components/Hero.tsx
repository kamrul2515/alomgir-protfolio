"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16 min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center lg:text-left z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm tracking-wider font-semibold">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          আপনাকে স্বাগতম!
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block origin-bottom-right text-lg ml-1"
          >
            👋
          </motion.span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-foreground leading-[1.2]">
          আলমগীর
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-5xl md:text-6xl inline-flex items-center min-h-[1.2em]">
            <Typewriter
              options={{
                strings: ['কম্পিউটার সেন্টার'],
                autoStart: true,
                loop: true,
                delay: 150,
                pauseFor: 3000,
                cursorClassName: 'text-primary animate-pulse'
              }}
            />
          </span>
        </h1>

        <p className="text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed">
          এখানে অনলাইনে যাবতীয় কাজ যত্ন সহকারে করা হয়। জমি খারিজ, পাসপোর্ট, বিমানের টিকিট, ও ড্রাইভিং লাইসেন্স সহ সকল আবেদন নির্ভুলভাবে করা হয়। 
        </p>

        <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center pt-4">
          <a href="#services" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
            আমাদের সেবাসমূহ
          </a>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/alamgirhossain.alamgir" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-container rounded-full hover:bg-primary hover:text-white transition-all text-on-surface-variant hover:text-white" title="ফেসবুক">
              <FaFacebookF size={20} />
            </a>
            <a href="https://wa.me/8801723312832" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-container rounded-full hover:bg-primary hover:text-white transition-all text-on-surface-variant hover:text-white" title="হোয়াটসঅ্যাপ">
              <FaWhatsapp size={20} />
            </a>
            <a href="#contact" className="p-3 bg-surface-container rounded-full hover:bg-primary hover:text-white transition-all text-on-surface-variant hover:text-white" title="ফোন করুন">
              <Phone size={20} />
            </a>
            <a href="#contact" className="p-3 bg-surface-container rounded-full hover:bg-primary hover:text-white transition-all text-on-surface-variant hover:text-white" title="আমাদের ঠিকানা">
              <MapPin size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 relative flex justify-center items-center z-10"
      >
        {/* Background glow */}
        <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]"></div>

        {/* Outer dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[420px] h-[420px] rounded-full border border-primary/30 border-dashed"
        ></motion.div>

        {/* Inner solid ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[360px] h-[360px] rounded-full border border-primary/50"
        ></motion.div>

        {/* Image Wrapper */}
        <div className="relative w-[320px] h-[320px] z-20">
          {/* Image Container */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-full rounded-full overflow-hidden border-2 border-primary/80 shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:shadow-[0_0_50px_rgba(217,70,239,0.6)] hover:border-primary transition-all duration-300 flex items-center justify-center group cursor-pointer"
            style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
          >
            <img
              alt="Alomgir Computer Center"
              className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out"
              src="https://i.ibb.co.com/99yBMMTG/AM.png"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
          </motion.div>

          {/* Online Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="absolute top-6 right-2 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            title="আমরা অনলাইনে আছি"
          >
            {/* Online Pulsing Indicator Dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>

            {/* MonitorCloud Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="text-green-500"
            >
              <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"/>
                <path d="M12 17v4"/>
                <path d="M8 21h8"/>
                <rect x="2" y="3" width="20" height="14" rx="2"/>
              </g>
            </svg>

            {/* Online Text */}
            <span className="text-xs font-semibold text-green-500 tracking-wider">
              Online
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
