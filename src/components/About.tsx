"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative" id="about">
      {/* Background orb */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10 transform -translate-y-1/2 -translate-x-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">আমাদের সম্পর্কে</div>
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
          পরিচিতি ও <span className="text-primary">বিস্তারিত</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full flex flex-col"
        >
          <div className="p-8 rounded-3xl bg-surface-container/50 border border-border backdrop-blur-sm relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              আলমগীর কম্পিউটার সেন্টার দীর্ঘ দিন ধরে অত্যন্ত বিশ্বস্ততার সাথে সকল প্রকার অনলাইন সেবা প্রদান করে আসছে। আমরা আমাদের গ্রাহকদের সর্বোচ্চ গুরুত্ব দিয়ে থাকি এবং প্রতিটি কাজ অত্যন্ত নিখুঁত ও যত্ন সহকারে সম্পন্ন করি।
            </p>
            <p className="text-on-surface-variant leading-relaxed text-lg mt-4">
              আমাদের প্রতিষ্ঠানটি পরিচালনা করছেন মোঃ আলমগীর হোসাইন, যিনি একজন সহকারী শিক্ষক। একটি বিশ্বস্ত এবং নির্ভরযোগ্য সেবাকেন্দ্র হিসেবে আমরা নীলফামারীর সৈয়দপুর ও আশেপাশের এলাকার মানুষের কাছে সুপরিচিত।
            </p>
            <p className="text-on-surface-variant leading-relaxed text-lg mt-4">
              আমরা জমি খারিজ, জাতীয় পরিচয়পত্র সংশোধন, পাসপোর্ট আবেদন, ও চাকরির আবেদন সহ যাবতীয় অনলাইন সেবার মাধ্যমে তৃণমূল পর্যায়ে নির্ভরযোগ্য ও দ্রুত সেবা পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Info Cards */}
          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex flex-col gap-3 hover:border-primary/30 transition-colors group">
            <User className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <div>
              <div className="text-sm text-on-surface-variant">প্রোপ্রাইটর</div>
              <div className="font-bold text-foreground text-lg">মোঃ আলমগীর হোসাইন</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex flex-col gap-3 hover:border-primary/30 transition-colors group">
            <Briefcase className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <div>
              <div className="text-sm text-on-surface-variant">পেশা</div>
              <div className="font-bold text-foreground text-base">সহকারী শিক্ষক<br/><span className="text-sm font-normal">আইসঢাল খিয়ারপাড়া আলিম এন্ড ভোকেশনাল মাদ্রাসা</span></div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex flex-col gap-3 hover:border-primary/30 transition-colors group">
            <MapPin className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <div>
              <div className="text-sm text-on-surface-variant">ঠিকানা</div>
              <div className="font-bold text-foreground text-base">আলহাজ্ব মোজাহার আলী মার্কেট, শহীদ আলী হোসাইন সড়ক, উপজেলা সড়ক মাধার মোড়, নীলফামারী।</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container/40 border border-border flex flex-col gap-3 hover:border-primary/30 transition-colors group">
            <Calendar className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <div>
              <div className="text-sm text-on-surface-variant">সময়সূচী</div>
              <div className="font-bold text-foreground text-sm mt-1 space-y-1">
                <div>শনি - বৃহস্পতি: সকাল ১০:০০ - রাত ১২:০০</div>
                <div className="text-primary">শুক্রবার: দুপুর ০৩:০০ - রাত ১২:০০</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
