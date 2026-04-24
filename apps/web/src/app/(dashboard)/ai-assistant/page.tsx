'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, BrainCircuit, Activity, AlertTriangle, 
  Search, MessageSquare, Send, Bot, TrendingUp, BarChart
} from 'lucide-react';

export default function AiAssistantPage() {
  const [chatInput, setChatInput] = useState('');

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 h-[calc(100vh-8rem)] flex flex-col">
      
      {/* Header */}
      <div className="mb-2 shrink-0">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex flex-col items-center justify-center shadow-lg shadow-indigo-600/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          Co-op Copilot AI
        </h1>
        <p className="text-sm font-medium text-slate-500 mt-2 max-w-2xl">
          Your intelligent operational partner. Query financial aggregates, analyze overdue risks, generate board reports, or find anomalies via natural language.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        
        {/* Left Column: Predictive Insights Dashboard */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-1">
          
          {/* Risk Alert Block */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
               <AlertTriangle className="w-24 h-24 text-red-500" />
             </div>
             <div className="flex items-center gap-2 text-red-700 mb-3">
               <BrainCircuit className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-wider">Predictive Overdue Risk</span>
             </div>
             <h3 className="text-lg font-bold text-slate-900 mb-2">3 High-Value Loans Flagged</h3>
             <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">
               AI pattern detection indicates that multiple guarantors tied to the <strong>Festive Loan Batch B</strong> are simultaneously demonstrating delayed savings contributions this quarter, significantly increasing default probability by month-end.
             </p>
             <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-colors w-full sm:w-auto text-center">
               Analyze Flagged Accounts
             </button>
          </div>

          {/* Quick Generative Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-3">Automated Actions</h3>
             <div className="space-y-3">
               {[
                 { title: "Draft Board Financial Summary", desc: "Auto-compile this month's P&L and Balance Sheet into a readable narrative.", icon: BarChart },
                 { title: "Run Anomaly Scan", desc: "Scan recent GL postings for unusual timestamps or variance.", icon: Search },
                 { title: "Generate Health Score", desc: "Calculate overall cooperative liquidity & engagement metric.", icon: Activity }
               ].map((action, i) => (
                 <button key={i} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
                     <action.icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600" />
                   </div>
                   <div>
                     <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-900">{action.title}</div>
                     <div className="text-xs text-slate-500 font-medium mt-1">{action.desc}</div>
                   </div>
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* Right Column: Chat Interface */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden h-[600px] lg:h-auto">
           {/* Chat Header */}
           <div className="h-16 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm flex items-center px-6 shrink-0 z-10">
              <div className="flex items-center gap-3">
                 <div className="relative">
                   <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                     <Bot className="w-4 h-4 text-white" />
                   </div>
                   <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-50 rounded-full"></div>
                 </div>
                 <div>
                   <div className="text-sm font-bold text-slate-900">Copilot Session</div>
                   <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Context: General Ledger & Members</div>
                 </div>
              </div>
           </div>

           {/* Chat Messages Area */}
           <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 custom-scrollbar">
              
              {/* AI Welcome Message */}
              <div className="flex gap-4 max-w-[85%]">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm space-y-2">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Hello Oluwaseun. I've finished syncing with your latest end-of-day bank reconciliations. 
                  </p>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    <strong>Tip:</strong> You currently have 15 pending payment review items in the queue. Would you like me to instantly verify the ones with cleanly readable receipts?
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-4 max-w-[85%] ml-auto justify-end">
                <div className="bg-blue-600 text-white border border-blue-700 p-4 rounded-2xl rounded-tr-none shadow-sm">
                  <p className="text-sm font-medium leading-relaxed">
                    Not yet. Can you summarize the loan performance for the Mainland Branch this quarter?
                  </p>
                </div>
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs font-bold text-slate-600">OA</span>
                </div>
              </div>

              {/* AI Response Message */}
              <div className="flex gap-4 max-w-[90%]">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-2xl rounded-tl-none shadow-sm space-y-4 w-full">
                  <p className="text-sm text-slate-700 font-medium">
                    Here is the <strong>Q3 Loan Performance Summary for the Mainland Branch</strong> based on current active ledger states:
                  </p>
                  
                  {/* Embedded Rich Data Block */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 grid grid-cols-2 gap-4">
                     <div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Dispensed</div>
                       <div className="text-xl font-extrabold text-slate-900">₦18.4M</div>
                     </div>
                     <div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Repayment Rate</div>
                       <div className="text-xl font-extrabold text-emerald-600 flex items-center gap-1"><TrendingUp className="w-4 h-4"/> 94.2%</div>
                     </div>
                     <div className="col-span-2 pt-3 border-t border-slate-200">
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Observation</div>
                       <div className="text-sm text-slate-600 font-medium">Repayment velocity has increased by 4% compared to Q2, driven largely by successful automated payroll deductions.</div>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                     <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg transition-colors">Export as PDF</button>
                     <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg transition-colors">Compare with HQ Branch</button>
                  </div>
                </div>
              </div>
           </div>

           {/* Input Area */}
           <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <div className="relative flex items-center">
                 <input 
                   type="text"
                   placeholder="Ask Copilot to analyze data, find members, or run workflows..."
                   value={chatInput}
                   onChange={(e) => setChatInput(e.target.value)}
                   className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:bg-white rounded-xl py-3.5 pl-4 pr-12 text-sm font-medium outline-none transition-all placeholder:text-slate-400"
                 />
                 <button className={"absolute right-2 p-2 rounded-lg transition-colors " + (chatInput.length > 0 ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700" : "bg-slate-200 text-slate-400 cursor-not-allowed")}>
                   <Send className="w-4 h-4" />
                 </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] font-medium text-slate-400">AI responses are generated based on available cooperative data mapping and may require human verification.</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
