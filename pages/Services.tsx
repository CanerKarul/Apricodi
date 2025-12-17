
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Button, Badge } from '../components/ui';
import { services } from '../data';
import { Check, ArrowRight, Minus, Code2, Smartphone, Layout, ShoppingBag, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Custom Service Illustrations ---
const ServiceIllustration: React.FC<{ id: string }> = ({ id }) => {
  // Responsive container: Less padding on mobile (p-6) to let illustration fill space, more on desktop (md:p-10)
  const containerClass = "w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden flex items-center justify-center p-6 md:p-10";

  // Common floating animation - fixed ease type with 'as const' and changed key to 'floating'
  const floating = {
    floating: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  switch (id) {
    case 'web-dev':
      return (
        <div className={containerClass}>
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Browser Window - Responsive Width */}
          <motion.div 
            className="w-[95%] md:w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-2 md:p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto w-24 md:w-32 h-1.5 md:h-2 bg-slate-200 rounded-full opacity-50"></div>
            </div>
            {/* Code Content */}
            <div className="p-4 md:p-6 space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-brand-100 flex items-center justify-center text-brand-600 shrink-0"><Code2 size={16}/></div>
                <div className="space-y-2 flex-1 pt-1">
                   <div className="w-3/4 h-2 bg-slate-800 rounded"></div>
                   <div className="w-1/2 h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
              <div className="pl-11 space-y-2">
                 <motion.div className="w-full h-2 bg-slate-100 rounded" animate={{ width: ["80%", "90%", "80%"] }} transition={{ duration: 2, repeat: Infinity }}></motion.div>
                 <div className="w-5/6 h-2 bg-slate-100 rounded"></div>
                 <div className="w-4/6 h-2 bg-slate-100 rounded"></div>
              </div>
              <div className="flex gap-3 pt-2">
                 <div className="w-1/2 h-6 md:h-8 rounded bg-brand-600 opacity-90"></div>
                 <div className="w-1/2 h-6 md:h-8 rounded bg-slate-100"></div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements - updated animate prop */}
          <motion.div variants={floating} animate="floating" className="absolute top-6 right-6 md:top-10 md:right-10 p-2 md:p-3 bg-white rounded-lg shadow-lg border border-slate-100 z-20">
             <div className="text-[10px] md:text-xs font-bold text-brand-600">React / Next.js</div>
          </motion.div>
        </div>
      );

    case 'mobile-dev':
      return (
        <div className={containerClass}>
          <div className="absolute right-0 top-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl"></div>
          
          {/* Phone Mockup - Scaled relative to container width on mobile */}
          <motion.div 
            className="w-[55%] sm:w-48 h-auto aspect-[9/16] bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl relative z-10 border-4 border-slate-800"
            initial={{ rotate: -5, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
             <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-4 sm:h-5 bg-slate-900 rounded-b-xl z-20"></div>
                
                {/* App UI */}
                <div className="bg-brand-50 h-[35%] p-3 sm:p-4 pt-8 sm:pt-10 flex flex-col justify-end">
                   <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-xl shadow-sm mb-2 sm:mb-3"></div>
                   <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-slate-300 rounded"></div>
                </div>
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 flex-1">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-100 shrink-0"></div>
                        <div className="flex-1 h-1.5 sm:h-2 bg-slate-100 rounded"></div>
                     </div>
                   ))}
                </div>
                {/* Tab Bar */}
                <div className="h-10 sm:h-12 border-t border-slate-100 flex items-center justify-around text-slate-300 pb-1">
                   <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-brand-500"></div>
                   <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-slate-200"></div>
                   <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-slate-200"></div>
                </div>
             </div>
          </motion.div>
          
          {/* Floating Badge - updated animate prop */}
          <motion.div 
            className="absolute bottom-12 sm:bottom-20 left-4 sm:left-10 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2 z-20"
            variants={floating} animate="floating"
          >
            <Smartphone size={14} className="text-brand-500 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800">iOS & Android</span>
          </motion.div>
        </div>
      );

    case 'ui-ux':
      return (
        <div className={containerClass}>
           {/* Abstract Layers */}
           <motion.div 
             className="absolute w-40 h-40 bg-brand-200 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
             animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }}
           />

           <div className="relative z-10 w-full max-w-xs h-64 flex items-center justify-center">
              {/* Scale container to fit mobile width */}
              <div className="relative w-[85%] sm:w-full max-w-[280px] aspect-[4/3]">
                {/* Back Card */}
                <motion.div 
                  className="absolute top-0 left-[10%] w-[80%] h-[80%] bg-slate-200 rounded-lg shadow-md transform rotate-6 opacity-60 origin-center"
                  initial={{ x: 0 }} whileInView={{ x: 20 }} transition={{ duration: 1 }}
                />
                {/* Middle Card */}
                <motion.div 
                  className="absolute top-[10%] left-[5%] w-[80%] h-[80%] bg-slate-300 rounded-lg shadow-md transform -rotate-3 opacity-80 origin-center"
                  initial={{ x: 0 }} whileInView={{ x: -10 }} transition={{ duration: 1, delay: 0.1 }}
                />
                {/* Front Card (Main UI) */}
                <motion.div 
                  className="absolute top-[20%] left-0 right-0 mx-auto w-[90%] h-[90%] bg-white rounded-xl shadow-2xl border border-slate-200 p-4 flex flex-col gap-3"
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                >
                   <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-brand-500 shrink-0"></div>
                         <div className="space-y-1 w-full">
                            <div className="w-[60%] h-1.5 sm:h-2 bg-slate-800 rounded-full"></div>
                            <div className="w-[40%] h-1 sm:h-1.5 bg-slate-300 rounded-full"></div>
                         </div>
                      </div>
                   </div>
                   <div className="flex gap-2 mt-auto h-full">
                      <div className="flex-1 rounded bg-slate-50 border border-slate-100"></div>
                      <div className="flex-1 rounded bg-slate-50 border border-slate-100"></div>
                   </div>
                </motion.div>

                {/* Cursor */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 z-30"
                  animate={{ x: [-10, 0, -10], y: [-10, 0, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full shadow-xl border-2 border-white relative">
                     <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-black/20"></div>
                  </div>
                  <div className="ml-4 sm:ml-6 -mt-3 sm:-mt-4 bg-slate-900 text-white text-[9px] sm:text-[10px] px-2 py-1 rounded whitespace-nowrap">User Flow</div>
                </motion.div>
              </div>
           </div>
        </div>
      );
    
    case 'ecommerce':
      return (
        <div className={containerClass}>
           <div className="relative w-full max-w-xs flex justify-center">
              {/* Dashboard Card - Width responsive */}
              <motion.div 
                className="w-[90%] sm:w-full bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 relative z-10"
                initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
              >
                 <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <div>
                       <div className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase">Toplam Satış</div>
                       <div className="text-xl sm:text-2xl font-bold text-slate-900">₺128.4K</div>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-brand-50 text-brand-600 rounded-lg">
                       <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                    </div>
                 </div>
                 {/* Chart Bars */}
                 <div className="flex items-end justify-between h-20 sm:h-24 gap-1.5 sm:gap-2">
                    {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                       <motion.div 
                         key={i} 
                         className="w-full bg-slate-100 rounded-t-sm hover:bg-brand-200 transition-colors"
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         transition={{ duration: 0.5, delay: i * 0.1 }}
                       >
                         {h > 70 && <div className="w-full h-full bg-brand-500 rounded-t-sm opacity-80"></div>}
                       </motion.div>
                    ))}
                 </div>
              </motion.div>
              
              {/* Floating Product Card - updated animate prop */}
              <motion.div 
                className="absolute -right-2 sm:-right-4 -bottom-4 w-24 sm:w-28 bg-white p-2 rounded-xl shadow-lg border border-slate-100 z-20"
                variants={floating} animate="floating"
              >
                 <div className="w-full h-16 sm:h-20 bg-slate-100 rounded-lg mb-2 flex items-center justify-center text-xl sm:text-2xl">👟</div>
                 <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-slate-800 rounded-full mb-1"></div>
                 <div className="h-1.5 sm:h-2 w-8 sm:w-10 bg-brand-500 rounded-full"></div>
              </motion.div>
           </div>
        </div>
      );

    case 'maintenance':
      return (
        <div className={containerClass}>
           <div className="relative flex items-center justify-center w-full">
              {/* Pulsing Circles */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute border border-brand-500/20 rounded-full"
                  style={{ width: `${i * 30}%`, paddingBottom: `${i * 30}%` }} // Responsive Circles
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                />
              ))}
              
              {/* Central Shield */}
              <motion.div 
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                 <ShieldCheck size={40} className="text-brand-600 sm:w-12 sm:h-12" />
                 <motion.div 
                   className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                 />
              </motion.div>

              {/* Status Badge */}
              <motion.div 
                className="absolute -bottom-10 sm:-bottom-12 bg-slate-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-2 shadow-lg whitespace-nowrap"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                 <Activity size={12} className="text-green-400 sm:w-[14px] sm:h-[14px]" />
                 Sistem: %99.9 Uptime
              </motion.div>
           </div>
        </div>
      );

    default:
      return null;
  }
};

