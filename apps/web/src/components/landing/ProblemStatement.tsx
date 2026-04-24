import React from 'react';
import { motion } from 'motion/react';
import { Files, Clock, EyeOff } from 'lucide-react';

export function ProblemStatement() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Managing Real Money <br className="hidden md:block" /> Should Not Rely on Guesswork.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium"
          >
            As cooperatives grow, depending on paper files, spreadsheets, and chat-based approvals becomes dangerous. It affects speed, accountability, and member confidence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Files,
              title: "Scattered Records",
              desc: "Member data, loan history, and savings balances fragmented across multiple disjointed spreadsheets."
            },
            {
              icon: Clock,
              title: "Delayed Confirmations",
              desc: "Finance teams overwhelmed reconciling bank alerts with manual payment claims via WhatsApp."
            },
            {
              icon: EyeOff,
              title: "Weak Financial Visibility",
              desc: "Executives struggle to get real-time accurate reports on cooperative health without days of manual tallying."
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}