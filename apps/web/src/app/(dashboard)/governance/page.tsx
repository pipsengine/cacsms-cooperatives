'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Key, Users, BookOpen, UserCog, History, GitMerge, 
  AlertCircle, ArrowRightLeft, CheckSquare, XSquare, Plus,
  ChevronRight, ArrowRight, ShieldAlert, CheckCircle2,
  Lock, KeyRound, MapPin, Search, X
} from 'lucide-react';

const mockRoles = [
  { id: 'R1', name: 'Super Administrator', members: 2, type: 'System', risk: 'Critical', desc: 'Unrestricted access to all modules, tenant controls, and root settings.' },
  { id: 'R2', name: 'President', members: 1, type: 'System', risk: 'High', desc: 'Overarching view, ultimate approver for high-value loans and expulsions.' },
  { id: 'R3', name: 'Financial Secretary', members: 1, type: 'System', risk: 'High', desc: 'Treasury operations, payroll posting, GL entries, and payment review.' },
  { id: 'R4', name: 'Treasurer', members: 1, type: 'System', risk: 'High', desc: 'Bank reconciliation, final payment approval, and fund sweeps.' },
  { id: 'R5', name: 'Loan Officer', members: 3, type: 'Custom', risk: 'Medium', desc: 'Review loan applications, score credit, and initiate disbursement queues.' },
  { id: 'R6', name: 'Branch Manager', members: 4, type: 'Custom', risk: 'Medium', desc: 'Administrative control scoped strictly to their specific local branch.' },
  { id: 'R7', name: 'Member', members: 842, type: 'System', risk: 'Low', desc: 'Default read-only self-service access to own profile and interactions.' },
];

const mockOfficers = [
  { id: 'O1', name: 'Sarah Jinadu', role: 'Financial Secretary', scope: 'Global', tenureStart: 'Jan 2024', tenureEnd: 'Dec 2026', status: 'Active' },
  { id: 'O2', name: 'David Okafor', role: 'Branch Manager', scope: 'Mainland Branch', tenureStart: 'Mar 2023', tenureEnd: 'Mar 2025', status: 'Active' },
  { id: 'O3', name: 'Aminu Bello', role: 'Loan Officer', scope: 'Global', tenureStart: 'Feb 2024', tenureEnd: 'Feb 2025', status: 'Active' },
  { id: 'O4', name: 'Grace Adebayo', role: 'Treasurer', scope: 'Global', tenureStart: 'Jan 2024', tenureEnd: 'Dec 2026', status: 'Delegated - Leave' },
];

const capabilities = [
  { module: 'Members & KYC', actions: ['View', 'Edit', 'Approve', 'Export', 'Delete'] },
  { module: 'Savings Matrix', actions: ['View', 'Edit', 'Approve', 'Export', 'Delete'] },
  { module: 'Loan Book', actions: ['View', 'Create', 'Approve', 'Disburse', 'Delete'] },
  { module: 'General Ledger', actions: ['View', 'Post', 'Reverse', 'Export', 'Close'] },
  { module: 'System Config', actions: ['View', 'Edit', 'N/A', 'N/A', 'N/A'] }
];

