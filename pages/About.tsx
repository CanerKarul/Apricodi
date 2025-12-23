
import React from 'react';
import { SectionHeader, Card, Badge, Button } from '../components/ui';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Globe, 
  Scale, 
  Cpu, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp, 
  Users,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Lightbulb,
  Rocket,
  Sparkles,
  Zap,
  Clock,
  CheckCircle2,
  MessageCircle,
  Gem,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Caner Karul",
      role: "Yazılım Geliştirici & Kurucu",
      bio: "Malatya Turgut Özal Üniversitesi Bilgisayar Mühendisliği mezunu. Front-end mimarisi, n8n otomasyonları ve yapay zekâ entegrasyonları üzerinde uzmanlaşmıştır. APRICODI'nin teknik altyapısını ve ürün stratejisini yönetmektedir.",
      imageUrl: "https://ui-avatars.com/api/?name=Caner+Karul&background=0f172a&color=fff&size=256",
      tags: ["Frontend", "AI & Automation", "Product Strategy"],
      socials: {
        linkedin: "https://www.linkedin.com/in/canerkarul/",
        github: "https://github.com/CanerKarul",
        mail: "mailto:cnnrkrrl@gmail.com"
      }
    },
    {
      id: 2,
      name: "Nisa Üstündağ",
      role: "Yazılım Geliştirici & Kurumsal İletişim",
      bio: "Malatya Turgut Özal Üniversitesi Yazılım Mühendisliği son sınıf öğrencisi. Büyük Dil Modelleri (LLM) ve full-stack geliştirme projelerinde deneyim sahibidir. Kurumda hem teknik geliştirme hem de kurumsal iletişim süreçlerini yürütmektedir.",
      imageUrl: "https://ui-avatars.com/api/?name=Nisa+Ustundag&background=f97316&color=fff&size=256",
      tags: ["Fullstack", "LLM", "Communication"],
      socials: {
        linkedin: "https://www.linkedin.com/in/nisaustundag/",
        github: "https://github.com/NisaUstundag",
        mail: "mailto:nisaustundag070@gmail.com"
      }
    },
    {
      id: 3,
      name: "Hatice Arslan",
      role: "Yazılım Geliştirici",
      bio: "Malatya Turgut Özal Üniversitesi Yazılım Mühendisliği son sınıf öğrencisi. Siber güvenlik ve güvenli kod geliştirme standartlarına odaklanmaktadır. APRICODI projelerinde güvenlik ve backend süreçlerine katkı sağlamaktadır.",
      imageUrl: "https://ui-avatars.com/api/?name=Hatice+Arslan&background=0f172a&color=fff&size=256",
      tags: ["Cyber Security", "Backend", "Software Engineering"],
      socials: {
        linkedin: "https://www.linkedin.com/in/hatice-arslan3/",
        github: "https://github.com/htcArsln",
        mail: "mailto:42.arslan.hatice@gmail.com"
      }
    },
    {
      id: 4,
      name: "Sarper Varol",
      role: "Yazılım Geliştirici & Sosyal Medya Yöneticisi",
      bio: "Malatya Turgut Özal Üniversitesi Bilgisayar Mühendisliği mezunu. Halihazırda bir savunma yazılım şirketinde görev almaktadır. APRICODI bünyesinde sosyal medya içerik üretim süreçlerini ve topluluk yönetimini yürütmektedir.",
      imageUrl: "https://ui-avatars.com/api/?name=Sarper+Varol&background=f97316&color=fff&size=256",
      tags: ["Defense Software", "Content Creation", "Social Media"],
      socials: {
        linkedin: "#",
        github: "#",
        mail: "#"
      }
    }
  ];

  const values = [
    {
      icon: Scale,
      title: "Şeffaf Süreç Yönetimi",
      desc: "Projeninin her aşamasında açık iletişim kurar, sürpriz maliyetler veya gizli süreçler olmadan çalışırız."
    },
    {
      icon: Cpu,
      title: "Sürdürülebilir Mimari",
      desc: "Sadece bugünü kurtaran değil, gelecekteki büyüme hedeflerinize uyum sağlayacak kod yapıları inşa ederiz."
    },
    {
      icon: HeartHandshake,
      title: "Kullanıcı Odaklı Tasarım",
      desc: "Teknolojiyi insan için tasarlarız. Estetik ve fonksiyonelliği birleştirerek en iyi deneyimi hedefleriz."
    },
    {
      icon: ShieldCheck,
      title: "Güvenlik Hassasiyeti",
      desc: "Veri güvenliği ve siber dayanıklılık, yazdığımız her satır kodun temel prensibidir."
    },
    {
      icon: TrendingUp,
      title: "Sürekli Öğrenme",
      desc: "Teknoloji hızla değişirken biz de değişiyoruz. Ekibimiz sürekli yeni stack'leri ve metodolojileri öğrenir."
    },
    {
      icon: Users,
      title: "Toplumsal Katkı",
      desc: "Malatya'dan kazandığımızı teknoloji ekosistemine geri veriyor, yerel kalkınmayı destekliyoruz."
    }
  ];

  const journeyMilestones = [
    {
      tag: "BAŞLANGIÇ",
      title: "Fikrin Doğuşu",
      description: "Malatya'da teknolojiye meraklı genç mühendislerin bir araya gelerek yerel potansiyeli dijital dünyaya taşıma hedefiyle yola çıkışı. İlk open-source projeler ve teknoloji topluluğu adımları.",
      icon: Lightbulb,
      color: "brand",
      align: "right" // On the left side of timeline (points to right)
    },
    {
      tag: "BUGÜN",
      title: "Kurumsal Yapılanma",
      description: "Kurumsal kimliğin oluşturulması, ekibin büyümesi ve Türkiye genelinde ilk büyük ölçekli kurumsal web ve mobil projelerin teslim edilmesi. n8n ve AI otomasyon süreçlerinin entegrasyonu.",
      icon: Rocket,
      color: "slate",
      align: "left" // On the right side of timeline (points to left)
    },
    {
      tag: "GELECEK",
      title: "Global Vizyon",
      description: "Yapay zeka odaklı SaaS ürünleri geliştirmek ve hizmet ihracatıyla global pazarda rekabet eden bir marka haline gelmek. Malatya'dan dünyaya teknoloji ihraç eden bir merkez olma hedefi.",
      icon: Sparkles,
      color: "brand",
      align: "right" // On the left side of timeline (points to right)
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge variant="brand">Hakkımızda</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight">
            Malatya’nın Köklerinden <br/> <span className="text-brand-500">Global Teknolojiye</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            İsmimizi Malatya’nın simgesi "Apricot" (Kayısı) ve yazılımın temeli "Code"dan alıyoruz. 
            Yerel değerleri global standartlarla buluşturan bir teknoloji ajansıyız.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 -mt-12 relative z-20 rounded-t-[3rem] border-t border-slate-200 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group relative">
              <div className="absolute inset-0 bg-brand-500/5 rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-200/60 shadow-xl overflow-hidden group-hover:shadow-brand-500/10 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-[5rem] -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="w-20 h-20 bg-brand-500 rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-500/30 transform group-hover:rotate-6 transition-transform">
                  <Target size={40} />
                </div>
                <Badge variant="brand" className="mb-4">HEDEF ODAKLI</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Misyonumuz</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  İşletmelerin dijital dönüşüm süreçlerinde <span className="text-slate-900 font-bold italic">ölçeklenebilir, yüksek performanslı ve güvenli</span> yazılım çözümleri sunarak büyümelerine doğrudan katkı sağlamak. APRICODI olarak karmaşık mühendislik problemlerini, kullanıcıyı merkeze alan yalın ve etkili teknolojilerle çözmeyi görev ediniyoruz.
                </p>
                <div className="mt-10 flex items-center gap-4 text-brand-600 font-bold group-hover:gap-6 transition-all">
                  <span>Değer Üretmeye Devam Ediyoruz</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group relative">
              <div className="absolute inset-0 bg-slate-900/5 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-slate-900 p-10 md:p-14 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden group-hover:shadow-slate-500/10 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-bl-[5rem] -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-slate-900 mb-8 shadow-lg shadow-white/10 transform group-hover:-rotate-6 transition-transform">
                  <Eye size={40} />
                </div>
                <Badge variant="slate" className="mb-4 !border-slate-700 !text-slate-400">GELECEK VİZYONU</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Vizyonumuz</h2>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Bölgesel bir girişim olarak başladığımız bu yolculukta, ürettiğimiz katma değerli projelerle <span className="text-white font-bold">ulusal ve uluslararası pazarda</span> tanınan, güvenilir bir teknoloji iş ortağına dönüşmek. Malatya'yı bir yazılım ihracat üssü haline getirerek küresel teknoloji haritasında kalıcı bir iz bırakmak.
                </p>
                <div className="mt-10 flex items-center gap-4 text-white font-bold group-hover:gap-6 transition-all">
                  <span>Sınırları Aşıyoruz</span>
                  <ArrowRight size={20} className="text-brand-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="brand">PRENSİPLERİMİZ</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-6">Değerlerimiz</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
              Bizi biz yapan ve çalışma kültürümüzü şekillendiren sarsılmaz prensiplerimiz.
            </p>
            <div className="h-1.5 w-24 bg-brand-500 mx-auto mt-10 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-brand-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-50/50 rounded-tl-full translate-x-32 translate-y-32 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 -z-10"></div>
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-8 group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light group-hover:text-slate-600 transition-colors">{item.desc}</p>
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest group-hover:text-brand-500 transition-colors">
                  <Gem size={12} /> Apricodi Standard
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Çekirdek Ekibimiz</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Tutkulu, meraklı ve sürekli öğrenen bir ekip. APRICODI'nin arkasındaki güç.
            </p>
            <div className="h-1 w-20 bg-brand-500 mx-auto mt-8" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-brand-500/50 transition-all duration-300 group backdrop-blur-sm">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 p-8 flex flex-col items-center justify-center bg-slate-800/30">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-slate-700/50 overflow-hidden mb-6 group-hover:border-brand-500 transition-colors shadow-2xl">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center gap-5 mt-auto">
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-brand-500 hover:bg-brand-500/10 transition-all"><Linkedin size={20} /></a>
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><Github size={20} /></a>
                      <a href={member.socials.mail} className="p-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-brand-500 hover:bg-brand-500/10 transition-all"><Mail size={20} /></a>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 md:pl-0 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{member.name}</h3>
                      <p className="text-brand-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
                      <p className="text-slate-300 text-sm leading-relaxed text-justify">{member.bio}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {member.tags.map(tag => <span key={tag} className="px-2.5 py-1 bg-slate-900/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-700/50">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Timeline - Optimized Spacing and Arrow Logic */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <SectionHeader title="Yolculuğumuz" subtitle="Bir fikirle başlayan, tutkuyla büyüyen hikayemiz." />
          
          <div className="relative mt-20">
            {/* Center Line (Desktop) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 via-slate-300 to-brand-400 md:-translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-24">
              {journeyMilestones.map((milestone, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Marker (Icon) */}
                  <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-30">
                     <motion.div 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       viewport={{ once: true }}
                       className={`w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center ${milestone.color === 'brand' ? 'bg-brand-600 text-white' : 'bg-slate-900 text-white'}`}
                     >
                       <milestone.icon size={20} />
                     </motion.div>
                  </div>

                  {/* Content Layout */}
                  <div className={`flex flex-col md:flex-row items-center ${milestone.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                    {/* Card Container with increased spacing from line (md:px-20) */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${milestone.align === 'right' ? 'md:pr-16' : 'md:pl-16'}`}>
                      <motion.div 
                        initial={{ opacity: 0, x: milestone.align === 'right' ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group relative ${milestone.align === 'right' ? 'md:text-right' : 'md:text-left'}`}
                      >
                         {/* Card Arrow (Triangle) - Logic fixed for both sides */}
                         <div className={`absolute top-8 w-8 h-8 bg-white border-t border-l border-slate-100 rotate-45 hidden md:block ${milestone.align === 'right' ? '-right-4 border-b-0 border-l-0 border-t border-r' : '-left-4'}`}></div>
                         
                         <span className="text-brand-600 font-black text-xs tracking-widest uppercase mb-4 block group-hover:scale-105 transition-transform origin-left">
                           {milestone.tag}
                         </span>
                         <h3 className="text-2xl font-bold text-slate-900 mb-4">{milestone.title}</h3>
                         <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           {milestone.description}
                         </p>
                         
                         <div className={`w-12 h-1 bg-brand-500/20 mt-6 rounded-full ${milestone.align === 'right' ? 'md:ml-auto' : ''}`}></div>
                      </motion.div>
                    </div>
                    {/* Spacer for non-card side on desktop */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="brand">Hemen Başlayalım</Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-8 mb-8 tracking-tight leading-tight">
                  Ekibimizle Tanışın, <br/> <span className="text-brand-500">Projenizi Konuşalım</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">Dijital hedeflerinizi gerçeğe dönüştürmek için enerjimiz ve uzmanlığımızla yanınızdayız.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                   {[{ icon: Clock, text: "24 Saat İçinde Dönüş" }, { icon: Zap, text: "Ücretsiz Ön Analiz" }, { icon: CheckCircle2, text: "SLA Garantili Destek" }, { icon: MessageCircle, text: "Şeffaf İletişim Hattı" }].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-slate-300">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-500"><item.icon size={16} /></div>
                        <span className="text-sm font-bold">{item.text}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col gap-4 w-full sm:w-auto">
                <Link to="/teklif-al" className="w-full"><Button size="lg" className="w-full sm:px-12 py-6 text-xl shadow-xl shadow-brand-500/40 transform hover:scale-105 transition-all">Ücretsiz Teklif Al <ArrowRight className="ml-3" size={24} /></Button></Link>
                <Link to="/iletisim" className="w-full"><Button variant="outline" size="lg" className="w-full sm:px-12 py-6 text-xl !bg-transparent !border-slate-700 !text-white hover:!bg-slate-800 hover:!border-brand-500 transform hover:scale-105 transition-all">Bize Ulaşın</Button></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
