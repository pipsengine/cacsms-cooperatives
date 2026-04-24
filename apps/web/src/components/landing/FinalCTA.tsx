import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MonitorSmartphone, TrendingUp, CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Your Cooperative Deserves More Than Manual Processes and Delayed Visibility.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 text-blue-200 font-medium text-sm sm:text-base">
             <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Start with a structured foundation</div>
             <div className="flex items-center justify-center gap-2"><MonitorSmartphone className="w-5 h-5 text-blue-400" /> Works across desktop & mobile</div>
             <div className="flex items-center justify-center gap-2"><TrendingUp className="w-5 h-5 text-amber-400" /> Built for future growth</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register-cooperative" className="w-full sm:w-auto bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
              Register Cooperative <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/demo" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              Book a Live Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}