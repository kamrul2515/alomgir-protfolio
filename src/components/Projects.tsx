"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Projects() {
  const services = [
    {
      title: "জমি খারিজের আবেদন",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      desc: "নামজারি বা জমি খারিজের জন্য অনলাইনে নিখুঁতভাবে আবেদন এবং প্রয়োজনীয় সকল কাগজপত্রের প্রসেসিং করা হয়।",
      tags: ["ভূমি সেবা", "অনলাইন আবেদন"],
    },
    {
      title: "জাতীয় পরিচয় পত্র সংশোধন",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
      desc: "নতুন ভোটার নিবন্ধন, জাতীয় পরিচয় পত্রের ভুল সংশোধন এবং ডুপ্লিকেট কপির জন্য অনলাইনে আবেদন করা হয়।",
      tags: ["NID", "সংশোধন"],
    },
    {
      title: "পাসপোর্ট ও বিমানের টিকিট",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
      desc: "ই-পাসপোর্টের নতুন বা নবায়নের আবেদন এবং দেশী-বিদেশী যেকোনো বিমানের টিকিট সংগ্রহ করা যায়।",
      tags: ["পাসপোর্ট", "ভ্রমণ"],
    },
    {
      title: "ড্রাইভিং লাইসেন্স ও জিডি",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      desc: "লার্নার বা ড্রাইভিং লাইসেন্সের জন্য আবেদন, এবং থানায় সাধারণ ডায়েরি (জিডি) বা অভিযোগ অনলাইনে লেখা হয়।",
      tags: ["লাইসেন্স", "পুলিশ জিডি"],
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative" id="services">
      {/* Background orb */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">আমাদের সেবাসমূহ</div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
            জনপ্রিয় <span className="text-primary">সেবাসমূহ</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl bg-surface-container border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-90"></div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col relative -mt-10 z-10">
              <h3 className="font-space-grotesk text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-foreground/5 text-on-surface-variant border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-on-surface-variant text-sm flex-1 mb-6">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-2 pt-4 border-t border-border mt-auto text-primary">
                <CheckCircle2 size={16} />
                <span className="text-sm font-medium">নির্ভুল আবেদন</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