export const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-24 px-4 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="brand">Hizmetlerimiz</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-8 mb-6 tracking-tight">
            Uçtan Uca Dijital Çözümler
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            İşletmenizin dijital olgunluk seviyesini artırmak için strateji, tasarım ve yazılımı birleştiriyoruz.
          </p>
        </div>
      </section>

      {/* Services List - Long Form */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-16 md:py-24 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Adjusted gap for mobile (gap-10) vs desktop (lg:gap-20) */}
              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <span className="text-5xl md:text-6xl font-black text-slate-200 select-none">{`0${index + 1}`}</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                    {service.description} İş süreçlerinizi optimize etmek ve dijital varlığınızı güçlendirmek için en modern metodolojileri kullanıyoruz.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 md:mb-4 border-b border-slate-200 pb-2">Kapsam</h4>
                      <ul className="space-y-2 md:space-y-3">
                        {service.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-slate-700">
                            <Check size={18} className="text-brand-600 mt-0.5 shrink-0" />
                            <span className="text-sm">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 md:mb-4 border-b border-slate-200 pb-2">Kazanımlar</h4>
                      <ul className="space-y-2 md:space-y-3">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-slate-700">
                            <Minus size={18} className="text-slate-300 mt-0.5 shrink-0" />
                            <span className="text-sm font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/teklif-al" className="block w-full sm:w-auto">
                    <Button variant={index % 2 === 0 ? 'primary' : 'secondary'} className="w-full sm:w-auto justify-center">
                      Bu Hizmet İçin Teklif Al <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Custom Visual Illustration */}
                <div className="flex-1 w-full">
                   {/* Aspect ratio tweaked for mobile (square/video) vs desktop (4/3) for better vertical rhythm */}
                   <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-slate-200">
                     <ServiceIllustration id={service.id} />
                   </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projeniz için doğru zaman mı?</h2>
          <p className="text-slate-400 text-lg mb-10">
            15 dakikalık ücretsiz bir keşif görüşmesi ile ihtiyaçlarınızı analiz edelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/teklif-al">
              <Button size="lg" className="bg-brand-600 text-white hover:bg-brand-500 border-none px-10">
                Hemen Başlayın
              </Button>
            </Link>
            <Link to="/iletisim">
              <Button variant="outline" size="lg" className="bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:text-white hover:border-slate-500">
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
