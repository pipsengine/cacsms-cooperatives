import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Can members upload payment receipts from their phone?", a: "Yes. Our platform is mobile-responsive, allowing members to quickly snap and upload transfer receipts or teller evidence directly from their smartphones into their portal for officer review." },
    { q: "Can finance officers approve or reject payment submissions?", a: "Absolutely. Authorized officers have a dedicated queue to review submitted payments, view the attached evidence, and formally confirm, reject, or return the submission for correction." },
    { q: "Does the system support member ledger visibility?", a: "Yes. Every member has real-time access to their personal ledger. Once a payment or contribution is confirmed by the finance team, it instantly reflects on the member's private dashboard." },
    { q: "Can the platform handle loans, welfare, and savings together?", a: "Yes. Cacsms Cooperatives is a unified system. It dynamically tracks regular savings, specialized contributions, welfare pools, and active loan schedules in one centralized financial engine." },
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
            <div key={i} className={`border transition-colors duration-300 rounded-2xl overflow-hidden ${openIndex === i ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
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