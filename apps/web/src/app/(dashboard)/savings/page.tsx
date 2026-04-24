'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PiggyBank, Wallet, Clock, TrendingUp, Filter, Search, Download, Plus, 
  Settings, CheckCircle2, AlertCircle, ArrowUpRight, ArrowDownLeft, X,
  Calendar, RefreshCw, FileText, ChevronRight, ShieldAlert, LayoutDashboard,
  Users
} from 'lucide-react';

const mockContributionTypes = [
  { id: 'CT-1', name: 'Standard Monthly Dues', category: 'Mandatory', frequency: 'Monthly', amount: '₦5,000', scope: 'All Members', penalty: 'None', status: 'Active' },
  { id: 'CT-2', name: 'Annual Project Levy 2024', category: 'Project', frequency: 'One-Time', amount: '₦25,000', scope: 'Exclude Defaulting', penalty: '10% After Due', status: 'Active' },
  { id: 'CT-3', name: 'Share Capital Base', category: 'Equity', frequency: 'Installment', amount: 'Variable', scope: 'New Members', penalty: 'Restrict Dividends', status: 'Active' },
  { id: 'CT-4', name: 'Target Thrift Savings', category: 'Voluntary', frequency: 'Flexible', amount: 'Variable', scope: 'Opt-in', penalty: 'None', status: 'Active' },
];

const mockMemberArrears = [
  { id: 'PRG-2024-001', name: 'Oluwaseun Adeyemi', branch: 'HQ Secretariat', totalExpected: '₦120,000', totalPaid: '₦100,000', arrears: '₦20,000', status: 'Warning', statusColor: 'amber' },
  { id: 'PRG-2023-445', name: 'David Okafor', branch: 'Island Branch', totalExpected: '₦180,000', totalPaid: '₦180,000', arrears: '₦0', status: 'Compliant', statusColor: 'emerald' },
  { id: 'PRG-2021-088', name: 'Sarah Jinadu', branch: 'Mainland Branch', totalExpected: '₦150,000', totalPaid: '₦40,000', arrears: '₦110,000', status: 'Defaulter', statusColor: 'red' },
  { id: 'PRG-2024-112', name: 'Amina Bello', branch: 'HQ Secretariat', totalExpected: '₦30,000', totalPaid: '₦30,000', arrears: '₦0', status: 'Compliant', statusColor: 'emerald' },
];

