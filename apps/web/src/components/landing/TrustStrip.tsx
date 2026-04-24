import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Database, Users, Building2, TrendingUp, LockKeyhole } from 'lucide-react';

export function TrustStrip() {
  const trusts = [
    { icon: Building2, text: "For Real Cooperatives" },
    { icon: LockKeyhole, text: "Secure Workflows" },
    { icon: Users, text: "Transparent Records" },
    { icon: Database, text: "Multi-Tenant Core" },
    { icon: ShieldCheck, text: "Audit Ready" },
    { icon: TrendingUp, text: "Scalable Growth" }
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center py-8 gap-y-6">
          {trusts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} 
                className="flex items-center gap-3 w-1/2 sm:w-1/3 lg:w-auto justify-center lg:justify-start group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-blue-900/30 group-hover:border-blue-700/50 transition-colors">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                  {item.text}
                </span>
                {i !== trusts.length - 1 && (
                  <div className="hidden lg:block w-px h-8 bg-slate-800 ml-8"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}