import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, BarChart4, Wallet2, Building } from 'lucide-react';

export function Highlights() {
  const [activeTab, setActiveTab] = useState(0);
  const coopTypes = [
    { title: "Staff Cooperatives", desc: "Ideal for salary-based contribution structures, payroll-deduction workflows, and structured member finance records." },
    { title: "Market Traders", desc: "Built for high-frequency daily/weekly saving updates and rapid loan turnaround requirements." },
    { title: "Community Groups", desc: "Designed to handle diverse membership structures with flexible welfare and dividend distribution." },
    { title: "Agricultural Data", desc: "Specialized for seasonal loan tracking and bulk procurement finance features." }
  ];

  return (
    <>
      {/* Dashboard Preview Upgrade */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full uppercase tracking-wider mb-6">
                Product Visibility
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                See the Cooperative Clearly, <br className="hidden lg:block"/> Not Through Guesswork.
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium max-w-xl mb-8 leading-relaxed">
                Every screen in Cacsms Cooperatives is designed to give users visibility without overwhelming them. Turn complex operations into a clear and manageable digital experience.
              </p>
              
              <ul className="space-y-4 max-w-xl">
                {[
                  "Executive & Admin Dashboard",
                  "Personal Member Portal",
                  "Finance Confirmation Queue",
                  "Treasury & Reconciliation View",
                  "Real-time Member Ledger",
                  "Mobile-first Receipt Upload"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div 
                 animate={{ y: [0, -8, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="relative w-full max-w-[620px] aspect-[16/10] bg-slate-100 rounded-2xl border border-slate-200/60 shadow-2xl p-2 sm:p-3"
              >
                {/* Realistic Mockup Shell */}
                 <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full h-full flex flex-col overflow-hidden">
                    {/* Browser/App Header */}
                    <div className="h-10 sm:h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-4 shrink-0">
                       <div className="flex gap-1.5 shrink-0">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
                       </div>
                       <div className="flex-1 max-w-sm bg-white border border-slate-200 rounded-md h-6 sm:h-7 flex items-center px-3">
                          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-slate-100 rounded-full"></div>
                       </div>
                    </div>
                    {/* App Content */}
                    <div className="flex flex-1 overflow-hidden">
                       {/* Sidebar */}
                       <div className="hidden sm:block w-32 sm:w-40 bg-slate-50 border-r border-slate-100 p-3 sm:p-4 space-y-3 shrink-0">
                          <div className="space-y-2">
                            <div className="w-full h-6 sm:h-8 bg-blue-100 rounded-md"></div>
                            <div className="w-3/4 h-6 sm:h-8 bg-slate-200/50 rounded-md"></div>
                            <div className="w-5/6 h-6 sm:h-8 bg-slate-200/50 rounded-md"></div>
                            <div className="w-4/5 h-6 sm:h-8 bg-slate-200/50 rounded-md"></div>
                          </div>
                       </div>
                       {/* Main Frame */}
                       <div className="flex-1 p-4 sm:p-6 bg-white overflow-hidden relative flex flex-col">
                          <div className="flex justify-between items-end mb-6 shrink-0">
                             <div>
                                <div className="w-32 sm:w-48 h-5 sm:h-6 bg-slate-800 rounded mb-2"></div>
                                <div className="w-24 sm:w-32 h-2.5 sm:h-3 bg-slate-300 rounded"></div>
                             </div>
                             <div className="w-20 sm:w-24 h-7 sm:h-8 bg-blue-600 rounded-md"></div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 shrink-0">
                             <div className="border border-slate-100 rounded-xl p-3 sm:p-4 shadow-sm">
                               <div className="w-12 sm:w-16 h-2.5 sm:h-3 bg-slate-200 rounded mb-3 sm:mb-4"></div>
                               <div className="w-20 sm:w-28 h-6 sm:h-8 bg-slate-800 rounded"></div>
                             </div>
                             <div className="border border-slate-100 rounded-xl p-3 sm:p-4 shadow-sm">
                               <div className="w-12 sm:w-16 h-2.5 sm:h-3 bg-slate-200 rounded mb-3 sm:mb-4"></div>
                               <div className="w-20 sm:w-28 h-6 sm:h-8 bg-emerald-600 rounded"></div>
                             </div>
                             <div className="border border-slate-100 rounded-xl p-3 sm:p-4 shadow-sm hidden md:block">
                               <div className="w-12 sm:w-16 h-2.5 sm:h-3 bg-slate-200 rounded mb-3 sm:mb-4"></div>
                               <div className="w-20 sm:w-28 h-6 sm:h-8 bg-slate-800 rounded"></div>
                             </div>
                          </div>

                          {/* List area */}
                          <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col">
                             <div className="h-8 sm:h-10 bg-slate-50 border-b border-slate-100 flex items-center px-3 sm:px-4 gap-3 sm:gap-4 shrink-0">
                               <div className="w-1/4 h-2 sm:h-3 bg-slate-200 rounded"></div>
                               <div className="w-1/4 h-2 sm:h-3 bg-slate-200 rounded"></div>
                               <div className="hidden sm:block w-1/4 h-2 sm:h-3 bg-slate-200 rounded"></div>
                             </div>
                             <div className="flex-1 overflow-hidden flex flex-col">
                               {[1, 2, 3].map(i => (
                                 <div key={i} className="flex-1 max-h-12 sm:max-h-14 border-b border-slate-50 flex items-center px-3 sm:px-4 gap-3 sm:gap-4">
                                   <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-200 shrink-0"></div>
                                   <div className="w-1/4 h-2 sm:h-3 bg-slate-800 rounded opacity-60"></div>
                                   <div className="hidden sm:block w-1/4 h-2 sm:h-3 bg-slate-800 rounded opacity-60"></div>
                                   <div className="w-1/4 h-4 sm:h-5 bg-emerald-100 rounded-full ml-auto sm:ml-0"></div>
                                 </div>
                               ))}
                             </div>
                          </div>

                       </div>
                    </div>
                 </div>

                 {/* Overlay visual to break the grid slightly */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.5 }}
                   className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-slate-900 text-white p-3 sm:p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700/50 z-20"
                 >
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm whitespace-nowrap">Approvals Synced</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 whitespace-nowrap">Ledger updated successfully</div>
                    </div>
                 </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coop Types Section Upgrade */}
      <section className="py-24 bg-slate-50" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Structured For Different Cooperative Models</h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">
              No two cooperative societies operate exactly the same way. The platform is designed with enough flexibility to support various models while preserving financial clarity and workflow discipline.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
             <div className="lg:col-span-4 flex flex-col gap-2">
               {coopTypes.map((type, i) => (
                 <button 
                   key={i}
                   onClick={() => setActiveTab(i)}
                   className={`text-left px-6 py-4 rounded-xl font-bold transition-all ${activeTab === i ? 'bg-white text-blue-900 shadow-md border border-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}
                 >
                   <div className="flex items-center justify-between">
                     {type.title}
                     {activeTab === i && <ChevronRight className="w-5 h-5 text-blue-600" />}
                   </div>
                 </button>
               ))}
             </div>
             
             <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 min-h-[300px] flex flex-col justify-center">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                   <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8">
                     <Building className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{coopTypes[activeTab].title} Solutions</h3>
                   <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">{coopTypes[activeTab].desc}</p>
                   <button className="text-blue-700 font-bold flex items-center gap-2 hover:text-blue-900 transition-colors">
                     View deployment features <ChevronRight className="w-4 h-4" />
                   </button>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      {/* Payment Highlight Upgrade */}
      <section className="py-32 bg-white" id="payment-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                {/* Visual workflow representing payment control */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative z-10">
                   <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-4 opacity-70">
                      <div className="text-xs text-slate-500 font-bold uppercase mb-2">Step 1: Member Action</div>
                      <div className="flex justify-between items-center">
                         <div className="font-semibold text-slate-900">Upload Transfer Receipt</div>
                         <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-bold">Pending</div>
                      </div>
                   </div>
                   
                   <div className="bg-white p-4 rounded-xl border-2 border-emerald-500 shadow-lg mb-4 transform scale-105 z-20 relative">
                      <div className="text-xs text-emerald-600 font-bold uppercase mb-2">Step 2: Officer Validation</div>
                      <div className="font-semibold text-slate-900 mb-3">Confirm Payment Evidence</div>
                      <div className="flex gap-2">
                         <button className="flex-1 bg-emerald-600 text-white text-sm font-bold py-2 rounded-lg">Approve & Update</button>
                         <button className="flex-1 bg-slate-100 text-slate-600 text-sm font-bold py-2 rounded-lg">Reject</button>
                      </div>
                   </div>

                   <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm opacity-70">
                      <div className="text-xs text-slate-500 font-bold uppercase mb-2">Step 3: System Action</div>
                      <div className="flex justify-between items-center">
                         <div className="font-semibold text-slate-900">Post to Member Ledger</div>
                         <div className="text-slate-400"><CheckCircle2 className="w-5 h-5"/></div>
                      </div>
                   </div>
                </div>
                {/* Decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
             </div>

             <div className="order-1 lg:order-2">
               <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-full mb-6">Built-in Financial Controls</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    A Stronger Way to Handle Member Payments and Receipt Evidence.
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                    Protect the cooperative from unverified claims. Authorized officers review uploaded evidence, validate submissions, and confirm receipts through a professional workflow.
                  </p>
                  
                  <ul className="space-y-4 text-slate-700 font-medium">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span>Members submit payment details and upload transfer evidence directly from their portal.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span>Financial Secretaries view a dedicated queue to approve, reject, or return records.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span>Verified updates trigger automatic General Ledger and Member Balance postings.</span>
                    </li>
                  </ul>
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Dual Value Band - Member Exp & Treasury */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
             <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="bg-slate-800/50 border border-slate-700 p-10 rounded-3xl hover:bg-slate-800 transition-colors"
             >
                <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-8 border border-blue-500/30">
                  <Wallet2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Give Members the Visibility They Deserve</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-8">
                  A modern cooperative should not leave members guessing. Provide a secure digital experience where members can see their savings, loan balances, payment submissions, and cooperative updates instantly.
                </p>
                <ul className="space-y-3 text-slate-400 font-medium text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Real-time savings ledger</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Loan amortization schedules</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Dividend notice boards</li>
                </ul>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
               className="bg-slate-800/50 border border-slate-700 p-10 rounded-3xl hover:bg-slate-800 transition-colors"
             >
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-8 border border-emerald-500/30">
                  <BarChart4 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Real Treasury & Financial Visibility</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-8">
                  Move beyond basic record keeping. Gain true treasury visibility with cash-at-hand tracking, reconciliation workflows, automated general ledgers, and modern reporting dashboards designed for executive intelligence.
                </p>
                <ul className="space-y-3 text-slate-400 font-medium text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Automated Balance Sheets</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Cashflow Reconciliation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Audit extraction ready</li>
                </ul>
             </motion.div>
           </div>
        </div>
      </section>
    </>
  );
}