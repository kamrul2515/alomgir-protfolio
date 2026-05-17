"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Plane, FileText, FileCheck, HelpCircle, MonitorSmartphone, Printer, Globe } from "lucide-react";

type Category = "সকল" | "আবেদন" | "অন্যান্য";

export default function TechArsenal() {
  const [activeTab, setActiveTab] = useState<Category>("সকল");

  const tabs: Category[] = ["সকল", "আবেদন", "অন্যান্য"];

  const services = [
    { name: "জমি খারিজ", icon: <FileText />, category: "আবেদন" },
    { name: "এনআইডি সংশোধন", icon: <FileCheck />, category: "আবেদন" },
    { name: "থানার জিডি", icon: <ShieldCheck />, category: "আবেদন" },
    { name: "বিমানের টিকিট", icon: <Plane />, category: "অন্যান্য" },
    { name: "ড্রাইভিং লাইসেন্স", icon: <FileText />, category: "আবেদন" },
    { name: "পুলিশ ক্লিয়ারেন্স", icon: <ShieldCheck />, category: "আবেদন" },
    { name: "পাসপোর্ট আবেদন", icon: <Globe />, category: "আবেদন" },
    { name: "অনলাইন ফর্ম পূরণ", icon: <MonitorSmartphone />, category: "অন্যান্য" },
    { name: "ফটোকপি ও প্রিন্ট", icon: <Printer />, category: "অন্যান্য" },
    { name: "পরামর্শ সেবা", icon: <HelpCircle />, category: "অন্যান্য" },
  ];

  const filteredServices = activeTab === "সকল" ? services : services.filter(service => service.category === activeTab);

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">সকল সেবা এক ছাদের নিচে</div>
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
          অন্যান্য <span className="text-primary">সেবাসমূহ</span>
        </h2>
        <p className="text-on-surface-variant mt-4 text-sm max-w-lg mx-auto">
          অনলাইনে যাবতীয় কাজ, যেকোনো ধরণের আবেদন এবং কম্পিউটার রিলেটেড যেকোনো সহযোগিতায় আমরা আছি আপনার পাশে।
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(217,70,239,0.5)]"
                : "bg-surface-container/50 text-on-surface-variant hover:text-foreground hover:bg-surface-container"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => (
            <motion.div
              layout
              key={service.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-surface-container/30 border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/40 hover:bg-surface-container/60 transition-all group cursor-default"
            >
              <div className="text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center leading-tight">
                {service.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
