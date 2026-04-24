import React from 'react';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shrink-0 shadow-sm border border-slate-900/10">
            <span className="text-white font-bold text-lg tracking-tighter leading-none">C</span>
          </div>
          <span className="font-extrabold text-slate-900 tracking-tight text-lg">
            CACSMS<span className="text-blue-600">Coops</span>
          </span>
        </div>
        <div className="text-sm font-medium text-slate-500">
          Super Admin Onboarding Portal
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
