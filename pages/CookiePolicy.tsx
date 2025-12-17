import React from 'react';
import { SectionHeader, Card } from '../components/ui';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Shield, Info, BarChart3, Globe } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-xl text-brand-600 mb-6">
            <Cookie size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Çerez Politikası
          </h1>
          <p className="text-slate-500">
            Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Document Content */}
        <Card className="p-8 md:p-12 shadow-md border-slate-200">
          <div className="prose prose-slate max-w-none text-slate-600">
            
            <p className="lead text-lg mb-8">
              APRICODI Yazılım A.Ş. ("<strong>APRICODI</strong>") olarak, web sitemizdeki deneyiminizi iyileştirmek, hizmetlerimizi güvenli bir şekilde sunmak ve ziyaretçilerimizin tercihlerini analiz etmek amacıyla çerezler (cookies) kullanmaktayız. Bu politika, çerezlerin ne olduğunu, nasıl kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              1. Çerez (Cookie) Nedir?
            </h3>
            <p>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla bilgisayarınıza, tabletinize veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, sitenin sizi hatırlamasını, oturumunuzun açık kalmasını ve site içeriklerinin ilgi alanlarınıza göre sunulmasını sağlar.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              2. Kullanılan Çerez Türleri ve Amaçları
            </h3>
            <p>Sitemizde aşağıdaki çerez kategorileri kullanılmaktadır:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <Shield size={16} className="text-brand-500" /> Zorunlu (Temel) Çerezler
                </h4>
                <p className="text-sm">
                  Web sitesinin düzgün çalışması için gereklidir. Oturum açma, form doldurma ve güvenlik doğrulama işlemleri bu çerezler sayesinde yapılır. Bu çerezler kapatılamaz.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <Settings size={16} className="text-brand-500" /> İşlevsel Çerezler
                </h4>
                <p className="text-sm">
                  Kullanıcı tercihlerini (dil seçimi, bölge ayarı vb.) hatırlayarak size daha kişiselleştirilmiş bir deneyim sunmamızı sağlar.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <BarChart3 size={16} className="text-brand-500" /> Performans ve Analitik
                </h4>
                <p className="text-sm">
                  Sitenin nasıl kullanıldığını anlamamıza yardımcı olur. Ziyaretçi sayıları, en çok görüntülenen sayfalar gibi veriler <strong>anonim</strong> olarak toplanır.
                </p>
              </div>
               <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <Globe size={16} className="text-brand-500" /> Pazarlama (Şu An Kullanılmıyor)
                </h4>
                <p className="text-sm">
                  Sitemizde şu an için üçüncü taraf reklam ağlarına ait hedefleme veya profilleme çerezleri kullanılmamaktadır.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              3. Çerezlerin Saklama Süresi
            </h3>
            <p>
              Çerezler, türlerine göre "Oturum Çerezleri" ve "Kalıcı Çerezler" olarak ikiye ayrılır:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
               <li><strong>Oturum Çerezleri:</strong> Tarayıcınızı kapattığınızda silinirler.</li>
               <li><strong>Kalıcı Çerezler:</strong> Belirli bir süre boyunca (örn. 30 gün, 1 yıl) veya siz silene kadar cihazınızda kalırlar. Sitemizde performans çerezleri genellikle makul analiz süreleri boyunca saklanır.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              4. Çerez Tercihlerinin Yönetimi
            </h3>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz. Ancak, zorunlu çerezlerin engellenmesi durumunda sitemizin bazı fonksiyonları (örn. form gönderme) düzgün çalışmayabilir.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">Popüler tarayıcılarda çerez yönetimi:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-sm">
              <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
              <li><strong>Mozilla Firefox:</strong> Seçenekler &gt; Gizlilik ve Güvenlik &gt; Geçmiş</li>
              <li><strong>Safari:</strong> Tercihler &gt; Gizlilik</li>
            </ul>
            <p className="mt-4">
              Ayrıca sitemizi ilk ziyaretinizde karşınıza çıkan çerez uyarı banner'ı üzerinden tercihlerinizi yönetebilirsiniz.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              5. Üçüncü Taraf Hizmetler
            </h3>
            <p>
              Web sitemizde site trafiğini analiz etmek amacıyla Google Analytics gibi güvenilir üçüncü taraf hizmet sağlayıcıları kullanılabilir. Bu sağlayıcıların veri toplama süreçleri kendi gizlilik politikalarına tabidir. Şu an için sitemizde harici reklam ağı çerezleri bulunmamaktadır.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              6. İletişim
            </h3>
            <p>
              Çerez politikamızla ilgili sorularınız veya kişisel verilerinizle ilgili talepleriniz için <Link to="/kvkk" className="text-brand-600 font-semibold hover:underline">KVKK Aydınlatma Metni</Link>'ni inceleyebilir veya aşağıdaki adresten bize ulaşabilirsiniz:
            </p>
            <p className="mt-4 font-semibold text-slate-900">
              E-posta: <a href="mailto:info@apricodi.com" className="text-brand-600 hover:underline">info@apricodi.com</a>
            </p>

          </div>
        </Card>

        {/* Note */}
        <div className="mt-8 text-center px-4 flex items-center justify-center gap-2 text-slate-400">
          <BarChart3 size={16} />
          <p className="text-xs">
            APRICODI bu politikayı dilediği zaman güncelleme hakkını saklı tutar. Güncellemeler bu sayfada yayınlanır.
          </p>
        </div>
      </div>
    </div>
  );
};