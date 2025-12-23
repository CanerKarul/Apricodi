
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Shield, Smartphone, Globe, Coffee, Heart, Code, Search, Zap, Cpu, Bot, Layers, Palette, BarChart3, Lock } from 'lucide-react';

interface ProjectIllustrationProps {
  projectId: string;
  className?: string;
}

export const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({ projectId, className = '' }) => {
  const containerClass = `w-full h-full relative overflow-hidden flex items-center justify-center ${className}`;

  // Premium Animation Variants
  const floating = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const rotating = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    }
  };

  const pulsing = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.6, 1, 0.6],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  switch (projectId) {
    case 'filiz-cekil-bridal':
      return (
        <div className={`${containerClass} bg-stone-50`}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#78716c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative w-full h-full flex items-center justify-center p-12">
             {/* Background Silk Flow */}
             <motion.div 
               className="absolute w-72 h-72 bg-brand-100/30 blur-[60px] rounded-full"
               animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
               transition={{ duration: 8, repeat: Infinity }}
             />

             {/* UI Mockup - Fashion focus */}
             <motion.div 
               className="w-56 h-80 bg-white rounded-[2rem] shadow-2xl border border-stone-100 overflow-hidden flex flex-col relative z-10"
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="h-40 bg-stone-50 relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div variants={rotating} animate="animate">
                         <div className="w-32 h-32 border-2 border-stone-200/50 rounded-full border-dashed" />
                      </motion.div>
                      <ShoppingBag size={48} className="text-stone-300 absolute" />
                   </div>
                   <div className="absolute bottom-4 left-4">
                      <div className="w-20 h-3 bg-stone-200 rounded-full mb-1"></div>
                      <div className="w-12 h-2 bg-stone-100 rounded-full"></div>
                   </div>
                </div>
                <div className="p-6 space-y-4">
                   <div className="flex gap-2">
                      <div className="w-10 h-10 bg-stone-50 rounded-xl" />
                      <div className="w-10 h-10 bg-stone-50 rounded-xl" />
                      <div className="w-10 h-10 bg-stone-50 rounded-xl" />
                   </div>
                   <div className="h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest">Koleksiyonu Gör</div>
                </div>
             </motion.div>

             {/* Floating Premium Badge */}
             <motion.div 
               className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-stone-50"
               variants={floating} animate="animate"
             >
                <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-800">
                   <Palette size={20} />
                </div>
                <div>
                   <div className="text-[10px] font-black text-stone-900">HAUTE COUTURE</div>
                   <div className="text-[8px] text-stone-400">Digital Experience</div>
                </div>
             </motion.div>
          </div>
        </div>
      );

    case 'farkindayiz-platform':
      return (
        <div className={`${containerClass} bg-slate-900`}>
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="relative w-full h-full flex items-center justify-center p-12">
             {/* Security Core Node */}
             <motion.div 
               className="relative z-10"
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
             >
                {/* Orbital Rings */}
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i}
                    className="absolute inset-0 -m-8 border border-brand-500/20 rounded-full"
                    animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.1, 1] }}
                    style={{ width: 120 + i * 40, height: 120 + i * 40, left: -(i * 20), top: -(i * 20) }}
                    transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                  />
                ))}

                <div className="w-32 h-32 bg-slate-800 rounded-[2.5rem] border-2 border-brand-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.3)] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent animate-pulse" />
                   <Shield size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
             </motion.div>

             {/* Floating Info Cards */}
             <motion.div 
               className="absolute top-10 left-10 bg-slate-800/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 flex items-center gap-3"
               variants={floating} animate="animate"
             >
                <Lock size={16} className="text-brand-500" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Siber Güvenlik</span>
             </motion.div>

             <motion.div 
               className="absolute bottom-10 right-10 bg-brand-500 p-4 rounded-xl shadow-2xl flex items-center gap-3"
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
             >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                   <Bot size={18} />
                </div>
                <div className="text-[10px] font-black text-white uppercase">Farkındalık Platformu</div>
             </motion.div>

             {/* Pulse Nodes */}
             {[1, 2, 3, 4, 5].map(i => (
               <motion.div
                 key={i}
                 className="absolute w-2 h-2 bg-brand-500 rounded-full"
                 style={{ 
                   top: `${20 + Math.random() * 60}%`, 
                   left: `${20 + Math.random() * 60}%`,
                   boxShadow: '0 0 15px #f97316'
                 }}
                 variants={pulsing}
                 animate="animate"
               />
             ))}
          </div>
        </div>
      );

    case 'pergamon-cafe':
      return (
        <div className={`${containerClass} bg-orange-50`}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative w-full h-full flex items-center justify-center p-8 gap-12">
             {/* Mobile Mockup - Food focus */}
             <motion.div 
               className="w-44 h-72 bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border-4 border-slate-800 relative z-10"
               initial={{ rotate: -5, opacity: 0 }}
               whileInView={{ rotate: 0, opacity: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                   <div className="h-24 bg-orange-100 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-100/50" />
                      <Coffee size={32} className="text-orange-600" />
                   </div>
                   <div className="p-4 space-y-3">
                      <div className="w-full h-2 bg-slate-100 rounded" />
                      <div className="grid grid-cols-2 gap-2">
                         <div className="aspect-square bg-orange-50 rounded-lg" />
                         <div className="aspect-square bg-orange-50 rounded-lg" />
                      </div>
                      <div className="w-full h-8 bg-orange-500 rounded-xl mt-4" />
                   </div>
                </div>
             </motion.div>

             {/* Floating Stats / Info */}
             <div className="flex flex-col gap-6">
                <motion.div 
                  className="bg-white p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3"
                  variants={floating} animate="animate"
                >
                   <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                      <BarChart3 size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] font-black text-slate-900">QR MENÜ</div>
                      <div className="text-[8px] text-slate-400">Digital Catalog</div>
                   </div>
                </motion.div>

                <motion.div 
                  className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                   <Globe size={16} className="text-orange-500" />
                   <div className="text-[10px] font-black uppercase">Mobil Uyumlu</div>
                </motion.div>
             </div>

             {/* Abstract Coffee Beans */}
             {[1, 2, 3].map(i => (
               <motion.div
                 key={i}
                 className="absolute w-4 h-6 bg-orange-200/40 rounded-full"
                 style={{ 
                   top: `${10 + i * 20}%`, 
                   left: `${15 + i * 5}%`,
                   rotate: i * 45
                 }}
                 animate={{ y: [0, -10, 0], rotate: [i*45, i*45 + 10, i*45] }}
                 transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
               />
             ))}
          </div>
        </div>
      );

    default:
      return (
        <div className={`${containerClass} bg-slate-50`}>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative w-full h-full flex items-center justify-center p-12">
             <motion.div 
               className="w-64 h-44 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 relative overflow-hidden"
               initial={{ scale: 0.9 }}
               whileInView={{ scale: 1 }}
             >
                <div className="h-6 bg-slate-50 border-b border-slate-100 -mx-4 -mt-4 px-4 flex items-center gap-1">
                   <div className="w-2 h-2 rounded-full bg-slate-200" />
                   <div className="w-2 h-2 rounded-full bg-slate-200" />
                   <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
                <div className="mt-4 flex gap-4">
                   <div className="w-24 h-24 bg-slate-50 rounded-xl flex items-center justify-center">
                      <Code size={40} className="text-brand-200" />
                   </div>
                   <div className="flex-1 space-y-3">
                      <div className="w-full h-3 bg-slate-100 rounded-full" />
                      <div className="w-full h-3 bg-slate-100 rounded-full" />
                      <div className="w-2/3 h-3 bg-brand-100 rounded-full" />
                   </div>
                </div>
                {/* Scanning Light */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/10 to-transparent w-20"
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
             </motion.div>

             <motion.div 
               className="absolute top-8 right-8 bg-slate-900 text-white p-3 rounded-xl shadow-xl"
               variants={floating} animate="animate"
             >
                <Zap size={20} className="text-brand-500" />
             </motion.div>
          </div>
        </div>
      );
  }
};
