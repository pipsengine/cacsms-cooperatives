import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export function Transformation() {
  const cards = [
    { old: "Scattered spreadsheets and paper files", new: "Centralized, verifiable relational database" },
    { old: "Unverified WhatsApp payment claims", new: "Structured receipt confirmation workflow" },
    { old: "Delayed month-end reconciliation", new: "Real-time ledger and balance updates" },
    { old: "Blind spots in executive oversight", new: "Insight-rich dashboards and analytics" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            From Manual Complexity to Structured Confidence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium max-w-3xl mx-auto"
          >
            Cacsms Cooperatives does not merely digitize records; it fundamentally improves operational confidence, financial structure, and management clarity.
          </motion.p>
        </div>

        <div className="space-y-4">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row shadow-sm border border-slate-200 rounded-2xl overflow-hidden"
            >
              <div className="flex-1 bg-slate-50 p-6 flex items-center gap-4">
                <XCircle className="w-6 h-6 text-slate-400 shrink-0" />
                <p className="text-slate-500 font-medium line-through decoration-slate-300">{card.old}</p>
              </div>
              <div className="hidden md:flex bg-white items-center justify-center px-4 z-10 -mx-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shadow-sm border border-slate-200">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
              <div className="flex-1 bg-emerald-50/30 p-6 flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-slate-900 font-bold">{card.new}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}