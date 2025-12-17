import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Clock, Lock, Layers, MousePointer2 } from 'lucide-react';
import { Button, SectionHeader, Card } from '../components/ui';
import { ProjectIllustration } from '../components/ProjectIllustration';
import { services, projects, testimonials } from '../data';

// --- Custom Animated Hero Illustration (The "Flowing" Tech Illustration) ---
const HeroIllustration = () => {
  const [msgIndex, setMsgIndex] = React.useState(0);
  
  const messages = [
    { title: "Deployment", status: "Success (100%)" },
    { title: "Unit Tests", status: "Passed (142/142)" },
    { title: "Security Scan", status: "No Risks Found" },
    { title: "Server Response", status: "24ms (Ultra Fast)" },
    { title: "Database Sync", status: "Completed" }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] perspective-1000 flex items-center justify-center">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100/40 via-white to-blue-50/40 blur-3xl rounded-full -z-10 opacity-60" />

      <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl overflow-visible" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* --- Main Base Platform (Isometric) --- */}
        <motion.path
          d="M150 400 L400 520 L650 400 L400 280 Z"
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.path
          d="M150 400 L400 520 L400 540 L150 420 Z"
          fill="#cbd5e1"
        />
        <motion.path
          d="M400 520 L650 400 L650 420 L400 540 Z"
          fill="#94a3b8"
        />

        {/* --- Floating Code Interface (Main Screen) --- */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Screen Body */}
          <rect x="220" y="150" width="360" height="240" rx="12" fill="url(#screenGrad)" stroke="#334155" strokeWidth="4" />
          
          {/* Header Bar */}
          <rect x="222" y="152" width="356" height="30" rx="10" fill="#334155" />
          <div className="flex gap-2 px-4 py-2">
            <circle cx="240" cy="167" r="4" fill="#ef4444" />
            <circle cx="255" cy="167" r="4" fill="#fbbf24" />
            <circle cx="270" cy="167" r="4" fill="#22c55e" />
          </div>

          {/* Code Lines Animation (Flowing) */}
          <motion.g>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.rect
                key={i}
                x="250"
                y={200 + i * 25}
                height="8"
                rx="4"
                fill={i === 3 ? "#fb923c" : "#475569"}
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                  width: [100, 250, 180],
                  opacity: 1
                }}
                transition={{ 
                  duration: 2, 
                  delay: 0.5 + (i * 0.15), 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut" 
                }}
              />
            ))}
          </motion.g>
        </motion.g>

        {/* --- Floating "Success" Card (Right) --- */}
        <motion.g
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
          transition={{ 
            x: { duration: 0.8, delay: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <rect x="520" y="250" width="160" height="100" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0px 10px 20px rgba(0,0,0,0.1))" />
          <rect x="535" y="270" width="30" height="30" rx="8" fill="#ecfdf5" />
          <path d="M542 285 L548 291 L558 281" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          <motion.text 
            key={`title-${msgIndex}`}
            x="575" y="285" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#0f172a"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            {messages[msgIndex].title}
          </motion.text>
          
          <motion.text 
            key={`status-${msgIndex}`}
            x="575" y="300" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#059669"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            {messages[msgIndex].status}
          </motion.text>
          
          {/* Progress Bar */}
          <rect x="535" y="320" width="130" height="6" rx="3" fill="#f1f5f9" />
          <motion.rect 
            key={msgIndex}
            x="535" y="320" height="6" rx="3" fill="#10b981"
            initial={{ width: 0 }}
            animate={{ width: 130 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.g>

        {/* --- Floating "Analytics" Card (Left) --- */}
        <motion.g
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            x: { duration: 0.8, delay: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        >
          <rect x="100" y="320" width="140" height="110" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0px 10px 20px rgba(0,0,0,0.1))" />
          <rect x="120" y="380" width="15" height="30" rx="2" fill="#cbd5e1" />
          <rect x="145" y="360" width="15" height="50" rx="2" fill="#cbd5e1" />
          <rect x="170" y="340" width="15" height="70" rx="2" fill="url(#accentGrad)" />
          <rect x="195" y="370" width="15" height="40" rx="2" fill="#cbd5e1" />
        </motion.g>

        {/* Connecting Lines */}
        <motion.path 
          d="M400 270 L520 250" 
          stroke="#e2e8f0" 
          strokeWidth="2" 
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
         <motion.path 
          d="M220 270 L170 320" 
          stroke="#e2e8f0" 
          strokeWidth="2" 
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
      </svg>
    </div>
  );
};

const ClientLogos = () => {
  const logos = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /><path d="M12 13V15" /><path d="M12 9V10" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 mb-20 px-4">
      {logos.map((logo, i) => (
        <div key={i} className="h-20 border border-white/5 rounded-xl flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
          <div className="text-white group-hover:text-brand-500 transition-colors">{logo}</div>
        </div>
      ))}
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50/50 overflow-hidden pt-24 md:pt-12">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 skew-x-12 translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                  Kurumsal Çözüm Ortağı
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Kurumsal Yazılımda <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
                  Çözüm Ortağınız
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-normal">
                Performans ve güvenlik odaklı dijital ürünlerle işletmenizi büyütüyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link to="/teklif-al">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-1">
                    Teklif Al <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projeler">
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold bg-white border-slate-200 hover:border-slate-800 hover:text-slate-900 transition-all">
                    Projeler
                  </Button>
                </Link>
              </div>

              <div className="border-t border-slate-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
                 {[
                   { label: "Yüksek Performans", icon: Zap },
                   { label: "Kurumsal Güvenlik", icon: Lock },
                   { label: "Hızlı Teslimat", icon: Clock },
                   { label: "SLA Desteği", icon: ShieldCheck }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-slate-700 group cursor-default">
                      <div className="p-1.5 rounded-md bg-slate-100 text-brand-600 group-hover:bg-brand-50 transition-colors">
                        <item.icon className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="text-sm font-semibold tracking-tight">{item.label}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Uzmanlık Alanlarımız" subtitle="Modern teknoloji çözümleri." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} className="p-10 flex flex-col h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8"><Layers size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Müşterilerimiz</h2>
             <p className="text-slate-400">Güvenle çalıştığımız markalar.</p>
           </div>
           <ClientLogos />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((t) => (
               <div key={t.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                  <div className="flex text-brand-500 mb-6">★★★★★</div>
                  <p className="text-slate-300 italic text-lg">"{t.quote}"</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};