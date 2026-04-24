import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center border border-slate-800 shadow-md">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Cacsms Cooperatives</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              A modern cooperative management platform designed to help cooperative societies manage members, contributions, approvals, financial records, and operations with greater transparency, accountability, and growth readiness.
            </p>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Product</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="#features" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 -ml-3 transition-all"></span>Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 -ml-3 transition-all"></span>Pricing</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 -ml-3 transition-all"></span>How It Works</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 -ml-3 transition-all"></span>Security</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Solutions</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/solutions/staff" className="hover:text-white transition-colors">Staff Cooperatives</Link></li>
              <li><Link href="/solutions/market" className="hover:text-white transition-colors">Market Traders</Link></li>
              <li><Link href="/solutions/agricultural" className="hover:text-white transition-colors">Agricultural</Link></li>
              <li><Link href="/solutions/community" className="hover:text-white transition-colors">Community Groups</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Resources</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/blog" className="hover:text-white transition-colors">Knowledge Base</Link></li>
              <li><Link href="/help-centre" className="hover:text-white transition-colors">Help Centre</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div>&copy; {new Date().getFullYear()} Cacsms Cooperatives. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}