export default function SavingsModule() {
  const [activeTab, setActiveTab] = useState<'overview' | 'ledgers' | 'setup' | 'batch'>('overview');
  const [showConfigModal, setShowConfigModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Contributions & Savings Engine</h1>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Define institutional levies, govern recurring deduction schedules, and audit aggregate member compliance.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
            <Download className="w-4 h-4" /> Export Ledger
          </button>
          <button 
            onClick={() => setShowConfigModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" /> New Charge Schedule
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total Booked Savings", value: "₦48.2m", subtitle: "Across all active members", color: "text-emerald-600", icon: PiggyBank },
          { label: "Expected Monthly Base", value: "₦4.2m", subtitle: "Guaranteed standard dues", color: "text-blue-600", icon: Filter },
          { label: "Gross Arrears Exposure", value: "₦3.1m", subtitle: "Critical collection gap", color: "text-red-600", icon: AlertCircle },
          { label: "Compliance Rate", value: "84%", subtitle: "Members strictly current", color: "text-slate-900", icon: TrendingUp }
        ].map((metric, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group">
             <div className="flex justify-between items-start z-10 relative">
               <div>
                 <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{metric.label}</div>
                 <div className={"text-2xl tracking-tight font-extrabold " + metric.color}>{metric.value}</div>
                 <div className="text-xs font-semibold text-slate-400 mt-2">{metric.subtitle}</div>
               </div>
             </div>
             <metric.icon className="absolute right-[-10px] bottom-[-10px] w-24 h-24 text-slate-50 opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* Main Work Area */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col flex-1 min-h-[500px]">
         {/* Tabs */}
         <div className="flex border-b border-slate-200 bg-slate-50/50 px-2 shrink-0 overflow-x-auto custom-scrollbar">
            {[
              { id: 'overview', label: 'Matrix Overview', icon: LayoutDashboard },
              { id: 'ledgers', label: 'Member Arrears & Control', icon: Users },
              { id: 'setup', label: 'Levy Definitions', icon: Settings },
              { id: 'batch', label: 'Batch Processing Logs', icon: RefreshCw }
            ].map((tab) => (
              <button 
                key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                className={"px-5 py-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap " + (activeTab === tab.id ? "border-blue-600 text-blue-700 bg-blue-50/30" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300")}
              >
                <tab.icon className={"w-4 h-4 " + (activeTab === tab.id ? "text-blue-600" : "text-slate-400")} />
                {tab.label}
              </button>
            ))}
         </div>

         <div className="flex-1 flex flex-col">
            {activeTab === 'overview' && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                 {/* Left Column: Flow */}
                 <div className="lg:col-span-2 space-y-6">
                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl h-64 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-slate-900 text-base">Inflow Trajectory</h3>
                            <p className="text-xs font-semibold text-slate-500 mt-1">Aggregated realized dues versus projected schedules.</p>
                          </div>
                          <select className="text-xs font-bold bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm text-slate-700 outline-none">
                            <option>YTD 2024</option>
                            <option>Q1 2024</option>
                          </select>
                       </div>
                       <div className="flex items-center justify-center h-full text-slate-400 text-sm font-medium">
                          [Chart Visualization: Multi-Line Time Series]
                       </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                       <h3 className="font-bold text-slate-900 mb-4">Recent Batch Execution Logs</h3>
                       <div className="space-y-3">
                         {[
                           { action: 'Auto-Post: Standard Monthly Dues (Apr 2024)', affected: '839 Members', status: 'Success', amt: '₦4.195m' },
                           { action: 'Penalty Trigger: Annually Levy Overdue', affected: '42 Accounts', status: 'Applied', amt: '₦105k' },
                           { action: 'Auto-Post: Standard Monthly Dues (Mar 2024)', affected: '842 Members', status: 'Success', amt: '₦4.21m' }
                         ].map((log, i) => (
                           <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                  <RefreshCw className="w-4 h-4 text-slate-500" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-slate-800">{log.action}</div>
                                  <div className="text-xs font-medium text-slate-500">{log.affected} successfully calculated</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-bold text-slate-800">{log.amt}</div>
                                <div className="text-[10px] font-bold uppercase text-emerald-600">{log.status}</div>
                              </div>
                           </div>
                         ))}
                       </div>
                    </div>
                 </div>

                 {/* Right Column: Breakdown */}
                 <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                       <h3 className="font-bold text-slate-900 mb-4">Voluntary Pool Dominance</h3>
                       <div className="space-y-4">
                         <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                               <span className="text-slate-600">Thrift Savings</span>
                               <span className="text-slate-900">₦22.1m</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[60%]"></div></div>
                         </div>
                         <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                               <span className="text-slate-600">Target Savings (Xmas)</span>
                               <span className="text-slate-900">₦8.5m</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[20%]"></div></div>
                         </div>
                         <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                               <span className="text-slate-600">Project Quota</span>
                               <span className="text-slate-900">₦17.6m</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[40%]"></div></div>
                         </div>
                       </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                       <div className="relative z-10">
                          <h3 className="font-bold text-lg mb-2">Identify Yield Leaks</h3>
                          <p className="text-sm font-medium text-slate-300 mb-4 leading-relaxed">
                            Run an AI analysis on contribution drop-offs to predict default probabilities before they cascade into bad loans.
                          </p>
                          <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-sm w-full hover:bg-slate-100 transition-colors">
                            Run Cohort Analysis
                          </button>
                       </div>
                       <TrendingUp className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-700 opacity-30" />
                    </div>
                 </div>
              </div>
            )}

            {activeTab === 'ledgers' && (
              <div className="flex-1 flex flex-col h-full">
                 <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                    <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 w-full sm:w-80">
                       <Search className="w-4 h-4 text-slate-400 shrink-0" />
                       <input type="text" placeholder="Search by member PIN..." className="bg-transparent border-none outline-none text-sm w-full ml-2 text-slate-800" />
                    </div>
                    <div className="flex items-center gap-3">
                       <select className="bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-bold outline-none shadow-sm">
                         <option>Filter Status: Defaulters</option>
                         <option>Compliant Members</option>
                       </select>
                       <button className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 text-slate-700 flex items-center gap-2">
                         <Filter className="w-4 h-4"/> More
                       </button>
                    </div>
                 </div>
                 <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold sticky top-0 border-b border-slate-200 z-10">
                        <tr>
                          <th className="px-6 py-4">Account Identifier</th>
                          <th className="px-6 py-4 text-right">Lifetime Expected</th>
                          <th className="px-6 py-4 text-right">Realized Payments</th>
                          <th className="px-6 py-4 text-right">Arrears Delta</th>
                          <th className="px-6 py-4 text-center">Compliance State</th>
                          <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {mockMemberArrears.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors group">
                            <td className="px-6 py-4">
                              <div className="font-bold text-slate-900">{row.name}</div>
                              <div className="text-xs text-slate-500 mt-0.5">{row.id} • {row.branch}</div>
                            </td>
                            <td className="px-6 py-4 text-right font-semibold text-slate-600">{row.totalExpected}</td>
                            <td className="px-6 py-4 text-right font-bold text-emerald-600">{row.totalPaid}</td>
                            <td className="px-6 py-4 text-right">
                              <div className={`font-bold ${row.arrears !== '₦0' ? 'text-red-600' : 'text-slate-400'}`}>{row.arrears}</div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className={`bg-${row.statusColor}-50 text-${row.statusColor}-700 border border-${row.statusColor}-200 text-[10px] uppercase font-bold px-2 py-1 rounded w-max inline-block`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all">Inspect View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
              </div>
            )}

            {activeTab === 'setup' && (
              <div className="p-6 h-full bg-slate-50/50">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockContributionTypes.map((ctype, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer">
                         <div className="flex justify-between items-start mb-3">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                                <Wallet className="w-5 h-5"/>
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900 text-base">{ctype.name}</h3>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{ctype.id} • {ctype.category}</div>
                              </div>
                           </div>
                           <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                             {ctype.status}
                           </span>
                         </div>
                         
                         <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100">
                            <div>
                               <div className="text-[10px] uppercase font-bold text-slate-400">Fixed Rate</div>
                               <div className="text-sm font-semibold text-slate-900">{ctype.amount}</div>
                            </div>
                            <div>
                               <div className="text-[10px] uppercase font-bold text-slate-400">Trigger Cadence</div>
                               <div className="text-sm font-semibold text-slate-900">{ctype.frequency}</div>
                            </div>
                            <div>
                               <div className="text-[10px] uppercase font-bold text-slate-400">Target Envelope</div>
                               <div className="text-sm font-semibold text-slate-900 truncate">{ctype.scope}</div>
                            </div>
                            <div>
                               <div className="text-[10px] uppercase font-bold text-slate-400">Penalty Rule</div>
                               <div className="text-sm font-semibold text-red-600 truncate">{ctype.penalty}</div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}
         </div>
      </div>

      {/* Global Configuration Modal Placeholder */}
      <AnimatePresence>
        {showConfigModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowConfigModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 10 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 10 }}
               className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl flex flex-col z-10 overflow-hidden"
            >
               <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-600" /> Define Target Schedule
                  </h3>
                  <button onClick={() => setShowConfigModal(false)} className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors">
                    <X className="w-5 h-5" />
                  </button>
               </div>
               
               <div className="p-6 space-y-5 overflow-y-auto max-h-[70vh]">
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-sm">
                    <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-blue-900 font-medium leading-relaxed">
                      This interface generates institutional obligations. If saved, the system will actively book this charge against member ledgers at the prescribed interval. Ensure proper board approval.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Schedule Name</label>
                      <input type="text" placeholder="e.g. Mandatory End-of-Year Dinner Levy" className="w-full bg-white border border-slate-200 text-slate-900 font-semibold px-4 py-2.5 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Amount Class</label>
                      <select className="w-full bg-white border border-slate-200 text-slate-900 font-semibold px-4 py-2.5 rounded-xl outline-none focus:border-blue-500">
                        <option>Fixed Flat Rate</option>
                        <option>Percentage of Salary (if mapped)</option>
                        <option>Variable (Calculated at Runtime)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Value (₦)</label>
                      <input type="number" placeholder="0.00" className="w-full bg-white border border-slate-200 text-slate-900 font-semibold px-4 py-2.5 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Frequency Map</label>
                      <select className="w-full bg-white border border-slate-200 text-slate-900 font-semibold px-4 py-2.5 rounded-xl outline-none focus:border-blue-500">
                        <option>Monthly Interval</option>
                        <option>Quarterly Interval</option>
                        <option>One-Time Execution</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Audience Envelope</label>
                      <select className="w-full bg-white border border-slate-200 text-slate-900 font-semibold px-4 py-2.5 rounded-xl outline-none focus:border-blue-500">
                        <option>Global (All Active Members)</option>
                        <option>Custom Segment</option>
                        <option>New Entries Only</option>
                      </select>
                    </div>
                  </div>

               </div>

               <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                  <button onClick={() => setShowConfigModal(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">Cancel</button>
                  <button className="px-5 py-2.5 text-sm font-bold bg-blue-600 text-white shadow-md hover:bg-blue-700 rounded-xl transition-colors">Activate Schedule Rule</button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
