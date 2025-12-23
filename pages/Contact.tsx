
import React, { useState } from 'react';
import { SectionHeader, Card, Input, TextArea, Button, Badge } from '../components/ui';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Send, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  Globe,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { submitForm } from '../lib/submitToSheets';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Proje Teklifi Almak İstiyorum',
    message: '',
    kvkkConsent: false,
    companyWebsite: '' // Honeypot field
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

    // Spam check (Honeypot)
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
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
      kvkkConsent: formData.kvkkConsent
    };

    const result = await submitForm("contact", payload);

    setLoading(false);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.message || "Gönderim sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEO 
        title="İletişim | APRICODI" 
        description="APRICODI ile iletişime geçin. Yeni bir proje başlatmak veya hizmetlerimiz hakkında bilgi almak için bizimle hemen bağlantı kurun."
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
            <Badge variant="brand" className="mb-6">BİZE ULAŞIN</Badge>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
              Fikrinizi <span className="text-brand-500">Geleceğe</span> <br/>
              Birlikte Taşıyalım
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Yeni bir proje başlatmak, teknik destek almak veya sadece tanışmak için formumuzu doldurabilir ya da doğrudan ofisimize uğrayabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black text-slate-900 mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  {[
                    { 
                      icon: MapPin, 
                      title: "Lokasyon", 
                      content: "Yeşilyurt / Malatya", 
                      desc: "Teknopark Yerleşkesi",
                      color: "text-blue-500",
                      bg: "bg-blue-50"
                    },
                    { 
                      icon: Mail, 
                      title: "E-posta", 
                      content: "info@apricodi.com", 
                      desc: "Ortalama yanıt süresi: 24 saat",
                      color: "text-brand-500",
                      bg: "bg-brand-50"
                    },
                    { 
                      icon: Clock, 
                      title: "Çalışma Saatleri", 
                      content: "Hafta İçi: 09:00 - 18:00", 
                      desc: "Cumartesi - Pazar: Kapalı",
                      color: "text-purple-500",
                      bg: "bg-purple-50"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                          <item.icon size={28} />
                        </div>
                        <div>
                          <h3 className="font-black text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-slate-600 font-bold">{item.content}</p>
                          <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Connect */}
                <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                    <Sparkles className="text-brand-500" /> Bizi Takip Edin
                  </h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, url: "https://linkedin.com/company/apricodi" },
                      { icon: Instagram, url: "https://instagram.com/apricodi" },
                      { icon: Globe, url: "https://apricodi.com" }
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 md:p-14 shadow-2xl bg-white rounded-[3rem] border-none">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-brand-50 text-brand-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-4">Mesajınız Alındı!</h3>
                      <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                        Harika bir proje başlangıcı olabilir. Talebinizi inceleyip en kısa sürede (genellikle 24 saat içinde) sizinle iletişime geçeceğiz.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="px-10 py-4 rounded-xl font-bold">Yeni Mesaj Gönder</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="mb-6">
                        <Badge variant="brand">İLETİŞİM FORMU</Badge>
                        <h3 className="text-3xl font-black text-slate-900 mt-4">Bize Yazın</h3>
                      </div>
                      
                      {errorMsg && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-rose-50 text-rose-600 p-4 rounded-2xl text-sm flex items-center gap-3 border border-rose-100 font-bold">
                          <AlertCircle size={20} /> {errorMsg}
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">AD SOYAD</label>
                          <Input 
                            name="name" 
                            placeholder="Adınız Soyadınız" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">E-POSTA</label>
                          <Input 
                            name="email" 
                            type="email" 
                            placeholder="ornek@email.com" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">TELEFON</label>
                          <Input 
                            name="phone" 
                            placeholder="0555 555 55 55" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                            className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">ŞİRKET ADI (OPSİYONEL)</label>
                          <Input 
                            name="company" 
                            placeholder="Firma Ünvanı" 
                            value={formData.company} 
                            onChange={handleChange} 
                            className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-2xl py-4" 
                          />
                        </div>
                      </div>

                      {/* Honeypot Field - Hidden */}
                      <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
                      
                      <div className="space-y-2">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">KONU</label>
                        <select 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          className="w-full px-5 py-4 rounded-2xl border border-transparent bg-slate-50 outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-700 font-bold"
                        >
                          <option>Proje Teklifi Almak İstiyorum</option>
                          <option>Genel Bilgi</option>
                          <option>İş Başvurusu</option>
                          <option>Diğer</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">MESAJINIZ</label>
                        <TextArea 
                          name="message" 
                          placeholder="Projenizden veya sorunuzdan kısaca bahsedin..." 
                          value={formData.message} 
                          onChange={handleChange} 
                          required 
                          className="!bg-slate-50 border-transparent focus:!bg-white focus:border-brand-500 rounded-3xl min-h-[160px] py-4" 
                        />
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
                          <Link to="/kvkk" target="_blank" className="text-brand-600 font-black hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin işlenmesini onaylıyorum.
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={loading} 
                        fullWidth 
                        className="py-6 text-xl rounded-3xl shadow-xl shadow-brand-500/20 group overflow-hidden relative"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {loading ? (
                            <>Sistem İletiyor...</>
                          ) : (
                            <>Mesajı Gönder <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
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
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Teaser / Visual Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
           <Card className="p-10 md:p-16 bg-slate-900 border-none shadow-2xl rounded-[3rem] relative overflow-hidden text-center text-white">
             <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             <div className="relative z-10">
               <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                 <MapPin size={32} />
               </div>
               <h2 className="text-3xl md:text-5xl font-black mb-6">Ofisimize Bekleriz</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                 Malatya Teknopark'taki modern ofisimizde bir kahve eşliğinde fikirlerinizi konuşabiliriz. Dijital dönüşüm yolculuğunuza yüz yüze planlayalım.
               </p>
               <Link to="/iletisim" className="inline-flex items-center gap-2 text-brand-500 font-black hover:text-brand-400 transition-colors">
                 Haritada Görüntüle <ArrowRight size={20} />
               </Link>
             </div>
           </Card>
        </div>
      </section>
    </div>
  );
};
