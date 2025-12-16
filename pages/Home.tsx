import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Clock, Lock, Layers, MousePointer2 } from 'lucide-react';
import { Button, SectionHeader } from '../components/ui';
import { services, projects, testimonials } from '../data';

// --- Custom Animated Hero Illustration (The "Gemini" Drawing) ---
const HeroIllustration = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] perspective-1000">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100/50 via-white to-blue-50/50 blur-3xl rounded-full -z-10 opacity-60" />

      <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
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
          <circle cx="240" cy="167" r="4" fill="#ef4444" />
          <circle cx="255" cy="167" r="4" fill="#fbbf24" />
          <circle cx="270" cy="167" r="4" fill="#22c55e" />

          {/* Code Lines Animation */}
          <motion.g>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.rect
                key={i}
                x="250"
                y={200 + i * 25}
                width={100 + Math.random() * 150}
                height="8"
                rx="4"
                fill={i === 3 ? "#fb923c" : "#475569"} // Orange accent line
                initial={{ width: 0 }}
                animate={{ width: 100 + Math.random() * 150 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
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
          <text x="575" y="285" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#0f172a">Deployment</text>
          <text x="575" y="300" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#059669">Success (100%)</text>
          {/* Progress Bar */}
          <rect x="535" y="320" width="130" height="6" rx="3" fill="#f1f5f9" />
          <motion.rect 
            x="535" y="320" height="6" rx="3" fill="#10b981"
            initial={{ width: 0 }}
            animate={{ width: 130 }}
            transition={{ duration: 1.5, delay: 1 }}
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
          {/* Bar Chart */}
          <rect x="120" y="380" width="15" height="30" rx="2" fill="#cbd5e1" />
          <rect x="145" y="360" width="15" height="50" rx="2" fill="#cbd5e1" />
          <rect x="170" y="340" width="15" height="70" rx="2" fill="url(#accentGrad)" />
          <rect x="195" y="370" width="15" height="40" rx="2" fill="#cbd5e1" />
        </motion.g>

        {/* --- Decorative Elements (Orbs & Lines) --- */}
        <circle cx="650" cy="150" r="40" fill="url(#accentGrad)" opacity="0.1" />
        <circle cx="100" cy="500" r="20" fill="#3b82f6" opacity="0.1" />
        
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

export const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="overflow-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50/50 overflow-hidden pt-24 md:pt-12">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 skew-x-12 translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
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
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Kurumsal <br/>
                Yazılım ve Tasarımda <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
                  Güvenilir Ortağınız
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-normal">
                Performans, güvenlik ve sürdürülebilirlik odaklı dijital ürünlerle işletmenizin büyüme hedeflerini destekliyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link to="/teklif-al">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-1">
                    Teklif Al <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projeler">
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold bg-white border-slate-200 hover:border-slate-800 hover:text-slate-900 transition-all">
                    Projeleri İncele
                  </Button>
                </Link>
              </div>

              {/* Trust Strip */}
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

            {/* Right Visual - Custom Gemini SVG Illustration */}
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

      {/* Services Section - Corporate Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Uzmanlık Alanlarımız" 
            subtitle="İhtiyacınıza özel, ölçeklenebilir ve modern teknoloji çözümleri." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, idx) => (
              <motion.div key={service.id} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                <Link to="/hizmetler" className="group block h-full">
                  <div className="h-full bg-white border border-slate-200 p-10 rounded-2xl hover:shadow-2xl hover:shadow-slate-200/50 hover:border-brand-200 transition-all duration-300 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                    
                    <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 relative z-10">
                      <Layers size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed font-light">{service.description}</p>
                    <div className="mt-auto flex items-center text-brand-600 font-bold text-sm">
                      Detayları İncele <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/hizmetler">
              <Button variant="secondary" size="lg" className="px-10">Tüm Hizmetleri Görüntüle</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* "Why Apricodi" - Trust Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div>
               <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Neden APRICODI?</h2>
               <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
                 Sadece bir ajans değil, dijital dönüşüm yolculuğunuzda stratejik ortağınız olarak çalışıyoruz. Şeffaflık ve kalite, standartımızdır.
               </p>
               <Link to="/iletisim">
                 <Button className="bg-slate-900 text-white hover:bg-slate-800">Bizimle Tanışın</Button>
               </Link>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Şeffaf Süreç", desc: "Sürpriz yok. Projenin her aşamasında net raporlama ve iletişim.", icon: MousePointer2 },
                  { title: "Ölçeklenebilir Mimari", desc: "Bugünü değil, geleceği tasarlıyoruz. Büyüyen trafiği kaldıran altyapılar.", icon: Layers },
                  { title: "Performans Odaklı", desc: "Hız, SEO ve kullanıcı deneyimi metriklerinde yüksek standartlar.", icon: Zap },
                  { title: "Güvenlik & SLA", desc: "Verileriniz güvende. Düzenli bakım ve güvenlik güncellemeleri.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <item.icon className="w-8 h-8 text-brand-500 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Başarı Hikayeleri" 
            subtitle="Farklı sektörlerde geliştirdiğimiz değer odaklı projeler." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={`/projeler/${project.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-6 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-wide rounded shadow-sm border border-white/50">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 line-clamp-2 mb-4 font-light text-base">{project.summary}</p>
                    <span className="inline-flex items-center text-sm font-bold text-brand-600 border-b-2 border-transparent group-hover:border-brand-600 transition-all pb-0.5">
                      Vaka İncelemesi <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 border-t border-slate-100 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Sizin projenizi de konuşalım mı?</h3>
            <Link to="/iletisim">
              <Button size="lg" className="px-12 py-4 text-lg">Hemen Başlayın</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* References / Testimonials */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Müşterilerimiz</h2>
             <p className="text-slate-400">Türkiye genelinde ve globalde hizmet verdiğimiz markalar.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="h-16 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-xs text-white/50 font-bold uppercase tracking-widest">Logo {i}</span>
                </div>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((t) => (
               <div key={t.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/30 transition-colors relative">
                  <div className="absolute top-8 right-8 text-6xl text-brand-500/10 font-serif leading-none">"</div>
                  <div className="flex text-brand-500 mb-6">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-lg">★</span>)}
                  </div>
                  <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10 text-lg font-light">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{t.role}, {t.company}</div>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
};