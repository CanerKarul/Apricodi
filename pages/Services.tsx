
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Button, Badge, Card } from '../components/ui';
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
  Mic,
  Sparkles,
  Trophy,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceIllustration: React.FC<{ id: string }> = ({ id }) => {
  const containerClass = "w-full h-full bg-slate-50/50 relative overflow-hidden flex items-center justify-center p-4 md:p-8";
  const floating = { floating: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const } } };

  switch (id) {
    case 'ai-automation':
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="relative w-full h-full flex items-center justify-center">
             <motion.div className="relative flex items-center gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <motion.div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-brand-600 relative z-10" variants={floating} animate="floating">
                   <Mic size={24} />
                   <div className="absolute -bottom-6 text-[8px] font-black text-slate-400 uppercase tracking-tighter">Voice Input</div>
                </motion.div>
                <motion.div className="w-16 h-0.5 bg-brand-500/20 relative" initial={{ width: 0 }} whileInView={{ width: 64 }} transition={{ duration: 1 }}>
                   <motion.div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_10px_#f97316]" animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} />
                </motion.div>
                <motion.div className="w-24 h-24 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center text-brand-500 relative z-10" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                   <div className="absolute inset-0 bg-brand-500/10 rounded-3xl animate-pulse"></div>
                   <Bot size={40} className="relative z-10" />
                   <div className="absolute -bottom-8 text-[10px] font-black text-slate-900 uppercase">AI Processor</div>
                </motion.div>
                <motion.div className="w-16 h-0.5 bg-brand-500/20 relative" initial={{ width: 0 }} whileInView={{ width: 64 }} transition={{ duration: 1, delay: 0.5 }}>
                   <motion.div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-brand-500 rounded-full shadow-[0_0_10px_#f97316]" animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                </motion.div>
                <motion.div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-blue-600 relative z-10" variants={floating} animate="floating" transition={{ delay: 0.3 }}>
                   <MessageSquare size={24} />
                   <div className="absolute -bottom-6 text-[8px] font-black text-slate-400 uppercase tracking-tighter">n8n Output</div>
                </motion.div>
             </motion.div>
          </div>
        </div>
      );
    case 'web-dev':
      return (
        <div className={containerClass}>
          <motion.div className="w-[90%] h-[80%] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 flex flex-col" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
            <div className="bg-slate-900 h-10 flex items-center px-4 gap-2">
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div><div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div></div>
              <div className="flex-1 px-4"><div className="w-full h-3 bg-slate-800 rounded-full"></div></div>
            </div>
            <div className="flex-1 flex p-6 gap-6">
              <div className="flex-1 space-y-4">
                 <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 p-4">
                       <motion.div className="w-full h-1.5 bg-brand-500 rounded" initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1 }} />
                       <div className="mt-4 space-y-2">
                          <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                          <div className="h-1.5 w-2/3 bg-slate-200 rounded"></div>
                       </div>
                    </div>
                    <div className="h-32 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-brand-500 p-4">
                       <BarChart3 size={24} />
                       <span className="text-[10px] font-black mt-2">SEO SCORE</span>
                       <span className="text-xl font-black text-white">99%</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={floating} animate="floating" className="absolute top-12 right-12 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-50">
             <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600"><Zap size={20} /></div>
             <div><div className="text-[10px] font-black text-slate-900">CORE VITALS</div><div className="text-[8px] text-slate-400">OPTIMIZED</div></div>
          </motion.div>
        </div>
      );
    case 'mobile-dev':
      return (
        <div className={containerClass}>
          <div className="relative flex items-center justify-center gap-8">
            <motion.div className="w-48 h-[340px] bg-slate-900 rounded-[3rem] p-2.5 shadow-2xl relative z-10 border-4 border-slate-800" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
               <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                  <div className="h-full pt-12 p-6 space-y-4">
                     <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600"><Smartphone size={24} /></div>
                     <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                     <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-50 rounded"></div>
                        <div className="h-2 w-full bg-slate-50 rounded"></div>
                        <div className="h-2 w-2/3 bg-slate-50 rounded"></div>
                     </div>
                     <div className="mt-8 h-10 w-full bg-brand-500 rounded-xl"></div>
                  </div>
               </div>
            </motion.div>
            <div className="flex flex-col gap-4">
               {['iOS', 'Android', 'Flutter'].map((platform, i) => (
                 <motion.div key={platform} className="bg-white p-4 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-4" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700"><Check size={16} /></div>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{platform}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      );
    case 'ui-ux':
      return (
        <div className={containerClass}>
          <motion.div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            <div className="h-10 bg-slate-900 flex items-center px-4 gap-4">
               <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div></div>
               <div className="flex-1 h-4 bg-slate-800 rounded-full mx-4"></div>
            </div>
            <div className="flex h-64">
               <div className="w-16 border-r border-slate-100 bg-slate-50 flex flex-col items-center py-4 gap-4">
                  <Palette size={18} className="text-brand-500" />
                  <Layers size={18} className="text-slate-300" />
                  <Maximize2 size={18} className="text-slate-300" />
               </div>
               <div className="flex-1 p-8 relative">
                  <div className="w-40 h-40 border-2 border-brand-200 border-dashed rounded-2xl flex items-center justify-center">
                     <div className="w-24 h-24 bg-brand-50 rounded-xl border border-brand-200"></div>
                  </div>
                  <motion.div className="absolute text-brand-600" animate={{ x: [0, 40, -20, 0], y: [0, 60, 20, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                     <MousePointer2 size={24} className="fill-brand-600" />
                     <div className="ml-4 bg-brand-600 text-white text-[8px] px-2 py-0.5 rounded font-black">DESIGNER</div>
                  </motion.div>
               </div>
            </div>
          </motion.div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className={containerClass}>
           <div className="relative w-full max-w-sm">
              <motion.div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100" initial={{ y: 20 }} whileInView={{ y: 0 }}>
                 <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600"><ShoppingBag size={24} /></div>
                    <div className="text-right">
                       <div className="text-[10px] font-black text-slate-400">TOTAL SALES</div>
                       <div className="text-2xl font-black text-slate-900">₺142.500</div>
                    </div>
                 </div>
                 <div className="flex items-end gap-2 h-24">
                    {[40, 70, 45, 90, 60, 80].map((h, i) => (
                      <motion.div key={i} className="flex-1 bg-brand-500 rounded-t-lg" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: i * 0.1 }} />
                    ))}
                 </div>
              </motion.div>
              <motion.div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3" variants={floating} animate="floating">
                 <CreditCard size={20} className="text-brand-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Secure Checkout</span>
              </motion.div>
           </div>
        </div>
      );
    case 'maintenance':
      return (
        <div className={containerClass}>
           <div className="relative">
              {[1, 2, 3].map(i => (
                <motion.div key={i} className="absolute border border-brand-500/10 rounded-full" style={{ width: i * 140, height: i * 140, top: -(i * 70), left: -(i * 70) }} animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }} />
              ))}
              <motion.div className="w-32 h-32 bg-white rounded-[2.5rem] shadow-2xl border border-slate-50 flex items-center justify-center text-brand-600 relative z-10" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                 <ShieldCheck size={64} />
                 <div className="absolute inset-0 bg-brand-500/5 rounded-[2.5rem] animate-pulse"></div>
              </motion.div>
              <motion.div className="absolute -top-12 -right-12 bg-slate-900 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2" variants={floating} animate="floating">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-[10px] font-black">99.9% UPTIME</span>
              </motion.div>
           </div>
        </div>
      );
    default: return null;
  }
};

export const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Yazılım Hizmetlerimiz | Web, Mobil ve Yapay Zeka Çözümleri" 
        description="Apricodi Malatya yazılım hizmetleri: Kurumsal web yazılımı, iOS & Android uygulama geliştirme, n8n otomasyonu ve yapay zeka entegrasyonu. Dijital dönüşümde uzman ajans."
        keywords="Apricodi, Apricody, n8n otomasyon, malatya yazılım hizmetleri, kurumsal web yazılımı, yapay zeka ajansı türkiye, mobil uygulama maliyeti"
      />
      
      {/* Premium Hero Section */}
      <section className="bg-slate-900 text-white pt-40 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="brand" className="mb-6">HİZMETLERİMİZ</Badge>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
              Dijital Dönüşümde <br/>
              <span className="text-brand-500">Mükemmellik</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              İşletmenizin ihtiyaçlarına özel, performans odaklı ve ölçeklenebilir teknoloji çözümleri üreterek geleceği bugünden inşa ediyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Main Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 pb-32">
        {services.map((service, index) => (
          <motion.section 
            key={service.id} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <Card className={`p-8 md:p-16 border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white group flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-7xl font-black text-slate-100 group-hover:text-brand-50 transition-colors">{`0${index + 1}`}</span>
                  <div>
                    <Badge variant="brand" className="mb-2">APRICODI SOLUTION</Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-brand-600 transition-colors">{service.title}</h2>
                  </div>
                </div>
                
                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
                  {service.description} Sektörel standartların üzerinde bir deneyim sunmak için en güncel teknolojileri projenize entegre ediyoruz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Hizmet Kapsamı</h4>
                    <ul className="space-y-3">
                      {service.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-slate-600">
                          <Check size={18} className="text-brand-600 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">AVANTAJLAR</h4>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-slate-500">
                          <Minus size={18} className="text-slate-300 mt-0.5 shrink-0" />
                          <span className="text-sm font-light italic">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/teklif-al" className="block sm:inline-block">
                  <Button variant={index % 2 === 0 ? 'primary' : 'secondary'} size="lg" className="w-full sm:w-auto px-10 rounded-2xl shadow-xl shadow-brand-500/20 font-black group">
                    Ücretsiz Danışmanlık Al <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-inner bg-slate-50/50">
                  <ServiceIllustration id={service.id} />
                </div>
              </div>
            </Card>
          </motion.section>
        ))}
      </div>

      {/* Trust Teaser Section */}
      <section className="bg-slate-50 py-32 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <Badge variant="brand" className="mb-6">KALİTE STANDARTLARI</Badge>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Nasıl <span className="text-brand-500">Fark</span> Yaratıyoruz?</h2>
                <div className="space-y-8">
                   {[
                     { icon: Rocket, title: "Hız ve Performans", desc: "Tüm web projelerimizde Next.js ve Core Web Vitals kriterlerine odaklanarak en yüksek hızı sunuyoruz." },
                     { icon: ShieldCheck, title: "Maksimum Güvenlik", desc: "Kurumsal verilerinizi korumak için en güncel güvenlik protokollerini ve şifreleme yöntemlerini kullanıyoruz." },
                     { icon: Trophy, title: "Kullanıcı Deneyimi", desc: "Sadece kod yazmıyoruz; kullanıcı alışkanlıklarını analiz ederek dönüşüm odaklı arayüzler tasarlıyoruz." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start group">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                           <item.icon size={28} />
                        </div>
                        <div>
                           <h4 className="font-black text-slate-900 text-lg mb-2">{item.title}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative">
                <Card className="p-12 md:p-16 bg-slate-900 border-none shadow-2xl rounded-[3rem] text-center text-white overflow-hidden">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 rounded-bl-full"></div>
                   <div className="w-20 h-20 bg-brand-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-500/30">
                     <Sparkles size={40} />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Projeniz İçin Teknik Analiz İsteyin</h3>
                   <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
                     İhtiyaçlarınızı uzman ekibimizle paylaşın, 24 saat içinde size özel bir yol haritası sunalım.
                   </p>
                   <Link to="/teklif-al">
                     <Button size="lg" className="px-12 py-6 text-xl rounded-2xl shadow-xl shadow-brand-500/20 font-black w-full">Hemen Teklif İste</Button>
                   </Link>
                </Card>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
