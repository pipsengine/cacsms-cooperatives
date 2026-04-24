'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, MapPin, FileCheck, CheckCircle2, 
  XCircle, Clock, Plus, Filter, Search, ShieldCheck, Mail,
  AlertTriangle, Phone, FileText
} from 'lucide-react';

const mockApplications = [
  {
    id: "TEN-8492-BX",
    legalName: "Progressive Staff Cooperative Society Ltd",
    shortName: "PROGS Coop",
    category: "Multipurpose Cooperative",
    state: "Lagos",
    date: "Oct 24, 2024",
    status: "Pending Verification",
    admin: "john@progs.org",
    phone: "+2348000000001",
    docs: ["Certificate of Incorporation", "Bye-Laws (Draft)"]
  },
  {
    id: "TEN-9103-CA",
    legalName: "Mainland Artisans Credit Union",
    shortName: "MACU",
    category: "Thrift & Credit Society",
    state: "FCT Abuja",
    date: "Oct 22, 2024",
    status: "Queried",
    admin: "admin@macu.org",
    phone: "+2348000000002",
    docs: ["Certificate of Incorporation"]
  }
];

export default function SuperAdminOnboardingQueue() {
  const [selectedApp, setSelectedApp] = useState<typeof mockApplications[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Onboarding & Tenant Queue</h1>
            <span className="bg-purple-100 text-purple-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-purple-200">
              Super Admin Console
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Review new cooperative registrations, verify KYC documentation, and orchestrate final workspace provisioning.
          </p>
        </div>
        <div className="flex items-center gap-3">
           <button className="bg-slate-900 text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
             <Plus className="w-4 h-4" /> Provision Manual Tenant
           </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col flex-1 min-h-[500px]">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 w-full sm:w-80">
               <Search className="w-4 h-4 text-slate-400 shrink-0" />
               <input 
                 type="text" 
                 placeholder="Search tenant ID, Cooperative Name..." 
                 className="bg-transparent border-none outline-none text-sm w-full ml-2 text-slate-800 placeholder:text-slate-400"
               />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <button className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-100">
                 <Filter className="w-4 h-4" /> Filter Status
               </button>
            </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold sticky top-0 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Tenant ID & Name</th>
                  <th className="px-6 py-4">Category & Location</th>
                  <th className="px-6 py-4">Primary Admin</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {mockApplications.map((app, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="text-xs text-slate-400 font-mono mb-0.5">{app.id}</div>
                      <div className="font-bold text-slate-900">{app.legalName}</div>
                      <div className="text-xs text-slate-500">{app.shortName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-slate-900">{app.category}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3"/> {app.state} HQ</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-slate-900 flex items-center gap-1.5"><Mail className="w-3 h-3"/> {app.admin}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1"><Phone className="w-3 h-3"/> {app.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border " + (app.status === 'Queried' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-blue-50 text-blue-700 border-blue-200')}>
                         <div className={"w-1.5 h-1.5 rounded-full " + (app.status === 'Queried' ? 'bg-amber-500' : 'bg-blue-500')}></div>
                         {app.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => setSelectedApp(app)}
                        className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>

      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedApp(null)}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ x: "100%", boxShadow: "-20px 0 25px -5px rgb(0 0 0 / 0.1)" }} 
              animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white h-full flex flex-col z-10 border-l border-slate-200"
            >
               <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                       KYC & Organization Review
                    </h3>
                  </div>
                  <button onClick={() => setSelectedApp(null)} className="text-slate-400 hover:text-slate-700 font-bold text-sm">Close</button>
               </div>

               <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target Tenant ID</div>
                    <div className="text-xl font-mono text-slate-900 font-bold mb-4">{selectedApp.id}</div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Legal Entity</div>
                        <div className="text-sm font-bold text-slate-900">{selectedApp.legalName}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Category</div>
                        <div className="text-sm font-bold text-slate-900">{selectedApp.category}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                       <FileCheck className="w-4 h-4" /> Verification Documents
                     </h4>
                     <div className="space-y-3">
                       {selectedApp.docs.map((doc, i) => (
                         <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5"/>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900">{doc}</div>
                                <div className="text-xs text-slate-500 font-medium">Uploaded {selectedApp.date}</div>
                              </div>
                           </div>
                           <button className="text-xs font-bold bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 shrink-0">
                             Inspect Document
                           </button>
                         </div>
                       ))}
                     </div>
                  </div>

                  {selectedApp.status === 'Queried' && (
                     <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                        <div>
                          <div className="text-sm font-bold text-amber-900">Active Admin Query</div>
                          <p className="text-xs text-amber-800 font-medium mt-1">Awaiting re-upload of Certificate of Incorporation due to bad image clarity.</p>
                        </div>
                     </div>
                  )}

               </div>

               <div className="p-4 border-t border-slate-200 bg-slate-50 gap-3 flex flex-col sm:flex-row shrink-0">
                  <button className="bg-white border border-red-200 text-red-600 hover:bg-red-50 px-4 py-2.5 rounded-xl text-sm font-bold flex-1 transition-colors flex justify-center items-center gap-2">
                     <XCircle className="w-4 h-4" /> Reject Activation
                  </button>
                  <button className="bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 px-4 py-2.5 rounded-xl text-sm font-bold flex-1 transition-colors flex justify-center items-center gap-2">
                     <AlertTriangle className="w-4 h-4" /> Raise Query
                  </button>
                  <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2.5 rounded-xl text-sm font-bold flex-[2] shadow-md shadow-emerald-600/20 transition-colors flex justify-center items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> Authorize & Provision Tenant
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
