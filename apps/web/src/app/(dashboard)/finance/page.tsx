'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Filter, Download, Plus, ArrowRightLeft, 
  CheckCircle2, XCircle, Clock, FileText, Image as ImageIcon,
  ChevronRight, ArrowUpRight, ArrowDownLeft, SlidersHorizontal,
  FileCheck, ShieldAlert, History, UserCheck, X
} from 'lucide-react';

// Mock Data representing the Finance & Payments Queue
const mockPayments = [
  {
    id: "TRX-89241",
    member: "Oluwaseun Adeyemi",
    memberId: "PRG-2024-0891",
    branch: "HQ Secretariat",
    type: "Savings Contribution",
    amount: "₦50,000",
    date: "Oct 24, 2024",
    status: "Pending Check",
    statusColor: "amber",
    evidence: "receipt_gtb.jpg",
    evidenceType: "image",
    stage: "Awaiting Treasurer",
    history: [
      { step: "Submitted by Member", time: "Oct 24, 10:45 AM", user: "Oluwaseun Adeyemi" },
      { step: "Verified by Fin Sec", time: "Oct 24, 14:20 PM", user: "Admin (T. Cole)" }
    ]
  },
  {
    id: "TRX-89242",
    member: "Sarah Jinadu",
    memberId: "PRG-2022-0124",
    branch: "Mainland Branch",
    type: "Loan Repayment",
    amount: "₦120,000",
    date: "Oct 24, 2024",
    status: "Pending Verified",
    statusColor: "blue",
    evidence: "transfer_proof.pdf",
    evidenceType: "pdf",
    stage: "Awaiting Fin. Sec",
    history: [
      { step: "Submitted by Member", time: "Oct 24, 09:15 AM", user: "Sarah Jinadu" }
    ]
  },
  {
    id: "TRX-89240",
    member: "David Okafor",
    memberId: "PRG-2023-0455",
    branch: "Island Branch",
    type: "Special Levy",
    amount: "₦10,000",
    date: "Oct 23, 2024",
    status: "Returned",
    statusColor: "red",
    evidence: "blurry_img.jpg",
    evidenceType: "image",
    stage: "With Member",
    history: [
      { step: "Submitted by Member", time: "Oct 23, 11:00 AM", user: "David Okafor" },
      { step: "Returned (Blurry Receipt)", time: "Oct 23, 16:30 PM", user: "Admin (T. Cole)" }
    ]
  },
  {
    id: "TRX-89239",
    member: "Michael Awosika",
    memberId: "PRG-2021-0089",
    branch: "HQ Secretariat",
    type: "Savings Contribution",
    amount: "₦150,000",
    date: "Oct 23, 2024",
    status: "Confirmed",
    statusColor: "emerald",
    evidence: "receipt_zenith.jpg",
    evidenceType: "image",
    stage: "Posted to GL",
    history: [
      { step: "Submitted by Member", time: "Oct 23, 08:30 AM", user: "Michael Awosika" },
      { step: "Verified by Fin Sec", time: "Oct 23, 10:15 AM", user: "Admin (T. Cole)" },
      { step: "Approved & Posted by Treasurer", time: "Oct 23, 13:45 PM", user: "Treasurer (M. Alabi)" }
    ]
  }
];

import { BarChart3 } from 'lucide-react';

