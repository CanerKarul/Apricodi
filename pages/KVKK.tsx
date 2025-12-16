import React from 'react';
import { SectionHeader, Card } from '../components/ui';
import { Link } from 'react-router-dom';
import { FileText, Shield, Lock, Eye, Server } from 'lucide-react';

export const KVKK: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-xl text-brand-600 mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-slate-500">
            Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Document Content */}
        <Card className="p-8 md:p-12 shadow-md border-slate-200">
          <div className="prose prose-slate max-w-none text-slate-600">
            
            <p className="lead text-lg mb-8">
              APRICODI Yazılım A.Ş. ("<strong>Şirket</strong>") olarak, kişisel verilerinizin güvenliğine ve gizliliğine azami önem vermekteyiz. Bu kapsamda, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("<strong>KVKK</strong>") ve ilgili mevzuat çerçevesinde, web sitemizi ziyaretleriniz ve hizmetlerimizden yararlanmanız sırasında elde edilen kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek isteriz.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              1. Veri Sorumlusu
            </h3>
            <p>
              Kişisel verileriniz, veri sorumlusu sıfatıyla <strong>Yeşilyurt / Malatya</strong> adresinde mukim <strong>APRICODI Yazılım A.Ş.</strong> tarafından, aşağıda açıklanan kapsamda işlenmektedir.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              2. İşlenen Kişisel Verileriniz
            </h3>
            <p>Web sitemiz üzerinden sunduğumuz hizmetlere ve etkileşim türünüze bağlı olarak aşağıdaki kategorilerdeki verileriniz işlenebilmektedir:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad (İletişim ve teklif formları aracılığıyla).</li>
              <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres bilgisi.</li>
              <li><strong>Müşteri İşlem Bilgileri:</strong> Talep konusu, şirket/kurum adı, teklif içeriği, proje detayları.</li>
              <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, erişim logları, cihaz bilgileri, çerez kayıtları.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepler
            </h3>
            <p>Kişisel verileriniz, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartlarına uygun olarak aşağıdaki amaçlarla işlenmektedir:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <FileText size={16} className="text-brand-500" /> Sözleşmenin Kurulması ve İfası
                </h4>
                <p className="text-sm">Teklif süreçlerinin yönetilmesi, müşteri kaydının oluşturulması ve hizmetin teslimi.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <Lock size={16} className="text-brand-500" /> Hukuki Yükümlülükler
                </h4>
                <p className="text-sm">Yetkili kurum ve kuruluşlara bilgi verilmesi, işlem güvenliğinin sağlanması (5651 sayılı Kanun).</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <Eye size={16} className="text-brand-500" /> Meşru Menfaat
                </h4>
                <p className="text-sm">Hizmet kalitesinin artırılması, müşteri memnuniyeti analizleri ve site güvenliğinin sağlanması.</p>
              </div>
               <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <Server size={16} className="text-brand-500" /> Açık Rıza (Gerektiğinde)
                </h4>
                <p className="text-sm">Ticari elektronik ileti gönderimi ve bazı pazarlama faaliyetleri (Onayınız olması halinde).</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              4. Kişisel Verilerin Aktarılması
            </h3>
            <p>
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda;
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
               <li>Kanunen yetkili kamu kurum ve kuruluşlarına (Hukuki yükümlülükler kapsamında),</li>
               <li>Bilişim altyapı hizmeti aldığımız tedarikçilere (Sunucu barındırma, e-posta servis sağlayıcıları - Gizlilik sözleşmeleri çerçevesinde),</li>
               <li>Hukuki uyuşmazlıkların giderilmesi amacıyla hukuk müşavirlerine</li>
            </ul>
            <p className="mt-2">aktarılabilecektir.</p>

             <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              5. Kişisel Veri Toplama Yöntemleri
            </h3>
            <p>
              Kişisel verileriniz, web sitemizdeki iletişim formları, e-posta yazışmaları, çerezler (cookies) ve site kullanım analiz araçları vasıtasıyla elektronik ortamda otomatik veya kısmen otomatik yollarla toplanmaktadır.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              6. Veri Sahibi Olarak Haklarınız (KVKK Madde 11)
            </h3>
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme.</li>
            </ul>
            <p className="mt-4 bg-brand-50 p-4 rounded-lg text-sm border-l-4 border-brand-500">
              Bu haklarınızı kullanmak için taleplerinizi yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da Şirketimize daha önce bildirdiğiniz ve sistemimizde kayıtlı bulunan elektronik posta adresini kullanmak suretiyle <strong><a href="mailto:info@apricodi.com" className="text-brand-600 hover:underline">info@apricodi.com</a></strong> adresine iletebilirsiniz.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-brand-500 rounded-full"></div>
              7. Veri Güvenliği ve Çerezler
            </h3>
            <p>
              Şirketimiz, kişisel verilerinizi korumak için gerekli idari ve teknik tedbirleri (SSL şifreleme, güvenlik duvarları, erişim yetkilendirmeleri) almaktadır. Web sitemizde kullanılan çerezler hakkında detaylı bilgi için lütfen <Link to="/cerez-politikasi" className="text-brand-600 font-semibold hover:underline">Çerez Politikası</Link> sayfamızı inceleyiniz.
            </p>

          </div>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 text-center px-4">
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            * Bu metin bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Mevzuat değişikliklerine göre güncellenebilir. Yasal haklarınız için lütfen uzman bir hukukçuya danışınız.
          </p>
        </div>
      </div>
    </div>
  );
};