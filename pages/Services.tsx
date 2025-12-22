
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Button, Badge } from '../components/ui';
import { SEO } from '../components/SEO';
import { services } from '../data';
import { 
  Check, 
  ArrowRight, 
  Minus, 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  ShieldCheck, 
  Activity, 
  Palette, 
  MousePointer2, 
  Layers,
  Layout as LayoutIcon,
  Maximize2,
  Type,
  Globe,
  Database,
  Terminal,
  Cpu,
  Zap,
  CreditCard,
  BarChart3,
  Search,
  MessageSquare,
  Bot,
  Mic
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceIllustration: React.FC<{ id: string }> = ({ id }) => {
  const containerClass = "w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden flex items-center justify-center p-4 md:p-8";
  const floating = { floating: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const } } };

  switch (id) {
    case 'ai-automation':
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative w-full h-full flex items-center justify-center">
             {/* n8n Style Nodes */}
             <motion.div 
               className="relative flex items-center gap-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
             >
                {/* Node 1: Trigger */}
                <motion.div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center justify-center text-brand-600 relative z-10" variants={floating} animate="floating">
                   <Mic size={24} />
                   <div className="absolute -bottom-6 text-[8px] font-bold text-slate-400 uppercase">Input</div>
                </motion.div>

                {/* Connection Line 1 */}
                <motion.div className="w-12 h-0.5 bg-brand-500/20 relative" initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 1 }}>
                   <motion.div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-500 rounded-full" animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} />
                </motion.div>

                {/* Node 2: AI Processor */}
                <motion.div className="w-24 h-24 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center text-brand-500 relative z-10 group" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                   <div className="absolute inset-0 bg-brand-500/10 rounded-3xl animate-pulse"></div>
                   <Bot size={40} className="relative z-10" />
                   <div className="absolute -bottom-8 text-[10px] font-bold text-slate-900 uppercase">AI Core</div>
                </motion.div>

                {/* Connection Line 2 */}
                <motion.div className="w-12 h-0.5 bg-brand-500/20 relative" initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 1, delay: 0.5 }}>
                   <motion.div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-500 rounded-full" animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                </motion.div>

                {/* Node 3: Output */}
                <motion.div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center justify-center text-blue-600 relative z-10" variants={floating} animate="floating" transition={{ delay: 0.3 }}>
                   <MessageSquare size={24} />
                   <div className="absolute -bottom-6 text-[8px] font-bold text-slate-400 uppercase">Chatbot</div>
                </motion.div>
             </motion.div>

             {/* Floating Automation Tags */}
             <motion.div 
               className="absolute top-12 left-12 bg-white/80 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-lg flex items-center gap-2"
               initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
             >
                <Zap size={14} className="text-amber-500" />
                <span className="text-[10px] font-bold text-slate-800">Autonomous Flow</span>
             </motion.div>
          </div>
        </div>
      );
    case 'web-dev':
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          {/* Main Browser Window */}
          <motion.div 
            className="w-[90%] h-[80%] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10 flex flex-col"
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900 h-8 flex items-center px-4 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="flex-1"></div>
              <div className="w-24 h-2 bg-slate-800 rounded-full"></div>
            </div>
            <div className="flex-1 flex">
              <div className="w-12 md:w-16 border-r border-slate-100 bg-slate-50 flex flex-col items-center py-4 gap-4">
                <Globe size={16} className="text-brand-500" />
                <Database size={16} className="text-slate-300" />
                <Terminal size={16} className="text-slate-300" />
              </div>
              <div className="flex-1 p-4 md:p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-1/3 h-4 bg-slate-800 rounded"></div>
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600"><Code2 size={14}/></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 p-3 space-y-2">
                    <div className="w-full h-1.5 bg-slate-200 rounded"></div>
                    <div className="w-5/6 h-1.5 bg-slate-200 rounded"></div>
                    <div className="w-2/3 h-1.5 bg-brand-100 rounded"></div>
                  </div>
                  <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 p-3 flex flex-col justify-end">
                    <motion.div className="w-full h-1 bg-brand-500 rounded" initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }}></motion.div>
                    <div className="mt-2 text-[8px] font-bold text-slate-400">OPTIMIZING SEO...</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded"></div>
                <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Performance Indicator */}
          <motion.div 
            variants={floating} animate="floating"
            className="absolute top-12 right-12 bg-slate-900 text-white p-3 rounded-lg shadow-xl z-20 flex items-center gap-3 border border-slate-700"
          >
             <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin"></div>
             <div>
               <div className="text-[10px] font-bold text-brand-500">APRICODI Core</div>
               <div className="text-[10px] font-medium text-slate-400">99/100 Speed Score</div>
             </div>
          </motion.div>
        </div>
      );
    case 'mobile-dev':
      return (
        <div className={containerClass}>
          <div className="absolute left-0 top-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative flex items-center justify-center gap-6">
            {/* Phone Frame */}
            <motion.div 
              className="w-44 h-[320px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl relative z-10 border-4 border-slate-800"
              initial={{ x: -20, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
               <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 rounded-b-xl z-20"></div>
                  <div className="h-20 bg-brand-600 p-4 flex flex-col justify-end">
                    <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center text-white"><Smartphone size={16}/></div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
                    <div className="space-y-2">
                      {[1, 2].map(i => (
                        <div key={i} className="flex gap-2 items-center">
                          <div className="w-10 h-10 bg-slate-50 rounded-xl"></div>
                          <div className="flex-1 space-y-1.5">
                            <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                            <div className="w-2/3 h-1.5 bg-slate-100 rounded"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-8 bg-brand-500 rounded-xl mt-4"></div>
                  </div>
               </div>
            </motion.div>

            {/* Floating Multi-Platform Elements */}
            <div className="flex flex-col gap-4">
              <motion.div 
                className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Smartphone size={16} /></div>
                <div className="text-[10px] font-bold text-slate-800">iOS Native</div>
              </motion.div>
              <motion.div 
                className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Cpu size={16} /></div>
                <div className="text-[10px] font-bold text-slate-800">Android SDK</div>
              </motion.div>
              <motion.div 
                className="bg-slate-900 text-white p-3 rounded-2xl shadow-xl flex items-center gap-3"
                initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white"><Zap size={16} /></div>
                <div className="text-[10px] font-bold">Cross-Platform</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    case 'ui-ux':
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <motion.div 
            className="w-full h-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative"
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-10 bg-slate-900 flex items-center px-4 gap-4 justify-between">
              <div className="flex items-center gap-3">
                 <div className="flex gap-1">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                 </div>
                 <div className="h-4 w-px bg-slate-700 mx-1"></div>
                 <div className="flex gap-3 text-slate-400">
                    <LayoutIcon size={14} className="text-brand-500" />
                    <Type size={14} />
                    <Palette size={14} />
                    <Maximize2 size={14} />
                 </div>
              </div>
              <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Project Alpha / Mobile App</div>
              <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[8px] font-bold text-slate-300">AK</div>
            </div>

            <div className="flex-1 flex overflow-hidden">
              <div className="w-1/4 border-r border-slate-100 bg-slate-50/50 p-3 hidden md:flex flex-col gap-4">
                 <div className="flex items-center gap-2 mb-2">
                    <Layers size={12} className="text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Layers</span>
                 </div>
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className={`flex items-center gap-2 ${i === 2 ? 'text-brand-600' : 'text-slate-400'}`}>
                       <div className={`w-3 h-3 rounded-sm border ${i === 2 ? 'bg-brand-50 border-brand-200' : 'border-slate-200'}`}></div>
                       <div className={`h-1.5 rounded-full ${i === 2 ? 'bg-brand-500 w-12' : 'bg-slate-200 w-10'}`}></div>
                    </div>
                 ))}
              </div>

              <div className="flex-1 bg-slate-100 flex items-center justify-center relative p-6">
                 <motion.div 
                   className="w-36 h-64 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col relative"
                   initial={{ scale: 0.9 }}
                   whileInView={{ scale: 1 }}
                   transition={{ delay: 0.2 }}
                 >
                    <div className="h-14 bg-brand-50 p-3 flex flex-col justify-end gap-1.5">
                       <div className="w-6 h-6 rounded bg-white shadow-sm"></div>
                       <div className="w-1/2 h-1.5 bg-brand-200 rounded"></div>
                    </div>
                    <div className="p-3 space-y-2">
                       <div className="w-full h-12 bg-slate-50 rounded-lg border border-slate-100 p-2 flex flex-col gap-1.5">
                          <div className="w-full h-1 bg-slate-200 rounded"></div>
                          <div className="w-2/3 h-1 bg-slate-200 rounded"></div>
                          <div className="w-1/3 h-1 bg-brand-300 rounded"></div>
                       </div>
                       <div className="grid grid-cols-2 gap-2">
                          <div className="aspect-square bg-slate-50 rounded-lg border border-slate-100"></div>
                          <div className="aspect-square bg-slate-50 rounded-lg border border-slate-100"></div>
                       </div>
                    </div>
                    <motion.div 
                      className="absolute inset-x-2 top-16 h-12 border-2 border-brand-500 rounded-lg pointer-events-none"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                       <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-brand-500"></div>
                       <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-brand-500"></div>
                       <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-brand-500"></div>
                       <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-brand-500"></div>
                    </motion.div>
                 </motion.div>

                 <motion.div 
                   className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow-xl border border-slate-100 flex flex-col gap-2 z-20"
                   variants={floating} animate="floating"
                 >
                    <div className="text-[8px] font-bold text-slate-400 uppercase px-1">Colors</div>
                    <div className="grid grid-cols-2 gap-1.5">
                       {['#f97316', '#0f172a', '#64748b', '#f1f5f9'].map(c => (
                          <div key={c} className="w-4 h-4 rounded-full border border-slate-100" style={{ backgroundColor: c }}></div>
                       ))}
                    </div>
                 </motion.div>

                 <motion.div 
                   className="absolute z-30 text-brand-600"
                   animate={{ 
                     x: [20, -10, 30, 0], 
                     y: [30, 0, -20, 10] 
                   }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 >
                    <MousePointer2 size={24} className="fill-brand-600" />
                    <div className="ml-4 mt-2 bg-brand-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-lg whitespace-nowrap">Apricodi Designer</div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className={containerClass}>
           <div className="relative w-full max-w-lg h-full flex items-center justify-center">
              {/* Product Grid Card */}
              <motion.div 
                className="w-64 h-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative z-10"
                initial={{ rotate: -5, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.8 }}
              >
                <div className="h-32 bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center">
                  <ShoppingBag size={48} className="text-brand-200" />
                </div>
                <div className="p-4 space-y-3">
                   <div className="w-2/3 h-2.5 bg-slate-800 rounded"></div>
                   <div className="w-1/2 h-2 bg-slate-300 rounded"></div>
                   <div className="flex justify-between items-center pt-4">
                      <div className="w-12 h-3 bg-brand-100 rounded"></div>
                      <div className="w-16 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white"><ShoppingBag size={14} /></div>
                   </div>
                </div>
              </motion.div>

              {/* Floating Sales Stats */}
              <motion.div 
                className="absolute top-10 right-0 w-48 bg-slate-900 rounded-2xl p-4 shadow-2xl z-20"
                variants={floating} animate="floating"
              >
                 <div className="flex justify-between items-center mb-4">
                   <span className="text-[10px] text-slate-400 font-bold uppercase">Revenue</span>
                   <BarChart3 size={14} className="text-brand-500" />
                 </div>
                 <div className="text-xl font-extrabold text-white mb-4">₺128.4K</div>
                 <div className="flex items-end gap-1 h-12">
                   {[30, 60, 45, 80, 50].map((h, i) => (
                     <motion.div key={i} className="flex-1 bg-brand-500/30 rounded-t-sm" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: 0.5 + i * 0.1 }} />
                   ))}
                 </div>
              </motion.div>

              {/* Payment Success Indicator */}
              <motion.div 
                className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
                initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }}
              >
                 <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CreditCard size={16} /></div>
                 <div className="text-[10px] font-bold text-slate-800">Secure Checkout</div>
              </motion.div>
           </div>
        </div>
      );
    case 'maintenance':
      return (
        <div className={containerClass}>
           <div className="relative flex items-center justify-center w-full h-full">
              {/* Radar Rings */}
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  className="absolute border border-brand-500/10 rounded-full" 
                  style={{ width: `${i * 120}px`, height: `${i * 120}px` }} 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }} 
                  transition={{ duration: 4, delay: i * 0.8, repeat: Infinity }} 
                />
              ))}

              {/* Central Shield Shield */}
              <motion.div 
                className="w-24 h-24 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center relative z-10"
                initial={{ scale: 0.5, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }}
              >
                <div className="absolute inset-0 bg-brand-500/5 rounded-3xl animate-pulse"></div>
                <ShieldCheck size={48} className="text-brand-600 relative z-10" />
              </motion.div>

              {/* Status Tags */}
              <motion.div 
                className="absolute top-1/4 -right-4 bg-slate-900 text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-lg"
                variants={floating} animate="floating"
              >
                <Activity size={12} className="text-green-400" /> %99.9 Uptime
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -left-4 bg-white text-slate-800 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-lg border border-slate-100"
                initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <ShieldCheck size={12} className="text-brand-500" /> 24/7 Monitoring
              </motion.div>

              {/* Server Nodes */}
              <div className="absolute inset-0 pointer-events-none">
                 {[1, 2, 3, 4].map(i => (
                   <motion.div 
                     key={i}
                     className="absolute w-1.5 h-1.5 bg-brand-500 rounded-full"
                     style={{
                       top: `${50 + Math.sin(i * 1.5) * 40}%`,
                       left: `${50 + Math.cos(i * 1.5) * 40}%`
                     }}
                     animate={{ opacity: [0.2, 1, 0.2] }}
                     transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                   />
                 ))}
              </div>
           </div>
        </div>
      );
    default: return null;
  }
};

