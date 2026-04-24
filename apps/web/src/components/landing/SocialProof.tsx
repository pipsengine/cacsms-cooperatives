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
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 relative">Built for Tomorrow&apos;s Intelligence</h3>
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