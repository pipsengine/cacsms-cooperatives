'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, UserPlus, Filter, Search, Download, UploadCloud, 
  MapPin, Clock, CreditCard, HeartHandshake, Banknote, 
  Mail, Phone, Store, UserCheck, ShieldAlert,
  ArrowDownLeft, ArrowUpRight, CheckCircle2, ChevronRight, X,
  FileText
} from 'lucide-react';

const mockMembers = [
  {
    id: "PRG-2024-0891",
    name: "Oluwaseun Adeyemi",
    email: "o.adeyemi@example.com",
    phone: "08012345678",
    category: "Regular Member",
    branch: "HQ Secretariat",
    status: "Active",
    kycStatus: "Verified",
    joined: "Jan 12, 2024",
    avatarColor: "bg-emerald-100 text-emerald-700"
  },
  {
    id: "PRG-2023-0455",
    name: "David Okafor",
    email: "d.okafor@example.com",
    phone: "08023456789",
    category: "Associate Member",
    branch: "Island Branch",
    status: "Suspended",
    kycStatus: "Pending",
    joined: "Aug 05, 2023",
    avatarColor: "bg-slate-100 text-slate-700"
  },
  {
    id: "PRG-2022-0124",
    name: "Sarah Jinadu",
    email: "s.jinadu@example.com",
    phone: "08034567890",
    category: "Executive Member",
    branch: "Mainland Branch",
    status: "Active",
    kycStatus: "Verified",
    joined: "Feb 20, 2022",
    avatarColor: "bg-purple-100 text-purple-700"
  },
  {
    id: "PRG-2024-0902",
    name: "Amina Bello",
    email: "a.bello@example.com",
    phone: "08045678901",
    category: "Regular Member",
    branch: "HQ Secretariat",
    status: "Inactive",
    kycStatus: "Queried",
    joined: "Mar 01, 2024",
    avatarColor: "bg-blue-100 text-blue-700"
  }
];

