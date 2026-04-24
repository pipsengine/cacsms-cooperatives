const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'apps/web/src/components/landing');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'FinalCTA.tsx': `
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MonitorSmartphone, TrendingUp, CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Your Cooperative Deserves More Than Manual Processes and Delayed Visibility.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 text-blue-200 font-medium text-sm sm:text-base">
             <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Start with a structured foundation</div>
             <div className="flex items-center justify-center gap-2"><MonitorSmartphone className="w-5 h-5 text-blue-400" /> Works across desktop & mobile</div>
             <div className="flex items-center justify-center gap-2"><TrendingUp className="w-5 h-5 text-amber-400" /> Built for future growth</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register-cooperative" className="w-full sm:w-auto bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
              Register Cooperative <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/demo" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              Book a Live Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`,
  'Footer.tsx': `
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
              <span className="text-xl font-extrabold text-white tracking-tight">CACSMS<span className="text-blue-500">Coops</span></span>
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
          <div>&copy; {new Date().getFullYear()} CACSMS Cooperatives. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
`,
  'index.ts': `
export { Header } from './Header';
export { Hero } from './Hero';
export { TrustStrip } from './TrustStrip';
export { PowerStatement } from './PowerStatement';
export { ProblemStatement } from './ProblemStatement';
export { Transformation } from './Transformation';
export { FeaturesOverview } from './FeaturesOverview';
export { Workflow } from './Workflow';
export { Highlights } from './Highlights';
export { SocialProof } from './SocialProof';
export { Pricing } from './Pricing';
export { FAQ } from './FAQ';
export { FinalCTA } from './FinalCTA';
export { Footer } from './Footer';
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, filename), content.trim() + '\\n');
}

// Assemble page.tsx
const pageContent = `
'use client';
import React from 'react';
import { 
  Header, Hero, TrustStrip, PowerStatement, ProblemStatement, 
  Transformation, FeaturesOverview, Workflow, 
  Highlights, SocialProof, Pricing, FAQ, FinalCTA, Footer 
} from '@/apps/web/src/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PowerStatement />
        <ProblemStatement />
        <Transformation />
        <FeaturesOverview />
        <Workflow />
        <Highlights />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
`;
fs.writeFileSync(path.join(process.cwd(), 'apps/web/src/app/(public)/page.tsx'), pageContent.trim() + '\\n');
const rootPageContent = pageContent.replace('@/apps/web/src/components/landing', '../apps/web/src/components/landing');
fs.writeFileSync(path.join(process.cwd(), 'app/page.tsx'), rootPageContent.trim() + '\\n');

console.log('Batch 5 & Page Assemble written');