export default function GovernanceModule() {
  const [activeTab, setActiveTab] = useState<'roles' | 'officers' | 'approvals' | 'audit'>('roles');
  const [selectedRole, setSelectedRole] = useState<typeof mockRoles[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Governance & Access Control</h1>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Configure strict access roles, manage officer tenure, enforce maker-checker chains, and audit system privileges.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-slate-800 transition-all">
            <Shield className="w-4 h-4" /> Policy Center
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Active Defined Roles", value: "14", change: "System & Custom", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Critical Risk Privileges", value: "3", change: "Requires MFA", color: "text-red-600", bg: "bg-red-50" },
          { label: "Active Delegations", value: "1", change: "Temporary Overrides", color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Maker-Checker Rules", value: "8", change: "Enforced Pathways", color: "text-emerald-600", bg: "bg-emerald-50" }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{stat.label}</div>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-500">{stat.change}</div>
            </div>
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
              <KeyRound className={`w-5 h-5 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col flex-1 min-h-[600px]">
         {/* Tabs */}
         <div className="flex border-b border-slate-200 bg-slate-50/50 px-2 shrink-0 overflow-x-auto custom-scrollbar">
            {[
              { id: 'roles', label: 'Role Matrix & Scopes', icon: GitMerge },
              { id: 'officers', label: 'Officer Assignment & Tenure', icon: UserCog },
              { id: 'approvals', label: 'Maker-Checker Rules', icon: CheckSquare },
              { id: 'audit', label: 'Privilege Event Logs', icon: History }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? "border-blue-600 text-blue-700 bg-blue-50/30" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-blue-600" : "text-slate-400"}`} />
                {tab.label}
              </button>
            ))}
         </div>

         {/* Content Engine */}
         <div className="flex-1 flex flex-col">
           {activeTab === 'roles' && (
             <div className="p-6 h-full flex flex-col">
               <div className="flex justify-between items-center mb-6">
                 <div>
                   <h3 className="text-lg font-bold text-slate-900">Configured Role Definitions</h3>
                   <p className="text-sm font-medium text-slate-500 mt-1">Select a role to inspect its precise access payload and scope modifiers.</p>
                 </div>
                 <button className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 flex items-center gap-2">
                   <Plus className="w-4 h-4" /> Create Custom Role
                 </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {mockRoles.map((role) => (
                   <div 
                     key={role.id} 
                     onClick={() => setSelectedRole(role)}
                     className="bg-white border border-slate-200 p-5 rounded-2xl hover:border-blue-400 hover:shadow-md cursor-pointer transition-all group"
                   >
                     <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                           <Shield className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
                         </div>
                         <div>
                           <div className="font-bold text-slate-900 leading-tight">{role.name}</div>
                           <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{role.type} Role</div>
                         </div>
                       </div>
                       <div className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                         role.risk === 'Critical' ? 'bg-red-50 text-red-700' :
                         role.risk === 'High' ? 'bg-amber-50 text-amber-700' :
                         role.risk === 'Medium' ? 'bg-blue-50 text-blue-700' :
                         'bg-slate-100 text-slate-600'
                       }`}>
                         {role.risk} Risk
                       </div>
                     </div>
                     <p className="text-sm font-medium text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                       {role.desc}
                     </p>
                     <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                       <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded-md">{role.members} Assigned</span>
                       <span className="text-xs font-bold text-blue-600 group-hover:underline">Inspect Matrix &rarr;</span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           )}

           {activeTab === 'officers' && (
             <div className="flex-1 flex flex-col">
               <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-full sm:w-80">
                     <Search className="w-4 h-4 text-slate-400 shrink-0" />
                     <input type="text" placeholder="Search officers..." className="bg-transparent border-none outline-none text-sm w-full ml-2 text-slate-700" />
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700">
                    <UserCog className="w-4 h-4" /> Appoint Officer
                  </button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4">Officer Details</th>
                        <th className="px-6 py-4">Assigned Role & Scope</th>
                        <th className="px-6 py-4">Tenure Bounds</th>
                        <th className="px-6 py-4">State</th>
                        <th className="px-6 py-4 text-center">Manage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {mockOfficers.map((off, i) => (
                        <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-bold text-slate-900">{off.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{off.id} - Fully KYC Verified</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-bold text-slate-900 flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-blue-600" /> {off.role}</div>
                            <div className="text-xs text-slate-500 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3"/> Scope: {off.scope}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-semibold text-slate-900">{off.tenureStart} — {off.tenureEnd}</div>
                          </td>
                          <td className="px-6 py-4">
                            {off.status === 'Active' ? (
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center w-max gap-1"><CheckCircle2 className="w-3 h-3"/> {off.status}</span>
                            ) : (
                              <span className="bg-purple-50 text-purple-700 border border-purple-200 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center w-max gap-1"><ArrowRightLeft className="w-3 h-3"/> {off.status}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center space-x-2">
                             <button className="text-xs font-bold bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700">Delegate</button>
                             <button className="text-xs font-bold bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg hover:bg-slate-50 text-red-600">Revoke</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
               </div>
             </div>
           )}

           {activeTab === 'approvals' && (
             <div className="p-6 h-full">
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-4 mb-8">
                 <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-sm font-bold text-blue-900">Maker-Checker Constraints</h4>
                   <p className="text-sm font-medium text-blue-800/80 mt-1">Rule definitions govern irreducible workflows. If a rule specifies dual-approval, single actors mathematically cannot force the transaction state forward.</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {[
                   { title: "Loan Disbursement Execution (> ₦1.0M)", chain: ["Loan Officer (Maker)", "Fin Sec (Checker 1)", "President (Final)"], status: "Active" },
                   { title: "General Ledger Manual Journal Entry", chain: ["Fin Sec (Maker)", "Treasurer (Review & Post)"], status: "Active" },
                   { title: "Member Disciplinary Expulsion", chain: ["General Sec (Maker)", "Board Committee (Consensus)"], status: "Active" }
                 ].map((rule, i) => (
                   <div key={i} className="border border-slate-200 rounded-2xl p-5 hover:border-slate-300 transition-colors bg-white shadow-sm">
                     <div className="flex justify-between items-start mb-4">
                       <div className="font-bold text-slate-900">{rule.title}</div>
                       <span className="bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Enforced</span>
                     </div>
                     <div className="flex flex-col gap-2 relative">
                        <div className="absolute left-3 top-3 bottom-3 w-px bg-slate-200 z-0"></div>
                        {rule.chain.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3 z-10 relative bg-white">
                            <div className="w-6 h-6 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                              {idx + 1}
                            </div>
                            <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 flex-1">
                              {step}
                            </div>
                          </div>
                        ))}
                     </div>
                     <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                       <button className="text-xs font-bold text-blue-600 hover:text-blue-800">Edit Hierarchy</button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           )}

           {activeTab === 'audit' && (
             <div className="p-6">
               <div className="border-l-2 border-slate-200 ml-4 space-y-8 pb-8">
                 {[
                   { action: "Temporary Delegation Granted", user: "Grace Adebayo (Treasurer)", details: "Delegated Vault Approval Rights to Sarah Jinadu for 14 days due to leave.", date: "Today, 09:41 AM", color: "text-amber-500" },
                   { action: "Role Modified", user: "System / Super Admin", details: "Added 'Export Ledger' permission to Financial Secretary profile.", date: "Yesterday, 14:22 PM", color: "text-blue-500" },
                   { action: "New Officer Tenure Bound", user: "System / Super Admin", details: "Appointed Aminu Bello as active Loan Officer globally.", date: "Oct 20, 2024", color: "text-emerald-500" }
                 ].map((log, i) => (
                   <div key={i} className="relative pl-6">
                     <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white ring-2 ring-slate-200 ${log.color.replace('text', 'bg')}`}></div>
                     <div className="font-bold text-sm text-slate-900">{log.action}</div>
                     <div className="text-xs font-semibold text-slate-500 mt-0.5">{log.user}</div>
                     <div className="text-sm font-medium text-slate-700 mt-2 bg-slate-50 border border-slate-100 p-3 rounded-lg leading-snug">
                       {log.details}
                     </div>
                     <div className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wide">{log.date}</div>
                   </div>
                 ))}
               </div>
             </div>
           )}
         </div>
      </div>

      {/* Slide-over Permission Matrix Drawer */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setSelectedRole(null)}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div 
               initial={{ x: "100%", boxShadow: "-20px 0 25px -5px rgb(0 0 0 / 0.1)" }} 
               animate={{ x: 0 }} exit={{ x: "100%" }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="relative w-full max-w-5xl bg-slate-50 h-full flex flex-col z-10 border-l border-slate-200"
            >
               <div className="bg-white border-b border-slate-200 shrink-0">
                  <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Access Payload Detail</h3>
                    <button onClick={() => setSelectedRole(null)} className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-full transition-colors flex items-center gap-1">
                      <span className="text-xs font-bold">Close</span> <X className="w-4 h-4"/>
                    </button>
                  </div>
                  
                  <div className="px-8 py-6 flex items-start justify-between">
                     <div>
                        <div className="flex items-center gap-3">
                           <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{selectedRole.name}</h2>
                           {selectedRole.type === 'System' && <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-slate-200">System Lock Active</span>}
                        </div>
                        <p className="text-sm font-medium text-slate-500 mt-2 max-w-xl line-clamp-2">
                           {selectedRole.desc}
                        </p>
                     </div>
                     <div className="flex flex-col gap-2 items-end">
                       <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Modifier Scope Restriction</span>
                       <select className="bg-white border border-slate-300 text-slate-900 font-bold px-3 py-2 rounded-lg text-sm shadow-sm outline-none focus:border-blue-500">
                         <option>Global Unrestricted</option>
                         <option>Branch Scope Only</option>
                         <option>Committee Scope</option>
                       </select>
                     </div>
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/80 flex items-center gap-3">
                       <Lock className="w-5 h-5 text-slate-400" />
                       <h3 className="text-lg font-bold text-slate-900">Module Permission Matrix</h3>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 text-slate-600 text-[10px] uppercase font-bold border-b border-slate-200">
                          <tr>
                            <th className="px-6 py-4">Functional Module</th>
                            <th className="px-4 py-4 text-center">View Docs</th>
                            <th className="px-4 py-4 text-center">Create Record</th>
                            <th className="px-4 py-4 text-center">Edit / Modify</th>
                            <th className="px-4 py-4 text-center">Delete / Reverse</th>
                            <th className="px-4 py-4 text-center bg-blue-50/50">Authorize Level 1</th>
                            <th className="px-4 py-4 text-center border-l bg-slate-50">Bulk Export Data</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {capabilities.map((cap, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors group">
                              <td className="px-6 py-4 font-bold text-slate-900">{cap.module}</td>
                              
                              {/* Mapping mock checkboxes intuitively */}
                              <td className="px-4 py-4 text-center">
                                <input type="checkbox" defaultChecked={cap.actions.includes('View')} disabled={selectedRole.type === 'System'} className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer" />
                              </td>
                              <td className="px-4 py-4 text-center">
                                <input type="checkbox" defaultChecked={cap.actions.includes('Create')} disabled={selectedRole.type === 'System'} className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer" />
                              </td>
                              <td className="px-4 py-4 text-center">
                                <input type="checkbox" defaultChecked={cap.actions.includes('Edit')} disabled={selectedRole.type === 'System'} className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer" />
                              </td>
                              <td className="px-4 py-4 text-center">
                                <input type="checkbox" defaultChecked={cap.actions.includes('Delete')} disabled={selectedRole.type === 'System'} className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300 cursor-pointer" />
                              </td>
                              <td className="px-4 py-4 text-center bg-blue-50/20">
                                <input type="checkbox" defaultChecked={cap.actions.includes('Approve')} disabled={selectedRole.type === 'System'} className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer" />
                              </td>
                              <td className="px-4 py-4 text-center border-l bg-slate-50/50">
                                <input type="checkbox" defaultChecked={cap.actions.includes('Export')} disabled={selectedRole.type === 'System'} className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300 cursor-pointer" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                     <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">Clone Role</button>
                     <button disabled={selectedRole.type === 'System'} className="bg-blue-600 text-white disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-700 px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4" /> Save Permission Payload
                     </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