export const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <SEO 
        title="Yazılım Hizmetlerimiz | Mobil Uygulama ve Web Yazılım" 
        description="APRICODI'nin profesyonel hizmetlerini keşfedin: Kurumsal web yazılımı, iOS & Android mobil uygulama geliştirme, UI/UX tasarım ve e-ticaret çözümleri."
        keywords="mobil uygulama geliştirme, web yazılım hizmetleri, e-ticaret altyapısı kurma, tasarım ajansı malatya, özel yazılım çözümleri"
      />
      
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-24 px-4 border-b border-slate-200 text-center">
        <div className="max-w-5xl mx-auto">
          <Badge variant="brand">Hizmetlerimiz</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-8 mb-6 tracking-tight">
            Profesyonel Yazılım ve Dijital Dönüşüm
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            İşletmenizi dijital çağa taşıyacak, SEO uyumlu ve ölçeklenebilir teknoloji çözümleri üretiyoruz.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section key={service.id} className={`py-16 md:py-24 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-black text-slate-200 select-none">{`0${index + 1}`}</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description} APRICODI olarak projenizin her aşamasında en yeni teknolojileri ve SEO standartlarını kullanıyoruz.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">Hizmet Kapsamı</h4>
                      <ul className="space-y-2">
                        {service.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-slate-700">
                            <Check size={18} className="text-brand-600 mt-0.5 shrink-0" />
                            <span className="text-sm">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">Neden Biz?</h4>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-slate-700">
                            <Minus size={18} className="text-slate-300 mt-0.5 shrink-0" />
                            <span className="text-sm font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to="/teklif-al"><Button variant={index % 2 === 0 ? 'primary' : 'secondary'} className="w-full sm:w-auto">Fiyat Teklifi Al <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                </div>
                <div className="flex-1 w-full"><div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200"><ServiceIllustration id={service.id} /></div></div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
