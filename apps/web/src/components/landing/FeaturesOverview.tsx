import React from 'react';
import { motion } from 'motion/react';
import { Users2, PiggyBank, Receipt, GitMerge, Landmark, ShieldCheck, FileSpreadsheet, MessageSquare, Briefcase } from 'lucide-react';

export function FeaturesOverview() {
  const features = [
    { icon: Users2, title: "Member Management", desc: "Centralized KYC, status tracking, and profile management.", benefit: "Ensures every member record stays centralized and traceable." },
    { icon: Receipt, title: "Payment Submissions", desc: "Members upload transfer evidence directly from any device.", benefit: "Improves payment accountability and finance review speed." },
    { icon: GitMerge, title: "Confirmation Workflow", desc: "Multi-step approval processes that mirror financial controls.", benefit: "Eliminates unverified credits and rogue entries." },
    { icon: PiggyBank, title: "Savings & Loans", desc: "Track regular savings, special contributions, and active loan schedules.", benefit: "Automates amortization and balance calculations." },
    { icon: Landmark, title: "Treasury Visibility", desc: "Monitor cash-at-hand, cash-at-bank, and reconcile external accounts.", benefit: "Prevents liquidity blind spots for executives." },
    { icon: FileSpreadsheet, title: "General Ledger", desc: "Automated double-entry accounting operating behind the scenes.", benefit: "Produces audit-ready balance sheets instantly." },
  ];

  return (
    <section id="features" className="py-24 bg-[#FAFBFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Everything Your Cooperative Needs. <br className="hidden md:block" /> Connected in One Platform.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-slate-300 font-extrabold text-2xl">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 font-medium mb-6 leading-relaxed bg-white">{feature.desc}</p>
                <div className="pt-5 border-t border-slate-100 mt-auto">
                  <p className="text-sm font-semibold text-emerald-700 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                    {feature.benefit}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}