export default function MembershipDirectory() {
  const [activeView, setActiveView] = useState<'directory' | 'kyc' | 'import'>('directory');
  const [selectedMember, setSelectedMember] = useState<typeof mockMembers[0] | null>(null);
  const [memberTab, setMemberTab] = useState<'overview' | 'financials' | 'kyc' | 'admin'>('overview');

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Members & Identity Directory</h1>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Centrally manage cooperative memberships, roles, KYC statuses, and institutional lifecycles universally.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
            <Download className="w-4 h-4" />
            <span>Export Registry</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
            <UserPlus className="w-4 h-4" />
            <span>Onboard Member</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total Active Members", value: "842", subtitle: "+12 this month", color: "text-slate-900" },
          { label: "Pending KYC Actions", value: "24", subtitle: "Awaiting Admin Review", color: "text-amber-600" },
          { label: "Suspended Accounts", value: "7", subtitle: "Requires intervention", color: "text-red-600" },
          { label: "Branch Coverage", value: "14", subtitle: "Active geographical nodes", color: "text-blue-600" }
        ].map((metric, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
             <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{metric.label}</div>
             <div className={"text-2xl font-extrabold " + metric.color}>{metric.value}</div>
             <div className="text-xs font-medium text-slate-500 mt-2">{metric.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col flex-1 min-h-[500px]">
         {/* Tabs */}
         <div className="flex border-b border-slate-200 bg-slate-50/50 px-2 shrink-0 overflow-x-auto custom-scrollbar">
            {[
              { id: 'directory', label: 'Master Directory', icon: Users },
              { id: 'kyc', label: 'KYC & Approvals Queue', icon: UserCheck },
              { id: 'import', label: 'Bulk Imports', icon: UploadCloud }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveView(tab.id as any)}
                className={"px-5 py-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap " + (activeView === tab.id ? "border-blue-600 text-blue-700 bg-blue-50/30" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300")}
              >
                <tab.icon className={"w-4 h-4 " + (activeView === tab.id ? "text-blue-600" : "text-slate-400")} />
                {tab.label}
              </button>
            ))}
         </div>

         {/* Toolbar */}
         <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
            <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 w-full sm:w-80 border border-transparent focus-within:border-blue-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
               <Search className="w-4 h-4 text-slate-400 shrink-0" />
               <input 
                 type="text" 
                 placeholder="Search by name, PIN, phone..." 
                 className="bg-transparent border-none outline-none text-sm w-full ml-2 text-slate-800 placeholder:text-slate-400"
               />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <span className="text-xs font-bold text-slate-400 uppercase">Filters:</span>
               <select className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-semibold outline-none focus:border-blue-500">
                 <option>All Branches</option>
                 <option>HQ Secretariat</option>
                 <option>Mainland Branch</option>
               </select>
               <select className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-semibold outline-none focus:border-blue-500">
                 <option>All Categories</option>
                 <option>Regular Member</option>
                 <option>Executive Member</option>
               </select>
            </div>
         </div>

         {/* Data Table */}
         <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold sticky top-0 border-b border-slate-200 shadow-sm z-10">
                <tr>
                  <th className="px-6 py-4">Biodata & Identity</th>
                  <th className="px-6 py-4">Category & Location</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Verification</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {mockMembers.map((member, i) => (
                  <tr key={member.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className={"w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-slate-200 text-lg font-bold " + member.avatarColor}>
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{member.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{member.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{member.category}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3"/> {member.branch}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-slate-900 flex items-center gap-1.5"><Mail className="w-3 h-3 text-slate-400"/> {member.email}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1"><Phone className="w-3 h-3 text-slate-400"/> {member.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      {member.kycStatus === 'Verified' && <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 w-max"><CheckCircle2 className="w-3 h-3"/> Verified</span>}
                      {member.kycStatus === 'Pending' && <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 w-max"><Clock className="w-3 h-3"/> Pending</span>}
                      {member.kycStatus === 'Queried' && <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 w-max"><ShieldAlert className="w-3 h-3"/> Queried</span>}
                    </td>
                    <td className="px-6 py-4">
                      {member.status === 'Active' && <span className="bg-blue-50 text-blue-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-blue-200 w-max">Active</span>}
                      {member.status === 'Suspended' && <span className="bg-red-50 text-red-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-red-200 w-max">Suspended</span>}
                      {member.status === 'Inactive' && <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-slate-200 w-max">Inactive</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => setSelectedMember(member)}
                        className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                      >
                        Profile View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>

      {/* Member Profile Slide-Over */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setSelectedMember(null)}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div 
               initial={{ x: "100%", boxShadow: "-20px 0 25px -5px rgb(0 0 0 / 0.1)" }} 
               animate={{ x: 0 }} exit={{ x: "100%" }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="relative w-full max-w-4xl bg-slate-50 h-full flex flex-col z-10 border-l border-slate-200"
            >
               {/* Drawer Header Stack */}
               <div className="bg-white border-b border-slate-200 shrink-0">
                  <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Member Lifecycle & Digital Record</h3>
                    <button onClick={() => setSelectedMember(null)} className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-full transition-colors flex items-center gap-1">
                      <span className="text-xs font-bold">Close</span> <X className="w-4 h-4"/>
                    </button>
                  </div>
                  
                  <div className="px-8 py-6 flex items-start gap-6 relative">
                     <div className={"w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 text-3xl font-bold shadow-sm " + selectedMember.avatarColor}>
                        {selectedMember.name.charAt(0)}
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center gap-3">
                           <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{selectedMember.name}</h2>
                           {selectedMember.status === 'Active' && <span className="bg-blue-50 border border-blue-200 text-blue-700 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">Active Record</span>}
                           {selectedMember.status === 'Suspended' && <span className="bg-red-50 border border-red-200 text-red-700 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">Suspended Record</span>}
                        </div>
                        <div className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-4">
                           <span>{selectedMember.id}</span>
                           <span className="text-slate-300">•</span>
                           <span>{selectedMember.category}</span>
                           <span className="text-slate-300">•</span>
                           <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/> {selectedMember.branch}</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex border-t border-slate-100 bg-slate-50/50 px-4 overflow-x-auto">
                     {[
                       { id: 'overview', label: 'Biodata & Overview' },
                       { id: 'financials', label: 'Financial Summaries' },
                       { id: 'kyc', label: 'KYC & Documents' },
                       { id: 'admin', label: 'Administrative Actions' }
                     ].map(t => (
                       <button 
                         key={t.id} onClick={() => setMemberTab(t.id as any)}
                         className={"px-4 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap " + (memberTab === t.id ? "border-blue-600 text-blue-700" : "border-transparent text-slate-500 hover:text-slate-700")}
                       >
                         {t.label}
                       </button>
                     ))}
                  </div>
               </div>

               {/* Drawer Body Area */}
               <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                  
                  {memberTab === 'overview' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                       <div className="grid grid-cols-2 gap-6">
                         <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Contact Mapping</h4>
                            <div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Primary Email</div>
                               <div className="text-sm font-semibold text-slate-900">{selectedMember.email}</div>
                            </div>
                            <div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Mobile Number</div>
                               <div className="text-sm font-semibold text-slate-900">{selectedMember.phone}</div>
                            </div>
                            <div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Residential Address</div>
                               <div className="text-sm font-medium text-slate-700 leading-snug">No 15, Example Layout Avenue, Ikeja, Lagos, Nigeria.</div>
                            </div>
                         </div>
                         <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Institutional Mapping</h4>
                            <div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Cooperative Entry Date</div>
                               <div className="text-sm font-semibold text-slate-900">{selectedMember.joined}</div>
                            </div>
                            <div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Assigned Role / Title</div>
                               <div className="text-sm font-semibold text-slate-900">General Member</div>
                            </div>
                         </div>
                       </div>
                    </motion.div>
                  )}

                  {memberTab === 'admin' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                       <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2">Lifecycle Management</h4>
                          <p className="text-sm font-medium text-slate-500 mb-6 max-w-2xl">
                             Modifying a member's lifecycle status restricts their platform access, stops active deduction schedules, and logs an institutional audit marker.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <button className="bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 p-4 rounded-xl text-left transition-colors flex flex-col items-start group">
                                <span className="font-bold mb-1 flex items-center gap-2"><ShieldAlert className="w-4 h-4"/> Suspend Privileges</span>
                                <span className="text-xs font-medium text-amber-700/80">Temporarily freeze member account. Outstanding loans continue to run.</span>
                             </button>

                             <button className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 p-4 rounded-xl text-left transition-colors flex flex-col items-start group">
                                <span className="font-bold mb-1 flex items-center gap-2"><UserCheck className="w-4 h-4"/> Mark as Withdrawn (Exit)</span>
                                <span className="text-xs font-medium text-red-700/80">Permanently close active participation. Generates final dividend calculations.</span>
                             </button>
                             
                             <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 p-4 rounded-xl text-left transition-colors flex flex-col items-start group">
                                <span className="font-bold mb-1 flex items-center gap-2"><Users className="w-4 h-4"/> Record Deceased State</span>
                                <span className="text-xs font-medium text-slate-600">Triggers beneficiary asset transfer workflow and locks biodata.</span>
                             </button>
                          </div>
                       </div>
                    </motion.div>
                  )}

                  {memberTab === 'kyc' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                       
                       <div className="flex items-center justify-between mb-2">
                           <h4 className="text-lg font-bold text-slate-900">Identity Documents</h4>
                           <div className="text-sm font-bold text-blue-600 flex items-center gap-1 cursor-pointer hover:underline">
                             <UploadCloud className="w-4 h-4"/> Request Re-upload
                           </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 border border-emerald-200 rounded-xl flex flex-col justify-between h-36 relative overflow-hidden group">
                             <div className="z-10 flex justify-between items-start">
                                <div>
                                   <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Approved Document</div>
                                   <div className="font-bold text-slate-900">National ID Card</div>
                                </div>
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                             </div>
                             <button className="text-left text-xs font-bold text-emerald-700 mt-auto hover:underline z-10 w-max">Inspect File Preview</button>
                             <div className="absolute right-0 bottom-0 p-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110">
                               <FileText className="w-20 h-20" />
                             </div>
                          </div>

                          <div className="bg-white p-4 border border-amber-200 rounded-xl flex flex-col justify-between h-36 relative overflow-hidden group">
                             <div className="z-10 flex justify-between items-start">
                                <div>
                                   <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Awaiting Review</div>
                                   <div className="font-bold text-slate-900">Utility Bill (Address verification)</div>
                                </div>
                                <Clock className="w-5 h-5 text-amber-500" />
                             </div>
                             <div className="pt-2 z-10 flex gap-2 w-full mt-auto">
                                <button className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-amber-700 flex-1">Approve</button>
                                <button className="bg-white text-red-600 border border-red-200 text-xs font-bold px-3 py-1.5 rounded hover:bg-red-50 flex-1">Reject</button>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  )}

                  {memberTab === 'financials' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                             <div className="flex items-center gap-2 mb-2">
                               <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CreditCard className="w-4 h-4"/></div>
                               <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Confirmed Savings</span>
                             </div>
                             <div className="text-2xl font-extrabold text-emerald-900">₦1,450,000</div>
                          </div>

                          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                             <div className="flex items-center gap-2 mb-2">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Banknote className="w-4 h-4"/></div>
                               <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">Active Loan Exposure</span>
                             </div>
                             <div className="text-2xl font-extrabold text-blue-900">₦420,500 <span className="text-sm font-medium opacity-70">rem.</span></div>
                          </div>
                          <div className="col-span-2">
                             <button className="w-full bg-white border border-slate-200 shadow-sm rounded-xl p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0"><CheckCircle2 className="w-5 h-5"/></div>
                                  <div className="text-left">
                                     <div className="font-bold text-slate-900 text-sm">Welfare Eligibility</div>
                                     <div className="text-xs font-medium text-slate-500 mt-0.5">Member is fully eligible for welfare payouts under Category B.</div>
                                  </div>
                               </div>
                               <ChevronRight className="w-5 h-5 text-slate-400" />
                             </button>
                          </div>
                          <div className="col-span-2">
                             <button className="w-full bg-slate-900 text-white rounded-xl p-4 flex items-center justify-center hover:bg-slate-800 transition-colors gap-2 font-bold text-sm shadow-md">
                               <ArrowUpRight className="w-4 h-4"/> Jump to Member's Individual Ledger
                             </button>
                          </div>
                       </div>
                    </motion.div>
                  )}

               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}