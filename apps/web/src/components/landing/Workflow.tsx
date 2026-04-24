import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, UploadCloud, CheckCircle, LineChart } from 'lucide-react';

export function Workflow() {
  const steps = [
    { icon: UserCheck, title: "Member Action", desc: "Member submits payment evidence via secure portal." },
    { icon: UploadCloud, title: "Finance Review", desc: "Officer verifies evidence and confirms receipt." },
    { icon: CheckCircle, title: "Ledger Update", desc: "System automatically updates member and master ledgers." },
    { icon: LineChart, title: "Executive Insight", desc: "Dashboards reflect new liquidity instantly." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            One Platform. One Flow. <br className="hidden md:block" /> Better Control at Every Step.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 font-medium"
          >
            Data does not remain trapped in isolated manual work. Watch operations flow cleanly from initial member action to final executive insight.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0">
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} className="h-full bg-gradient-to-r from-blue-600 to-emerald-400"></motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group hover:bg-slate-700 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                    {/* Active pulse effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/50 scale-110 opacity-0 group-hover:animate-ping"></div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}