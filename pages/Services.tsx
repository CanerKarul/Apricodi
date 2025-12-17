
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Button, Badge } from '../components/ui';
import { SEO } from '../components/SEO';
import { services } from '../data';
import { Check, ArrowRight, Minus, Code2, Smartphone, ShoppingBag, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceIllustration: React.FC<{ id: string }> = ({ id }) => {
  const containerClass = "w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden flex items-center justify-center p-6 md:p-10";
  // Fixed: Added 'as const' to ease string literal to match Framer Motion's expected Easing type
  const floating = { floating: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const } } };

  switch (id) {
    case 'web-dev':
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <motion.div className="w-[95%] md:w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="bg-slate-50 border-b border-slate-100 p-2 md:p-3 flex items-center gap-2">
              <div className="flex gap-1.5"><div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-400"></div><div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-amber-400"></div><div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-400"></div></div>
              <div className="mx-auto w-24 md:w-32 h-1.5 md:h-2 bg-slate-200 rounded-full opacity-50"></div>
            </div>
            <div className="p-4 md:p-6 space-y-3">
              <div className="flex gap-3"><div className="w-8 h-8 rounded bg-brand-100 flex items-center justify-center text-brand-600 shrink-0"><Code2 size={16}/></div><div className="space-y-2 flex-1 pt-1"><div className="w-3/4 h-2 bg-slate-800 rounded"></div><div className="w-1/2 h-2 bg-slate-300 rounded"></div></div></div>
              <div className="pl-11 space-y-2"><motion.div className="w-full h-2 bg-slate-100 rounded" animate={{ width: ["80%", "90%", "80%"] }} transition={{ duration: 2, repeat: Infinity }}></motion.div><div className="w-5/6 h-2 bg-slate-100 rounded"></div></div>
            </div>
          </motion.div>
          {/* Using floating variant here */}
          <motion.div variants={floating} animate="floating" className="absolute top-6 right-6 p-2 bg-white rounded-lg shadow-lg border border-slate-100 z-20"><div className="text-[10px] font-bold text-brand-600">SEO Uyumlu Mimari</div></motion.div>
        </div>
      );
    case 'mobile-dev':
      return (
        <div className={containerClass}>
          <div className="absolute right-0 top-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl"></div>
          <motion.div className="w-[55%] sm:w-48 h-auto aspect-[9/16] bg-slate-900 rounded-[2rem] p-2 shadow-2xl relative z-10 border-4 border-slate-800" initial={{ rotate: -5, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
             <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-900 rounded-b-xl z-20"></div>
                <div className="bg-brand-50 h-[35%] p-3 pt-8 flex flex-col justify-end"><div className="w-8 h-8 bg-white rounded-xl shadow-sm mb-2"></div><div className="w-16 h-1.5 bg-slate-300 rounded"></div></div>
                <div className="p-3 space-y-2 flex-1">{[1,2,3].map(i => (<div key={i} className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-slate-100 shrink-0"></div><div className="flex-1 h-1.5 bg-slate-100 rounded"></div></div>))}</div>
             </div>
          </motion.div>
          {/* Using floating variant here */}
          <motion.div className="absolute bottom-12 left-4 bg-white px-3 py-1.5 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2 z-20" variants={floating} animate="floating"><Smartphone size={14} className="text-brand-500" /><span className="text-[10px] font-bold text-slate-800">Flutter & React Native</span></motion.div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className={containerClass}>
           <div className="relative w-full max-w-xs flex justify-center">
              <motion.div className="w-[90%] bg-white p-4 rounded-2xl shadow-xl border border-slate-100 relative z-10" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
                 <div className="flex justify-between items-center mb-4"><div><div className="text-[10px] text-slate-400 font-semibold uppercase">Toplam Satış</div><div className="text-xl font-bold text-slate-900">₺128.4K</div></div><div className="p-1.5 bg-brand-50 text-brand-600 rounded-lg"><ShoppingBag size={18} /></div></div>
                 <div className="flex items-end justify-between h-20 gap-1.5">{[40, 60, 30, 80, 50, 90, 70].map((h, i) => (<motion.div key={i} className="w-full bg-slate-100 rounded-t-sm" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 0.5, delay: i * 0.1 }} />))}</div>
              </motion.div>
           </div>
        </div>
      );
    case 'maintenance':
      return (
        <div className={containerClass}>
           <div className="relative flex items-center justify-center w-full">
              {[1, 2, 3].map((i) => (<motion.div key={i} className="absolute border border-brand-500/20 rounded-full" style={{ width: `${i * 30}%`, paddingBottom: `${i * 30}%` }} animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }} />))}
              <motion.div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center relative z-10" initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}><ShieldCheck size={40} className="text-brand-600" /></motion.div>
              <motion.div className="absolute -bottom-10 bg-slate-900 text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-lg" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}><Activity size={12} className="text-green-400" /> %99.9 Uptime</motion.div>
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
