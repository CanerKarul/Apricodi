
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, ShieldCheck, Clock, Layers, ChevronLeft, 
  ChevronRight, Code, Cpu, Smartphone, Globe, BarChart3, 
  Sparkles, Rocket, Database, Terminal, CheckCircle2, Star,
  Bot, MessageSquare, Gauge, Wind, Type, MousePointer2, Server,
  BookOpen
} from 'lucide-react';
import { Button, SectionHeader, Card, Badge } from '../components/ui';
import { SEO } from '../components/SEO';
import { services, testimonials } from '../data';

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[650px] flex items-center justify-center overflow-visible">
      {/* Background Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-500/20 via-blue-500/10 to-transparent blur-[140px] rounded-full -z-10" 
      />
      
      <svg viewBox="0 0 800 650" className="w-full h-full drop-shadow-2xl overflow-visible" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* Central Core - AI & Processing */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Orbital Rings */}
          {[1, 1.4, 1.8].map((scale, i) => (
            <motion.circle
              key={i}
              cx="400" cy="325" r="70"
              fill="none" stroke="url(#mainGrad)" strokeWidth="0.5"
              initial={{ scale: 1, opacity: 0.2 }}
              animate={{ scale: scale + 0.3, opacity: 0, rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1.2 }}
            />
          ))}
          
          <rect x="350" y="275" width="100" height="100" rx="24" fill="white" shadow-xl="true" />
          <motion.g 
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            transform-origin="400 325"
          >
             <path d="M380 300 L420 300 L420 350 L380 350 Z" fill="#fff7ed" />
             <path d="M390 310 L410 310 L410 340 L390 340 Z" fill="url(#mainGrad)" />
          </motion.g>
          <Bot x="375" y="300" size={50} className="text-brand-600" />
        </motion.g>

        {/* Floating Web Element */}
        <motion.g
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="520" y="120" width="220" height="160" rx="20" fill="white" filter="drop-shadow(0 25px 40px rgba(0,0,0,0.1))" />
          <rect x="520" y="120" width="220" height="30" rx="20" fill="#f8fafc" />
          <circle cx="540" cy="135" r="4" fill="#cbd5e1" />
          <circle cx="555" cy="135" r="4" fill="#cbd5e1" />
          <motion.path 
            d="M545 200 Q580 160 620 210 T700 180" 
            fill="none" stroke="url(#mainGrad)" strokeWidth="4" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1 }}
          />
          <BarChart3 x="660" y="210" size={24} className="text-brand-400" />
        </motion.g>

        {/* Floating Mobile Element */}
        <motion.g
          animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="120" y="350" width="130" height="240" rx="30" fill="#0f172a" />
          <rect x="126" y="356" width="118" height="228" rx="26" fill="white" />
          <rect x="165" y="370" width="40" height="4" rx="2" fill="#e2e8f0" />
          <motion.rect 
            x="145" y="420" width="80" height="40" rx="8" fill="#fff7ed"
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <Smartphone x="175" y="430" size={20} className="text-brand-500" />
          <rect x="145" y="475" width="80" height="8" rx="4" fill="#f1f5f9" />
          <rect x="145" y="495" width="50" height="8" rx="4" fill="#f1f5f9" />
        </motion.g>

        {/* Connection Lines with Particle Flow */}
        <g opacity="0.3">
           <path d="M400 325 L520 200" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />
           <path d="M400 325 L250 470" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />
           <motion.circle r="3" fill="#fb923c">
              <animateMotion path="M400 325 L520 200" dur="3s" repeatCount="indefinite" />
           </motion.circle>
           <motion.circle r="3" fill="#fb923c">
              <animateMotion path="M400 325 L250 470" dur="4s" repeatCount="indefinite" />
           </motion.circle>
        </g>
      </svg>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Mühendislik Gücü", value: "10+", icon: Terminal },
    { label: "Canlı Proje", value: "25+", icon: CheckCircle2 },
    { label: "Müşteri Memnuniyeti", value: "%100", icon: Star },
    { label: "Teknoloji Desteği", value: "7/24", icon: ShieldCheck },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-slate-100 bg-slate-50/30">
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-center group"
        >
          <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600 mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
            <stat.icon size={24} />
          </div>
          <div className="text-3xl font-brand font-black text-slate-900 mb-1">{stat.value}</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const FeaturedService: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card className="p-10 h-full relative overflow-hidden bg-white border-slate-100 hover:border-brand-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50/50 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700 -z-10" />
        
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
          <Layers size={32} />
        </div>
        
        <Badge variant="brand" className="mb-4">PREMIUM ÇÖZÜM</Badge>
        <h3 className="text-2xl font-brand font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-500 leading-relaxed font-light mb-8 line-clamp-3">
          {service.description}
        </p>
        
        <ul className="space-y-3 mb-10">
          {service.features.slice(0, 2).map((feat: string, idx: number) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
              <CheckCircle2 size={16} className="text-brand-500" /> {feat}
            </li>
          ))}
        </ul>

        <Link to="/hizmetler" className="inline-flex items-center gap-2 text-brand-600 font-black uppercase tracking-widest text-xs group/btn">
          DETAYLARI İNCELE <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </Card>
    </motion.div>
  );
};

