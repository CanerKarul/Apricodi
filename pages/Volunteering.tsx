import React, { useState } from 'react';
import { SectionHeader, Card, Button, Input, TextArea, Badge } from '../components/ui';
import { Heart, Users, BookOpen, Code2, Share2, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitForm } from '../lib/submitToSheets';

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

    // Spam Check
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
      interests: formData.interests.join(", "), // Convert array to string for simpler reading
      weeklyAvailability: formData.weeklyAvailability,
      linkedin: formData.linkedin,
      motivation: formData.motivation,
      kvkkConsent: formData.kvkkConsent
    };

    // Generic form submission
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
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-brand-50 pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full text-brand-600 mb-6 shadow-sm">
            <Heart size={24} className="fill-brand-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Gönüllülük ve <span className="text-brand-600">Topluluk</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Bilgiyi paylaşarak çoğaltıyoruz. Üniversite öğrencileriyle birlikte üretiyor, açık kaynak projelere katkı sağlıyor ve teknoloji ekosistemini destekliyoruz.
          </p>
          <Button size="lg" onClick={handleScrollToForm} className="px-10 shadow-brand-500/20">
            Gönüllü Ol <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Gönüllülük Neleri Kapsar?" subtitle="APRICODI topluluğunda nasıl değer üretebilirsin?" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: BookOpen, title: "Mini Atölyeler", desc: "Öğrenciler için Frontend, Git veya temel yazılım kavramları üzerine atölye desteği." },
               { icon: Users, title: "Topluluk Desteği", desc: "Teknoloji buluşmalarında ve hackathonlarda organizasyon veya mentorluk desteği." },
               { icon: Code2, title: "Açık Kaynak", desc: "Topluluğa açık projelerimizde kod geliştirme veya dokümantasyon katkısı." },
               { icon: Share2, title: "Sosyal Fayda", desc: "Teknolojiyi kullanarak farkındalık yaratan sosyal sorumluluk projelerinde yer alma." }
             ].map((item, i) => (
               <Card key={i} className="p-6 text-center hover:shadow-lg border-t-4 border-t-transparent hover:border-t-brand-500 transition-all">
                 <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-700 mx-auto mb-4">
                   <item.icon size={28} />
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Who & Process */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div>
               <h2 className="text-3xl font-bold mb-6">Kimler Başvurabilir?</h2>
               <ul className="space-y-4 mb-8">
                 {[
                   'Üniversite öğrencileri (Öncelikli)',
                   'Yeni mezunlar ve kariyerinin başındaki profesyoneller',
                   'Haftada en az 2-3 saatini topluluk çalışmalarına ayırabilecekler',
                   'Öğrenmeye ve öğretmeye hevesli kişiler'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-300">
                     <CheckCircle className="text-brand-500 shrink-0 mt-1" size={20} />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="p-4 bg-slate-800 rounded-lg border-l-4 border-brand-500 text-sm text-slate-400">
                 Not: Gönüllülük programımız, staj veya tam zamanlı işe alım sürecinden bağımsızdır; ancak topluluk içinde aktif olan arkadaşlarımızı kariyer fırsatlarında önceliklendiriyoruz.
               </div>
             </div>

             <div className="relative">
                <h2 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-brand-500">Süreç Nasıl İşler?</h2>
                <div className="space-y-8 pl-4 border-l border-slate-700 ml-2">
                   {[
                     { step: "01", title: "Başvuru", desc: "Formu doldurarak ilgi alanlarını ve motivasyonunu bize ilet." },
                     { step: "02", title: "Tanışma", desc: "Kısa bir online görüşme ile beklentileri ve uygunluğu konuşalım." },
                     { step: "03", title: "Eşleşme", desc: "Yeteneklerine uygun bir çalışma grubuna veya projeye dahil ol." },
                     { step: "04", title: "Katkı & Gelişim", desc: "Ekiple birlikte üret, öğren ve deneyim kazan." }
                   ].map((s, i) => (
                     <div key={i} className="relative pl-8">
                       <div className="absolute -left-[37px] top-0 w-6 h-6 bg-slate-900 border-2 border-brand-500 rounded-full flex items-center justify-center text-[10px] font-bold text-brand-500">
                         {s.step}
                       </div>
                       <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
                       <p className="text-slate-400 text-sm">{s.desc}</p>
                     </div>
                   ))}
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="volunteer-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
           <div className="text-center mb-12">
             <Badge variant="brand">BAŞVURU</Badge>
             <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Gönüllü Formu</h2>
             <p className="text-slate-600">
               Aramıza katılmak için aşağıdaki formu doldurman yeterli. En kısa sürede dönüş yapacağız.
             </p>
           </div>

           <Card className="p-8 md:p-10 border-slate-200 shadow-xl">
             {formStatus === 'success' ? (
                <div className="text-center py-12">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                     <Heart size={40} className="fill-green-600" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">Harikasın!</h3>
                   <p className="text-slate-600 mb-8">
                     Başvurun bize ulaştı. Senin gibi enerjisi yüksek insanlarla tanışmak için sabırsızlanıyoruz. E-posta kutunu kontrol etmeyi unutma!
                   </p>
                   <Button onClick={() => setFormStatus('idle')} variant="outline">Forma Dön</Button>
                </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 {errorMsg && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-center gap-2">
                      <AlertCircle size={18} /> {errorMsg}
                    </div>
                  )}

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Input name="name" label="Ad Soyad" placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} required />
                   <Input name="email" label="E-posta" type="email" placeholder="ornek@email.com" value={formData.email} onChange={handleChange} required />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Input name="university" label="Üniversite / Bölüm" placeholder="Örn: Turgut Özal Üni. Yazılım Müh." value={formData.university} onChange={handleChange} />
                   <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Sınıf / Durum</label>
                      <select name="grade" value={formData.grade} onChange={handleChange} className="w-full px-4 py-3.5 rounded-md border border-slate-200 bg-slate-50 outline-none focus:border-brand-500 focus:ring-brand-500">
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

                 <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Hangi alanlarda katkı sağlayabilirsin?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Eğitim / Atölye', 'Frontend Dev', 'Backend Dev', 'UI/UX Tasarım', 'İçerik Üretimi', 'Organizasyon'].map(tag => (
                        <label key={tag} className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 p-3 rounded border border-slate-100 cursor-pointer hover:border-brand-200">
                          <input 
                            type="checkbox" 
                            value={tag}
                            checked={formData.interests.includes(tag)}
                            onChange={handleInterestChange}
                            className="rounded text-brand-600 focus:ring-brand-500" 
                          />
                          <span>{tag}</span>
                        </label>
                      ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Haftalık Ayırabileceğin Süre</label>
                      <select name="weeklyAvailability" value={formData.weeklyAvailability} onChange={handleChange} className="w-full px-4 py-3.5 rounded-md border border-slate-200 bg-slate-50 outline-none focus:border-brand-500 focus:ring-brand-500">
                        <option>Haftada 2-4 saat</option>
                        <option>Haftada 5-10 saat</option>
                        <option>Proje bazlı / Esnek</option>
                      </select>
                   </div>
                   <Input name="linkedin" label="LinkedIn / GitHub (Opsiyonel)" placeholder="Profil linki" value={formData.linkedin} onChange={handleChange} />
                 </div>

                 {/* Honeypot */}
                 <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                 <TextArea name="motivation" label="Motivasyonun Nedir?" placeholder="Neden gönüllü olmak istiyorsun? Beklentilerin neler?" value={formData.motivation} onChange={handleChange} required className="min-h-[100px]" />

                 <div className="flex items-start gap-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="kvkkConsent"
                      checked={formData.kvkkConsent}
                      onChange={handleCheckboxChange}
                      required
                      className="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500" 
                    />
                    <label htmlFor="kvkkConsent" className="text-sm text-slate-500 leading-snug">
                      <Link to="/kvkk" className="text-brand-600 hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin işlenmesini onaylıyorum.
                    </label>
                  </div>

                 <Button type="submit" size="lg" fullWidth disabled={formStatus === 'submitting'}>
                   {formStatus === 'submitting' ? 'Gönderiliyor...' : 'Gönüllü Ol'}
                 </Button>
               </form>
             )}
           </Card>
        </div>
      </section>

    </div>
  );
};