const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'apps/web/src/components/landing');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'ProblemStatement.tsx': `
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
`,
  'Transformation.tsx': `
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
            CACSMS Coops does not merely digitize records; it fundamentally improves operational confidence, financial structure, and management clarity.
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
`,
  'FeaturesOverview.tsx': `
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
`,
  'Workflow.tsx': `
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
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, filename), content.trim() + '\\n');
}
console.log('Batch 2 written');
