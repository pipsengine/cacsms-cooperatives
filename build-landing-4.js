const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'apps/web/src/components/landing');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'SocialProof.tsx': `
import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, Lock, Database } from 'lucide-react';

export function SocialProof() {
  return (
    <>
      {/* AI & Security Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-100 transition-colors"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-8 relative border border-amber-200 shadow-sm">
                   <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 relative">Built for Tomorrow's Intelligence</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 relative">
                  The architecture supports intelligent automation, guided workflows, smarter search, and an expanding ecosystem that helps cooperative societies stay relevant in a connected future.
                </p>
                <div className="space-y-4 relative bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold text-slate-700">AI-Guided Insights & Search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-bold text-slate-700">Scalable Multi-Tenant Architecture</span>
                  </div>
                </div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-8 relative border border-blue-200 shadow-sm">
                   <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 relative">Security & Control Built In</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 relative">
                  When money, approvals, and decisions move through one system, trust matters. Designed with institutional-grade access controls to support a secure cooperative environment.
                </p>
                <div className="space-y-4 relative bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-slate-700">Role-Based Access Control (RBAC)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-bold text-slate-700">Traceable Immutable Activity Logs</span>
                  </div>
                </div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Operational Outcomes That Matter
            </h2>
          </div>
          
          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 max-w-5xl mx-auto">
             {[
               { value: "4x", label: "Faster Confirmations" },
               { value: "100%", label: "Ledger Accuracy" },
               { value: "24/7", label: "Member Visibility" },
               { value: "Zero", label: "Lost Receipts" }
             ].map((m, i) => (
               <motion.div 
                 key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                 className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 shadow-sm"
               >
                 <div className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-2 tracking-tighter">{m.value}</div>
                 <div className="text-slate-600 font-bold text-sm uppercase tracking-wide">{m.label}</div>
               </motion.div>
             ))}
          </div>

          {/* Testimonial Placeholders */}
          <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex gap-1 mb-6 text-amber-500">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg className="w-5 h-5 fill-current text-slate-200" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                  <div className="space-y-2 mb-6">
                     <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                     <div className="h-2 w-5/6 bg-slate-200 rounded-full"></div>
                     <div className="h-2 w-4/5 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                     <div>
                        <div className="h-2.5 w-24 bg-slate-300 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}
`,
  'Pricing.tsx': `
import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    { 
      name: "Starter", 
      target: "Best for small and emerging cooperatives",
      desc: "Core member and savings management to digitize your records.",
      bgColor: "bg-white",
      borderColor: "border-slate-200",
      btnClass: "bg-slate-100 text-slate-800 hover:bg-slate-200",
      features: ["Member Database Access", "Basic Savings Ledger", "Self-guided Onboarding", "Standard Email Support"]
    },
    { 
      name: "Growth", 
      target: "Best for active and expanding cooperatives",
      desc: "Full financial engine including loans, workflows, and dashboards.",
      bgColor: "bg-blue-900",
      borderColor: "border-blue-900",
      textColor: "text-white",
      btnClass: "bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/20",
      featured: true,
      features: ["Everything in Starter", "Finance Confirmation Workflow", "Loans Management Module", "Executive Dashboards", "Assisted Priority Onboarding"]
    },
    { 
      name: "Enterprise", 
      target: "Best for large, structured, or multi-branch cooperatives",
      desc: "Advanced governance, unlimited scale, and concierge services.",
      bgColor: "bg-white",
      borderColor: "border-slate-200",
      btnClass: "bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300",
      features: ["Everything in Growth", "Multi-branch Federation", "Advanced Audit Extraction", "Dedicated Account Manager", "Full Concierge Setup"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Simple Adoption Paths for Cooperatives Ready to Modernize
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Whether your cooperative is beginning its digital journey or replacing outdated systems, we provide a professional path forward with room to grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={\`\${plan.bgColor} rounded-3xl p-8 lg:p-10 border \${plan.borderColor} \${plan.featured ? 'shadow-2xl shadow-blue-900/20 lg:-translate-y-4' : 'shadow-sm'} relative\`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className={\`text-2xl font-bold mb-2 \${plan.textColor || 'text-slate-900'}\`}>{plan.name}</h3>
              <div className={\`text-sm font-bold uppercase tracking-wider mb-4 \${plan.featured ? 'text-blue-300' : 'text-blue-600'}\`}>
                {plan.target}
              </div>
              <p className={\`mb-8 \${plan.featured ? 'text-blue-100' : 'text-slate-600'}\`}>{plan.desc}</p>
              
              <button className={\`w-full py-3.5 rounded-xl font-bold transition-all mb-10 \${plan.btnClass}\`}>
                Get Started
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((f, j) => (
                  <li key={j} className={\`flex items-start gap-3 text-sm font-medium \${plan.textColor || 'text-slate-700'}\`}>
                    <Check className={\`w-5 h-5 shrink-0 \${plan.featured ? 'text-emerald-400' : 'text-emerald-500'}\`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium bg-white inline-block px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            Need a custom migration or federation setup? <a href="#contact" className="text-blue-600 font-bold hover:underline">Talk to our team.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
`,
  'FAQ.tsx': `
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Can members upload payment receipts from their phone?", a: "Yes. Our platform is mobile-responsive, allowing members to quickly snap and upload transfer receipts or teller evidence directly from their smartphones into their portal for officer review." },
    { q: "Can finance officers approve or reject payment submissions?", a: "Absolutely. Authorized officers have a dedicated queue to review submitted payments, view the attached evidence, and formally confirm, reject, or return the submission for correction." },
    { q: "Does the system support member ledger visibility?", a: "Yes. Every member has real-time access to their personal ledger. Once a payment or contribution is confirmed by the finance team, it instantly reflects on the member's private dashboard." },
    { q: "Can the platform handle loans, welfare, and savings together?", a: "Yes. CACSMS Coops is a unified system. It dynamically tracks regular savings, specialized contributions, welfare pools, and active loan schedules in one centralized financial engine." },
    { q: "Is the system secure?", a: "Security is paramount. We employ role-based access control, encrypted data transmission, continuous activity logging, and strict permission models to ensure your data and operations are fully protected." },
    { q: "Can we migrate from spreadsheets or manual records?", a: "Yes. We offer structured bulk-import tools and onboarding assistance to safely transition your legacy spreadsheet data or manual ledgers into the digital platform." }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={\`border transition-colors duration-300 rounded-2xl overflow-hidden \${openIndex === i ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}\`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <span className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors \${openIndex === i ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}\`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
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
console.log('Batch 4 written');
