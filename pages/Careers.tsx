
import React, { useState } from 'react';
import { SectionHeader, Card, Button, Badge, Input, TextArea } from '../components/ui';
import { jobPositions } from '../data';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  UserPlus, 
  Zap, 
  MessageSquare, 
  Coffee, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Terminal,
  Trophy,
  Users,
  // Added Globe to resolve compilation error on line 423
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { submitForm } from '../lib/submitToSheets';
import { SEO } from '../components/SEO';

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
      setErrorMsg("Lütfen KVKK aydınlatma metnini onaylayınız.");
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

    const result = await submitForm("career", payload);

    if (result.ok) {
      setFormStatus('success');
    } else {
      setFormStatus('idle');
      setErrorMsg(result.message || "Başvuru sırasında bir hata oluştu.");
    }
  };

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
      <SEO 
        title="Kariyer | APRICODI" 
        description="APRICODI ekibine katılarak geleceğin teknolojilerini bizimle inşa edin. Yeni mezunlar ve öğrenciler için gelişim odaklı kariyer fırsatları."
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-36 pb-32 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="brand" className="mb-6">Kariyer & Gelecek</Badge>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
              APRICODI'de <br/>
              <span className="text-brand-500">Geleceğini Tasarla</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Yeni mezunlar ve üniversite öğrencileri için öğrenme odaklı, sorumluluk aldıran ve gelişimi destekleyen bir ekip kültürü.
              <span className="block mt-4 text-brand-400 font-bold text-lg">Bugünün potansiyeli, yarının teknolojisi.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               <Button 
                 size="lg" 
                 variant="primary"
                 onClick={handleScrollToList} 
                 className="px-12 py-6 text-lg shadow-2xl shadow-brand-500/30 transform hover:scale-105 transition-all font-black"
               >
                 İlanları İncele <ChevronRight className="ml-2" size={20} />
               </Button>
               <Button 
                 size="lg" 
                 variant="outline" 
                 onClick={handleScrollToForm} 
                 className="!bg-transparent !border-slate-700 !text-white hover:!bg-slate-800 hover:!border-brand-500 px-12 py-6 text-lg transition-all font-black"
               >
                 Genel Başvuru
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us / Benefits */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: UserPlus, title: "Mentorluk & Pairing", desc: "Deneyimli ekibimizle birebir çalışma ve hızlı gelişim fırsatı.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Zap, title: "Üretim Odaklı", desc: "Teorik değil, gerçek dünyadaki büyük ölçekli projelerde pratik.", color: "text-brand-500", bg: "bg-brand-50" },
              { icon: MessageSquare, title: "Şeffaf İletişim", desc: "Hiyerarşiden uzak, her fikrin değerli olduğu modern bir ortam.", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Coffee, title: "Hibrit Esneklik", desc: "Sonuç odaklı, uzaktan veya teknopark ofisimizden çalışma özgürlüğü.", color: "text-emerald-500", bg: "bg-emerald-50" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="positions-list" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Açık Pozisyonlar" 
            subtitle="Ekibimize katılarak potansiyelini ortaya çıkar ve geleceği bizimle inşa et." 
          />

          {/* Enhanced Filters */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-50/80 backdrop-blur-md p-6 rounded-[2.5rem] border border-slate-100 shadow-inner sticky top-24 z-30">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    filterLevel === level 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80 group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={20} />
               <input 
                 type="text" 
                 placeholder="Pozisyon veya departman ara..." 
                 className="w-full pl-12 pr-6 py-3.5 rounded-full border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none text-sm bg-white text-slate-900 transition-all shadow-sm"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, idx) => (
                  <motion.div 
                    key={job.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-md hover:shadow-2xl hover:border-brand-200 transition-all duration-500 group">
                      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                             <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-600 transition-colors">{job.title}</h3>
                             <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">{job.level}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-bold mb-6">
                             <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl"><Briefcase size={16} className="text-brand-500"/> {job.department}</span>
                             <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl"><MapPin size={16} className="text-blue-500"/> {job.location} • {job.workType}</span>
                          </div>
                          <p className="text-slate-600 leading-relaxed mb-6 max-w-4xl text-lg font-light">
                            {job.summary}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map(tag => (
                              <span key={tag} className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="shrink-0">
                           <Button onClick={handleScrollToForm} className="w-full lg:w-auto px-10 py-5 rounded-2xl">
                             Başvuruyu Başlat <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                           </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-center py-24 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300"
                >
                   <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6 text-slate-300 border border-slate-100">
                     <Search size={40} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-3">Aradığınız pozisyon bulunamadı.</h3>
                   <p className="text-slate-500 mb-8 max-w-md mx-auto font-medium">
                     Şu an için arama kriterlerinize uygun bir ilanımız yok, ancak genel başvuru yaparak yeteneklerinizden bahsedebilirsiniz.
                   </p>
                   <Button onClick={handleScrollToForm} variant="outline" className="px-10 py-5 rounded-2xl font-bold">Genel Başvuru Yap</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <div className="text-center mb-16">
             <Badge variant="brand">BAŞVURU FORMU</Badge>
             <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4">Aramıza Katılmaya Hazır mısın?</h2>
             <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
               Kendini, projelerini ve hayallerini bize anlat. Uygun bir pozisyon oluştuğunda ilk seninle iletişime geçelim.
             </p>
           </div>

           <Card className="p-8 md:p-14 shadow-2xl bg-white rounded-[3rem] border-none">
             {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                   <div className="w-24 h-24 bg-brand-50 text-brand-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                     <Trophy size={48} />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4">Başvurunuz Alındı!</h3>
                   <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                     Harika bir adım attınız. Profilinizi yetenek havuzumuza ekledik. Değerlendirme sürecimiz başladığında e-posta üzerinden haberleşeceğiz.
                   </p>
                   <Button onClick={() => setFormStatus('idle')} variant="outline" className="px-10 py-4 rounded-xl font-bold">Yeni Başvuru Yap</Button>
                </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-8">
                 {errorMsg && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-rose-50 text-rose-600 p-4 rounded-2xl text-sm flex items-center gap-3 border border-rose-100">
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
                     <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">TELEFON</label>
                     <Input name="phone" placeholder="0555 555 55 55" value={formData.phone} onChange={handleChange} className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">İLGİ ALANI</label>
                      <select name="interestArea" value={formData.interestArea} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-transparent bg-slate-50 outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-700 font-medium">
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

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">LINKEDIN</label>
                     <Input name="linkedin" placeholder="linkedin.com/in/profil" value={formData.linkedin} onChange={handleChange} className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">GITHUB / PORTFOLYO</label>
                     <Input name="github" placeholder="github.com/kullanici" value={formData.github} onChange={handleChange} className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">CV / ÖZGEÇMİŞ (BULUT LİNKİ)</label>
                   <Input name="cvLink" placeholder="Google Drive, Dropbox veya kişisel site linki..." value={formData.cvLink} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                   <p className="text-xs text-slate-400 font-medium italic ml-2">Lütfen dosyanızın erişim izinlerinin herkese açık olduğundan emin olun.</p>
                 </div>

                 <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                 <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">KENDİNDEN BAHSET</label>
                    <TextArea name="about" placeholder="Neden Apricodi? Hangi teknolojiler seni heyecanlandırıyor? Bugüne kadar neler ürettin?" value={formData.about} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-3xl min-h-[160px] py-4" />
                 </div>

                 <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4">
                    <input 
                      type="checkbox" 
                      id="kvkkConsent"
                      checked={formData.kvkkConsent}
                      onChange={handleCheckboxChange}
                      required
                      className="mt-1.5 w-5 h-5 text-brand-600 rounded-lg border-slate-300 focus:ring-brand-500 cursor-pointer" 
                    />
                    <label htmlFor="kvkkConsent" className="text-sm text-slate-500 leading-relaxed cursor-pointer">
                      <Link to="/kvkk" target="_blank" className="text-brand-600 font-black hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin başvuru ve işe alım süreçlerinde işlenmesini, gerektiğinde APRICODI veri sorumluları tarafından iletişime geçilmesini onaylıyorum.
                    </label>
                  </div>

                 <Button type="submit" size="lg" fullWidth disabled={formStatus === 'submitting'} className="py-6 text-xl rounded-3xl shadow-xl shadow-brand-500/20">
                   {formStatus === 'submitting' ? (
                     <span className="flex items-center gap-3"><Zap className="animate-pulse" size={24} /> Başvurunuz İletiliyor...</span>
                   ) : (
                     <span className="flex items-center gap-3">Başvuruyu Gönder <Sparkles size={24} /></span>
                   )}
                 </Button>
               </form>
             )}
           </Card>
        </div>
      </section>

      {/* Stats / Counter */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { label: "Genç Mühendis", value: "10+", icon: Users },
                 { label: "Aktif Proje", value: "25+", icon: Terminal },
                 { label: "Ödül & Başarı", value: "5+", icon: Trophy },
                 { label: "Global Partner", value: "3+", icon: Globe }
               ].map((stat, i) => (
                 <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-4">
                       <stat.icon size={24} />
                    </div>
                    <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};
