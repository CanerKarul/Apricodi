
import React, { useState } from 'react';
import { SectionHeader, Card, Input, TextArea, Button } from '../components/ui';
import { Mail, Phone, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitForm } from '../lib/submitToSheets';

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
      // Silently fail for bots
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
      subject: formData.subject, // UPDATED: Key changed from 'service' to 'subject' to match DB column
      message: formData.message,
      kvkkConsent: formData.kvkkConsent
    };

    // Generic form submission
    const result = await submitForm("contact", payload);

    setLoading(false);

    if (result.ok) {
      setSubmitted(true);
      // Reset form (optional, since we show success screen)
    } else {
      setErrorMsg(result.message || "Gönderim sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h4 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2">İletişim</h4>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Bize Ulaşın</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Yeni bir proje başlatmak veya hizmetlerimiz hakkında detaylı bilgi almak için formumuzu doldurabilir veya doğrudan iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <MapPin className="text-brand-600 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Konum</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Yeşilyurt / Malatya
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <Mail className="text-brand-600 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">E-posta</h3>
                  <p className="text-slate-600 text-sm">info@apricodi.com</p>
                  <p className="text-slate-400 text-xs mt-1">Ortalama yanıt süresi: 24 saat</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <Clock className="text-brand-600 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Çalışma Saatleri</h3>
                  <p className="text-slate-600 text-sm">Hafta İçi: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Mesajınız İletildi</h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Talebini aldık. Ekibimiz en kısa sürede inceleyip seninle iletişime geçecek.
                  </p>
                  <Button onClick={() => {setSubmitted(false); setFormData(prev => ({...prev, kvkkConsent: false, message: ''}));}} variant="outline">Yeni Mesaj Gönder</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">İletişim Formu</h3>
                  
                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-center gap-2">
                      <AlertCircle size={18} /> {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input name="name" label="Adınız Soyadınız" placeholder="Ad Soyad" value={formData.name} onChange={handleChange} required />
                    <Input name="email" label="E-posta Adresiniz" type="email" placeholder="ornek@sirket.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input name="phone" label="Telefon Numaranız" placeholder="0555 555 55 55" value={formData.phone} onChange={handleChange} required />
                    <Input name="company" label="Şirket Adı (Opsiyonel)" placeholder="Firma Adı" value={formData.company} onChange={handleChange} />
                  </div>

                  {/* Honeypot Field - Hidden */}
                  <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Konu</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3.5 rounded-md border bg-slate-50 border-slate-200 outline-none focus:border-brand-500 focus:ring-brand-500 transition-colors text-slate-700">
                      <option>Proje Teklifi Almak İstiyorum</option>
                      <option>Genel Bilgi</option>
                      <option>İş Başvurusu</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <TextArea name="message" label="Mesajınız" placeholder="Projenizden veya sorunuzdan kısaca bahsedin..." value={formData.message} onChange={handleChange} required />

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
                      <Link to="/kvkk" target="_blank" className="text-brand-600 font-bold hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin işlenmesini onaylıyorum.
                    </label>
                  </div>

                  <Button type="submit" size="lg" disabled={loading} fullWidth className="mt-4">
                    {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
