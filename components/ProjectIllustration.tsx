
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Shield, Smartphone, Globe, Coffee, Heart, Code, Search, Zap, Cpu, Bot } from 'lucide-react';

interface ProjectIllustrationProps {
  projectId: string;
  className?: string;
}

export const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({ projectId, className = '' }) => {
  const containerClass = `w-full h-full relative overflow-hidden flex items-center justify-center ${className}`;

  // Common animation variants - fixed ease type and key names
  const float = {
    floating: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  const pulse = {
    pulsing: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  switch (projectId) {
    case 'automation-system':
      return (
        <div className={`${containerClass} bg-slate-900`}>
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fb923c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
           <motion.div className="relative z-10" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }}>
              <div className="w-24 h-24 bg-brand-500/20 rounded-full flex items-center justify-center border border-brand-500/30 animate-pulse">
                 <Bot size={48} className="text-brand-500" />
              </div>
           </motion.div>
        </div>
      );
    case 'filiz-cekil-bridal':
      return (
        <div className={`${containerClass} bg-stone-50`}>
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#78716c 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center">
             {/* Main Card - Minimalist UI */}
             <motion.div 
               className="w-48 h-64 bg-white shadow-xl border border-stone-100 rounded-t-full flex flex-col items-center pt-8 relative"
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="w-24 h-24 rounded-full bg-stone-100 mb-4 flex items-center justify-center relative overflow-hidden">
                   <motion.div 
                     className="absolute inset-0 bg-stone-200"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     style={{ borderRadius: '40%', scale: 1.5, opacity: 0.3 }}
                   />
                   <ShoppingBag size={32} className="text-stone-600 relative z-10" />
                </div>
                <div className="w-24 h-2 bg-stone-100 rounded-full mb-2"></div>
                <div className="w-16 h-2 bg-stone-100 rounded-full"></div>
                
                {/* Floating Elements - updated animate prop */}
                <motion.div 
                  className="absolute -right-6 top-12 bg-white p-3 rounded-lg shadow-lg border border-stone-50"
                  variants={float} animate="floating"
                >
                   <Heart size={16} className="text-rose-400 fill-rose-400" />
                </motion.div>
                
                <motion.div 
                  className="absolute -left-4 bottom-12 bg-stone-800 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                   Randevu Oluştur
                </motion.div>
             </motion.div>
          </div>
        </div>
      );

    case 'farkindayiz-platform':
      return (
        <div className={`${containerClass} bg-slate-900`}>
           {/* Cyber Grid Background */}
           <div className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                  backgroundSize: '40px 40px' 
                }}>
           </div>

           {/* Central Shield Hub */}
           <motion.div 
             className="relative z-10"
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
           >
              {/* Spinning Rings */}
              <motion.div 
                className="absolute inset-0 -m-8 border border-brand-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 -m-4 border border-blue-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl shadow-brand-900/50 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-blue-500/20"></div>
                 <Shield size={40} className="text-white relative z-10" />
              </div>
           </motion.div>

           {/* Connected Nodes - updated animate prop */}
           {[1, 2, 3, 4].map((i) => (
             <motion.div
               key={i}
               className="absolute w-2 h-2 bg-brand-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
               style={{
                 top: `${50 + Math.sin(i * 1.5) * 35}%`,
                 left: `${50 + Math.cos(i * 1.5) * 35}%`,
               }}
               variants={pulse}
               animate="pulsing"
             />
           ))}
           
           {/* Connection Lines (Static SVG overlay) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="white" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
           </svg>
        </div>
      );

    case 'pergamon-cafe':
      return (
        <div className={`${containerClass} bg-orange-50`}>
          <div className="relative z-10 flex items-center justify-center">
             {/* Mobile App View */}
             <motion.div 
               className="w-32 h-56 bg-white rounded-3xl border-4 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col"
               initial={{ rotate: -10, y: 20 }}
               whileInView={{ rotate: -5, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                {/* Header */}
                <div className="h-16 bg-brand-500 flex items-center justify-center">
                   <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Menu Items */}
                <div className="p-3 space-y-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex gap-2 items-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg shrink-0"></div>
                        <div className="flex-1 space-y-1">
                           <div className="w-full h-1.5 bg-slate-200 rounded"></div>
                           <div className="w-1/2 h-1.5 bg-slate-200 rounded"></div>
                        </div>
                     </div>
                   ))}
                </div>
                
                {/* Bottom Button */}
                <div className="mt-auto m-3 h-8 bg-slate-800 rounded-lg"></div>
             </motion.div>

             {/* Floating Coffee Cup - updated animate prop */}
             <motion.div 
               className="absolute -right-10 bottom-8 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border border-orange-100"
               variants={float} animate="floating"
             >
                <Coffee size={32} className="text-brand-600" />
                {/* Steam */}
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-8 border-l-2 border-slate-300 rounded-full opacity-50"
                  animate={{ y: -5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
             </motion.div>
          </div>
        </div>
      );

    default:
      // Generic Tech Illustration
      return (
        <div className={`${containerClass} bg-slate-50`}>
           <div className="relative w-4/5 aspect-video bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-6 bg-slate-100 border-b border-slate-200 flex items-center gap-1.5 px-3">
                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
              <div className="flex-1 p-4 flex gap-4">
                 <div className="w-1/3 space-y-2">
                    <div className="w-full h-2 bg-slate-100 rounded"></div>
                    <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
                    <div className="w-full h-20 bg-brand-50 rounded mt-2 opacity-50"></div>
                 </div>
                 <div className="flex-1 bg-slate-50 rounded-lg flex items-center justify-center">
                    <Code size={32} className="text-slate-300" />
                 </div>
              </div>
              
              {/* Scanning Line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-brand-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
           </div>
        </div>
      );
  }
};
