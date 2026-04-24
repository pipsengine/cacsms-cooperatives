const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'apps/web/src/components/landing');
fs.mkdirSync(componentsDir, { recursive: true });

const files = {
  'Header.tsx': `
import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Cacsms Cooperatives</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Features</Link>
            <Link href="#solutions" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Solutions</Link>
            <Link href="#pricing" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Pricing</Link>
            <Link href="#how-it-works" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">How It Works</Link>
            <Link href="#security" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Security</Link>
            <Link href="#resources" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Resources</Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-blue-900 font-medium hover:text-blue-800 transition-colors">Member/Admin Login</Link>
            <Link href="/register-cooperative" className="bg-blue-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-800 transition-colors shadow-sm">Register Cooperative</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
`,

  'Hero.tsx': `
import React from 'react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative bg-slate-50 pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Run Your Cooperative with <span className="text-blue-900">Clarity</span>, <span className="text-emerald-600">Control</span>, and Confidence from One Modern Digital Platform
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-6 font-medium">
              Cacsms Cooperatives helps cooperative societies manage members, contributions, payment submissions, receipt evidence, finance confirmation workflows, loans, welfare, treasury, accounting, reports, governance, and communication in one secure and intelligent platform designed for modern growth.
            </p>
            <p className="text-base text-slate-600 mb-10 leading-relaxed">
              Whether you are running a staff cooperative, community cooperative, market traders cooperative, transport cooperative, school cooperative, agricultural cooperative, or investment-based cooperative, Cacsms Cooperatives gives your organization the tools to move away from manual records, delayed approvals, fragmented spreadsheets, and weak visibility into a more transparent, efficient, and professionally managed future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/register-cooperative" className="bg-blue-900 text-white px-8 py-3.5 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors shadow-lg text-center">
                Register Cooperative
              </Link>
              <Link href="/demo" className="bg-white text-blue-900 border border-blue-200 px-8 py-3.5 rounded-md font-medium text-lg hover:bg-slate-50 transition-colors shadow-sm text-center">
                Request a Demo
              </Link>
              <Link href="/login" className="bg-transparent text-slate-600 border border-transparent px-8 py-3.5 rounded-md font-medium text-lg hover:text-blue-900 transition-colors text-center">
                Member/Admin Login
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Secure Member Access</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Role-Based Permissions</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Receipt Evidence Workflow</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Audit-Ready Records</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Nigeria-Focused, Globally Scalable</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-800 text-lg">Admin Dashboard Preview</h3>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">Live Status</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-slate-100 rounded-lg p-4 bg-slate-50">
                    <p className="text-sm text-slate-500 font-medium">Total Savings</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">₦42,500,000</p>
                    <p className="text-xs text-emerald-600 mt-2 font-medium">+12% this month</p>
                  </div>
                  <div className="border border-slate-100 rounded-lg p-4 bg-slate-50">
                    <p className="text-sm text-slate-500 font-medium">Pending Approvals</p>
                    <p className="text-2xl font-bold text-amber-600 mt-1">24</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Requires attention</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-blue-600 w-3/4"></div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-500 w-1/2"></div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-400 w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Payment Confirmed</p>
                  <p className="text-xs text-slate-500">Jane Doe • ₦50,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  'TrustStrip.tsx': `
import React from 'react';

export function TrustStrip() {
  const trusts = [
    "Built for Real Cooperative Operations",
    "Secure Financial Workflows",
    "Transparent Member Records",
    "Multi-Tenant Platform Architecture",
    "Audit and Accountability Ready",
    "Scalable for Future Growth"
  ];

  return (
    <div className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium">
          {trusts.map((text, i) => (
            <div key={i} className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`,

  'ProblemStatement.tsx': `
import React from 'react';

export function ProblemStatement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
          Many Cooperatives Are Still Managed with Too Much Stress, Too Little Visibility, and Too Much Risk
        </h2>
        <div className="prose prose-lg mx-auto text-slate-600 space-y-6">
          <p>
            When member records are scattered, payments are not promptly confirmed, receipt evidence is difficult to trace, balances are not immediately visible, and accounting entries depend on too much manual effort, the entire cooperative becomes harder to manage. Leaders become overstretched, finance officers spend too much time reconciling avoidable issues, and members lose the clear visibility they need to stay confident in the system.
          </p>
          <p>
            Cacsms Cooperatives is designed to solve these practical realities by giving cooperative societies one unified digital environment where operational control, financial discipline, member transparency, and institutional growth can work together.
          </p>
        </div>
      </div>
    </section>
  );
}
`,

  'Transformation.tsx': `
import React from 'react';

export function Transformation() {
  const cards = [
    { old: "From scattered member records", new: "to centralized member visibility" },
    { old: "From unverified payments", new: "to structured payment confirmation workflow" },
    { old: "From delayed finance updates", new: "to real-time ledger and balance updates" },
    { old: "From weak reporting", new: "to insight-rich dashboards and analytics" },
    { old: "From fragmented communication", new: "to organized member notifications and updates" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            From Manual Complexity to Structured Digital Confidence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cacsms Cooperatives is more than a record-keeping tool. It is a complete cooperative operating system designed to bring order, transparency, financial discipline, and modern digital convenience into the everyday running of cooperative societies. It helps leaders see more clearly, respond more quickly, approve with more confidence, report more professionally, and serve members more effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">The Old Way</div>
                  <p className="text-slate-600 line-through mb-6">{card.old}</p>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="text-emerald-600 text-sm font-bold uppercase tracking-wider mb-2">The Cacsms Way</div>
                  <p className="text-slate-900 font-medium text-lg">{card.new}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'FeaturesOverview.tsx': `
import React from 'react';

export function FeaturesOverview() {
  const features = [
    { title: "Member Management", desc: "Keep all member details, KYC, and statuses centralized in one verifiable database." },
    { title: "Savings and Contributions", desc: "Track regular savings, special contributions, and targeted goals effortlessly." },
    { title: "Payment Submission and Receipt Upload", desc: "Enable members to submit payments with clear transaction details and upload receipt evidence directly from desktop or mobile, while authorized finance officers review, confirm, reject, or return submissions through a professional workflow that protects accountability and improves financial visibility." },
    { title: "Finance Confirmation Workflow", desc: "Multi-step approval processes that mirror real-world financial controls." },
    { title: "Loans Management", desc: "Manage applications, guarantor checks, approvals, disbursements, and repayment schedules." },
    { title: "Welfare and Benefits", desc: "Track cooperative welfare schemes, dividends, and non-financial benefits." },
    { title: "Treasury and Bank Reconciliation", desc: "Monitor cash-at-hand, cash-at-bank, and reconcile external accounts seamlessly." },
    { title: "Accounting and Ledger", desc: "Automated general and member ledgers, ensuring accounts always balance." },
    { title: "Reports and Analytics", desc: "Generate professional balance sheets, trial balances, and operational reports instantly." },
    { title: "Meetings and Governance", desc: "Organize meeting minutes, AGM documents, and digital voting procedures." },
    { title: "Notifications and Communication", desc: "Send SMS, email, and in-app alerts to keep everyone aligned." },
    { title: "Documents and Evidence Management", desc: "Secure vault for cooperative bylaws, policies, and sensitive audit evidence." },
    { title: "AI Assistant and Automation", desc: "Future-ready intelligence to help query data and automate repetitive tasks." },
    { title: "Mobile Access and Scalability", desc: "Designed to grow with your cooperative and accessible from any device." }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Everything Your Cooperative Needs, Connected in One Intelligent Platform
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center text-blue-900 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'Workflow.tsx': `
import React from 'react';

export function Workflow() {
  const steps = [
    "Cooperative registers and sets up workspace",
    "Members are onboarded and activated",
    "Members submit savings or payment evidence",
    "Finance officers confirm or review payments",
    "Member ledger updates automatically",
    "Reports and dashboards reflect current status",
    "Leaders make decisions with clear insight"
  ];

  return (
    <section id="how-it-works" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            One Platform. One Flow. Better Control at Every Step.
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            All these processes are connected so that data does not remain trapped in disconnected files or isolated manual work. Flow cleanly from member action to executive insight.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {i + 1}
              </div>
              <div className="flex-grow bg-blue-800/50 p-6 rounded-xl border border-blue-700 w-full">
                <p className="text-lg font-medium">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'Highlights.tsx': `
import React from 'react';

export function Highlights() {
  return (
    <>
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                See the Cooperative Clearly, Not Through Guesswork
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Every screen in Cacsms Cooperatives is designed to give users the visibility they need without overwhelming them. From member balances and pending approvals to loan positions, treasury records, reports, and notifications, the platform turns complex operations into a clear and manageable digital experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-amber-500 text-xl">•</span> Admin dashboard</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-amber-500 text-xl">•</span> Member dashboard</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-amber-500 text-xl">•</span> Finance confirmation queue</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-amber-500 text-xl">•</span> Treasury / reconciliation screen</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-amber-500 text-xl">•</span> Member ledger</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-amber-500 text-xl">•</span> Mobile receipt upload screen</li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-3xl p-8 shadow-inner border border-slate-200 h-96 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 opacity-50"></div>
               <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-xl p-6 border border-slate-100 transform rotate-[-3deg]">
                  <div className="flex gap-2 mb-4">
                     <div className="w-16 h-4 bg-slate-200 rounded"></div>
                     <div className="w-8 h-4 bg-slate-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                     <div className="w-full h-12 bg-slate-50 rounded border border-slate-100"></div>
                     <div className="w-full h-12 bg-slate-50 rounded border border-slate-100"></div>
                     <div className="w-full h-12 bg-slate-50 rounded border border-slate-100"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-50 border-b border-slate-200" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for Different Types of Cooperative Societies</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto">
            No two cooperative societies operate in exactly the same way. Cacsms Cooperatives is designed with enough flexibility and structure to support different operational models while preserving financial clarity, workflow discipline, and member transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {["Staff Cooperatives", "Workers Cooperatives", "Community Cooperatives", "Market Traders Cooperatives", "Transport Cooperatives", "Agricultural Cooperatives", "School Cooperatives", "Religious Cooperatives", "Investment Cooperatives"].map(t => (
                <span key={t} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm hover:border-blue-300 hover:text-blue-900 transition-colors cursor-default">
                  {t}
                </span>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="payment-highlight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            A Stronger Way to Handle Member Payments, Receipt Evidence, and Financial Confirmation
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              Members can submit payment details directly through the platform, upload receipt or transfer evidence, add relevant narration, and track the status of each submission. Authorized officers such as the Financial Secretary or Treasurer can then review the evidence, validate the submission, confirm receipt, reject invalid entries, or return records for correction. Once confirmed, the necessary financial updates are reflected in the member’s records and the appropriate accounting flow is triggered.
            </p>
            <p>
              This creates a more transparent, structured, and accountable payment process for both members and cooperative officers. Instead of relying on scattered chats, screenshots, or delayed manual records, your cooperative gains a clear workflow with visible status, traceable evidence, and stronger financial discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6">Give Members the Visibility and Confidence They Deserve</h2>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  A modern cooperative should not leave members guessing. Cacsms Cooperatives gives members a clear digital experience where they can see their savings, loans, ledger status, payment submissions, approvals, notices, and cooperative updates from one secure portal. This improves confidence, reduces confusion, and creates a healthier relationship between the cooperative and its members.
                </p>
             </div>
             <div>
                <h2 className="text-3xl font-bold mb-6">Move from Basic Record Keeping to Real Financial Visibility</h2>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Beyond collecting payments and tracking members, Cacsms Cooperatives helps cooperative societies build stronger financial operations through treasury visibility, cash-at-hand and cash-at-bank tracking, reconciliation workflows, member and general ledgers, accounting support, and modern reporting dashboards. Leaders can see the true picture more quickly, finance teams can work more confidently, and auditors can engage with better structured records.
                </p>
             </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16">
             <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Built for Today’s Operations and Tomorrow’s Intelligence</h2>
                <p className="text-slate-600 mb-6">
                  Cacsms Cooperatives is designed not only for immediate operational improvement, but also for future-ready growth. The platform architecture supports intelligent automation, guided workflows, AI-assisted insights, smarter search, better reporting intelligence, and an expanding digital ecosystem that can help cooperative societies stay relevant in a more connected and data-driven future.
                </p>
                <ul className="space-y-2 text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> AI-guided insights</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> smarter workflow assistance</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> future automation readiness</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> intelligent search and reporting</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> scalable platform architecture</li>
                </ul>
             </div>
             
             <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security, Accountability, and Control Are Built into the Experience</h2>
                <p className="text-slate-600 mb-6">
                  When people, payments, financial records, approvals, and internal decisions all move through one system, trust matters even more. Cacsms Cooperatives is designed with role-based access, workflow accountability, permission control, traceable activity history, and structured records to support a more secure and professionally managed cooperative environment.
                </p>
                <ul className="space-y-2 text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Role-based access control</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Traceable activity logs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Structured approval history</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Secure member access</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Controlled finance actions</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Professional record visibility</li>
                </ul>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}
`,

  'SocialProof.tsx': `
import React from 'react';

export function SocialProof() {
  const metrics = [
    { value: "Faster", label: "Payment confirmation" },
    { value: "Better", label: "Record visibility" },
    { value: "Stronger", label: "Member trust" },
    { value: "Easier", label: "Report generation" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built to Help Cooperative Leaders Work with More Clarity and Less Friction
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {metrics.map((m, i) => (
             <div key={i} className="text-center">
               <div className="text-4xl font-bold text-blue-900 mb-2">{m.value}</div>
               <div className="text-slate-600 font-medium">{m.label}</div>
             </div>
           ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex gap-1 mb-4 text-amber-400">
                   ★ ★ ★ ★ ★
                </div>
                <div className="h-4 w-3/4 bg-slate-200 rounded mb-2"></div>
                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded mb-6"></div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                   <div>
                      <div className="h-3 w-20 bg-slate-300 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-slate-200 rounded"></div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
`,

  'Pricing.tsx': `
import React from 'react';

export function Pricing() {
  const plans = [
    { name: "Starter", size: "For small & emerging cooperatives", modules: "Core Member & Savings Mgmt", support: "Standard Support", onboarding: "Self-guided Onboarding" },
    { name: "Growth", size: "For growing & active cooperatives", modules: "Full Financials & Loans Mgmt", support: "Priority Support", onboarding: "Assisted Onboarding", featured: true },
    { name: "Enterprise", size: "For large & complex institutions", modules: "All Modules & Advanced Governance", support: "Dedicated Account Manager", onboarding: "Full Concierge Setup" }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Simple Adoption Paths for Cooperatives Ready to Modernize
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Whether your cooperative is beginning its digital journey or looking to replace outdated processes with a more structured and scalable platform, Cacsms Cooperatives provides a professional path forward with room to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={\`bg-white rounded-3xl p-8 border \${plan.featured ? 'border-blue-900 shadow-xl relative transform md:-translate-y-4' : 'border-slate-200 shadow-sm'}\`}>
              {plan.featured && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">{plan.size}</p>
              
              <ul className="space-y-4 mb-8 text-slate-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-emerald-500 font-bold">✓</span> {plan.modules}</li>
                <li className="flex items-center gap-3"><span className="text-emerald-500 font-bold">✓</span> {plan.support}</li>
                <li className="flex items-center gap-3"><span className="text-emerald-500 font-bold">✓</span> {plan.onboarding}</li>
                <li className="flex items-center gap-3"><span className="text-emerald-500 font-bold">✓</span> Upgrade Ready</li>
              </ul>
              
              <button className={\`w-full py-3 rounded-lg font-bold transition-colors \${plan.featured ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}\`}>
                Select {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'FAQ.tsx': `
import React from 'react';

export function FAQ() {
  const faqs = [
    { q: "Can members upload payment receipts from their phone?", a: "Yes. Our platform is mobile-responsive, allowing members to quickly snap and upload transfer receipts or teller evidence directly from their smartphones into their portal for officer review." },
    { q: "Can finance officers approve or reject payment submissions?", a: "Absolutely. Authorized officers have a dedicated queue to review submitted payments, view the attached evidence, and formally confirm, reject, or return the submission for correction." },
    { q: "Does the system support member ledger visibility?", a: "Yes. Every member has real-time access to their personal ledger. Once a payment or contribution is confirmed by the finance team, it instantly reflects on the member's private dashboard." },
    { q: "Can the platform handle loans, welfare, and savings together?", a: "Yes. Cacsms Cooperatives is a unified system. It dynamically tracks regular savings, specialized contributions, welfare pools, and active loan schedules in one centralized financial engine." },
    { q: "Can we use it for our type of cooperative?", a: "The platform is highly configurable and supports Staff Cooperatives, Community groups, Market Traders, Agricultural, and Investment cooperatives through adaptable workflows and policies." },
    { q: "Is the system secure?", a: "Security is paramount. We employ role-based access control, encrypted data transmission, continuous activity logging, and strict permission models to ensure your data and operations are fully protected." },
    { q: "Can the platform scale as our cooperative grows?", a: "Yes. The architecture is cloud-native and multi-tenant. Whether you have 50 members or 50,000, the system seamlessly scales processing power and storage to meet your demands without slowing down." },
    { q: "Can we migrate from spreadsheets or manual records?", a: "Yes. We offer structured bulk-import tools and onboarding assistance to safely transition your legacy spreadsheet data or manual ledgers into the digital platform." }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'FinalCTA.tsx': `
import React from 'react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-24 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Bring More Structure, Transparency, and Confidence to Your Cooperative
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          If your cooperative is ready to move beyond manual processes, inconsistent visibility, delayed updates, and fragmented financial records, Cacsms Cooperatives provides the modern digital foundation you need to operate with more clarity, professionalism, and confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register-cooperative" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl">
            Register Cooperative
          </Link>
          <Link href="/demo" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
            Request Demo
          </Link>
          <Link href="/contact" className="bg-blue-800 text-white border border-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            Talk to Our Team
          </Link>
        </div>
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
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">Cacsms Cooperatives</span>
            </div>
            <p className="text-slate-400 leading-relaxed pr-8">
              Cacsms Cooperatives is a modern cooperative management platform built to help cooperative societies manage members, finances, approvals, records, and operations with greater transparency, accountability, and growth readiness.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions/staff" className="hover:text-white transition-colors">Staff Cooperatives</Link></li>
              <li><Link href="/solutions/market" className="hover:text-white transition-colors">Market Traders</Link></li>
              <li><Link href="/solutions/agricultural" className="hover:text-white transition-colors">Agricultural</Link></li>
              <li><Link href="/solutions/community" className="hover:text-white transition-colors">Community Groups</Link></li>
              <li><Link href="/solutions/investment" className="hover:text-white transition-colors">Investment Clubs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/help-centre" className="hover:text-white transition-colors">Help Centre</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>&copy; {new Date().getFullYear()} Cacsms Cooperatives. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
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
  fs.writeFileSync(path.join(componentsDir, filename), content.trim() + '\\n');
}

console.log('Components built!');

const pageContent = `
import React from 'react';
import { 
  Header, Hero, TrustStrip, ProblemStatement, 
  Transformation, FeaturesOverview, Workflow, 
  Highlights, SocialProof, Pricing, FAQ, FinalCTA, Footer 
} from '@/apps/web/src/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
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
// Also write to root so Next.js picks it up immediately in the default configuration
fs.mkdirSync(path.join(process.cwd(), 'app'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'app/page.tsx'), pageContent.trim() + '\\n');

// Next.js standard needs paths configured, let's just make the components path generic relative to root
const rootPageContent = pageContent.replace('@/apps/web/src/components/landing', '../apps/web/src/components/landing');
fs.writeFileSync(path.join(process.cwd(), 'app/page.tsx'), rootPageContent.trim() + '\\n');

console.log('Page assembled.');
