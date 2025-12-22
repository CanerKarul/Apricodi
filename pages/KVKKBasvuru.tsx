
import React, { useRef } from 'react';
import { Card, Button } from '../components/ui';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Download, AlertCircle, ShieldCheck } from 'lucide-react';

export const KVKKBasvuru: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  // Yazdırma ve PDF kaydetme işlemi
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    // Tarayıcı yazdırma diyaloğunu açar. Kullanıcı buradan "PDF Olarak Kaydet" seçebilir.
    window.print();
  };

  // .doc dosyasını Word'ün tanıyacağı şekilde indirme
  const handleDownloadDoc = () => {
    if (!formRef.current) return;

    // Word'ün HTML dosyalarını .doc olarak sorunsuz açması için gerekli olan 
    // MSOffice XML namespaces ve başlıkları
    const header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>APRICODI KVKK Başvuru Formu</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page { size: 8.5in 11in; margin: 1in 1in 1in 1in; mso-header-margin: .5in; mso-footer-margin: .5in; mso-paper-source: 0; }
          body { font-family: 'Arial', sans-serif; font-size: 11pt; }
          table { width: 100%; border-collapse: collapse; margin: 10px 0; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; vertical-align: top; }
          .header { text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 20px; }
          .section-title { background-color: #f3f4f6; font-weight: bold; text-align: center; padding: 5px; border: 1px solid black; }
          .page-break { page-break-after: always; }
          .p-10, .p-16 { padding: 0 !important; } /* Word'de ekstra paddingleri kaldır */
          .grid { display: block !important; }
          .col-span-4 { width: 30% !important; display: inline-block !important; }
          .col-span-8 { width: 70% !important; display: inline-block !important; }
        </style>
      </head>
      <body>`;
    
    const footer = "</body></html>";
    
    // Formun içeriğini al
    const content = formRef.current.innerHTML;
    
    // Blob oluşturma (BOM eklenerek karakter kodlaması garanti edilir)
    const blob = new Blob(['\ufeff', header + content + footer], {
      type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'APRICODI_KVKK_Basvuru_Formu.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 print:bg-white print:py-0">
      <style>{`
        @media print {
          /* Navigasyon, Footer ve Butonları gizle */
          nav, footer, .no-print, header { display: none !important; }
          
          /* Sayfa ayarları */
          @page {
            margin: 1.5cm;
            size: auto;
          }
          
          body { 
            background: white !important; 
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .print-area { 
            box-shadow: none !important; 
            border: 1px solid #000 !important; 
            margin: 0 !important; 
            padding: 1cm !important;
            width: 100% !important;
            display: block !important;
            color: #000 !important;
          }
          
          .page-break { 
            page-break-after: always !important; 
            break-after: page !important;
            display: block !important;
          }
          
          /* Renkleri ve kenarlıkları koru */
          .bg-slate-100 { background-color: #f1f5f9 !important; }
          .bg-slate-50 { background-color: #f8fafc !important; }
          .border-slate-900 { border-color: #000 !important; }
          .divide-slate-900 > * + * { border-color: #000 !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kontroller */}
        <div className="no-print flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Link to="/kvkk" className="flex items-center text-slate-600 hover:text-brand-600 font-bold transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Aydınlatma Metnine Dön
          </Link>
          <div className="flex gap-3">
             <Button variant="outline" size="sm" onClick={handlePrint} className="bg-white border-slate-300">
               <Printer size={16} className="mr-2" /> Yazdır / PDF Kaydet
             </Button>
             <Button variant="primary" size="sm" onClick={handleDownloadDoc}>
               <Download size={16} className="mr-2" /> Formu İndir (.doc)
             </Button>
          </div>
        </div>

        {/* Form İçerik Alanı */}
        <div ref={formRef}>
          {/* Sayfa 1 */}
          <Card className="print-area p-10 md:p-16 mb-8 bg-white border-slate-200 shadow-xl overflow-hidden page-break">
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">APRICODI YAZILIM A.Ş.</h1>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">
                6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU ÇERÇEVESİNDE<br/>
                VERİ SAHİPLERİNİN HAKLARINI KULLANMALARI İÇİN BAŞVURU FORMU
              </h2>
            </div>

            <div className="text-sm text-slate-700 space-y-4 mb-10 leading-relaxed text-justify">
              <p>
                6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sahibi olarak talebinizin veri sorumlusu tarafından yerine getirilebilmesi için aşağıda yer alan başvuru formunu net ve tam doldurarak ıslak imzalı halini <strong>“Yeşilyurt / Malatya”</strong> adresine elden bizzat iletebilir, noter kanalıyla veya iadeli taahhütlü posta ile gönderebilirsiniz.
              </p>
              <p>
                Başvurunuz en geç <strong>30 (otuz) gün</strong> içerisinde yanıtlanacaktır. Sunduğunuz bilgi ve belgelerde sorun veya eksiklik olması halinde sizinle iletişime geçilerek bilgi ve belgelerin tamamlanması tarafınıza iletilecektir. Bilgi ve belgeler tarafımıza tam olarak iletilene kadar talebin sonuçlandırılmasına ilişkin Kanun’un 13. maddesinde belirtilen süre askıya alınacaktır.
              </p>
            </div>

            <div className="border border-slate-900">
               <div className="bg-slate-100 p-3 border-b border-slate-900 font-bold text-center uppercase text-sm">
                 KİŞİSEL VERİ SAHİBİNİN KİMLİK BİLGİLERİ
               </div>
               
               <div className="grid grid-cols-1 divide-y divide-slate-900">
                  <div className="grid grid-cols-12">
                     <div className="col-span-4 p-3 font-bold border-r border-slate-900 text-sm">Adı – Soyadı</div>
                     <div className="col-span-8 p-3 text-sm">....................................................................................</div>
                  </div>
                  <div className="grid grid-cols-12">
                     <div className="col-span-4 p-3 font-bold border-r border-slate-900 text-sm">T.C. Kimlik No</div>
                     <div className="col-span-8 p-3 text-sm">....................................................................................</div>
                  </div>
                  <div className="grid grid-cols-12">
                     <div className="col-span-4 p-3 font-bold border-r border-slate-900 text-sm">Cep Telefonu</div>
                     <div className="col-span-8 p-3 text-sm">....................................................................................</div>
                  </div>
                  <div className="grid grid-cols-12">
                     <div className="col-span-4 p-3 font-bold border-r border-slate-900 text-sm">Adres</div>
                     <div className="col-span-8 p-3 h-24 text-sm">....................................................................................</div>
                  </div>
                  <div className="grid grid-cols-12">
                     <div className="col-span-4 p-3 font-bold border-r border-slate-900 text-sm">E-posta Adresi</div>
                     <div className="col-span-8 p-3 text-sm">....................................................................................</div>
                  </div>
                  <div className="grid grid-cols-12">
                     <div className="col-span-4 p-3 font-bold border-r border-slate-900 text-sm">Tarafımız ile Olan İlişkiniz</div>
                     <div className="col-span-8 p-3 space-y-2 text-[10px]">
                        <div className="flex gap-4">
                          <span>[ ] İş Ortağı / Tedarikçi / Hizmet Sağlayıcı</span>
                          <span>[ ] Diğer: ...........................</span>
                        </div>
                        <div className="flex gap-4">
                          <span>[ ] Çalışan / Eski Çalışan / Çalışan Adayı</span>
                          <span>[ ] Ziyaretçi</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </Card>

          {/* Sayfa 2 */}
          <Card className="print-area p-10 md:p-16 mb-8 bg-white border-slate-200 shadow-xl overflow-hidden page-break">
            <div className="border border-slate-900">
               <div className="bg-slate-100 p-3 border-b border-slate-900 font-bold text-center uppercase text-sm">
                 TALEPLERİN KONUSU (6698 Sayılı KVKK Md. 11)
               </div>
               
               <div className="text-[10px] p-2 bg-slate-50 italic border-b border-slate-900 font-medium">
                 Lütfen talebinize en uygun olan kutucuğu (X) ile işaretleyiniz.
               </div>

               <div className="divide-y divide-slate-900">
                  {[
                    { no: 1, text: "Şirket'in hakkımda kişisel veri işleyip işlemediğini öğrenmek istiyorum.", code: "Md.11/1-a" },
                    { no: 2, text: "Eğer Şirket hakkımda veri işliyorsa bu veri işleme faaliyetleri hakkında bilgi talep ediyorum.", code: "Md.11/1-b" },
                    { no: 3, text: "Eğer Şirket hakkımda veri işliyorsa bunların işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenmek istiyorum.", code: "Md.11/1-c" },
                    { no: 4, text: "Eğer kişisel verilerim yurt içinde veya yurt dışında aktarılıyorsa, bu üçüncü kişileri bilmek istiyorum.", code: "Md.11/1-ç" },
                    { no: 5, text: "Kişisel verilerimin eksik veya yanlış işlendiğini düşünüyorum ve bunların düzeltilmesini istiyorum.", code: "Md.11/1-d" },
                    { no: 6, text: "Kişisel verilerimin kanun hükümlerine uygun işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalktığını düşünüyorum ve silinmesini/yok edilmesini talep ediyorum.", code: "Md.11/1-e" },
                    { no: 7, text: "Kişisel verilerimin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi neticesinde aleyhime bir sonuç doğduğunu düşünüyorum. Bu sonuca itiraz ediyorum.", code: "Md.11/1-g" },
                    { no: 8, text: "Kişisel verilerimin kanuna aykırı işlenmesi nedeniyle uğradığım zararın giderilmesini talep ediyorum.", code: "Md.11/1-ğ" }
                  ].map((item) => (
                    <div key={item.no} className="grid grid-cols-12 items-center">
                      <div className="col-span-1 p-2 text-center border-r border-slate-900 font-bold text-sm">{item.no}</div>
                      <div className="col-span-1 p-2 text-center border-r border-slate-900 text-sm">[ ]</div>
                      <div className="col-span-8 p-2 text-[11px] border-r border-slate-900 leading-tight">{item.text}</div>
                      <div className="col-span-2 p-2 text-[9px] text-slate-500 font-bold text-center">{item.code}</div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-sm mb-2 uppercase border-b border-slate-900 pb-1">TALEP HAKKINDA AÇIKLAMA</h3>
              <div className="w-full h-48 border border-slate-900 p-4 text-xs italic text-slate-400">
                 Yukarıda belirttiğiniz talep ya da talepler hakkında yapmak istediğiniz ek açıklamayı ve varsa somut iddialarınızı buraya yazınız...
              </div>
            </div>
          </Card>

          {/* Sayfa 3 & 4 */}
          <Card className="print-area p-10 md:p-16 mb-8 bg-white border-slate-200 shadow-xl overflow-hidden">
            <div className="space-y-10">
              <div>
                <h3 className="font-bold text-sm mb-2 uppercase border-b border-slate-900 pb-1">EKLER</h3>
                <p className="text-xs mb-4">Başvurunuzla ilgili herhangi bir belge var ise lütfen belirterek ekleyiniz.</p>
                <div className="space-y-3 text-sm">
                  <div>1. ....................................................................</div>
                  <div>2. ....................................................................</div>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-5 h-5 border-2 border-slate-900 shrink-0"></div>
                    <span className="text-xs font-bold">Başvuru talebimin ekinde herhangi bir belge bulunmamaktadır.</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <h3 className="font-bold text-sm mb-4 uppercase border-b border-slate-900 pb-1">CEVABIN TARAFINIZA BİLDİRİLME YÖNTEMİ</h3>
                <div className="space-y-5 text-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 border-2 border-slate-900 shrink-0"></div>
                    <span className="font-medium">Adresime gönderilmesini istiyorum. (Belirtilen adres geçerli sayılacaktır)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 border-2 border-slate-900 shrink-0"></div>
                    <span className="font-medium">E-posta adresime gönderilmesini istiyorum. (Belirtilen e-posta geçerli sayılacaktır)</span>
                  </div>
                </div>
              </div>

              <div className="pt-12 mt-12 border-t-2 border-slate-900 grid grid-cols-2 gap-12">
                 <div className="text-sm space-y-4">
                   <div className="font-bold">Başvuru Tarihi:</div>
                   <div className="text-slate-400">....... / ....... / 202...</div>
                 </div>
                 <div className="text-center space-y-4">
                   <div className="font-bold uppercase tracking-widest text-sm">Başvuru Sahibi</div>
                   <div className="text-[10px] italic">(İmza)</div>
                   <div className="pt-10 text-xs font-bold border-b border-slate-300 w-3/4 mx-auto pb-1"></div>
                   <div className="text-[10px] uppercase font-bold text-slate-500">Adı Soyadı</div>
                 </div>
              </div>

              <div className="mt-16 p-6 bg-slate-50 border border-slate-200 rounded-2xl no-print">
                 <div className="flex items-start gap-4">
                   <div className="p-2 bg-brand-100 rounded-full text-brand-600 shrink-0">
                     <ShieldCheck size={20} />
                   </div>
                   <div className="text-xs text-slate-600 leading-relaxed">
                     <strong>Önemli Bilgilendirme:</strong> İşbu başvuru formu, talebinizin doğru, eksiksiz ve mevzuata uygun şekilde sonuçlandırılması için bir araçtır. 
                     Eksik veya yanlış bilgi paylaşılması durumunda APRICODI YAZILIM A.Ş.'nin sorumluluğu bulunmamaktadır. 
                   </div>
                 </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};
