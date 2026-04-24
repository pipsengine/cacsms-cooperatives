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
              className={`${plan.bgColor} rounded-3xl p-8 lg:p-10 border ${plan.borderColor} ${plan.featured ? 'shadow-2xl shadow-blue-900/20 lg:-translate-y-4' : 'shadow-sm'} relative`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.textColor || 'text-slate-900'}`}>{plan.name}</h3>
              <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${plan.featured ? 'text-blue-300' : 'text-blue-600'}`}>
                {plan.target}
              </div>
              <p className={`mb-8 ${plan.featured ? 'text-blue-100' : 'text-slate-600'}`}>{plan.desc}</p>
              
              <button className={`w-full py-3.5 rounded-xl font-bold transition-all mb-10 ${plan.btnClass}`}>
                Get Started
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm font-medium ${plan.textColor || 'text-slate-700'}`}>
                    <Check className={`w-5 h-5 shrink-0 ${plan.featured ? 'text-emerald-400' : 'text-emerald-500'}`} />
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