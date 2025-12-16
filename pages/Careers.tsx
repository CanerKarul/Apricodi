import React, { useState } from 'react';
import { SectionHeader, Card, Button, Badge, Input, TextArea } from '../components/ui';
import { jobPositions } from '../data';
import { Search, MapPin, Briefcase, UserPlus, Zap, MessageSquare, Coffee, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { submitForm } from '../lib/submitToSheets';

export const Careers: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState('Hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestArea: 'Frontend Development',
    linkedin: '',
    github: '',
    cvLink: '',
    about: '',
    kvkkConsent: false,
    companyWebsite: '' // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      phone: formData.phone,
      interestArea: formData.interestArea,
      linkedin: formData.linkedin,
      github: formData.github,
      cvLink: formData.cvLink,
      about: formData.about,
      kvkkConsent: formData.kvkkConsent
    };

    // Generic form submission
    const result = await submitForm("career", payload);

    if (result.ok) {
      setFormStatus('success');
    } else {
      setFormStatus('idle');
      setErrorMsg(result.message || "Başvuru sırasında bir hata oluştu.");
    }
  };

  // Derive unique levels for filter
  const levels = ['Hepsi', 'Staj', 'Yeni Mezun', 'Junior', 'Mid', 'Senior'];

  const filteredJobs = jobPositions.filter(job => {
    const matchesLevel = filterLevel === 'Hepsi' || job.level === filterLevel;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const handleScrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToList = () => {
    document.getElementById('positions-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 rotate-12 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Badge variant="brand">Kariyer</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight">
            APRICODI'de <span className="text-brand-500">Geleceğini Tasarla</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Yeni mezunlar ve üniversite öğrencileri için öğrenme odaklı, sorumluluk aldıran ve gelişimi destekleyen bir ekip kültürü.
            <br/><span className="text-sm font-medium opacity-80 mt-2 block">Önceliğimiz: Öğrenmeye açık, üretmeyi seven takım arkadaşları.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" onClick={handleScrollToList} className="bg-white text-slate-900 hover:bg-slate-100 border-none">
               Açık Pozisyonlar
             </Button>
             <Button size="lg" variant="outline" onClick={handleScrollToForm} className="text-white border-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-500">
               Genel Başvuru
             </Button>
          </div>
        </div>
      </section>

      {/* How We Work Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: UserPlus, title: "Mentorluk & Pairing", desc: "Deneyimli ekibimizle birebir çalışma fırsatı." },
               { icon: Zap, title: "Üretim Odaklı", desc: "Teorik değil, gerçek projelerde pratik yaparak öğrenme." },
               { icon: MessageSquare, title: "Şeffaf İletişim", desc: "Hiyerarşiden uzak, fikirlerin değerli olduğu bir ortam." },
               { icon: Coffee, title: "Hibrit Esneklik", desc: "Sonuç odaklı, uzaktan veya ofisten çalışma özgürlüğü." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
                   <item.icon size={24} />
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="positions-list" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Açık Pozisyonlar" subtitle="Ekibimize katılarak potansiyelini ortaya çıkar." />

          {/* Filters */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm sticky top-24 z-30">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    filterLevel === level 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-72">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
               <input 
                 type="text" 
                 placeholder="Pozisyon ara..." 
                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none text-sm"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
          </div>

          {/* List or Empty State */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 md:p-8 hover:border-brand-300 transition-all group">
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                           <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{job.title}</h3>
                           <Badge variant="slate">{job.level}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                           <span className="flex items-center gap-1"><Briefcase size={14}/> {job.department}</span>
                           <span className="flex items-center gap-1"><MapPin size={14}/> {job.location} ({job.workType})</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
                          {job.summary}
                        </p>
                        <div className="flex gap-2">
                          {job.tags.map(tag => (
                            <span key={tag} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded border border-brand-100">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="shrink-0 pt-2">
                         <Button onClick={handleScrollToForm}>Başvur</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                 <UserPlus size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Şu an açık pozisyon bulunmuyor.</h3>
               <p className="text-slate-600 mb-6 max-w-md mx-auto">
                 Ancak yetenekli insanlarla tanışmayı her zaman isteriz. Genel başvuru formunu doldurarak CV'ni bize iletebilirsin.
               </p>
               <Button onClick={handleScrollToForm} variant="outline">Genel Başvuru Yap</Button>
            </div>
          )}

        </div>
      </section>

      {/* General Application Form */}
      <section id="application-form" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Genel Başvuru</h2>
             <p className="text-slate-600">
               Aradığın pozisyonu listede bulamadın mı? Kendini anlat, uygun bir rol açıldığında ilk seninle iletişime geçelim.
             </p>
           </div>

           <Card className="p-8 md:p-10 shadow-lg">
             {formStatus === 'success' ? (
                <div className="text-center py-12">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                     <CheckCircle size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">Başvurunuz Alındı!</h3>
                   <p className="text-slate-600 mb-8">
                     İlginiz için teşekkürler. Profilinizi veritabanımıza ekledik, uygunluk durumunda sizinle iletişime geçeceğiz.
                   </p>
                   <Button onClick={() => {setFormStatus('idle'); setFormData({...formData, about: '', cvLink: ''});}} variant="outline">Yeni Başvuru</Button>
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
                   <Input name="phone" label="Telefon (Opsiyonel)" placeholder="0555..." value={formData.phone} onChange={handleChange} />
                   <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">İlgi Alanı</label>
                      <select name="interestArea" value={formData.interestArea} onChange={handleChange} className="w-full px-4 py-3.5 rounded-md border border-slate-200 bg-slate-50 outline-none focus:border-brand-500 focus:ring-brand-500">
                        <option>Frontend Development</option>
                        <option>Backend Development</option>
                        <option>Mobile Development</option>
                        <option>UI/UX Design</option>
                        <option>Yapay Zeka / Veri</option>
                        <option>Siber Güvenlik</option>
                        <option>Kurumsal İletişim / Satış</option>
                        <option>Diğer</option>
                      </select>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Input name="linkedin" label="LinkedIn Profili" placeholder="linkedin.com/in/..." value={formData.linkedin} onChange={handleChange} />
                   <Input name="github" label="GitHub / Portfolyo Linki" placeholder="github.com/..." value={formData.github} onChange={handleChange} />
                 </div>

                 <div className="space-y-2">
                   <Input name="cvLink" label="CV / Özgeçmiş Linki" placeholder="Drive, Dropbox veya kişisel site linki..." value={formData.cvLink} onChange={handleChange} required />
                   <p className="text-xs text-slate-400">Dosya yükleme yerine lütfen erişilebilir bir bulut linki paylaşın.</p>
                 </div>

                 {/* Honeypot */}
                 <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                 <TextArea name="about" label="Kendinden Bahset" placeholder="Neden Apricodi? Hangi alanlarda gelişmek istiyorsun?" value={formData.about} onChange={handleChange} required className="min-h-[120px]" />

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
                      <Link to="/kvkk" className="text-brand-600 hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin işe alım süreçlerinde işlenmesini onaylıyorum.
                    </label>
                  </div>

                 <Button type="submit" size="lg" fullWidth disabled={formStatus === 'submitting'}>
                   {formStatus === 'submitting' ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                 </Button>
               </form>
             )}
           </Card>
        </div>
      </section>

    </div>
  );
};