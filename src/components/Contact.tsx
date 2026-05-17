"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative" id="contact">
      {/* Background orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px] -z-10 transform -translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">যোগাযোগ</div>
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
          আমাদের সাথে <span className="text-primary">যোগাযোগ করুন</span>
        </h2>
        <p className="text-on-surface-variant mt-4 max-w-md">
          যেকোনো প্রয়োজনে আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন অথবা নিচের ফর্মে ম্যাসেজ পাঠাতে পারেন।
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex items-center gap-6 hover:bg-surface-container/60 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">ইমেইল</div>
              <div className="font-bold text-foreground text-lg">alamgir3119@gmail.com</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex items-center gap-6 hover:bg-surface-container/60 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">ফোন নম্বর</div>
              <div className="font-bold text-foreground text-lg">01723-312832, 01550-555984</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex items-center gap-6 hover:bg-surface-container/60 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">ঠিকানা</div>
              <div className="font-bold text-foreground text-base">আলহাজ্ব মোজাহার আলী মার্কেট, শহীদ আলী হোসেন সড়ক, উপজেলা সড়ক, নীলফামারী।</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form className="p-8 rounded-3xl bg-surface-container/30 border border-border space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="আপনার নাম" 
                className="w-full bg-surface-container-lowest border border-border rounded-xl p-4 text-foreground placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                className="w-full bg-surface-container-lowest border border-border rounded-xl p-4 text-foreground placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <textarea 
                placeholder="আপনার বার্তা লিখুন" 
                rows={5}
                className="w-full bg-surface-container-lowest border border-border rounded-xl p-4 text-foreground placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
            >
              <Send size={18} /> মেসেজ পাঠান
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
