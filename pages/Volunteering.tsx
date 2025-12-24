
import React, { useState } from 'react';
import { SectionHeader, Card, Button, Input, TextArea, Badge } from '../components/ui';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Code2, 
  Share2, 
  CheckCircle, 
  ArrowRight, 
  AlertCircle, 
  Sparkles, 
  Zap, 
  Globe, 
  Rocket, 
  Star,
  MessageSquare,
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { submitForm } from '../lib/submitToSheets';
import { SEO } from '../components/SEO';

const VolunteerIllustration: React.FC<{ type: 'community' | 'learning' | 'social' }> = ({ type }) => {
  const containerClass = "w-full h-full flex items-center justify-center relative p-8 overflow-hidden bg-slate-50/50 rounded-[2.5rem]";
  const floating = { animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const } } };

  if (type === 'community') {
    return (
      <div className={containerClass}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="relative">
          {[1, 2, 3].map(i => (
            <motion.div key={i} className="absolute border border-brand-500/10 rounded-full" style={{ width: i * 100, height: i * 100, top: -(i * 50), left: -(i * 50) }} animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 5, delay: i * 0.5, repeat: Infinity }} />
          ))}
          <motion.div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-brand-600 relative z-10 border border-slate-100" variants={floating} animate="animate">
            <Users size={48} />
          </motion.div>
          <motion.div className="absolute -top-8 -right-8 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-brand-500 shadow-xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            <Zap size={24} />
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === 'learning') {
    return (
      <div className={containerClass}>
        <motion.div className="w-full max-w-[200px] aspect-square bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center relative" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
           <div className="absolute inset-4 border-2 border-brand-50 rounded-2xl border-dashed"></div>
           <BookOpen size={64} className="text-brand-500" />
           <motion.div className="absolute -bottom-4 -right-4 bg-brand-500 text-white p-3 rounded-xl shadow-lg" variants={floating} animate="animate">
              <Star size={20} fill="white" />
           </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
       <motion.div className="relative" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
          <Heart size={80} className="text-rose-500 fill-rose-50" />
          <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
             <Globe size={32} className="text-rose-600" />
          </motion.div>
       </motion.div>
    </div>
  );
};

