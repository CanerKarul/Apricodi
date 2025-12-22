
import React from 'react';
import { SectionHeader, Card, Button } from '../components/ui';
import { Link } from 'react-router-dom';
import { FileText, Shield, Lock, Eye, Server, Download, ArrowRight, Scale, Briefcase, Users } from 'lucide-react';

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
            Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metni
          </h1>
          <p className="text-slate-500 font-medium">
            APRICODI YAZILIM ANONİM ŞİRKETİ
          </p>
        </div>

        {/* Document Content */}
        <Card className="p-8 md:p-12 shadow-md border-slate-200 bg-white">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            
            <p className="mb-6">
              <strong>APRICODI Yazılım A.Ş.</strong> (Bundan böyle “Şirket” olarak anılacaktır.) olarak sunduğumuz yazılım, teknoloji ve dijital dönüşüm faaliyetlerimizde kişisel verilerinizin korunmasını ve mahremiyet hakkını ön planda tutuyoruz. Bu bilinçle sunduğumuz hizmetlerden faydalanan müşterilerimiz, çalışanlarımız, ziyaretçilerimiz ve Şirketimiz ile ilişkili şahısların tarafımıza iletilen kişisel verilerinin Türkiye Cumhuriyeti Anayasası ve insan haklarına ilişkin ülkemizin tarafı olduğu uluslararası sözleşmeler ile <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu</strong> (“KVKK”) başta olmak üzere ilgili mevzuata uygun olarak işlenerek, muhafaza edilmesi hususunda gerekli prosedürleri uyguluyoruz.
            </p>

            <div className="bg-brand-50 p-6 rounded-2xl border-l-4 border-brand-500 mb-8">
              <p className="text-sm text-brand-900 font-medium italic">
                KVKK uyarınca ve Veri Sorumlusu sıfatıyla, kişisel verileriniz bu sayfada açıklanan ve mevzuat tarafından emredilen sınırlar çerçevesinde; kaydedilecek, depolanacak, mevzuatın izin verdiği durumlarda üçüncü kişilere açıklanabilecek, devredilebilecek ve KVKK’da sayılan şekillerde faaliyet ve hizmet amaçlarımız ile bağlantılı ve ölçülü olarak işlenebilecektir.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2 border-b pb-2">
              <Scale size={20} className="text-brand-500" />
              1. Şirket Tarafından Toplanan Veriler Nelerdir?
            </h3>
            <p>Tarafınıza sunulan yazılım hizmetlerine veya Şirket ile hukuki ilişkinize bağlı olarak toplanan verileriniz şunlardır:</p>
            
            <div className="space-y-6 mt-6">
              <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Briefcase size={16} className="text-brand-500"/> Hizmet Süreci Verileri</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>Kimlik:</strong> Ad, soyad, T.C. Kimlik No (gerektiğinde).</li>
                  <li><strong>İletişim:</strong> Telefon, e-posta, ikametgah/iş adresi.</li>
                  <li><strong>Finansal:</strong> Banka hesap numarası, fatura bilgileri.</li>
                  <li><strong>Hukuki:</strong> Adli makamlardan gelen resmi veriler, sözleşme içerikleri.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Users size={16} className="text-brand-500"/> İş İlişkisi (Çalışan/Aday) Verileri</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>Özlük:</strong> Özgeçmiş, diploma, yabancı dil bilgisi, askerlik durum belgesi.</li>
                  <li><strong>Sağlık/Görsel:</strong> Kan grubu, sağlık raporları, özlük dosyası için fotoğraf.</li>
                  <li><strong>Ceza Mahkumiyeti:</strong> Adli sicil kaydı (mevzuat gereği).</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2 border-b pb-2">
              <Lock size={20} className="text-brand-500" />
              2. Kişisel Verilerin İşlenme Amacı ve Hukuki Sebebi
            </h3>
            <p>Kişisel verileriniz, KVKK 5. ve 6. maddeleri uyarınca aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-sm list-none">
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div> Mevzuattan kaynaklı hukuki yükümlülüklerin yerine getirilmesi.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div> Hizmet sözleşmelerinin tanzimi ve ifası.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div> Finans ve muhasebe işlemlerinin yürütülmesi.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div> Şirketimizin siber güvenlik ve teknik güvenliğinin sağlanması.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div> Müşteri memnuniyeti, analiz ve kalite süreçlerinin yönetimi.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div> Resmi makamların taleplerine cevap verilmesi.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2 border-b pb-2">
              <Server size={20} className="text-brand-500" />
              3. Kişisel Verilerin Aktarılması
            </h3>
            <p>
              Kişisel verileriniz; kanunen yetkili kamu kurum ve kuruluşlarına, adli makamlara, bilişim altyapı tedarikçilerimize, hukuk müşavirlerimize ve hizmet ifası için iş birliği yaptığımız çözüm ortaklarımıza, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilmektedir.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2 border-b pb-2">
              <Eye size={20} className="text-brand-500" />
              4. Veri Sahibi Olarak Haklarınız
            </h3>
            <p>KVKK’nın 11. maddesi uyarınca bize başvurarak;</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
              <li>Verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini, KVKK 7. madde uyarınca silinmesini isteme,</li>
              <li>Kanuna aykırı işleme nedeniyle zarar oluşmuşsa tazminat talep etme haklarına sahipsiniz.</li>
            </ul>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Başvuru Formu</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Yukarıdaki haklarınızı kullanmak için Şirketimize başvuruda bulunabilirsiniz. Başvuru formunu dijital olarak inceleyebilir veya PDF olarak indirebilirsiniz.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/kvkk-basvuru-formu">
                      <Button variant="primary" className="shadow-none">
                        Formu Görüntüle <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/kvkk-basvuru-formu">
                      <Button variant="outline" className="!bg-transparent !border-slate-700 !text-white hover:!bg-slate-800">
                        <Download className="mr-2 w-4 h-4" /> PDF İndir
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block w-32 h-32 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                  <FileText size={48} className="text-brand-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-500 italic">
              <p>
                <strong>İletişim:</strong> info@apricodi.com <br />
                <strong>Adres:</strong> Yeşilyurt / Malatya
              </p>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};
