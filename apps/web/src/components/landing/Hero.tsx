import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2, Lock, Activity, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFBFF]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-emerald-50/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 lg:pr-8 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Secure Digital Infrastructure for Growing Cooperatives</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Run Your Cooperative with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Clarity</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Control</span>, and Confidence.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-medium">
              A modern cooperative management platform built to handle real members, real money, real records, and real governance. Move away from fragmented spreadsheets into a professional, audit-ready operational ecosystem.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Link href="/register-cooperative" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all" data-testid="hero-register-btn">
                Register Cooperative
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md hover:bg-slate-50 transition-all" data-testid="hero-demo-btn">
                Book a Live Demo
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-100 text-sm font-semibold text-slate-700">
                <Lock className="w-4 h-4 text-emerald-500" /> Secure Access
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-100 text-sm font-semibold text-slate-700">
                <Users className="w-4 h-4 text-blue-500" /> Role-Based Controls
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-100 text-sm font-semibold text-slate-700">
                <Activity className="w-4 h-4 text-amber-500" /> Audit-Ready
              </div>
            </motion.div>
          </div>

          {/* Right Content - Abstract Dashboard Composition */}
          <div className="lg:col-span-6 relative mt-16 lg:mt-0 perspective-1000">
            <motion.div initial={{ opacity: 0, rotateY: 15, x: 50 }} animate={{ opacity: 1, rotateY: -5, x: 0, y: [0, -10, 0] }} transition={{ duration: 0.8, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }} className="relative z-10 bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden transform-gpu">
              {/* Product Chrome */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-xs font-semibold text-slate-400 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">admin.cacsmscoops.com</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Executive Overview</h3>
                    <p className="text-xs text-slate-500 font-medium">As of Today, 09:41 AM</p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-emerald-100">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Live View
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-slate-100 rounded-xl p-4 bg-gradient-to-br from-white to-slate-50 shadow-sm">
                    <p className="text-sm text-slate-500 font-semibold mb-1 flex items-center justify-between">Total Assets <span className="text-emerald-500 text-xs">+12.4%</span></p>
                    <p className="text-2xl font-extrabold text-slate-900 tracking-tight">₦ 412.5M</p>
                  </div>
                  <div className="border border-slate-100 rounded-xl p-4 bg-gradient-to-br from-white to-slate-50 shadow-sm">
                    <p className="text-sm text-slate-500 font-semibold mb-1 flex items-center justify-between">Active Loans <span className="text-amber-500 text-xs">84 Active</span></p>
                    <p className="text-2xl font-extrabold text-slate-900 tracking-tight">₦ 128.2M</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex justify-between text-sm font-semibold mb-3">
                    <span className="text-slate-700">Monthly Contribution Target</span>
                    <span className="text-blue-600">82%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '82%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Component 1: Approval */}
            <motion.div initial={{ opacity: 0, x: -50, y: 50 }} animate={{ opacity: 1, x: -40, y: [40, 30, 40] }} transition={{ duration: 0.8, delay: 0.3, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }} className="absolute bottom-10 -left-10 z-20 bg-white rounded-xl shadow-xl p-4 border border-slate-100/80 backdrop-blur-md w-64 transform-gpu">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 shadow-inner">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Payment Confirmed</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Michael O. • ₦ 50,000</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-1">Ledger Updated</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Component 2: Member Balance */}
            <motion.div initial={{ opacity: 0, x: 50, y: -50 }} animate={{ opacity: 1, x: 30, y: [-20, -30, -20] }} transition={{ duration: 0.8, delay: 0.4, y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 } }} className="absolute -top-6 -right-6 z-0 bg-white rounded-xl shadow-xl p-4 border border-slate-100/80 w-56 transform-gpu">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs ring-2 ring-white shadow-sm">SA</div>
                 <div>
                    <p className="text-xs font-bold text-slate-900">Sarah A.</p>
                    <p className="text-[10px] text-slate-500">Member Status: Active</p>
                 </div>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Personal Savings</p>
              <p className="text-lg font-extrabold text-blue-900">₦ 1,240,000</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}