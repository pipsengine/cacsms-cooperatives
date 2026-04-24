'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Link2, Share2, Smartphone, Key, 
  Lock, Globe, CheckCircle2, AlertTriangle, 
  Laptop, History, CreditCard, Mail, X, Plus
} from 'lucide-react';

export default function SettingsHubPage() {
  const [activeTab, setActiveTab] = useState<'security' | 'integrations' | 'social'>('security');
  const [mfaEnabled, setMfaEnabled] = useState(true);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Platform Configuration & Security</h1>
        <p className="text-sm font-medium text-slate-500 mt-1 max-w-2xl">
          Manage integrations, social presence, and institutional security posture. Changes here affect the operational integrity of the cooperative.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-slate-200 gap-2 mb-6">
        {[
          { id: 'security', label: 'Security & Access', icon: Shield },
          { id: 'integrations', label: 'System Integrations', icon: Link2 },
          { id: 'social', label: 'Social Media & Brand', icon: Share2 }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={"flex items-center gap-2 px-5 py-3.5 text-sm font-bold border-b-2 transition-colors " + (activeTab === tab.id ? "border-blue-600 text-blue-700 bg-blue-50/50 rounded-t-lg" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300")}
          >
            <tab.icon className={"w-4 h-4 " + (activeTab === tab.id ? "text-blue-600" : "text-slate-400")} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Security Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'security' && (
          <motion.div key="security" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            
            {/* MFA Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Key className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Two-Factor Authentication (2FA)</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1 max-w-lg">
                    Require a security key or authenticator app code in addition to passwords for all administrators.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setMfaEnabled(!mfaEnabled)}
                className={"relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shrink-0 " + (mfaEnabled ? 'bg-blue-600' : 'bg-slate-300')}
              >
                <span className={"inline-block h-5 w-5 transform rounded-full bg-white transition-transform " + (mfaEnabled ? 'translate-x-6' : 'translate-x-1')} />
              </button>
            </div>

            {/* Active Sessions */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-slate-400" /> Active Sessions & Devices
                  </h3>
               </div>
               <div className="divide-y divide-slate-100">
                 {[
                   { device: "MacBook Pro 16\"", location: "Lagos, Nigeria", ip: "102.89.45.12", time: "Active now", current: true, icon: Laptop },
                   { device: "iPhone 13 Pro", location: "Abuja, Nigeria", ip: "197.210.64.9", time: "Last active: 2 hours ago", current: false, icon: Smartphone }
                 ].map((session, i) => (
                   <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                           <session.icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                           <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                             {session.device}
                             {session.current && <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">This Device</span>}
                           </div>
                           <div className="text-xs text-slate-500 font-medium mt-1">
                             {session.location} • {session.ip}
                           </div>
                           <div className="text-xs text-slate-400 mt-0.5">{session.time}</div>
                        </div>
                     </div>
                     {!session.current && (
                       <button className="text-sm font-bold text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-red-100">
                         Revoke Session
                       </button>
                     )}
                   </div>
                 ))}
               </div>
            </div>

            {/* Audit Log Preview */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 line-clamp-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <History className="w-5 h-5 text-slate-400" /> Recent Security Events
                </h3>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">View Full Audit Log</button>
              </div>
              <div className="space-y-3">
                <div className="flex text-sm border-l-2 border-blue-500 pl-3">
                  <span className="w-32 font-medium text-slate-500">10 mins ago</span>
                  <span className="font-bold text-slate-900">Admin (Oluwaseun A.) downloaded Finance Audit Report.</span>
                </div>
                <div className="flex text-sm border-l-2 border-slate-200 pl-3">
                  <span className="w-32 font-medium text-slate-500">2 hours ago</span>
                  <span className="font-bold text-slate-900">Failed login attempt from IP 45.33.22.1 (Blocked).</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Integrations Tab Content */}
        {activeTab === 'integrations' && (
          <motion.div key="integrations" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
               {/* Paystack Integration */}
               <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold border border-emerald-100">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Connected
                   </div>
                 </div>
                 <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                   <CreditCard className="w-6 h-6 text-slate-700" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900">Paystack Gateway</h3>
                 <p className="text-sm text-slate-500 font-medium mt-2 mb-6">
                   Process card payments, direct debits, and automated member savings deductions securely.
                 </p>
                 <div className="flex items-center gap-3">
                   <button className="bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                     Configure Keys
                   </button>
                   <button className="text-slate-500 hover:text-slate-700 font-medium text-sm px-2">
                     Sync Logs
                   </button>
                 </div>
               </div>

               {/* SMS Integration */}
               <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-1.5 bg-slate-100 text-slate-500 px-2 py-1 rounded text-xs font-bold border border-slate-200">
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Not configured
                   </div>
                 </div>
                 <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                   <Mail className="w-6 h-6 text-slate-700" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900">Termii SMS API</h3>
                 <p className="text-sm text-slate-500 font-medium mt-2 mb-6">
                   Send instant SMS alerts for loan approvals, OTPs, and outstanding balance reminders to members.
                 </p>
                 <button className="w-full sm:w-auto bg-blue-600 border border-blue-700 text-white hover:bg-blue-700 font-bold px-5 py-2 rounded-lg text-sm transition-colors shadow-sm">
                   Set up integration
                 </button>
               </div>
            </div>
          </motion.div>
        )}

        {/* Social Media Tab Content */}
        {activeTab === 'social' && (
          <motion.div key="social" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Connected Profiles</h3>
              <p className="text-sm text-slate-500 font-medium mb-6">
                Manage the public social media links for the cooperative's external landing page and member portal footer.
              </p>

              <div className="space-y-4 max-w-2xl">
                 {[
                   { platform: "WhatsApp (Support)", value: "+234 800 123 4567", icon: Smartphone, connected: true },
                   { platform: "Facebook", value: "facebook.com/progressivecoop", icon: Globe, connected: true },
                   { platform: "X (Twitter)", value: "", icon: Share2, connected: false }
                 ].map((social, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <social.icon className={"w-5 h-5 " + (social.connected ? "text-blue-600" : "text-slate-400")} />
                      </div>
                      <div className="flex-1">
                         <div className="text-sm font-bold text-slate-900">{social.platform}</div>
                         {social.connected ? (
                           <div className="text-xs text-blue-600 font-medium mt-0.5">{social.value}</div>
                         ) : (
                           <div className="text-xs text-slate-400 italic mt-0.5">Not linked</div>
                         )}
                      </div>
                      <button className={"text-sm font-bold px-4 py-2 rounded-lg transition-colors border " + (social.connected ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100")}>
                        {social.connected ? 'Edit Link' : 'Connect Account'}
                      </button>
                   </div>
                 ))}
                 
                 <button className="w-full py-4 border-2 border-dashed border-slate-200 text-slate-500 font-bold text-sm rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mt-4">
                   <Plus className="w-4 h-4" /> Add Other Platform (Instagram, LinkedIn, YouTube)
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
