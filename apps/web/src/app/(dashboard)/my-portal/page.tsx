'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PiggyBank, Banknote, ShieldCheck, Clock, 
  UploadCloud, FileText, CheckCircle2, XCircle, 
  ChevronRight, Calendar, AlertCircle, ArrowRightLeft,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function MemberPortalPage() {
  const [activeTab, setActiveTab] = useState<'ledger' | 'submissions' | 'loans'>('submissions');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      
      {/* Member Profile Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-white shadow-md flex items-center justify-center shrink-0 overflow-hidden relative">
            <div className="text-xl font-bold text-slate-400">OA</div>
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Oluwaseun&backgroundColor=f8fafc" alt="Avatar" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              Oluwaseun Adeyemi
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Active Member
              </span>
            </h1>
            <div className="text-sm font-medium text-slate-500 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>Member ID: <strong className="text-slate-700">PRG-2024-0891</strong></span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span>Branch: <strong className="text-slate-700">HQ Secretariat</strong></span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span>Joined: <strong className="text-slate-700">Jan 2024</strong></span>
            </div>
          </div>
        </div>
        <div className="flex shrink-0">
          <button 
            onClick={() => setIsSubmitModalOpen(true)}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <UploadCloud className="w-4 h-4" />
            Submit Payment
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Personal Savings", value: "₦1,450,000", info: "Last contribution: ₦50k (Oct 1)", icon: PiggyBank, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Active Loan Balance", value: "₦420,500", info: "Next deduction: ₦42,050", icon: Banknote, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Pending Submissions", value: "1", info: "Awaiting Finance Approval", icon: Clock, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Welfare Status", value: "Eligible", info: "Annual limits intact", icon: ShieldCheck, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
        ].map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col relative"
          >
            <div className="flex justify-between items-start mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${card.bg} ${card.color} ${card.border}`}>
                <card.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{card.label}</div>
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">{card.value}</div>
            <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Info className="w-3.5 h-3.5 text-slate-400" /> {card.info}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Activities & Ledger) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
             {/* Tabs */}
             <div className="flex border-b border-slate-100 bg-slate-50/50 px-2 shrink-0">
                {[
                  { id: 'submissions', label: 'Payment Submissions' },
                  { id: 'ledger', label: 'Personal Ledger' },
                  { id: 'loans', label: 'Active Loans' }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-3.5 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === tab.id ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
             </div>

             {/* Tab Content: Submissions */}
             {activeTab === 'submissions' && (
               <div className="flex-1 overflow-y-auto p-0">
                  <div className="divide-y divide-slate-100">
                    {[
                      { type: "Savings Contribution (Oct)", amount: "₦50,000", date: "Oct 24, 2024", status: "Pending Treasurer Confirmation", statusColor: "amber", icon: Clock },
                      { type: "Loan Repayment (Sep)", amount: "₦42,050", date: "Sep 28, 2024", status: "Approved", statusColor: "emerald", icon: CheckCircle2 },
                      { type: "Special Project Levy", amount: "₦10,000", date: "Sep 15, 2024", status: "Rejected - Invalid Receipt Image", statusColor: "red", icon: XCircle },
                      { type: "Savings Contribution (Sep)", amount: "₦50,000", date: "Sep 02, 2024", status: "Approved", statusColor: "emerald", icon: CheckCircle2 },
                    ].map((sub, i) => (
                      <div key={i} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-${sub.statusColor}-50 text-${sub.statusColor}-600`}>
                            <sub.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">{sub.type}</div>
                            <div className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-2">
                              <span>Ref: #{Math.floor(10000 + Math.random() * 90000)}</span>
                              <span>•</span>
                              <span>{sub.date}</span>
                            </div>
                            {/* Visual Status Indicator */}
                            <div className={`mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-${sub.statusColor}-50 text-${sub.statusColor}-700 text-[10px] font-bold uppercase tracking-wider border border-${sub.statusColor}-200/50`}>
                              <div className={`w-1.5 h-1.5 rounded-full bg-${sub.statusColor}-500`}></div>
                              {sub.status}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 sm:gap-1 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                          <div className="font-extrabold text-slate-900">{sub.amount}</div>
                          <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center">
                            View Details <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
             )}

             {/* Tab Content: Ledger */}
             {activeTab === 'ledger' && (
               <div className="flex-1 overflow-y-auto p-4">
                  <div className="bg-slate-50 rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-slate-100/50 text-slate-500 text-xs uppercase font-bold sticky top-0 backdrop-blur-md">
                        <tr>
                          <th className="px-4 py-3 border-b border-slate-200">Date</th>
                          <th className="px-4 py-3 border-b border-slate-200">Narration</th>
                          <th className="px-4 py-3 border-b border-slate-200 text-right">Debit</th>
                          <th className="px-4 py-3 border-b border-slate-200 text-right">Credit</th>
                          <th className="px-4 py-3 border-b border-slate-200 text-right">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-slate-500">Oct 01, 2024</td>
                          <td className="px-4 py-3 text-slate-900">Opening Balance</td>
                          <td className="px-4 py-3 text-right text-slate-400">-</td>
                          <td className="px-4 py-3 text-right text-slate-400">-</td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">₦1,400,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-500">Oct 24, 2024</td>
                          <td className="px-4 py-3 text-slate-900">Savings Contribution (Approved)</td>
                          <td className="px-4 py-3 text-right text-slate-400">-</td>
                          <td className="px-4 py-3 text-right text-emerald-600 font-bold">+₦50,000</td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">₦1,450,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
               </div>
             )}

             {/* Tab Content: Loans */}
             {activeTab === 'loans' && (
                <div className="flex-1 overflow-y-auto p-5">
                   <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm flex flex-col relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full pointer-events-none"></div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Standard Equipment Loan</div>
                          <div className="text-2xl font-extrabold text-slate-900">₦420,500 <span className="text-sm font-medium text-slate-500">remaining</span></div>
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-xs font-bold border border-emerald-200">Active</div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 mt-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs font-semibold text-slate-500 mb-6">
                        <span>45% Repaid</span>
                        <span>Total: ₦800,000</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 mt-auto">
                        <div>
                           <div className="text-[10px] uppercase font-bold text-slate-400">Next Deduction</div>
                           <div className="text-sm font-bold text-slate-900">₦42,050</div>
                           <div className="text-xs text-slate-500">Nov 28, 2024</div>
                        </div>
                        <div>
                           <div className="text-[10px] uppercase font-bold text-slate-400">Tenure</div>
                           <div className="text-sm font-bold text-slate-900">10 Months</div>
                           <div className="text-xs text-slate-500">Ends: Jun 2025</div>
                        </div>
                      </div>
                   </div>
                </div>
             )}
          </div>
        </div>

        {/* Right Column (Actions & Communications) */}
        <div className="space-y-6">
          
          {/* Quick Upload Widget */}
          <div className="bg-blue-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl border border-blue-800">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-700 rounded-full blur-2xl opacity-50"></div>
            <div className="relative z-10">
               <h3 className="text-lg font-bold mb-2">Fast Receipt Upload</h3>
               <p className="text-sm text-blue-200 font-medium mb-6 leading-relaxed">
                 Skip the manual paperwork. Upload your bank transfer evidence directly for immediate Treasurer review.
               </p>
               <button 
                 onClick={() => setIsSubmitModalOpen(true)}
                 className="w-full bg-white text-blue-900 hover:bg-blue-50 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50"
               >
                 <FileText className="w-5 h-5" /> Proceed to Upload
               </button>
            </div>
          </div>

          {/* Meeting & Governance Notice */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
             <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
               <Calendar className="w-4 h-4 text-slate-400" /> Upcoming Meetings
             </h3>
             <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex gap-4">
                <div className="bg-white border border-slate-200 rounded-lg w-12 h-12 flex flex-col items-center justify-center shrink-0 shadow-sm">
                   <span className="text-[10px] font-bold text-red-600 uppercase">Nov</span>
                   <span className="text-lg font-extrabold text-slate-900 leading-none">15</span>
                </div>
                <div>
                   <div className="font-bold text-slate-900 text-sm">Annual General Meeting</div>
                   <div className="text-xs text-slate-500 font-medium mt-1">10:00 AM • Main Hall & Virtual Access</div>
                   <button className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-800">View Agenda & Proxy Form</button>
                </div>
             </div>
          </div>

          {/* Alerts */}
          <div className="bg-amber-50 rounded-2xl border border-amber-200/60 p-5 flex gap-3">
             <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
             <div>
               <div className="text-sm font-bold text-amber-900">Rejected Submission Notice</div>
               <div className="text-xs text-amber-700/80 mt-1 font-medium leading-relaxed">
                 Your submission "Special Project Levy" was returned because the attached receipt image was blurry. Please re-upload a clearer image.
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Payment Submission Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setIsSubmitModalOpen(false)}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 flex flex-col overflow-hidden max-h-[90vh]"
            >
               {/* Modal Header */}
               <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <UploadCloud className="w-5 h-5 text-blue-600" />
                    Submit Payment Evidence
                  </h3>
                  <button onClick={() => setIsSubmitModalOpen(false)} className="text-slate-400 hover:text-slate-700 p-1 bg-white rounded-full border border-slate-200">
                    <XCircle className="w-5 h-5" />
                  </button>
               </div>
               
               {/* Modal Body */}
               <div className="p-6 overflow-y-auto custom-scrollbar space-y-5">
                  
                  {/* Informational Guidance */}
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex gap-3 text-blue-800 text-xs font-medium">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>Ensure your transfer receipt clearly shows the amount, date, and reference number. Submissions are reviewed sequentially.</p>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Payment Type</label>
                     <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none bg-slate-50 hover:bg-slate-100">
                        <option>Monthly Savings (Standard)</option>
                        <option>Loan Repayment</option>
                        <option>Welfare Contribution</option>
                        <option>Special Project Levy</option>
                     </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Amount (₦)</label>
                        <input type="text" placeholder="e.g. 50000" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:font-medium placeholder:text-slate-400" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Payment Date</label>
                        <input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Narration / Payment Reference</label>
                     <input type="text" placeholder="Transfer description or reference ID" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" />
                  </div>

                  {/* Upload Area */}
                  <div>
                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Upload Evidence (Receipt)</label>
                     <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 hover:bg-slate-50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <UploadCloud className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-sm font-bold text-slate-900 w-full truncate">Tap to browse or take a photo</div>
                        <div className="text-xs text-slate-500 mt-1 font-medium">JPEG, PNG, or PDF (Max 5MB)</div>
                     </div>
                  </div>
               </div>

               {/* Modal Footer */}
               <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 shrink-0">
                  <button onClick={() => setIsSubmitModalOpen(false)} className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                     Cancel
                  </button>
                  <button onClick={() => setIsSubmitModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-600/20 transition-all flex items-center gap-2">
                     Submit for Approval
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
