
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Input, TextArea, Button, Badge } from '../components/ui';
import { 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  ShieldCheck, 
  Clock, 
  BarChart3, 
  Target, 
  Cpu, 
  User, 
  Building2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Trophy
} from 'lucide-react';
import { submitForm } from '../lib/submitToSheets';
import { SEO } from '../components/SEO';

export const GetQuote: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    customerType: 'Bireysel' as 'Bireysel' | 'Kurumsal',
    company: '',
    email: '',
    phone: '',
    serviceType: 'Yapay Zeka ve Otomasyon',
    budget: '₺15.000 - ₺30.000',
    message: '',
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

  const setCustomerType = (type: 'Bireysel' | 'Kurumsal') => {
    setFormData(prev => ({ ...prev, customerType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (formData.companyWebsite) {
      setSubmitted(true);
      return;
    }

    if (!formData.kvkkConsent) {
      setErrorMsg("Lütfen KVKK aydınlatma metnini onaylayınız.");
      return;
    }

    setLoading(true);

    const payload = {
      name: formData.name,
      customerType: formData.customerType,
      company: formData.customerType === 'Kurumsal' ? formData.company : '-',
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      budget: formData.budget,
      message: formData.message,
      kvkkConsent: formData.kvkkConsent
    };

    const result = await submitForm("quote", payload);

    setLoading(false);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.message || "Bir hata oluştu.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Teklif Al | APRICODI" 
        description="Bireysel veya Kurumsal projeleriniz için APRICODI'den hızlıca fiyat teklifi alın. Yazılım, tasarım ve dijital dönüşüm çözümleri."
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-36 pb-32 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="brand" className="mb-6">TEKLİF TALEBİ</Badge>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
              Projenizi <br/>
              <span className="text-brand-500">Birlikte Başlatalım</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Fikrinizi gerçeğe dönüştürmek için ihtiyacımız olan detayları bizimle paylaşın. Dijital dönüşüm yolculuğunuzda ilk adımı bugün atın.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <Card className="p-8 md:p-14 shadow-2xl bg-white border-none rounded-[3rem]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-brand-50 text-brand-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Talebiniz Alındı!</h2>
                    <p className="text-slate-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
                      Harika! Proje detaylarınız uzman ekibimize ulaştı. Dosyalarınızı inceliyoruz ve genellikle 24 saat içinde size özel bir yol haritasıyla dönüş yapıyoruz.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="px-12 py-4 rounded-2xl font-bold">
                      Yeni Bir Teklif Talebi <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Customer Type Toggle */}
                    <div className="mb-12">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1 mb-4 block">BAŞVURU TÜRÜ</label>
                      <div className="grid grid-cols-2 gap-6">
                        <button
                          type="button"
                          onClick={() => setCustomerType('Bireysel')}
                          className={`flex items-center justify-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 group ${
                            formData.customerType === 'Bireysel' 
                            ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-lg shadow-brand-500/10' 
                            : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                          }`}
                        >
                          <User size={24} className={formData.customerType === 'Bireysel' ? 'text-brand-600' : 'text-slate-300'} />
                          <span className="font-black text-lg">Bireysel</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCustomerType('Kurumsal')}
                          className={`flex items-center justify-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 group ${
                            formData.customerType === 'Kurumsal' 
                            ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-lg shadow-brand-500/10' 
                            : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                          }`}
                        >
                          <Building2 size={24} className={formData.customerType === 'Kurumsal' ? 'text-brand-600' : 'text-slate-300'} />
                          <span className="font-black text-lg">Kurumsal</span>
                        </button>
                      </div>
                    </div>

                    {errorMsg && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-rose-50 text-rose-600 p-5 rounded-2xl mb-10 text-sm flex items-center gap-3 border border-rose-100 font-bold">
                        <AlertCircle size={20} /> {errorMsg}
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">AD SOYAD</label>
                          <Input name="name" placeholder="İsim Soyisim" value={formData.name} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                        </div>
                        {formData.customerType === 'Kurumsal' ? (
                          <div className="space-y-2">
                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">ŞİRKET ADI</label>
                            <Input name="company" placeholder="Firma Ünvanı" value={formData.company} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">PROJE ADI (OPSİYONEL)</label>
                            <Input name="company" placeholder="Varsa proje ismi" value={formData.company} onChange={handleChange} className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">E-POSTA ADRESİ</label>
                          <Input name="email" type="email" placeholder="email@adresiniz.com" value={formData.email} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">TELEFON</label>
                          <Input name="phone" placeholder="0555 555 55 55" value={formData.phone} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">HİZMET TÜRÜ</label>
                          <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-transparent bg-slate-50 outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-700 font-bold shadow-sm">
                            <option>Yapay Zeka ve Otomasyon</option>
                            <option>Web Geliştirme</option>
                            <option>Mobil Uygulama</option>
                            <option>E-ticaret Sistemi</option>
                            <option>MVP / Startup Çözümü</option>
                            <option>UI/UX Tasarım Revizyonu</option>
                            <option>Diğer</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">TAHMİNİ BÜTÇE ARALIĞI</label>
                          <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-transparent bg-slate-50 outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-700 font-bold shadow-sm">
                            <option>₺15.000 - ₺30.000</option>
                            <option>₺30.000 - ₺50.000</option>
                            <option>₺50.000 - ₺100.000</option>
                            <option>₺100.000 - ₺250.000</option>
                            <option>₺250.000+</option>
                          </select>
                        </div>
                      </div>

                      <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                      <div className="space-y-2">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">PROJE ÖZETİ & HEDEFLER</label>
                        <TextArea name="message" placeholder="Projenizden, hedeflerinizden ve varsa referans aldığınız örneklerden kısaca bahsedin." value={formData.message} onChange={handleChange} required className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-[2rem] min-h-[160px] py-5" />
                      </div>
                      
                      <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-start gap-5">
                        <input 
                          type="checkbox" 
                          id="kvkkConsent" 
                          checked={formData.kvkkConsent} 
                          onChange={handleCheckboxChange} 
                          className="mt-1.5 w-6 h-6 rounded-lg text-brand-600 focus:ring-brand-500 cursor-pointer" 
                          required 
                        />
                        <label htmlFor="kvkkConsent" className="text-sm text-slate-500 leading-relaxed cursor-pointer font-medium">
                          <Link to="/kvkk" target="_blank" className="text-brand-600 font-black hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin teklif hazırlama süreçlerinde işlenmesini, APRICODI tarafından benimle iletişime geçilmesini onaylıyorum.
                        </label>
                      </div>

                      <Button fullWidth size="lg" disabled={loading} className="py-6 text-xl rounded-[2rem] shadow-2xl shadow-brand-500/30 font-black group overflow-hidden relative">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {loading ? (
                            <>Talebiniz Gönderiliyor...</>
                          ) : (
                            <>Hemen Teklif İste <Sparkles size={24} className="group-hover:rotate-12 transition-transform" /></>
                          )}
                        </span>
                        {loading && (
                          <motion.div 
                            className="absolute inset-0 bg-brand-700"
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
               <Card className="p-8 md:p-10 bg-slate-900 border-none shadow-2xl rounded-[3rem] relative overflow-hidden group text-white">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full -z-10"></div>
                 
                 <h3 className="font-black text-2xl mb-8 flex items-center gap-3">
                   <Zap size={28} className="text-brand-500" />
                   Süreç Nasıl İşler?
                 </h3>
                 
                 <div className="space-y-10 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-800"></div>
                   
                   {[
                     { icon: Target, title: "Analiz & Planlama", desc: "İhtiyaçlarınızı dinliyor ve projenizin teknik mimarisini kurguluyoruz.", color: "bg-blue-500" },
                     { icon: Cpu, title: "Teknik Mimari", desc: "Ölçeklenebilir, modern ve güvenli bir altyapı tasarımı yapıyoruz.", color: "bg-brand-500" },
                     { icon: BarChart3, title: "Performans Odaklı", desc: "SEO ve hız kriterlerine %100 uyumlu geliştirme yapıyoruz.", color: "bg-purple-500" },
                     { icon: ShieldCheck, title: "Güvenlik & Destek", desc: "Proje yayına alındıktan sonra da SLA ile yanınızdayız.", color: "bg-emerald-500" }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-6 items-start relative z-10">
                       <div className={`mt-0.5 w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                         <item.icon size={22} />
                       </div>
                       <div>
                         <h4 className="font-black text-white text-lg mb-2">{item.title}</h4>
                         <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>

                 <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <Clock size={24} className="text-brand-500 shrink-0" />
                      <p className="text-xs font-bold text-slate-300 leading-relaxed uppercase tracking-wider">
                        Ortalama teklif hazırlama süremiz <span className="text-white">24 saattir</span>.
                      </p>
                    </div>
                 </div>
               </Card>
             </motion.div>

             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
               <Card className="p-8 bg-slate-50 border border-slate-100 shadow-xl rounded-[2.5rem]">
                  <h4 className="text-brand-600 text-xs font-black uppercase tracking-[0.2em] mb-8">NEDEN APRICODI?</h4>
                  <div className="space-y-6">
                    {[
                      { text: "Kişiye Özel Yazılım Çözümleri", icon: Trophy },
                      { text: "7/24 Proaktif Sistem İzleme", icon: ShieldCheck },
                      { text: "Modern UI/UX Standartları", icon: Sparkles },
                      { text: "SEO Uyumlu Temiz Kodlama", icon: BarChart3 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-500 shrink-0 shadow-sm border border-slate-200 group-hover:scale-110 transition-transform">
                          <item.icon size={18} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link to="/projeler">
                      <Button variant="outline" fullWidth className="py-4 border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-500 font-black">
                        Referanslarımızı İncele
                      </Button>
                    </Link>
                  </div>
               </Card>
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
