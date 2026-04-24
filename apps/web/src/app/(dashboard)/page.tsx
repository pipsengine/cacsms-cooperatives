'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Users, PiggyBank, ArrowRightLeft, Banknote, HeartHandshake, ChevronRight, Download, RefreshCw, BarChart4, Sparkles, Vault } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Using Mock Data to render the specified Prompt 2 widgets smoothly
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Executive Dashboard</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Welcome back. Here is the operational overview for <span className="font-semibold text-slate-700">Progressive Staff Coop</span>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm">
            <Download className="w-4 h-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total Members", value: "1,248", trend: "+12 this month", trendColor: "text-emerald-600", bgTrend: "bg-emerald-50", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Pending Activations", value: "24", trend: "Needs review", trendColor: "text-amber-600", bgTrend: "bg-amber-50", icon: HeartHandshake, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Total Savings", value: "₦45.2M", trend: "+₦2.1M this month", trendColor: "text-emerald-600", bgTrend: "bg-emerald-50", icon: PiggyBank, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Outstanding Loans", value: "₦18.4M", trend: "12 overdue", trendColor: "text-red-600", bgTrend: "bg-red-50", icon: Banknote, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
        ].map((kpi, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm flex flex-col relative overflow-hidden group hover:border-slate-300 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${kpi.bg} ${kpi.color} ${kpi.border}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <div className={`px-2 py-1 text-[10px] font-bold rounded-md ${kpi.bgTrend} ${kpi.trendColor}`}>
                {kpi.trend}
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-500 mb-1">{kpi.label}</div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{kpi.value}</div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-transparent to-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        {/* Left Column (Charts/Lists) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Financial Overview</h3>
              <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-100">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            {/* Chart Placeholder */}
            <div className="w-full h-72 bg-gradient-to-r from-slate-50 to-white border border-slate-100 rounded-xl flex flex-col items-center justify-center p-6 text-center shadow-inner">
               <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
                 <BarChart4 className="w-8 h-8" />
               </div>
               <span className="text-sm font-semibold text-slate-600">Savings vs Loan Dispatch Chart Segment</span>
               <span className="text-xs font-medium text-slate-400 mt-2 max-w-xs transition-opacity delay-200">(A responsive D3/Recharts component will mount here showing trend metrics)</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-900">Pending Financial Approvals</h3>
                <Link href="/payments" className="text-sm font-semibold text-blue-600 hover:text-blue-800">View Queue</Link>
             </div>
             <div className="divide-y divide-slate-100">
               {[
                 { action: "Savings Contribution", user: "Michael Awosika", amount: "₦50,000", time: "2 hours ago", status: "Awaiting Receipt Confirm" },
                 { action: "Loan Repayment", user: "Sarah Jinadu", amount: "₦120,000", time: "5 hours ago", status: "Awaiting Receipt Confirm" },
                 { action: "Shares Purchase", user: "David Okafor", amount: "₦250,000", time: "1 day ago", status: "Awaiting Receipt Confirm" }
               ].map((item, i) => (
                 <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                       <ArrowRightLeft className="w-5 h-5 text-slate-500" />
                     </div>
                     <div>
                       <div className="font-bold text-slate-900 text-sm">{item.user}</div>
                       <div className="text-xs font-medium text-slate-500">{item.action} • {item.time}</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-extrabold text-slate-900">{item.amount}</div>
                     <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mt-1">{item.status}</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Right Column (Insights/Feed) */}
        <div className="space-y-6">
          {/* AI Insight Block */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden border border-indigo-700/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-800/50 flex items-center justify-center border border-indigo-500/30">
                <Sparkles className="w-4 h-4 text-indigo-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Intelligent Insights</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Liquidity Alert</h3>
            <p className="text-sm font-medium text-indigo-100/80 mb-6 leading-relaxed relative z-10">
              Based on the latest welfare and loan requests submitted yesterday, your projected cash-at-bank for current month-end will dip below the 15% threshold buffer.
            </p>
            <button className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/30 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors relative z-10">
              Review Treasury Impact
            </button>
          </div>

          {/* Treasury Snapshot */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Vault className="w-5 h-5 text-slate-400" />
                  Treasury Snapshot
                </h3>
             </div>
             <div className="space-y-4">
                <div>
                   <div className="flex items-center justify-between text-sm font-semibold mb-2">
                     <span className="text-slate-500">Cash at Bank (FBN)</span>
                     <span className="text-slate-900">₦12.5M</span>
                   </div>
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="w-[60%] h-full bg-emerald-500 rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex items-center justify-between text-sm font-semibold mb-2">
                     <span className="text-slate-500">Unreconciled Cash</span>
                     <span className="text-slate-900">₦850K</span>
                   </div>
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="w-[15%] h-full bg-amber-500 rounded-full"></div>
                   </div>
                </div>
             </div>
             <div className="mt-6 pt-5 border-t border-slate-100">
               <Link href="/treasury" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                 Go to Treasury <ChevronRight className="w-4 h-4" />
               </Link>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}