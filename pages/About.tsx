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
  Mail
} from 'lucide-react';

export const About: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Caner Karul",
      role: "Yazılım Geliştirici & Kurucu",
      bio: "Malatya Turgut Özal Üniversitesi Bilgisayar Mühendisliği mezunu. Front-end mimarisi, n8n otomasyonları ve yapay zekâ entegrasyonları üzerinde uzmanlaşmıştır. APRICODI'nin teknik altyapısını ve ürün stratejisini yönetmektedir.",
      imageUrl: "https://ui-avatars.com/api/?name=Caner+Karul&background=0f172a&color=fff&size=256",
      tags: ["Frontend", "AI & Automation", "Product Strategy"]
    },
    {
      id: 2,
      name: "Nisa Üstündağ",
      role: "Yazılım Geliştirici & Kurumsal İletişim",
      bio: "Malatya Turgut Özal Üniversitesi Yazılım Mühendisliği son sınıf öğrencisi. Büyük Dil Modelleri (LLM) ve full-stack geliştirme projelerinde deneyim sahibidir. Kurumda hem teknik geliştirme hem de kurumsal iletişim süreçlerini yürütmektedir.",
      imageUrl: "https://ui-avatars.com/api/?name=Nisa+Ustundag&background=f97316&color=fff&size=256",
      tags: ["Fullstack", "LLM", "Communication"]
    },
    {
      id: 3,
      name: "Hatice Arslan",
      role: "Yazılım Geliştirici",
      bio: "Malatya Turgut Özal Üniversitesi Yazılım Mühendisliği son sınıf öğrencisi. Siber güvenlik ve güvenli kod geliştirme standartlarına odaklanmaktadır. APRICODI projelerinde güvenlik ve backend süreçlerine katkı sağlamaktadır.",
      imageUrl: "https://ui-avatars.com/api/?name=Hatice+Arslan&background=0f172a&color=fff&size=256",
      tags: ["Cyber Security", "Backend", "Software Engineering"]
    }
  ];

  const values = [
    {
      icon: Scale,
      title: "Şeffaf Süreç Yönetimi",
      desc: "Projenin her aşamasında açık iletişim kurar, sürpriz maliyetler veya gizli süreçler olmadan çalışırız."
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
      <section className="py-20 bg-slate-50 -mt-10 relative z-20 rounded-t-3xl border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-10 border-t-4 border-t-brand-500 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Misyonumuz</h2>
              <p className="text-slate-600 leading-relaxed">
                İşletmelerin dijital dönüşüm süreçlerinde ölçeklenebilir, yüksek performanslı ve güvenli yazılım çözümleri sunarak büyümelerine doğrudan katkı sağlamak. Karmaşık problemleri sade ve etkili teknolojilerle çözmek.
              </p>
            </Card>

            <Card className="p-10 border-t-4 border-t-slate-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6">
                <Globe size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Vizyonumuz</h2>
              <p className="text-slate-600 leading-relaxed">
                Bölgesel bir girişim olarak başladığımız bu yolculukta, ürettiğimiz katma değerli projelerle ulusal ve uluslararası pazarda tanınan, güvenilir bir teknoloji iş ortağına dönüşmek.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Değerlerimiz" 
            subtitle="Bizi biz yapan ve çalışma kültürümüzü şekillendiren prensipler." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Çekirdek Ekibimiz</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Tutkulu, meraklı ve sürekli öğrenen bir ekip. APRICODI'nin arkasındaki güç.
            </p>
            <div className="h-1 w-20 bg-brand-500 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-500/50 transition-colors group">
                <div className="p-8 pb-0 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full border-4 border-slate-700 overflow-hidden mb-6 group-hover:border-brand-500 transition-colors">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-500 text-sm font-medium uppercase tracking-wider mb-6 text-center">{member.role}</p>
                </div>
                
                <div className="px-8 pb-8">
                  <p className="text-slate-300 text-sm text-center leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-900 text-slate-400 text-[10px] rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4 border-t border-slate-700 pt-6">
                    <button className="text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></button>
                    <button className="text-slate-400 hover:text-white transition-colors"><Github size={18} /></button>
                    <button className="text-slate-400 hover:text-white transition-colors"><Mail size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader title="Yolculuğumuz" subtitle="Bir fikirle başlayan, tutkuyla büyüyen hikayemiz." />
          
          <div className="relative border-l-2 border-brand-200 ml-6 md:ml-0 md:pl-0 space-y-12 text-left">
             <div className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-brand-500 border-4 border-white shadow-sm md:left-1/2 md:-ml-2.5"></div>
                <div className="md:w-1/2 md:pr-12 md:text-right md:ml-auto md:mr-auto md:absolute md:left-0 md:top-0">
                  <span className="text-brand-600 font-bold text-sm tracking-wider">BAŞLANGIÇ</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Fikrin Doğuşu</h3>
                  <p className="text-slate-600 mt-2 text-sm">Malatya'da teknolojiye meraklı genç mühendislerin bir araya gelerek yerel potansiyeli dijital dünyaya taşıma hedefiyle yola çıkışı.</p>
                </div>
             </div>
             
             <div className="relative pl-8 md:pl-0 md:mt-24">
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-slate-300 border-4 border-white shadow-sm md:left-1/2 md:-ml-2.5"></div>
                <div className="md:w-1/2 md:pl-12 md:ml-auto">
                   <span className="text-slate-500 font-bold text-sm tracking-wider">BUGÜN</span>
                   <h3 className="text-xl font-bold text-slate-900 mt-1">Kurumsal Yapılanma</h3>
                   <p className="text-slate-600 mt-2 text-sm">Kurumsal kimliğin oluşturulması, ekibin büyümesi ve Türkiye genelinde ilk büyük ölçekli projelerin teslim edilmesi.</p>
                </div>
             </div>

             <div className="relative pl-8 md:pl-0 md:pt-24">
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-slate-200 border-4 border-white shadow-sm md:left-1/2 md:-ml-2.5"></div>
                 <div className="md:w-1/2 md:pr-12 md:text-right md:ml-auto md:mr-auto md:absolute md:left-0">
                   <span className="text-slate-400 font-bold text-sm tracking-wider">GELECEK</span>
                   <h3 className="text-xl font-bold text-slate-900 mt-1">Global Vizyon</h3>
                   <p className="text-slate-600 mt-2 text-sm">SaaS ürünleri geliştirmek ve hizmet ihracatıyla global pazarda rekabet eden bir marka haline gelmek.</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-brand-50 rounded-3xl p-12 border border-brand-100">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Ekibimizle Tanışın, Projenizi Konuşalım</h2>
           <p className="text-slate-600 mb-8 max-w-xl mx-auto">
             Dijital hedeflerinizi gerçeğe dönüştürmek için enerjimiz ve uzmanlığımızla yanınızdayız.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/iletisim">
               <Button size="lg" className="shadow-brand-500/20">Bize Ulaşın</Button>
             </Link>
             <Link to="/teklif-al">
               <Button variant="outline" size="lg" className="bg-white">Teklif Al</Button>
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
};