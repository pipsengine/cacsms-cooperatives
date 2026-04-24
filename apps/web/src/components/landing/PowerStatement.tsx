import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BarChart3, Handshake } from 'lucide-react';

export function PowerStatement() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Built for Cooperatives That Want to Grow with Structure, Not Struggle with Chaos.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Financial Clarity",
              desc: "Every naira accounted for, reconciled, and visible. No more guessing balances or hunting for lost payment receipts.",
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              icon: Sparkles,
              title: "Operational Control",
              desc: "Automate repetitive tasks, enforce approval hierarchies, and maintain a pristine, tamper-proof audit trail of every action.",
              color: "text-emerald-600",
              bg: "bg-emerald-50"
            },
            {
              icon: Handshake,
              title: "Member Trust",
              desc: "Provide members with absolute transparency into their savings, loans, and dividends through a secure, self-serve portal.",
              color: "text-amber-600",
              bg: "bg-amber-50"
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}