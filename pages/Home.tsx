import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, BarChart3, Lock, Cpu, Clock, MousePointer2, Code2 } from 'lucide-react';
import { Button, Card, SectionHeader, Badge } from '../components/ui';
import { services, projects, testimonials } from '../data';

export const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="overflow-hidden bg-white">
      
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block py-1 px-3 rounded bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-widest">
                  Kurumsal Çözüm Ortağı
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Kurumsal Yazılım ve Tasarımda <br/>
                <span className="text-brand-600">Güvenilir Ortağınız</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
                Performans, güvenlik ve sürdürülebilirlik odaklı dijital ürünlerle işletmenizin büyüme hedeflerini destekliyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link to="/teklif-al">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold shadow-xl shadow-brand-500/20">
                    Teklif Al <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projeler">
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold bg-white border-slate-300 hover:border-slate-800 hover:text-slate-900">
                    Projeleri İncele
                  </Button>
                </Link>
              </div>

              {/* Trust Strip - Hero Bottom */}
              <div className="border-t border-slate-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                   { label: "Yüksek Performans", icon: Zap },
                   { label: "Kurumsal Güvenlik", icon: Lock },
                   { label: "Hızlı Teslimat", icon: Clock },
                   { label: "SLA Desteği", icon: ShieldCheck }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-slate-700">
                      <item.icon className="w-5 h-5 text-brand-500 shrink-0" />
                      <span className="text-sm font-semibold">{item.label}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Right Visual - Corporate Code/Tech Theme */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative h-full min-h-[600px]"
            >
              {/* Abstract Geometry - Updated to Brand Colors (Orange/Apricot) */}
              <div className="absolute top-10 right-10 w-4/5 h-4/5 bg-gradient-to-br from-brand-100 to-orange-50 rounded-[2rem] -rotate-3 z-0"></div>
              
              <div className="absolute top-0 right-0 w-full h-full z-10 flex items-center justify-center">
                 {/* Main Image - Coding / Software Focus */}
                 <img 
                   src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" 
                   alt="Software Development Code Screen" 
                   className="w-4/5 h-auto object-cover rounded-xl shadow-2xl shadow-brand-900/10 hover:scale-[1.02] transition-all duration-700 border-4 border-white"
                 />
                 
                 {/* Floating UI Elements - Tech Themed */}
                 <div className="absolute bottom-16 -left-4 bg-white/95 backdrop-blur p-5 rounded-lg shadow-xl border border-slate-100 max-w-[280px] animate-bounce" style={{ animationDuration: '4.5s' }}>
                    <div className="flex items-center gap-3 mb-3">
                       <div className="p-2.5 bg-brand-100 text-brand-600 rounded-md">
                         <Code2 size={22} />
                       </div>
                       <div>
                         <div className="text-sm font-bold text-slate-900 font-mono tracking-tight">deployment_success</div>
                         <div className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Production Ready</div>
                       </div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded border border-slate-100">
                      > build completed in 420ms<br/>
                      > all tests passed ✅
                    </div>
                 </div>
              </div>
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
                  <div className="h-full bg-white border border-slate-200 p-10 rounded-xl hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col">
                    <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
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
                  { title: "Ölçeklenebilir Mimari", desc: "Bugünü değil, geleceği tasarlıyoruz. Büyüyen trafiği kaldıran altyapılar.", icon: Cpu },
                  { title: "Performans Odaklı", desc: "Hız, SEO ve kullanıcı deneyimi metriklerinde yüksek standartlar.", icon: Zap },
                  { title: "Güvenlik & SLA", desc: "Verileriniz güvende. Düzenli bakım ve güvenlik güncellemeleri.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
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
                <Link to={`/projeler/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-6 aspect-[4/3]">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-wide rounded-sm shadow-sm">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 line-clamp-2 mb-4 font-light">{project.summary}</p>
                    <span className="inline-flex items-center text-sm font-bold text-brand-600 border-b border-brand-200 pb-0.5 group-hover:border-brand-600 transition-colors">
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
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Müşterilerimiz</h2>
             <p className="text-slate-400">Türkiye genelinde ve globalde hizmet verdiğimiz markalar.</p>
           </div>
           
           {/* Placeholder Logo Grid - Simulating Corporate Clients */}
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="h-12 bg-white/10 rounded-md flex items-center justify-center text-xs text-white/50 font-bold uppercase tracking-widest">
                  Logo {i}
                </div>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((t) => (
               <div key={t.id} className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                  <div className="flex text-brand-500 mb-4">
                    {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                  </div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{t.role}, {t.company}</div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
};