export const Volunteering: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    grade: 'Hazırlık',
    interests: [] as string[],
    weeklyAvailability: 'Haftada 2-4 saat',
    linkedin: '',
    motivation: '',
    kvkkConsent: false,
    companyWebsite: '' // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(i => i !== value) };
      }
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (formData.companyWebsite) {
      setFormStatus('success');
      return;
    }

    if (!formData.kvkkConsent) {
      setErrorMsg("Lütfen KVKK onayını işaretleyiniz.");
      return;
    }

    setFormStatus('submitting');

    const payload = {
      name: formData.name,
      email: formData.email,
      university: formData.university,
      grade: formData.grade,
      interests: formData.interests.join(", "),
      weeklyAvailability: formData.weeklyAvailability,
      linkedin: formData.linkedin,
      motivation: formData.motivation,
      kvkkConsent: formData.kvkkConsent
    };

    const result = await submitForm("volunteer", payload);

    if (result.ok) {
      setFormStatus('success');
    } else {
      setFormStatus('idle');
      setErrorMsg(result.message || "Başvuru sırasında bir hata oluştu.");
    }
  };

  const handleScrollToForm = () => {
    document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Gönüllülük ve Topluluk | APRICODI" 
        description="APRICODI topluluğuna katılarak açık kaynak projelere katkı sağlayın ve teknoloji ekosistemini bizimle büyütün. Gönüllülük başvurusu."
      />
      
      {/* Premium Hero Section */}
      <section className="bg-slate-900 text-white pt-40 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="brand" className="mb-6">TOPLULUK & SOSYAL FAYDA</Badge>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
              Birlikte Üretelim <br/>
              <span className="text-brand-500">Paylaşarak Büyüyelim</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Bilgiyi hiyerarşiden arındırıyoruz. Üniversite öğrencileriyle birlikte üretiyor, açık kaynak projelere katkı sağlıyor ve Malatya'dan dünyaya teknoloji ihraç ediyoruz.
            </p>
            <Button size="lg" onClick={handleScrollToForm} className="px-12 py-6 text-xl rounded-2xl shadow-xl shadow-brand-500/20 font-black group">
              Topluluğa Katıl <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-24 bg-white relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: BookOpen, title: "Mini Atölyeler", desc: "Öğrenciler için Frontend, Git veya temel yazılım kavramları üzerine atölye desteği.", color: "text-blue-500", bg: "bg-blue-50" },
               { icon: Users, title: "Topluluk Desteği", desc: "Teknoloji buluşmalarında ve hackathonlarda organizasyon veya mentorluk desteği.", color: "text-brand-500", bg: "bg-brand-50" },
               { icon: Code2, title: "Açık Kaynak", desc: "Topluluğa açık projelerimizde kod geliştirme veya dokümantasyon katkısı.", color: "text-purple-500", bg: "bg-purple-50" },
               { icon: Share2, title: "Sosyal Fayda", desc: "Teknolojiyi kullanarak farkındalık yaratan sosyal sorumluluk projelerinde yer alma.", color: "text-emerald-500", bg: "bg-emerald-50" }
             ].map((item, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 transition={{ delay: i * 0.1 }}
               >
                 <Card className="p-10 h-full text-center border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[3rem] group">
                   <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                     <item.icon size={32} />
                   </div>
                   <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                   <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                 </Card>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                  <Badge variant="brand" className="mb-6">KİMLER BAŞVURABİLİR?</Badge>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Kimi <span className="text-brand-500">Arıyoruz?</span></h2>
                  <div className="space-y-6">
                    {[
                      'Üniversite öğrencileri (Öncelikli)',
                      'Yeni mezunlar ve kariyerinin başındaki profesyoneller',
                      'Haftada en az 2-3 saatini topluluk çalışmalarına ayırabilecekler',
                      'Öğrenmeye ve öğretmeye hevesli kişiler'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-brand-200 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                           <CheckCircle size={20} />
                        </div>
                        <span className="text-slate-700 font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-slate-400 italic bg-slate-100/50 p-4 rounded-xl border-l-4 border-brand-500">
                    Not: Gönüllülük programımız, staj veya tam zamanlı işe alım sürecinden bağımsızdır; ancak topluluk içinde aktif olan arkadaşlarımızı kariyer fırsatlarında önceliklendiriyoruz.
                  </p>
               </motion.div>
               <div className="grid grid-cols-1 gap-8">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                     <VolunteerIllustration type="community" />
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 grid grid-cols-1 gap-8">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                     <VolunteerIllustration type="social" />
                  </div>
               </div>
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
                  <Badge variant="brand" className="mb-6">SÜREÇ NASIL İŞLER?</Badge>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Adım Adım <span className="text-brand-500">Yolculuk</span></h2>
                  <div className="space-y-12 relative">
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-brand-500/10"></div>
                    {[
                      { step: "01", icon: MessageSquare, title: "Hızlı Başvuru", desc: "Formu doldurarak ilgi alanlarını ve motivasyonunu bize ilet." },
                      { step: "02", icon: Users, title: "Tanışma Toplantısı", desc: "Kısa bir online görüşme ile beklentileri ve uygunluğu konuşalım." },
                      { step: "03", icon: Rocket, title: "Çalışma Grubu Eşleşmesi", desc: "Yeteneklerine uygun bir çalışma grubuna veya projeye dahil ol." },
                      { step: "04", icon: Trophy, title: "Sürekli Gelişim", desc: "Ekiple birlikte üret, öğren ve deneyim kazan." }
                    ].map((s, i) => (
                      <div key={i} className="relative pl-16 group">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-brand-600 font-black shadow-lg group-hover:scale-110 transition-transform z-10">
                           <s.icon size={20} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">{s.title}</h3>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Application Form Section */}
      <section id="volunteer-form" className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-16">
             <Badge variant="brand">GÖNÜLLÜ FORMU</Badge>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">Aramıza Hoş Geldin!</h2>
             <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
               Yeteneklerini paylaşmak ve yeni şeyler öğrenmek için ilk adımı at. Formu doldurduğunda ekibimiz seninle iletişime geçecek.
             </p>
           </div>

           <Card className="p-8 md:p-14 shadow-2xl bg-white rounded-[3rem] border-none">
             <AnimatePresence mode="wait">
               {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                     <div className="w-24 h-24 bg-brand-50 text-brand-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                       <Heart size={48} className="fill-brand-600" />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 mb-4">Harikasın!</h3>
                     <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                       Başvurun bize ulaştı. Senin gibi enerjisi yüksek insanlarla tanışmak için sabırsızlanıyoruz. E-posta kutunu kontrol etmeyi unutma!
                     </p>
                     <Button onClick={() => setFormStatus('idle')} variant="outline" className="px-10 py-4 rounded-xl font-bold">Yeni Başvuru Yap</Button>
                  </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-10">
                   {errorMsg && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-rose-50 text-rose-600 p-5 rounded-2xl text-sm flex items-center gap-3 border border-rose-100 font-bold">
                        <AlertCircle size={20} /> {errorMsg}
                      </motion.div>
                    )}

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">AD SOYAD</label>
                       <Input name="name" placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">E-POSTA</label>
                       <Input name="email" type="email" placeholder="ornek@email.com" value={formData.email} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                     </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">ÜNİVERSİTE / BÖLÜM</label>
                        <Input name="university" placeholder="Örn: Turgut Özal Üni. Yazılım Müh." value={formData.university} onChange={handleChange} className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">SINIF / DURUM</label>
                        <select name="grade" value={formData.grade} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-transparent bg-slate-50 outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-700 font-bold">
                          <option>Hazırlık</option>
                          <option>1. Sınıf</option>
                          <option>2. Sınıf</option>
                          <option>3. Sınıf</option>
                          <option>4. Sınıf</option>
                          <option>Yeni Mezun</option>
                          <option>Diğer</option>
                        </select>
                     </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Hangi alanlarda katkı sağlayabilirsin?</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Eğitim / Atölye', 'Frontend Dev', 'Backend Dev', 'UI/UX Tasarım', 'İçerik Üretimi', 'Organizasyon'].map(tag => (
                          <label key={tag} className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${formData.interests.includes(tag) ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-slate-50 bg-slate-50 text-slate-500 hover:border-slate-200'}`}>
                            <input 
                              type="checkbox" 
                              value={tag}
                              checked={formData.interests.includes(tag)}
                              onChange={handleInterestChange}
                              className="hidden" 
                            />
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${formData.interests.includes(tag) ? 'bg-brand-500 border-brand-500' : 'border-slate-300 bg-white'}`}>
                               {formData.interests.includes(tag) && <CheckCircle size={14} className="text-white" />}
                            </div>
                            <span className="text-xs font-black uppercase tracking-tight">{tag}</span>
                          </label>
                        ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">HAFTALIK AYIRABİLECEĞİN SÜRE</label>
                        <select name="weeklyAvailability" value={formData.weeklyAvailability} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-transparent bg-slate-50 outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-700 font-bold">
                          <option>Haftada 2-4 saat</option>
                          <option>Haftada 5-10 saat</option>
                          <option>Proje bazlı / Esnek</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">LINKEDIN / PORTFOLYO (OPSİYONEL)</label>
                       <Input name="linkedin" placeholder="Profil linkiniz" value={formData.linkedin} onChange={handleChange} className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                     </div>
                   </div>

                   {/* Honeypot */}
                   <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                   <div className="space-y-2">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">MOTİVASYONUN NEDİR?</label>
                      <TextArea name="motivation" placeholder="Neden gönüllü olmak istiyorsun? Topluluktan beklentilerin neler?" value={formData.motivation} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-[2rem] min-h-[160px] py-5" />
                   </div>

                   <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-start gap-5">
                      <input 
                        type="checkbox" 
                        id="kvkkConsent"
                        checked={formData.kvkkConsent}
                        onChange={handleCheckboxChange}
                        required
                        className="mt-1.5 w-6 h-6 text-brand-600 rounded-lg border-slate-300 focus:ring-brand-500 cursor-pointer" 
                      />
                      <label htmlFor="kvkkConsent" className="text-sm text-slate-500 leading-relaxed cursor-pointer font-medium">
                        <Link to="/kvkk" target="_blank" className="text-brand-600 font-black hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin gönüllülük süreçlerinde işlenmesini onaylıyorum.
                      </label>
                    </div>

                   <Button type="submit" size="lg" fullWidth disabled={formStatus === 'submitting'} className="py-6 text-xl rounded-[2rem] shadow-2xl shadow-brand-500/20 font-black overflow-hidden relative group">
                     <span className="relative z-10 flex items-center justify-center gap-3">
                       {formStatus === 'submitting' ? (
                          <>Sistem İletiyor...</>
                       ) : (
                          <>Gönüllü Ol <Sparkles size={24} className="group-hover:rotate-12 transition-transform" /></>
                       )}
                     </span>
                     {formStatus === 'submitting' && (
                        <motion.div 
                          className="absolute inset-0 bg-brand-700"
                          initial={{ x: "-100%" }}
                          animate={{ x: "0%" }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                   </Button>
                 </form>
               )}
             </AnimatePresence>
           </Card>
        </div>
      </section>

      {/* Trust Teaser Section */}
      <section className="bg-slate-50 py-32 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
           <Badge variant="brand" className="mb-6">Geleceği Tasarlıyoruz</Badge>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12">Yazılım Ekosistemine <span className="text-brand-500">Değer</span> Katın</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Network", desc: "Sektör profesyonelleri ve diğer öğrencilerle tanışarak profesyonel çevreni genişlet.", icon: Globe },
                { title: "Deneyim", desc: "Gerçek projelerde yer alarak teorik bilgini pratiğe dökme şansı yakala.", icon: Code2 },
                { title: "Referans", desc: "Aktif katılım sağladığın projeler için APRICODI'den referans mektubu al.", icon: CheckCircle }
              ].map((item, i) => {
                // Fixed the error: Removed the redundant local aliases for Terminal and ShieldCheck 
                // and used imported Code2 and CheckCircle directly in the array data.
                const Icon = item.icon;
                return (
                  <div key={i} className="p-8 bg-white rounded-3xl shadow-lg border border-slate-100">
                     <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mx-auto mb-6">
                        <Icon size={28} />
                     </div>
                     <h4 className="text-lg font-black text-slate-900 mb-2">{item.title}</h4>
                     <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
           </div>
        </div>
      </section>
    </div>
  );
};
