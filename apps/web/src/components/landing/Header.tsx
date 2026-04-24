import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center shadow-md shadow-blue-900/20 group-hover:shadow-blue-900/40 transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-bold text-xl tracking-tighter">C</span>
              </div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Cacsms Cooperatives
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-900 hover:bg-blue-50/50 rounded-full transition-all duration-200">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors" data-testid="header-login-btn">
                Login
              </Link>
              <Link href="/register-cooperative" className="relative group overflow-hidden bg-blue-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-blue-900/25 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2" data-testid="header-register-btn">
                <span className="relative z-10">Register Cooperative</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 -mr-2 text-slate-600 hover:text-blue-900" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col md:hidden">
              <div className="p-5 flex justify-between items-center border-b border-slate-100">
                <span className="text-lg font-bold text-slate-900">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 flex flex-col gap-4 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-blue-900 py-2 border-b border-slate-50">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-5 border-t border-slate-100 flex flex-col gap-3">
                <Link href="/login" className="w-full text-center py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                  Login
                </Link>
                <Link href="/register-cooperative" className="w-full text-center py-3 rounded-xl font-semibold text-white bg-blue-900 hover:bg-blue-800 shadow-lg shadow-blue-900/20 transition-all">
                  Register Cooperative
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}