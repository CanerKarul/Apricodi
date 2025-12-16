import React, { useState } from 'react';
import { Card, Input, TextArea, Button, SectionHeader } from '../components/ui';
import { CheckCircle2, Star, AlertCircle } from 'lucide-react';
import { testimonials } from '../data';
import { submitForm } from '../lib/submitToSheets';

export const GetQuote: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'Web Geliştirme',
    budget: '₺50.000 - ₺100.000',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Spam Check
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
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType, // UPDATED: Key changed from 'service' to 'serviceType' to become 'service_type'
      budget: formData.budget,
      message: formData.message,
      kvkkConsent: formData.kvkkConsent
    };

    // Generic form submission
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
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-3xl md:text-5xl font-bold mb-4">Projenizi Başlatalım</h1>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">Hayalinizdeki dijital ürünü gerçeğe dönüştürmek için ilk adımı atın.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Side */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-16">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                     <CheckCircle2 size={40} />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-4">Teklif Talebiniz Alındı!</h2>
                   <p className="text-slate-600 mb-6">
                     Proje detaylarınızı inceleyip en kısa sürede (genellikle 24 saat içinde) size dönüş yapacağız.
                   </p>
                   <Button onClick={() => setSubmitted(false)} variant="outline">Yeni Teklif İste</Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Proje Detayları</h2>
                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 p-3 rounded mb-6 text-sm flex items-center gap-2">
                      <AlertCircle size={16} /> {errorMsg}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="name" label="Ad Soyad" placeholder="İsim Soyisim" value={formData.name} onChange={handleChange} required />
                      <Input name="company" label="Şirket" placeholder="Şirket Adı" value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="email" label="E-posta" type="email" placeholder="email@adresiniz.com" value={formData.email} onChange={handleChange} required />
                      <Input name="phone" label="Telefon" placeholder="0555..." value={formData.phone} onChange={handleChange} required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Hizmet Türü</label>
                        <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none bg-white">
                          <option>Web Geliştirme</option>
                          <option>Mobil Uygulama</option>
                          <option>E-ticaret</option>
                          <option>MVP</option>
                          <option>Diğer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Bütçe Aralığı</label>
                        <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none bg-white">
                          <option>₺50.000 - ₺100.000</option>
                          <option>₺100.000 - ₺250.000</option>
                          <option>₺250.000+</option>
                          <option>Belirsiz</option>
                        </select>
                      </div>
                    </div>

                    {/* Honeypot */}
                    <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                    <TextArea name="message" label="Proje Özeti" placeholder="Projenizden, hedeflerinizden ve varsa örneklerden bahsedin." value={formData.message} onChange={handleChange} required />
                    
                    <div className="flex items-center gap-2 mb-4">
                      <input 
                        type="checkbox" 
                        id="kvkkConsent" 
                        checked={formData.kvkkConsent} 
                        onChange={handleCheckboxChange} 
                        className="rounded text-brand-500 focus:ring-brand-500" 
                        required 
                      />
                      <label htmlFor="kvkkConsent" className="text-sm text-slate-600">
                        KVKK metnini okudum, onaylıyorum.
                      </label>
                    </div>

                    <Button fullWidth size="lg" disabled={loading}>
                      {loading ? 'Gönderiliyor...' : 'Teklif İste'}
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>

          {/* Benefits Side */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="font-bold text-lg mb-4">Neler Kazanacaksınız?</h3>
               <ul className="space-y-3">
                 {[
                   'Detaylı İhtiyaç Analizi',
                   'Teknik Mimari Önerisi',
                   'Zaman & Maliyet Planı',
                   'Rakip Analizi Özeti'
                 ].map(i => (
                   <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                     <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" /> {i}
                   </li>
                 ))}
               </ul>
             </div>

             <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} size={16} className="text-orange-400 fill-orange-400" />)}
                </div>
                <p className="text-sm text-slate-700 italic mb-3">"{testimonials[0].quote}"</p>
                <p className="text-xs font-bold text-slate-900">- {testimonials[0].name}</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};