export default function PaymentsConfirmationControl() {
  const [activeTab, setActiveTab] = useState('review-queue');
  const [selectedPayment, setSelectedPayment] = useState<typeof mockPayments[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 h-full flex flex-col">
      
      {/* Header & Financial Control Panel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Finance Operations & Control</h1>
            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-blue-200">
              Maker-Checker Active
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Review member submissions, enforce dual-control approvals, and post entries to the General Ledger.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
            <Download className="w-4 h-4" />
            <span>Export Audit Trail</span>
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Manual GL Entry</span>
          </button>
        </div>
      </div>

      {/* Operational Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Pending First Verification", value: "18", desc: "Awaiting Fin. Secretary", color: "blue" },
          { label: "Pending Final Approval", value: "7", desc: "Awaiting Treasurer", color: "amber" },
          { label: "Unreconciled Bank Flow", value: "₦1.2M", desc: "15 unrecognized deposits", color: "purple" },
          { label: "Today's Cleared Volume", value: "₦4.5M", desc: "Posted strictly to GL", color: "emerald" }
        ].map((metric, i) => (
          <div key={i} className={`bg-white rounded-2xl p-5 border-l-4 border-${metric.color}-500 border-y border-r border-y-slate-200 border-r-slate-200 shadow-sm`}>
             <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{metric.label}</div>
             <div className="text-2xl font-extrabold text-slate-900">{metric.value}</div>
             <div className="text-xs font-medium text-slate-500 mt-2">{metric.desc}</div>
          </div>
        ))}
      </div>

      {/* Master Queue Interface */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col flex-1 min-h-[500px]">
         
         {/* Queue Tabs */}
         <div className="border-b border-slate-200 bg-slate-50/50 rounded-t-2xl px-2 flex overflow-x-auto custom-scrollbar shrink-0">
           {[
             { id: 'review-queue', label: 'Payment Review Queue', icon: FileCheck },
             { id: 'treasury', label: 'Treasury & Bank Match', icon: ArrowRightLeft },
             { id: 'accounting', label: 'General Ledger', icon: History },
             { id: 'reports', label: 'Finance Reports', icon: BarChart3 }
           ].map((tab) => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`px-5 py-4 text-sm font-bold border-b-2 whitespace-nowrap flex items-center gap-2 transition-colors ${
                 activeTab === tab.id ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
               }`}
             >
               <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'}`} />
               {tab.label}
             </button>
           ))}
         </div>

         {/* Toolbar */}
         <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
            <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 w-full sm:w-80 focus-within:ring-2 focus-within:ring-blue-100 border border-transparent focus-within:border-blue-300 focus-within:bg-white transition-all">
               <Search className="w-4 h-4 text-slate-400 shrink-0" />
               <input 
                 type="text" 
                 placeholder="Search Reference, Member Name..." 
                 className="bg-transparent border-none outline-none text-sm w-full ml-2 text-slate-800 placeholder:text-slate-400"
               />
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 flex-1 sm:flex-none">
                 <Filter className="w-4 h-4" /> Filters
               </button>
               <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 flex-1 sm:flex-none">
                 <SlidersHorizontal className="w-4 h-4" /> Columns
               </button>
            </div>
         </div>

         {/* Queue Data Table */}
         <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold sticky top-0 border-b border-slate-200 shadow-sm z-10">
                <tr>
                  <th className="px-6 py-4">Transaction Details</th>
                  <th className="px-6 py-4">Member Info</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                  <th className="px-6 py-4">Evidence</th>
                  <th className="px-6 py-4">Approval Stage</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {mockPayments.map((payment, i) => (
                  <tr key={payment.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">{payment.id}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{payment.type} • {payment.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold flex items-center gap-1.5 text-slate-900">
                         {payment.member}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{payment.memberId} | {payment.branch}</div>
                    </td>
                    <td className="px-6 py-4 text-right font-extrabold text-slate-900">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md text-xs font-bold inline-flex border border-blue-100">
                         {payment.evidenceType === 'image' ? <ImageIcon className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                         View Receipt
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-${payment.statusColor}-50 text-${payment.statusColor}-700 text-[10px] font-bold uppercase tracking-wider border border-${payment.statusColor}-200/50`}>
                         <div className={`w-1.5 h-1.5 rounded-full bg-${payment.statusColor}-500`}></div>
                         {payment.stage}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => setSelectedPayment(payment)}
                        className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                      >
                        Inspect & Verify
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>

      {/* Detail Slide-over (Operational Control Maker/Checker) */}
      <AnimatePresence>
        {selectedPayment && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPayment(null)}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ x: "100%", boxShadow: "-20px 0 25px -5px rgb(0 0 0 / 0.1)" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white h-full flex flex-col z-10 border-l border-slate-200"
            >
               {/* Drawer Header */}
               <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      Review Submission 
                      <span className="font-mono text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded">{selectedPayment.id}</span>
                    </h3>
                  </div>
                  <button onClick={() => setSelectedPayment(null)} className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-full transition-colors">
                     <X className="w-5 h-5" />
                  </button>
               </div>

               {/* Drawer Body */}
               <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                  
                  {/* Evidence Display (Mocking a receipt block) */}
                  <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                       <FileCheck className="w-4 h-4" /> Attached Evidence
                     </h4>
                     <div className="w-full bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl aspect-video flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 transition-colors relative overflow-hidden group">
                        <ImageIcon className="w-10 h-10 mb-2 opacity-50 group-hover:opacity-100 group-hover:text-blue-500 transition-all" />
                        <span className="text-sm font-semibold">{selectedPayment.evidence}</span>
                        <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl">
                             Expand Image Fullscreen
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                     {/* Member Data */}
                     <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">Member Details</h4>
                        <div className="space-y-3">
                           <div>
                             <div className="text-xs text-slate-500 font-medium pb-0.5">Name</div>
                             <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                               <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                               {selectedPayment.member}
                             </div>
                           </div>
                           <div>
                             <div className="text-xs text-slate-500 font-medium pb-0.5">Member ID</div>
                             <div className="text-sm font-semibold text-slate-700">{selectedPayment.memberId}</div>
                           </div>
                           <div>
                             <div className="text-xs text-slate-500 font-medium pb-0.5">Branch</div>
                             <div className="text-sm font-semibold text-slate-700">{selectedPayment.branch}</div>
                           </div>
                        </div>
                     </div>

                     {/* Transaction Data */}
                     <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-3">Transaction Claim</h4>
                        <div className="space-y-3">
                           <div>
                             <div className="text-xs text-slate-500 font-medium pb-0.5">Payment Type</div>
                             <div className="text-sm font-bold text-slate-900">{selectedPayment.type}</div>
                           </div>
                           <div>
                             <div className="text-xs text-slate-500 font-medium pb-0.5">Declared Amount</div>
                             <div className="text-xl font-extrabold text-blue-700">{selectedPayment.amount}</div>
                           </div>
                           <div>
                             <div className="text-xs text-slate-500 font-medium pb-0.5">Expected Deduction</div>
                             <div className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                               {selectedPayment.amount} 
                               <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded font-bold uppercase">Matches Profile</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Audit Trail & Maker-Checker Timeline */}
                  <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                       <ShieldAlert className="w-4 h-4" /> Audit & Approval Trail
                     </h4>
                     <div className="relative pl-3 border-l-2 border-slate-200 space-y-5 ml-2">
                        {selectedPayment.history.map((hist, i) => (
                           <div key={i} className="relative">
                             <div className="absolute -left-[18.5px] top-1 w-3 h-3 bg-slate-200 border-2 border-white rounded-full"></div>
                             <div className="text-sm font-bold text-slate-900">{hist.step}</div>
                             <div className="text-xs font-medium text-slate-500">{hist.user} • {hist.time}</div>
                           </div>
                        ))}
                        {/* Next Pending Step */}
                        <div className="relative opacity-60">
                           <div className="absolute -left-[18.5px] top-1 w-3 h-3 bg-white border-2 border-amber-500 rounded-full"></div>
                           <div className="text-sm font-bold text-slate-700 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-lg inline-block">
                             Current Stage: {selectedPayment.stage}
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

               {/* Maker-Checker Actions Footer */}
               <div className="p-4 border-t border-slate-200 bg-slate-50 gap-3 flex flex-col sm:flex-row shrink-0">
                  <button className="bg-white border border-red-200 text-red-600 hover:bg-red-50 px-4 py-2.5 rounded-xl text-sm font-bold flex-1 transition-colors flex justify-center items-center gap-2">
                     <XCircle className="w-4 h-4" /> Reject Entry
                  </button>
                  <button className="bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 px-4 py-2.5 rounded-xl text-sm font-bold flex-1 transition-colors flex justify-center items-center gap-2">
                     <ArrowDownLeft className="w-4 h-4" /> Return to Member
                  </button>
                  <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-xl text-sm font-bold flex-[2] shadow-md shadow-blue-600/20 transition-colors flex justify-center items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> Verify & Push to Treasurer
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
