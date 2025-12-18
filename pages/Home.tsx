
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Clock, Lock, Layers, ChevronLeft, ChevronRight, Code, Cpu, Smartphone, Globe, BarChart } from 'lucide-react';
// Import Badge from ui components
import { Button, SectionHeader, Card, Badge } from '../components/ui';
import { SEO } from '../components/SEO';
import { services, testimonials } from '../data';

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-brand-500/10 via-blue-500/5 to-transparent blur-[120px] rounded-full -z-10" />
      
      <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl overflow-visible" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
          <linearGradient id="apricodiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="techGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Floating Code Snippets */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <rect x="50" y="120" width="180" height="100" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="65" y="145" width="100" height="6" rx="3" fill="#cbd5e1" />
          <rect x="65" y="160" width="140" height="6" rx="3" fill="#fb923c" />
          <rect x="65" y="175" width="80" height="6" rx="3" fill="#cbd5e1" />
        </motion.g>

        {/* Main Central Core Node (APRICODI Symbol) */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pulsing rings */}
          {[1, 1.3, 1.6].map((scale, i) => (
            <motion.circle
              key={i}
              cx="400"
              cy="300"
              r="60"
              fill="none"
              stroke="url(#apricodiGrad)"
              strokeWidth="1"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: scale + 0.5, opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            />
          ))}
          
          <circle cx="400" cy="300" r="70" fill="white" shadow-sm="true" />
          <g transform="translate(365, 265) scale(0.7)">
             <path d="M50 30 C35 10 35 2 50 2 C65 2 65 10 50 30" stroke="url(#apricodiGrad)" strokeWidth="6" strokeLinecap="round" />
             <path d="M42 30 C20 30 8 48 8 65 C8 88 30 98 48 98" stroke="url(#apricodiGrad)" strokeWidth="6" strokeLinecap="round" />
             <path d="M58 30 C80 30 92 48 92 65 C92 88 70 98 52 98" stroke="url(#apricodiGrad)" strokeWidth="6" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* Dashboard Element (Web) */}
        <motion.g
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="520" y="150" width="220" height="150" rx="16" fill="white" stroke="#f1f5f9" strokeWidth="2" filter="drop-shadow(0 20px 30px rgba(0,0,0,0.08))" />
          <rect x="540" y="175" width="40" height="40" rx="8" fill="#fff7ed" />
          <rect x="595" y="175" width="100" height="8" rx="4" fill="#f1f5f9" />
          <rect x="595" y="195" width="60" height="8" rx="4" fill="#fb923c" />
          <motion.path 
            d="M540 260 Q570 230 600 250 T660 220 T720 250" 
            fill="none" 
            stroke="#fb923c" 
            strokeWidth="3" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </motion.g>

        {/* Mobile Phone Element */}
        <motion.g
          animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="150" y="320" width="120" height="220" rx="24" fill="#0f172a" />
          <rect x="155" y="325" width="110" height="210" rx="20" fill="white" />
          <rect x="190" y="335" width="40" height="10" rx="5" fill="#0f172a" />
          <circle cx="210" cy="400" r="25" fill="#fff7ed" />
          <path d="M200 400 L210 410 L220 390" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="175" y="440" width="70" height="6" rx="3" fill="#f1f5f9" />
          <rect x="175" y="455" width="50" height="6" rx="3" fill="#f1f5f9" />
        </motion.g>

        {/* Connection Lines */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
           <line x1="400" y1="300" x2="520" y2="225" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
           <line x1="400" y1="300" x2="270" y2="430" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
           <line x1="400" y1="300" x2="140" y2="220" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        </motion.g>

        {/* Tech Icons Floating */}
        <g opacity="0.6">
          <motion.circle cx="140" cy="220" r="25" fill="white" shadow-md="true" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.circle cx="650" y="420" r="30" fill="white" shadow-md="true" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="580" y="480" r="20" fill="white" shadow-md="true" animate={{ x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        </g>
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
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:opacity-100 transition-all duration-700 mb-20 px-4">
      {logos.map((logo, i) => (
        <div key={i} className="h-20 border border-white/5 rounded-xl flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] group">
          <div className="text-white group-hover:text-brand-500 transition-colors">{logo}</div>
        </div>
      ))}
    </div>
  );
};

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  // Calculate visible items based on circular array
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      items.push(testimonials[(index + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-8"
          initial={false}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisibleItems().map((t, idx) => (
              <motion.div
                key={`${t.id}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex-1 min-w-0"
                style={{ flexBasis: `${100 / itemsToShow}%` }}
              >
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full flex flex-col hover:border-brand-500/50 transition-colors">
                  <div className="flex text-brand-500 mb-6">★★★★★</div>
                  <p className="text-slate-300 italic text-lg leading-relaxed flex-grow">"{t.quote}"</p>
                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <p className="text-sm font-bold text-brand-500 uppercase tracking-widest">{t.company}</p>
                    <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prev}
        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all rounded-full ${i === index ? 'w-8 bg-brand-500' : 'w-2 bg-slate-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      <SEO 
        title="Kurumsal Yazılım, Mobil Uygulama ve Web Tasarım" 
        description="APRICODI: Malatya merkezli, global standartlarda kurumsal web yazılım, iOS & Android mobil uygulama ve kullanıcı dostu UI/UX tasarım hizmetleri sunar."
        keywords="yazılım şirketi, mobil uygulama yaptırmak, kurumsal web sitesi fiyatları, malatya yazılım ajansı, seo uyumlu web tasarım, react mobil uygulama"
      />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-slate-50/30 overflow-hidden pt-24 md:pt-12">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50/50 skew-x-12 translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
                <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                  Kurumsal Yazılım ve Mobil Uygulama Çözümleri
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                İşletmeniz İçin <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
                  Profesyonel Yazılım
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-normal">
                APRICODI ile yüksek performanslı mobil uygulamalar ve SEO uyumlu kurumsal web siteleriyle dijital dünyada fark yaratın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link to="/teklif-al">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-1">
                    Ücretsiz Teklif Al <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projeler">
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold bg-white border-slate-200 hover:border-slate-800 hover:text-slate-900 transition-all">
                    Referanslarımız
                  </Button>
                </Link>
              </div>

              <div className="border-t border-slate-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
                 {[
                   { label: "Mobil Geliştirme", icon: Zap },
                   { label: "Kurumsal SEO", icon: Lock },
                   { label: "Web Tasarım", icon: Clock },
                   { label: "Teknik Destek", icon: ShieldCheck }
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

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block">
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Uzman Yazılım Hizmetleri" subtitle="Projenize değer katan teknoloji çözümlerimiz." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} className="p-10 flex flex-col h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8"><Layers size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8">{service.description}</p>
                <Link to="/hizmetler" className="mt-auto text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Detayları Gör <ArrowRight size={16} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <Badge variant="brand">Referanslarımız</Badge>
             <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4">Müşteri Yorumları</h2>
             <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Yazılım ve tasarımda bize güvenenlerin görüşleri. Birlikte ürettiğimiz başarı hikayeleri.
             </p>
           </div>
           
           <ClientLogos />
           
           <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};
