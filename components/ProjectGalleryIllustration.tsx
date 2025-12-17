import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Calendar, Menu, MapPin, 
  Shield, FileText, Layout,
  MousePointer2, Share2, Coffee, BookOpen, MessageCircle, Check, Star, Heart
} from 'lucide-react';

interface Props {
  projectId: string;
  index: number;
  className?: string;
}

export const ProjectGalleryIllustration: React.FC<Props> = ({ projectId, index, className = '' }) => {
  // Added p-8 to create a safe zone for animations so floating elements don't get clipped
  const containerClass = `w-full h-full min-h-[300px] bg-slate-50 relative overflow-hidden flex items-center justify-center border border-slate-100 rounded-2xl p-8 ${className}`;

  // Common animation variants
  const float = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // --- 1. FILIZ CEKIL (FASHION) - REFERANS TASARIM ---
  if (projectId === 'filiz-cekil-bridal') {
    if (index === 0) {
      // Desktop Catalog View
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            // Reduced width to 80% to ensure cursor doesn't clip
            className="w-[80%] h-[80%] bg-white rounded-t-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative top-8"
          >
            {/* Browser Header */}
            <div className="h-8 bg-stone-100 border-b border-stone-200 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
              <div className="flex-1 text-center text-[10px] text-stone-400 font-mono">filizcekilbridal.com</div>
            </div>
            {/* Content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-2">
                  <div className="w-full aspect-[3/4] bg-stone-100 rounded-lg relative overflow-hidden group">
                     <motion.div 
                       className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors"
                       whileHover={{ opacity: 1 }}
                     />
                     <div className="absolute bottom-2 left-2 w-16 h-2 bg-white/80 rounded-full"></div>
                  </div>
                  <div className="h-2 w-3/4 bg-stone-100 rounded"></div>
                  <div className="h-2 w-1/4 bg-stone-200 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Floating Cursor - Adjusted position to stay within bounds */}
          <motion.div 
             className="absolute bottom-16 right-[20%] z-20"
             animate={{ x: [0, -20, -20, 0], y: [0, -10, 0, 0] }}
             transition={{ duration: 4, repeat: Infinity }}
          >
             <MousePointer2 className="fill-stone-800 text-stone-800" size={24} />
          </motion.div>
        </div>
      );
    } else {
      // Mobile Booking UI
      return (
        <div className={`${containerClass} bg-stone-50`}>
           <motion.div 
             // Scaled down slightly to allow rotation without clipping
             className="w-52 h-[360px] bg-white rounded-[2.5rem] border-[6px] border-stone-800 shadow-2xl overflow-hidden relative flex flex-col"
             initial={{ rotate: 5, y: 30 }}
             whileInView={{ rotate: 0, y: 10 }}
             transition={{ duration: 0.8 }}
           >
              <div className="absolute top-0 w-full h-6 bg-stone-100 z-10 rounded-b-xl border-b border-stone-200"></div>
              
              <div className="mt-8 px-5">
                 <div className="w-14 h-14 rounded-full bg-stone-50 mx-auto mb-6 flex items-center justify-center border border-stone-100">
                    <Calendar size={24} className="text-stone-400" />
                 </div>
                 <div className="text-center space-y-3 mb-8">
                    <div className="h-2.5 w-24 bg-stone-800 rounded mx-auto"></div>
                    <div className="h-2 w-32 bg-stone-100 rounded mx-auto"></div>
                 </div>
                 
                 <div className="space-y-3">
                    <div className="h-12 w-full border border-stone-200 rounded-xl flex items-center px-4 bg-stone-50/50">
                       <div className="w-20 h-2 bg-stone-200 rounded"></div>
                    </div>
                    <div className="h-12 w-full border border-stone-200 rounded-xl flex items-center px-4 bg-stone-50/50">
                       <div className="w-16 h-2 bg-stone-200 rounded"></div>
                    </div>
                    <div className="h-12 w-full bg-stone-800 rounded-xl shadow-lg flex items-center justify-center text-white text-[10px] font-bold tracking-widest uppercase mt-4">
                       Randevu Al
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      );
    }
  }

  // --- 2. FARKINDAYIZ (SOCIAL IMPACT) - NEW CLEAN STYLE ---
  if (projectId === 'farkindayiz-platform') {
    if (index === 0) {
      // Desktop: Knowledge Base / Article View (Clean & Academic)
      return (
        <div className={`${containerClass} bg-blue-50/30`}>
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

           <motion.div 
             className="w-[85%] h-[80%] bg-white rounded-t-xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden relative top-8"
             initial={{ y: 40, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
           >
              {/* Browser Header */}
              <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 justify-between">
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="w-32 h-4 bg-slate-200 rounded-md opacity-50"></div>
                <div className="w-4"></div>
              </div>

              {/* Main Layout */}
              <div className="p-6 flex gap-6 h-full">
                 {/* Sidebar */}
                 <div className="w-1/4 space-y-3 hidden sm:block">
                    <div className="h-2 w-12 bg-slate-200 rounded mb-4"></div>
                    {[1,2,3,4].map(i => (
                      <div key={i} className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                         <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                      </div>
                    ))}
                 </div>

                 {/* Content Area */}
                 <div className="flex-1 space-y-4">
                    {/* Hero Article */}
                    <div className="w-full h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-4 flex gap-4 items-center relative overflow-hidden">
                       <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm shrink-0 z-10">
                          <BookOpen size={20} />
                       </div>
                       <div className="space-y-2 z-10 w-full">
                          <div className="h-2.5 w-1/3 bg-slate-800 rounded"></div>
                          <div className="h-2 w-2/3 bg-slate-400 rounded opacity-60"></div>
                       </div>
                       <div className="absolute right-0 bottom-0 opacity-10">
                          <Shield size={100} />
                       </div>
                    </div>

                    {/* Grid Items */}
                    <div className="grid grid-cols-2 gap-3">
                       {[1,2].map(i => (
                         <div key={i} className="h-20 border border-slate-100 rounded-lg p-3 space-y-2 hover:border-blue-200 transition-colors">
                            <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                            <div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      );
    } else {
      // Mobile: Interactive Quiz / Info Card
      return (
        <div className={`${containerClass} bg-blue-50/50`}>
           <motion.div 
             className="w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 relative" // Reduced width from w-60 to w-56
             initial={{ scale: 0.9, y: 10, opacity: 0 }}
             whileInView={{ scale: 1, y: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
           >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Shield size={20} />
                 </div>
                 <div>
                    <div className="h-2 w-20 bg-slate-800 rounded mb-1.5"></div>
                    <div className="h-1.5 w-12 bg-slate-300 rounded"></div>
                 </div>
              </div>

              {/* Checklist / Steps */}
              <div className="space-y-3">
                 {[
                   { color: 'bg-emerald-100 text-emerald-600', width: 'w-24' },
                   { color: 'bg-slate-100 text-slate-400', width: 'w-32' },
                   { color: 'bg-slate-100 text-slate-400', width: 'w-20' }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                       <div className={`w-5 h-5 rounded-full ${item.color} flex items-center justify-center`}>
                          {i === 0 ? <Check size={12} /> : <div className="w-1.5 h-1.5 rounded-full bg-current"></div>}
                       </div>
                       <div className={`h-2 ${item.width} bg-slate-200 rounded`}></div>
                    </div>
                 ))}
              </div>

              {/* Action Button */}
              <div className="mt-6 w-full h-9 bg-slate-900 rounded-lg flex items-center justify-center gap-2">
                 <div className="h-1.5 w-16 bg-white/90 rounded"></div>
              </div>

              {/* Floating Element - Positioned closer to avoid clip */}
              <motion.div 
                className="absolute -top-3 -right-3 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white"
                variants={float} animate="animate"
              >
                 <Star size={14} fill="white" />
              </motion.div>
           </motion.div>
        </div>
      );
    }
  }

  // --- 3. PERGAMON (CAFE) - REFINED CLEAN STYLE ---
  if (projectId === 'pergamon-cafe') {
    if (index === 0) {
      // Mobile App / Ordering UI (Refined)
      return (
        <div className={`${containerClass} bg-orange-50/50`}>
           <div className="relative z-10 flex items-center justify-center">
             <motion.div 
               className="w-52 h-[340px] bg-white rounded-[2rem] border-[6px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col" // Reduced width/height
               initial={{ rotate: -5, y: 20 }}
               whileInView={{ rotate: 0, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                {/* Header Image Area */}
                <div className="h-24 bg-orange-100 relative overflow-hidden">
                   <motion.div 
                     className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                   />
                   <div className="absolute bottom-3 left-4 text-white font-bold text-xs bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      Coffee & More
                   </div>
                </div>
                
                {/* Product List */}
                <div className="p-4 space-y-3 bg-white flex-1">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex gap-3 items-center group">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl shrink-0 flex items-center justify-center text-orange-300 group-hover:text-orange-500 transition-colors">
                           <Coffee size={18} />
                        </div>
                        <div className="flex-1 space-y-1.5">
                           <div className="w-20 h-2 bg-slate-800 rounded"></div>
                           <div className="w-10 h-1.5 bg-slate-300 rounded"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full border border-slate-200 flex items-center justify-center">
                           <div className="w-2 h-0.5 bg-slate-400"></div>
                        </div>
                     </div>
                   ))}
                </div>
                
                {/* Floating Cart Button */}
                <div className="absolute bottom-4 left-0 right-0 px-4">
                   <div className="w-full h-10 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-between px-4">
                      <div className="w-4 h-4 rounded bg-white/20"></div>
                      <div className="w-12 h-1.5 bg-white/90 rounded"></div>
                   </div>
                </div>
             </motion.div>

             {/* Floating Elements - Moved closer to center */}
             <motion.div 
               className="absolute -right-6 bottom-16 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-orange-100 rotate-12"
               variants={float} animate="animate"
             >
                <div className="text-center">
                   <div className="text-[10px] text-slate-400 font-bold">PUAN</div>
                   <div className="text-lg font-bold text-orange-500">4.9</div>
                </div>
             </motion.div>
          </div>
        </div>
      );
    } else {
      // Map / Location Card (Refined)
      return (
        <div className={containerClass}>
           <div className="w-full h-full relative">
              {/* Map Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              {/* Organic Path Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <motion.path 
                   d="M 120 220 Q 180 180 220 200 T 320 150" 
                   fill="none" 
                   stroke="#fb923c" 
                   strokeWidth="4" 
                   strokeLinecap="round"
                   strokeDasharray="8 8"
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   transition={{ duration: 1.5 }}
                 />
                 <circle cx="120" cy="220" r="4" fill="#fb923c" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                   className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-4 max-w-[240px] relative z-10"
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.3 }}
                 >
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                       <MapPin size={20} className="fill-orange-600" />
                    </div>
                    <div>
                       <div className="h-2.5 w-24 bg-slate-800 rounded mb-2"></div>
                       <div className="h-2 w-32 bg-slate-300 rounded mb-1"></div>
                       <div className="h-2 w-20 bg-slate-200 rounded"></div>
                       
                       <div className="mt-3 flex gap-2">
                          <div className="w-16 h-6 bg-slate-100 rounded-md"></div>
                          <div className="w-6 h-6 bg-slate-100 rounded-md"></div>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      );
    }
  }

  // --- DEFAULT FALLBACK ---
  return (
    <div className={containerClass}>
       <div className="text-center p-8">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
             <Layout size={32} />
          </div>
          <div className="h-3 w-32 bg-slate-200 rounded mx-auto mb-2"></div>
          <div className="h-2 w-24 bg-slate-100 rounded mx-auto"></div>
       </div>
    </div>
  );
};
