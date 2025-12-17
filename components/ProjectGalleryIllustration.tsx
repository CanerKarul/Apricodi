import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Calendar, MapPin, 
  Shield, MousePointer2, Coffee, BookOpen, Check, Star
} from 'lucide-react';

interface Props {
  projectId: string;
  index: number;
  className?: string;
}

export const ProjectGalleryIllustration: React.FC<Props> = ({ projectId, index, className = '' }) => {
  // Added padding p-8 to prevent clipping during animations
  const containerClass = `w-full h-full min-h-[300px] bg-slate-50 relative overflow-hidden flex items-center justify-center border border-slate-100 rounded-2xl p-8 ${className}`;

  if (projectId === 'filiz-cekil-bridal') {
    if (index === 0) {
      return (
        <div className={containerClass}>
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            className="w-[80%] h-[80%] bg-white rounded-t-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative"
          >
            <div className="h-8 bg-stone-100 border-b border-stone-200 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
              <div className="flex-1 text-center text-[10px] text-stone-400">filizcekilbridal.com</div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-2">
                  <div className="w-full aspect-[3/4] bg-stone-100 rounded-lg"></div>
                  <div className="h-2 w-3/4 bg-stone-100 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
             className="absolute bottom-12 right-[15%]" animate={{ x: [0, -20, 0], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
          >
             <MousePointer2 className="fill-stone-800 text-stone-800" size={24} />
          </motion.div>
        </div>
      );
    } else {
      return (
        <div className={`${containerClass} bg-stone-50`}>
           <motion.div 
             className="w-52 h-[350px] bg-white rounded-[2.5rem] border-[6px] border-stone-800 shadow-2xl overflow-hidden flex flex-col"
             initial={{ rotate: 5, y: 10 }} whileInView={{ rotate: 0, y: 0 }}
           >
              <div className="mt-12 px-5 text-center">
                 <Calendar size={24} className="text-stone-400 mx-auto mb-6" />
                 <div className="h-3 w-24 bg-stone-800 rounded mx-auto mb-4"></div>
                 <div className="space-y-3">
                    <div className="h-10 w-full border border-stone-200 rounded-xl"></div>
                    <div className="h-10 w-full bg-stone-800 rounded-xl text-white text-[10px] flex items-center justify-center font-bold uppercase">Randevu Al</div>
                 </div>
              </div>
           </motion.div>
        </div>
      );
    }
  }

  if (projectId === 'farkindayiz-platform') {
    if (index === 0) {
      return (
        <div className={`${containerClass} bg-blue-50/30`}>
           <motion.div 
             className="w-[85%] h-[80%] bg-white rounded-t-xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden"
             initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
           >
              <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-4 flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm"><BookOpen size={18} /></div>
                   <div className="h-2.5 w-1/3 bg-slate-800 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <div className="h-20 border border-slate-100 rounded-lg p-3"></div>
                   <div className="h-20 border border-slate-100 rounded-lg p-3"></div>
                </div>
              </div>
           </motion.div>
        </div>
      );
    } else {
      return (
        <div className={`${containerClass} bg-blue-50/50`}>
           <motion.div 
             className="w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 relative"
             initial={{ scale: 0.95 }} whileInView={{ scale: 1 }}
           >
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Shield size={20} /></div>
                 <div className="h-2.5 w-20 bg-slate-800 rounded"></div>
              </div>
              <div className="space-y-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><Check size={10} className="text-emerald-600"/></div><div className="h-2 w-24 bg-slate-100 rounded"></div></div>
                 ))}
              </div>
              <motion.div 
                className="absolute -top-3 -right-3 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg"
                animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
              >
                 <Star size={14} fill="white" />
              </motion.div>
           </motion.div>
        </div>
      );
    }
  }

  if (projectId === 'pergamon-cafe') {
    if (index === 0) {
      return (
        <div className={`${containerClass} bg-orange-50/50`}>
           <motion.div 
             className="w-52 h-[330px] bg-white rounded-[2rem] border-[6px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col"
             initial={{ rotate: -5 }} whileInView={{ rotate: 0 }}
           >
                <div className="h-24 bg-orange-100"></div>
                <div className="p-4 space-y-3 flex-1">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex gap-3 items-center">
                        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-orange-300"><Coffee size={16} /></div>
                        <div className="flex-1 h-2 bg-slate-100 rounded"></div>
                     </div>
                   ))}
                </div>
                <div className="p-4"><div className="w-full h-8 bg-orange-500 rounded-xl shadow-lg"></div></div>
           </motion.div>
        </div>
      );
    } else {
      return (
        <div className={containerClass}>
           <div className="w-full h-full relative">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                   className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-4"
                   initial={{ y: 20 }} whileInView={{ y: 0 }}
                 >
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600"><MapPin size={20} className="fill-orange-600" /></div>
                    <div>
                       <div className="h-2.5 w-24 bg-slate-800 rounded mb-2"></div>
                       <div className="h-2 w-32 bg-slate-300 rounded"></div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      );
    }
  }

  return (
    <div className={containerClass}>
       <div className="text-center p-8">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
             <ShoppingBag size={32} />
          </div>
          <div className="h-2 w-24 bg-slate-100 rounded mx-auto"></div>
       </div>
    </div>
  );
};