const TechMarquee = () => {
  const techs = [
    { icon: Code, name: "NEXT.JS" },
    { icon: Smartphone, name: "REACT NATIVE" },
    { icon: Cpu, name: "n8n AI" },
    { icon: Database, name: "SUPABASE" },
    { icon: Wind, name: "TAILWIND" },
    { icon: Type, name: "TYPESCRIPT" },
    { icon: MousePointer2, name: "FRAMER" },
    { icon: Server, name: "NODE.JS" },
    { icon: Globe, name: "SEO" },
    { icon: Zap, name: "FAST API" }
  ];

  return (
    <div className="w-full overflow-hidden bg-white border-y border-slate-100 py-8 md:py-12 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-10 md:gap-20"
        animate={{ x: ["0%", "-50%"] }}
        // Speed optimized for mobile: 15s for mobile, 25s for desktop
        transition={{ 
          duration: window.innerWidth < 768 ? 15 : 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...techs, ...techs].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-3 md:gap-5 group cursor-default">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <tech.icon size={window.innerWidth < 768 ? 20 : 28} />
            </div>
            <span className="text-sm md:text-xl font-brand font-black text-slate-400 group-hover:text-slate-900 transition-colors tracking-[0.1em] uppercase">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] text-center"
        >
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-brand-500 fill-brand-500" />)}
          </div>
          <p className="text-2xl md:text-3xl font-light italic text-slate-200 leading-relaxed mb-10">
            "{testimonials[index].quote}"
          </p>
          <div>
            <div className="text-xl font-brand font-black text-white uppercase tracking-widest">{testimonials[index].company}</div>
            <div className="text-sm text-slate-500 mt-2">{testimonials[index].role}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-12">
        <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-500 hover:border-brand-500 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-500 hover:border-brand-500 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <SEO 
        title="Apricodi Malatya | Web Geliştirme, Yapay Zeka ve Otomasyon" 
        description="Apricodi, Apricody ve Apricode: Malatya merkezli, global standartlarda kurumsal web yazılım, iOS & Android mobil uygulama and n8n yapay zeka otomasyon çözümleri sunar."
        keywords="Apricodi, Apricody, Apricode, Malatya yazılım şirketi, mobil uygulama yaptırmak, kurumsal web sitesi fiyatları, n8n otomasyon malatya, seo uyumlu web tasarım, react mobil uygulama"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]">
        {/* Subtle decorative mesh */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-500/[0.02] -skew-x-12 translate-x-1/4 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <Badge variant="brand" className="mb-6">DİJİTAL DÖNÜŞÜM ÜSSÜ</Badge>
              
              <h1 className="text-5xl md:text-8xl font-brand font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
                Fikrinizi <br/>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 pr-10 pb-2">
                  Geleceğe
                </span> <br/>
                Taşıyalım
              </h1>
              
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg font-light">
                Malatya merkezli uzman kadromuzla; SEO uyumlu kurumsal web yazılımları, yüksek performanslı mobil uygulamalar ve yapay zeka entegrasyonları geliştiriyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/teklif-al">
                  <Button size="lg" className="px-12 py-6 text-xl font-brand font-black shadow-2xl shadow-brand-500/30 transform hover:-translate-y-1 transition-all rounded-2xl">
                    TEKLİF AL <ArrowRight className="ml-3" />
                  </Button>
                </Link>
                <Link to="/projeler">
                  <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-brand font-black border-slate-200 hover:border-slate-800 transition-all rounded-2xl bg-white">
                    PROJELER
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="relative hidden lg:block"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee Section - Full Screen Width, edge-to-edge */}
      <section className="w-full overflow-x-hidden">
        <TechMarquee />
      </section>

      {/* Stats Section */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <StatsSection />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <div className="max-w-2xl text-left">
               <Badge variant="brand" className="mb-6">HİZMET KAPSAMIMIZ</Badge>
               <h2 className="text-4xl md:text-6xl font-brand font-black text-slate-900 tracking-tight leading-tight">
                 İhtiyacınıza Özel <br/> <span className="text-brand-500">Uçtan Uca</span> Çözümler
               </h2>
            </div>
            <Link to="/hizmetler" className="shrink-0 lg:mt-auto">
               <Button variant="outline" className="rounded-xl px-8 font-black text-xs tracking-widest bg-white">TÜM HİZMETLER</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.slice(0, 3).map((service, i) => (
              <FeaturedService key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Ad Section: Mobile App Focus */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
         
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[4rem] border border-white/5 p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20">
               <div className="flex-1 text-center lg:text-left">
                  <Badge variant="brand" className="mb-8">MOBİL UYGULAMA</Badge>
                  <h2 className="text-4xl md:text-7xl font-brand font-black text-white mb-8 tracking-tighter leading-tight">
                    Cebinizdeki <br/> <span className="text-brand-500">Yazılım Ofisi</span>
                  </h2>
                  <p className="text-xl text-slate-400 font-light mb-12 max-w-xl">
                    React Native altyapısıyla tek kod tabanından hem iOS hem Android için ultra hızlı uygulamalar üretiyoruz. İşinizi her yerden yönetin.
                  </p>
                  <Link to="/hizmetler">
                    <Button size="lg" className="rounded-2xl px-12 py-6 text-xl font-brand font-black group">
                      HİZMET DETAYLARI <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
               </div>
               
               <div className="flex-1 w-full max-w-md">
                  <div className="relative aspect-[4/5] bg-slate-900 rounded-[3rem] border-8 border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent" />
                     <Smartphone size={120} className="text-brand-500 animate-pulse" />
                     <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-3">
                        <div className="h-2 w-full bg-slate-800 rounded-full" />
                        <div className="h-2 w-2/3 bg-slate-800 rounded-full" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Why Choose Us - Enhanced Cards */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="text-left">
                 <Badge variant="brand" className="mb-6">AVANTAJLARIMIZ</Badge>
                 <h2 className="text-4xl md:text-5xl font-brand font-black text-slate-900 mb-10 tracking-tight">Neden <span className="text-brand-500">APRICODI</span>?</h2>
                 <div className="space-y-8">
                    {[
                      { icon: Gauge, title: "Maksimum Hız", desc: "Core Web Vitals kriterlerine uygun, Google'da yıldırım hızında açılan siteler tasarlıyoruz." },
                      { icon: ShieldCheck, title: "Siber Dayanıklılık", desc: "Tüm sistemlerimizi en güncel güvenlik protokolleriyle zırhlandırıyoruz." },
                      { icon: Sparkles, title: "Modern UI/UX", desc: "Sadece kod yazmıyoruz; kullanıcı alışkanlıklarını analiz ederek dönüşüm odaklı arayüzler tasarlıyoruz." },
                      { icon: Bot, title: "Yapay Zeka Hazır", desc: "Sistemlerinizi n8n ve LLM modelleriyle otomatikleştirerek operasyonel yükünüzü hafifletiyoruz." }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 group"
                      >
                         <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                            <item.icon size={28} />
                         </div>
                         <div>
                            <h4 className="text-xl font-brand font-black text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <div className="absolute inset-0 bg-brand-500/10 blur-[120px] rounded-full -z-10" />
                 <Card className="p-12 md:p-16 bg-slate-900 border-none shadow-2xl rounded-[3rem] text-center text-white overflow-hidden group">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-24 -right-24 w-64 h-64 border border-white/5 rounded-full" 
                    />
                    <div className="w-20 h-20 bg-brand-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Rocket size={40} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-brand font-black mb-8 leading-tight">Projenizi Başlatmaya Hazır Mısınız?</h3>
                    <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
                      Uzman ekibimizle teknik analiz seansı gerçekleştirin ve dijital dönüşüm yol haritanızı hemen oluşturun.
                    </p>
                    <Link to="/teklif-al">
                      <Button size="lg" className="w-full py-6 text-xl font-brand font-black rounded-2xl shadow-xl shadow-brand-500/30">HEMEN BAŞLA</Button>
                    </Link>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* New Blog CTA Strip */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-50 border border-brand-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm border border-brand-100 group-hover:scale-110 transition-transform duration-500">
                <BookOpen size={32} />
              </div>
              <div>
                <Badge variant="brand" className="mb-2">BİLGİ MERKEZİ</Badge>
                <h3 className="text-2xl md:text-3xl font-brand font-black text-slate-900 tracking-tight">
                  Teknoloji dünyasından <span className="text-brand-600">güncel içgörüler</span> alın.
                </h3>
                <p className="text-slate-500 font-light mt-1">Yazılım, SEO ve yapay zeka üzerine hazırladığımız rehberlerimizi keşfedin.</p>
              </div>
            </div>
            <Link to="/blog" className="shrink-0 w-full md:w-auto">
              <Button variant="secondary" size="lg" className="rounded-xl w-full px-10 font-black group/btn">
                BLOGLARI OKU <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Premium Slider */}
      <section className="py-32 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
             <Badge variant="brand" className="mb-6">REFERANSLAR</Badge>
             <h2 className="text-4xl md:text-6xl font-brand font-black text-white">Bize Güvenen <span className="text-brand-500">Markalar</span></h2>
           </div>
           
           <TestimonialSlider />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-brand font-black text-slate-900 uppercase tracking-widest mb-12">TEKNOLOJİ PARTNERLERİMİZ</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {/* Placeholders for partner logos */}
               <div className="flex items-center gap-3 font-black text-2xl tracking-tighter"><Globe /> GLOBAL WEB</div>
               <div className="flex items-center gap-3 font-black text-2xl tracking-tighter"><ShieldCheck /> SECURE NET</div>
               <div className="flex items-center gap-3 font-black text-2xl tracking-tighter"><Code /> NEXT-GEN</div>
               <div className="flex items-center gap-3 font-black text-2xl tracking-tighter"><Zap /> FLASH DEV</div>
            </div>
         </div>
      </section>
    </div>
  );
};
