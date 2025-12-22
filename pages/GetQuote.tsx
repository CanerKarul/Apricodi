
import React, { useState } from 'react';
import { Card, Input, TextArea, Button, SectionHeader } from '../components/ui';
// Added missing Cpu icon import to fix line 185 error
import { CheckCircle2, Star, AlertCircle, Zap, ShieldCheck, Clock, BarChart3, MessageSquare, Target, Cpu } from 'lucide-react';
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
      serviceType: formData.serviceType,
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

          {/* Benefits Side - Enhanced & Redesigned */}
          <div className="lg:col-span-1 space-y-6">
             <Card className="p-8 bg-white border-slate-200 shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
               
               <h3 className="font-extrabold text-xl text-slate-900 mb-6 flex items-center gap-2">
                 <Zap size={24} className="text-brand-500" />
                 Neler Kazanacaksınız?
               </h3>
               
               <div className="space-y-6">
                 {[
                   { 
                     icon: Target, 
                     title: "İhtiyaç Analizi", 
                     desc: "İş modelinizi inceleyerek size en uygun teknoloji setini belirliyoruz." 
                   },
                   { 
                     icon: Cpu, 
                     title: "Teknik Mimari", 
                     desc: "Gelecekte ölçeklenebilir, modern ve sürdürülebilir bir altyapı tasarımı." 
                   },
                   { 
                     icon: BarChart3, 
                     title: "Zaman & Maliyet", 
                     desc: "Net teslim tarihleri ve bütçe planlamasıyla sürprizlere yer vermiyoruz." 
                   },
                   { 
                     icon: ShieldCheck, 
                     title: "Güvenlik Standartları", 
                     desc: "Veri güvenliği ve KVKK uyumluluğu her projemizin temelindedir." 
                   }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-4 items-start group/item">
                     <div className="mt-1 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover/item:bg-brand-500 group-hover/item:text-white transition-all shadow-sm">
                       <item.icon size={20} />
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
                    <p className="text-[11px] font-semibold text-brand-800 leading-tight">
                      Ortalama teklif hazırlama süremiz 24 saattir.
                    </p>
                  </div>
               </div>
             </Card>

             {/* Expertise Badges Card - Updated for readability */}
             <Card className="p-6 bg-white border-slate-200 shadow-lg">
                <h4 className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-6">Bizimle Çalışmanın Avantajları</h4>
                <div className="space-y-5">
                  {[
                    "Ömür Boyu Kod Desteği",
                    "7/24 Teknik İzleme",
                    "SEO ve Performans Garantisi",
                    "Modern UI/UX Yaklaşımı"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm font-bold text-slate-700 leading-none">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random&color=fff`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight">
                    <strong className="text-slate-900">50+</strong> mutlu işletmeye teknoloji partnerliği yaptık.
                  </p>
                </div>
             </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
