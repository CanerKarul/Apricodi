
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, TextArea, Button } from '../components/ui';
import { CheckCircle2, AlertCircle, Zap, ShieldCheck, Clock, BarChart3, Target, Cpu, User, Building2 } from 'lucide-react';
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
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Teklif Al | Projenizi Başlatın" 
        description="Bireysel veya Kurumsal projeleriniz için APRICODI'den hızlıca fiyat teklifi alın. Yazılım, tasarım ve dijital dönüşüm çözümleri."
      />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Projenizi Başlatalım</h1>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
             Fikrinizi gerçeğe dönüştürmek için ihtiyacımız olan detayları bizimle paylaşın.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <Card className="p-8 md:p-10 shadow-2xl bg-white border-none">
              {submitted ? (
                <div className="text-center py-16">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                     <CheckCircle2 size={40} />
                   </div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-4">Talebiniz Alındı!</h2>
                   <p className="text-slate-600 mb-8 max-w-md mx-auto">
                     Detayları inceleyip en kısa sürede (genellikle 24 saat içinde) sizinle iletişime geçeceğiz.
                   </p>
                   <Button onClick={() => setSubmitted(false)} variant="outline">Yeni Bir Teklif Talebi</Button>
                </div>
              ) : (
                <>
                  {/* Customer Type Toggle */}
                  <div className="mb-10">
                    <label className="block text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">Başvuru Türü</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setCustomerType('Bireysel')}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          formData.customerType === 'Bireysel' 
                          ? 'border-brand-500 bg-brand-50 text-brand-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                        }`}
                      >
                        <User size={20} />
                        <span className="font-bold">Bireysel</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCustomerType('Kurumsal')}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          formData.customerType === 'Kurumsal' 
                          ? 'border-brand-500 bg-brand-50 text-brand-700' 
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                        }`}
                      >
                        <Building2 size={20} />
                        <span className="font-bold">Kurumsal</span>
                      </button>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8 text-sm flex items-center gap-2 border border-red-100">
                      <AlertCircle size={18} /> {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="name" label="Ad Soyad" placeholder="İsim Soyisim" value={formData.name} onChange={handleChange} required />
                      {formData.customerType === 'Kurumsal' && (
                        <Input name="company" label="Şirket Adı" placeholder="Firma Ünvanı" value={formData.company} onChange={handleChange} required />
                      )}
                      {formData.customerType === 'Bireysel' && (
                        <Input name="company" label="Şirket / Proje Adı (Opsiyonel)" placeholder="Varsa proje ismi" value={formData.company} onChange={handleChange} />
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="email" label="E-posta" type="email" placeholder="email@adresiniz.com" value={formData.email} onChange={handleChange} required />
                      <Input name="phone" label="Telefon" placeholder="0555 555 55 55" value={formData.phone} onChange={handleChange} required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Hizmet Türü</label>
                        <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 outline-none bg-slate-50 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all">
                          <option>Yapay Zeka ve Otomasyon</option>
                          <option>Web Geliştirme</option>
                          <option>Mobil Uygulama</option>
                          <option>E-ticaret Sistemi</option>
                          <option>MVP / Startup Çözümü</option>
                          <option>UI/UX Tasarım Revizyonu</option>
                          <option>Diğer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Bütçe Aralığı</label>
                        <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 outline-none bg-slate-50 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all">
                          <option>₺15.000 - ₺30.000</option>
                          <option>₺30.000 - ₺50.000</option>
                          <option>₺30.000 - ₺50.000</option>
                          <option>₺50.000 - ₺100.000</option>
                          <option>₺100.000 - ₺250.000</option>
                          <option>₺250.000+</option>
                        </select>
                      </div>
                    </div>

                    <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                    <TextArea name="message" label="Proje Özeti" placeholder="Projenizden, hedeflerinizden ve varsa referans aldığınız örneklerden kısaca bahsedin." value={formData.message} onChange={handleChange} required />
                    
                    <div className="flex items-start gap-3 pt-2">
                      <input 
                        type="checkbox" 
                        id="kvkkConsent" 
                        checked={formData.kvkkConsent} 
                        onChange={handleCheckboxChange} 
                        className="mt-1 w-4 h-4 rounded text-brand-600 focus:ring-brand-500" 
                        required 
                      />
                      <label htmlFor="kvkkConsent" className="text-sm text-slate-500 leading-snug">
                        <Link to="/kvkk" target="_blank" className="text-brand-600 font-bold hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin işlenmesini onaylıyorum.
                      </label>
                    </div>

                    <Button fullWidth size="lg" disabled={loading} className="py-5 text-lg shadow-xl shadow-brand-500/20">
                      {loading ? 'Gönderiliyor...' : 'Teklif İste'}
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <Card className="p-8 bg-white border-none shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -z-10"></div>
               
               <h3 className="font-extrabold text-xl text-slate-900 mb-6 flex items-center gap-2">
                 <Zap size={24} className="text-brand-500" />
                 Süreç Nasıl İşler?
               </h3>
               
               <div className="space-y-6">
                 {[
                   { icon: Target, title: "Analiz & Planlama", desc: "İhtiyaçlarınızı dinliyor ve en uygun teknik mimariyi kurguluyoruz." },
                   { icon: Cpu, title: "Teknik Mimari", desc: "Ölçeklenebilir, modern ve güvenli bir altyapı tasarlıyoruz." },
                   { icon: BarChart3, title: "Performans Odaklı", desc: "SEO ve hız kriterlerine %100 uyumlu geliştirme yapıyoruz." },
                   { icon: ShieldCheck, title: "Güvenlik & Destek", desc: "Proje yayına alındıktan sonra da SLA ile yanınızdayız." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-4 items-start">
                     <div className="mt-1 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 shadow-sm border border-slate-100">
                       <item.icon size={18} />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                       <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl">
                    <Clock size={18} className="text-brand-600 shrink-0" />
                    <p className="text-[11px] font-bold text-brand-800 leading-tight">
                      Ortalama teklif hazırlama süremiz 24 saattir.
                    </p>
                  </div>
               </div>
             </Card>

             <Card className="p-6 bg-slate-900 border-none shadow-xl text-white">
                <h4 className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-6">Neden Apricodi?</h4>
                <div className="space-y-4">
                  {[
                    "Kişiye Özel Yazılım Çözümleri",
                    "7/24 Proaktif Sistem İzleme",
                    "Modern UI/UX Standartları",
                    "SEO Uyumlu Temiz Kodlama"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-medium text-slate-300">{text}</span>
                    </div>
                  ))}
                </div>
             </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
