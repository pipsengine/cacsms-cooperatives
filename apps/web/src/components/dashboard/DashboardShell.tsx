'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Users, PiggyBank, ArrowRightLeft, 
  Banknote, HeartHandshake, Vault, Calculator, 
  BarChart3, Calendar, Bell, FileText, Store, 
  TrendingUp, Sparkles, Blocks, Share2, Settings,
  LogOut, Menu, X, Search, Plus, ChevronLeft, ChevronRight, UserCircle, Shield
} from 'lucide-react';

const sidebarGroups = [
  {
    label: "Core Operations",
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
      { name: 'Members', icon: Users, href: '/members' },
      { name: 'Savings & Contributions', icon: PiggyBank, href: '/savings' },
      { name: 'Payments', icon: ArrowRightLeft, href: '/payments' },
    ]
  },
  {
    label: "Financials",
    items: [
      { name: 'Loans', icon: Banknote, href: '/loans' },
      { name: 'Welfare', icon: HeartHandshake, href: '/welfare' },
      { name: 'Treasury', icon: Vault, href: '/treasury' },
      { name: 'Accounting', icon: Calculator, href: '/accounting' },
      { name: 'Reports', icon: BarChart3, href: '/reports' },
    ]
  },
  {
    label: "Administration",
    items: [
      { name: 'Governance & Roles', icon: Shield, href: '/governance' },
      { name: 'Meetings', icon: Calendar, href: '/meetings' },
      { name: 'Notifications', icon: Bell, href: '/notifications' },
      { name: 'Documents', icon: FileText, href: '/documents' },
    ]
  },
  {
    label: "Growth & Ecosystem",
    items: [
      { name: 'Marketplace', icon: Store, href: '/marketplace' },
      { name: 'Investments', icon: TrendingUp, href: '/investments' },
      { name: 'AI Assistant', icon: Sparkles, href: '/ai-assistant' },
      { name: 'Integrations', icon: Blocks, href: '/integrations' },
      { name: 'Social Connect', icon: Share2, href: '/social' },
    ]
  }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Simple state for quick actions dropdown
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarCollapsed ? 80 : 280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden lg:flex flex-col bg-white border-r border-slate-200 shadow-sm z-30 sticky top-0 h-screen"
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 shrink-0">
          <Link href="/dashboard" className={`flex items-center gap-3 overflow-hidden ${isSidebarCollapsed ? 'justify-center w-full' : ''}`}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shrink-0 shadow-sm border border-slate-900/10">
              <span className="text-white font-bold text-lg tracking-tighter leading-none">C</span>
            </div>
            <AnimatePresence>
              {!isSidebarCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="font-extrabold text-slate-900 whitespace-nowrap tracking-tight text-lg"
                >
                  CACSMS<span className="text-blue-600">Admin</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Member Portal Showcase Link */}
        <div className="px-4 py-3 border-b border-slate-100 bg-blue-50/50 shrink-0">
           <Link href="/my-portal" className="flex items-center gap-3 p-2 rounded-lg bg-white border border-blue-100 shadow-sm hover:border-blue-300 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <UserCircle className="w-4 h-4" />
              </div>
              {!isSidebarCollapsed && (
                <div className="flex flex-col truncate">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Member View</span>
                  <span className="text-[10px] text-blue-600 font-medium truncate">Switch to My Portal</span>
                </div>
              )}
           </Link>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto pt-4 pb-20 custom-scrollbar">
          {sidebarGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              {!isSidebarCollapsed && (
                <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {group.label}
                </div>
              )}
              {isSidebarCollapsed && (
                <div className="mx-auto w-8 h-px bg-slate-200 mb-4 mt-2"></div>
              )}
              
              <nav className="flex flex-col space-y-1 px-3">
                {group.items.map((item) => {
                  // Basic path matching (checking if current path starts with href)
                  const isActive = pathname === item.href || (pathname !== '/dashboard' && pathname?.startsWith(item.href) && item.href !== '/dashboard');
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      title={isSidebarCollapsed ? item.name : undefined}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 font-semibold' 
                          : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <item.icon className={`shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'} ${isSidebarCollapsed ? 'w-6 h-6 mx-auto' : 'w-5 h-5'}`} />
                      {!isSidebarCollapsed && (
                        <span className="truncate">{item.name}</span>
                      )}
                      
                      {/* Active indicator bar */}
                      {!isSidebarCollapsed && isActive && (
                        <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* Sidebar Footer / Settings Toggle */}
        <div className="border-t border-slate-100 p-3 shrink-0 flex flex-col gap-2">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium`}
          >
            <Settings className={`shrink-0 text-slate-500 group-hover:text-slate-700 ${isSidebarCollapsed ? 'w-6 h-6 mx-auto' : 'w-5 h-5'}`} />
            {!isSidebarCollapsed && <span className="truncate">Settings</span>}
          </Link>
          
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="flex items-center justify-center h-10 w-full rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {isSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <div className="flex items-center gap-2"><ChevronLeft className="w-4 h-4"/> <span className="text-sm font-semibold">Collapse</span></div>}
          </button>
        </div>
      </motion.aside>

      {/* Mobile Drawer (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 flex flex-col lg:hidden"
            >
              <div className="h-16 flex items-center justify-between px-5 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                     <span className="text-white font-bold text-lg leading-none">C</span>
                   </div>
                   <span className="font-extrabold text-slate-900 tracking-tight text-lg">
                     CACSMS<span className="text-blue-600">Admin</span>
                   </span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Sidebar Content */}
              <div className="flex-1 overflow-y-auto pt-4 pb-6 px-3 custom-scrollbar">
                {sidebarGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="mb-6">
                    <div className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {group.label}
                    </div>
                    <nav className="flex flex-col space-y-1">
                      {group.items.map((item) => {
                        const isActive = pathname === item.href || (pathname !== '/dashboard' && pathname?.startsWith(item.href) && item.href !== '/dashboard');
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-600 font-medium'}`}
                          >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                            {item.name}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 max-w-full relative">
        
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 shadow-sm flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20 shrink-0">
          
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Global Search */}
            <div className="hidden sm:flex items-center bg-slate-100/80 hover:bg-slate-100 border border-transparent focus-within:border-blue-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all rounded-lg px-3 py-2 w-64 lg:w-96">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Search member, loan, or payment..." 
                className="bg-transparent border-none outline-none text-sm w-full ml-2 text-slate-800 placeholder:text-slate-400"
              />
              <div className="hidden lg:flex shrink-0 border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-bold text-slate-400 bg-white shadow-sm ml-2">
                ⌘K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Year Indicator (Desktop) */}
            <div className="hidden lg:flex flex-col items-end mr-4 border-r border-slate-200 pr-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current FY</span>
              <span className="text-sm font-semibold text-slate-700">2024 - 2025</span>
            </div>

            {/* Quick Actions Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setIsQuickActionOpen(!isQuickActionOpen); setIsProfileOpen(false); }}
                className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Quick Action</span>
              </button>
              {/* Mobile Quick Action */}
              <button onClick={() => setIsQuickActionOpen(!isQuickActionOpen)} className="sm:hidden w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {isQuickActionOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 shadow-xl rounded-xl z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Create New
                    </div>
                    <div className="p-1">
                      {[
                        { label: "New Member", href: "/members/new" },
                        { label: "Receive Payment", href: "/payments/receive" },
                        { label: "Record Contribution", href: "/savings/add" },
                        { label: "Initiate Loan", href: "/loans/new" }
                      ].map((action, i) => (
                        <Link key={i} href={action.href} onClick={() => setIsQuickActionOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <div className="relative">
               <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
               </button>
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button 
                onClick={() => { setIsProfileOpen(!isProfileOpen); setIsQuickActionOpen(false); }}
                className="flex items-center gap-3 p-1 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 border border-blue-200">
                  <span className="text-sm font-bold">OA</span>
                </div>
                <div className="hidden md:flex flex-col items-start pr-2">
                  <span className="text-xs font-bold text-slate-900 leading-tight">Oluwaseun Admin</span>
                  <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded leading-none mt-0.5 border border-emerald-200">Admin</span>
                </div>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 shadow-xl rounded-xl z-50 overflow-hidden"
                  >
                     <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                        <div className="text-sm font-bold text-slate-900 truncate">Oluwaseun Adeyemi</div>
                        <div className="text-xs text-slate-500 truncate mb-2">oluwaseun@cacsmscoops.com</div>
                        <div className="text-xs font-medium text-slate-600 bg-white border border-slate-200 p-2 rounded-lg flex items-center justify-between">
                           <span className="truncate max-w-[130px]">Progressive Staff Coop</span>
                           <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                        </div>
                     </div>
                     <div className="p-1">
                        <Link href="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                           <UserCircle className="w-4 h-4 text-slate-400" /> My Profile
                        </Link>
                        <Link href="/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                           <Settings className="w-4 h-4 text-slate-400" /> Cooperative Settings
                        </Link>
                     </div>
                     <div className="p-1 border-t border-slate-100">
                        <button onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 w-full px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                           <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </header>

        {/* Main Content Render */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
