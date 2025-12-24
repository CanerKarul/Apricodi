
import { Service, Project, BlogPost, Testimonial, FAQItem, JobPosition, ContentItem } from './types';

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'Yapay Zeka ve İş Otomasyonu',
    description: 'n8n ve ileri seviye yapay zeka entegrasyonları ile manuel iş süreçlerinizi %100 otonom hale getiriyoruz.',
    iconName: 'Cpu',
    details: ['n8n İş Akışı Tasarımı', 'Akıllı Chatbot ve Sesli Asistanlar', 'LLM (GPT/Gemini) Entegrasyonları'],
    features: ['%90 Zaman Tasarrufu', '7/24 Kesintisiz Operasyon', 'Hatasız Veri İşleme']
  },
  {
    id: 'web-dev',
    title: 'Kurumsal Web Yazılım',
    description: 'İşletmenizin ihtiyaçlarına özel olarak tasarlanan, yüksek performanslı ve güvenli web tabanlı iş çözümleri.',
    iconName: 'Globe',
    details: ['Özel CMS ve Yönetim Panelleri', 'React / Next.js Mimarisi', 'API Entegrasyonları (ERP/CRM)'],
    features: ['Sürdürülebilir Kod Yapısı', 'Yüksek SEO Skoru', 'Kurumsal Veri Güvenliği']
  },
  {
    id: 'mobile-dev',
    title: 'Mobil Uygulama Geliştirme',
    description: 'iOS ve Android platformlarında sorunsuz çalışan, kullanıcı deneyimi odaklı native ve cross-platform uygulamalar.',
    iconName: 'Smartphone',
    details: ['React Native ile Cross-Platform', 'Native Modül Geliştirme', 'App Store Optimizasyonu (ASO)'],
    features: ['Tek Kod Tabanı ile Maliyet Avantajı', 'Yüksek Performans', 'Kullanıcı Dostu Arayüz']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı alışkanlıklarını analiz ederek, markanızın dijital yüzünü modern ve işlevsel arayüzlerle tasarlıyoruz.',
    iconName: 'Palette',
    details: ['Kullanıcı Araştırması & Persona', 'Wireframe & Prototipleme', 'Design System Oluşturma'],
    features: ['Marka Kimliği ile Uyum', 'Erişilebilirlik Standartları', 'Dönüşüm Odaklı Akışlar']
  },
  {
    id: 'ecommerce',
    title: 'E-Ticaret Çözümleri',
    description: 'B2B ve B2C operasyonlarınız için ölçeklenebilir, güvenli ve satış odaklı e-ticaret altyapıları.',
    iconName: 'ShoppingBag',
    details: ['Özel Ödeme Sistemleri Entegrasyonu', 'Stok & Sipariş Yönetimi', 'Pazaryeri Entegrasyonları'],
    features: ['Yüksek Dönüşüm Oranı', 'Gelişmiş Raporlama', 'Kampanya Yönetim Modülleri']
  },
  {
    id: 'maintenance',
    title: 'Bakım & SLA Destek',
    description: 'Dijital varlıklarınızın kesintisiz çalışması için düzenli bakım, güvenlik güncellemeleri ve teknik destek.',
    iconName: 'ShieldCheck',
    details: ['7/24 Sistem İzleme', 'Güvenlik Yamaları', 'Düzenli Yedekleme'],
    features: ['Garantili Müdahale Süreleri (SLA)', 'Aylık Performans Raporu', 'Proaktif İyileştirmeler']
  }
];

export const projects: Project[] = [
  {
    id: 'filiz-cekil-bridal',
    slug: 'filiz-cekil-bridal',
    title: 'Filiz Çekil Bridal',
    clientOrBrand: 'Filiz Çekil Haute Couture',
    category: 'Fashion',
    categoryTags: ['Fashion', 'Web', 'CMS'],
    industry: 'Moda / Perakende',
    location: 'İstanbul',
    summary: 'Kişiye özel tasarım deneyimini dijital dünyaya taşıyan, marka prestijini yansıtan kurumsal web projesi.',
    description: 'Lüks moda sektöründe faaliyet gösteren markanın, koleksiyonlarını sergilemek ve randevu süreçlerini dijitalleştirmek amacıyla geliştirilen web projesi.',
    goals: ['Marka bilinirliğini artırmak', 'Dijital vitrin oluşturmak', 'Randevu taleplerini dijital ortamdan almak.'],
    challenges: ['Yüksek çözünürlüklü görsellerin performans optimizasyonu.', 'Minimal tasarım dili ile zengin içerik yapısının dengelenmesi.'],
    solution: ['Görsel odaklı arayüz tasarlandı.', 'SEO uyumlu içerik yapısı sağlandı.', 'Hızlı iletişim modülleri entegre edildi.'],
    keyFeatures: ['Galeri Yönetimi', 'Blog Sistemi', 'Hızlı İletişim'],
    techStack: ['Modern CMS Altyapısı', 'Next.js', 'Image Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop',
    gallery: [],
    liveUrl: 'https://filizcekilbridal.com',
    status: 'Live',
    year: '2024'
  },
  {
    id: 'farkindayiz-platform',
    slug: 'farkindayiz-dijital-guvenlik',
    title: 'Farkındayiz Platformu',
    clientOrBrand: 'Sosyal Sorumluluk',
    category: 'Social Impact',
    categoryTags: ['Social Impact', 'Web'],
    industry: 'Sivil Toplum / Eğitim',
    location: 'Türkiye',
    summary: 'Dijital güvenlik ve siber zorbalık konularında toplumsal farkındalık yaratan bilgi platformu.',
    description: 'Dijital dünyadaki risklere karşı bireyleri ve ebeveynleri bilgilendiren portal.',
    goals: ['Dijital okuryazarlık seviyesini artırmak.'],
    challenges: ['Karmaşık teknik konuların sadeleştirilmesi.'],
    solution: ['Modüler içerik yapısı tasarlandı.'],
    keyFeatures: ['İçerik Kütüphanesi', 'E-Bülten'],
    techStack: ['React', 'Headless CMS'],
    imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop',
    gallery: [],
    liveUrl: 'https://farkindayiz.netlify.app/',
    status: 'Live',
    year: '2024'
  },
  {
    id: 'pergamon-cafe',
    slug: 'pergamon-chocolate-coffee',
    title: 'Pergamon Chocolate & Coffee',
    clientOrBrand: 'Pergamon Kitchen',
    category: 'Food & Beverage',
    categoryTags: ['Food & Beverage', 'Web'],
    industry: 'Gıda / Hizmet',
    location: 'Malatya',
    summary: 'Butik kafe deneyimini yansıtan, menü ve lokasyon odaklı kurumsal tanıtım sitesi.',
    description: 'Yerel bir işletmenin dijital varlığını oluşturmak için hazırlanan proje.',
    goals: ['Dijital menü deneyimi sunmak.'],
    challenges: ['Mobil hız optimizasyonu.'],
    solution: ['Landing page yapısı kurgulandı.'],
    keyFeatures: ['Mobil Uyum', 'QR Menü'],
    techStack: ['HTML/CSS/JS'],
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop',
    gallery: [],
    liveUrl: 'https://pergamonkitchen.com/',
    status: 'Live',
    year: '2024'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'malatya-web-tasarim-ajansi-secimi',
    title: 'Malatya Web Tasarım Ajansı Seçerken Dikkat Etmeniz Gereken 5 Kritik Madde',
    excerpt: 'Malatya\'da yazılım ve web tasarım hizmeti alırken işletmenizi riske atmayın. Teknik yeterlilik ve SEO odaklılık neden hayati önem taşır?',
    date: '01 Ekim 2025',
    readTime: '15 dk',
    category: 'Strateji',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    content: `
      <h2>Malatya'da Kurumsal Web Tasarımında Doğru Tercih Yapmak</h2>
      <p>Malatya yazılım sektörü son yıllarda muazzam bir büyüme ivmesi kazandı. Ancak bu büyüme beraberinde kalite karmaşasını da getirdi. İşletmeniz için bir web sitesi yaptırmak istediğinizde karşınıza çıkan düzinelerce "ajans" arasından hangisinin gerçekten katma değer üreteceğini anlamak oldukça zordur. APRICODI olarak, Malatya web tasarım pazarında sunduğumuz Next.js tabanlı modern çözümlerle bu karmaşayı profesyonellik ile çözüyoruz. Google aramalarında "Malatya yazılım" kelimesinde öne çıkmak istiyorsanız, teknik derinliği olan bir ekip şarttır.</p>
      
      <h3>1. Teknik SEO ve Core Web Vitals Standartları</h3>
      <p>Bir web sitesinin sadece güzel görünmesi, 2025 dijital dünyasında hiçbir anlam ifade etmiyor. Google'da "Malatya web tasarım" veya "kurumsal yazılım" gibi kritik aramalarda üst sıralarda yer almak için teknik SEO kriterlerine %100 uyumlu bir kod yapısı gerekir. Core Web Vitals olarak adlandırılan LCP (En Büyük İçerikli Boyama), FID (İlk Giriş Gecikmesi) ve CLS (Kümülatif Düzen Kayması) skorlarınızın 90'ın üzerinde olması şarttır. Biz APRICODI olarak projelerimizde statik site oluşturma (SSG) ve sunucu taraflı oluşturma (SSR) tekniklerini kullanarak rakiplerinizden saniyelerce daha hızlı açılan siteler inşa ediyoruz. Malatya'da yüksek performanslı web çözümleri için mühendislik önceliğimizdir.</p>
      <p>SEO uyumlu bir web sitesi, markanızın 7/24 çalışan bir satış personeli olması demektir. Malatya'da yerel pazardan global pazara açılmanın yolu, arama motorlarının dilini konuşan bir altyapıdan geçer. Next.js mimarimiz, içeriğinizi Google botlarına en temiz ve hızlı şekilde sunar, böylece reklam bütçenizi optimize ederek organik büyüme sağlarsınız.</p>
      
      <h3>2. Mobil Öncelikli Mimari (Mobile-First Design)</h3>
      <p>İstatistiklere göre internet trafiğinin %80'inden fazlası mobil cihazlardan geliyor. Malatya'daki bir fabrikanın ürünlerini inceleyen bir müşteri, muhtemelen bunu cep telefonundan yapıyor. Tasarımı önce masaüstü için yapıp sonra mobile uydurmaya çalışmak (Responsive), artık eskimiş bir yöntemdir. Modern yaklaşım olan Mobile-First Design (Önce Mobil Tasarım), kullanıcı deneyimi odaklı geliştirme süreçlerimizin kalbindedir. Mobil uyumlu siteler sadece kullanıcı dostu değil, aynı zamanda Google'ın mobil öncelikli indeksleme algoritması için de vazgeçilmezdir.</p>

      <h3>3. n8n ve Yapay Zeka Entegrasyon Kabiliyeti</h3>
      <p>Web siteniz sadece bir vitrin mi, yoksa işinizi yöneten bir asistan mı? n8n gibi modern iş akış otomasyon araçlarını web sitenize entegre edebilen bir ajansla çalışmak, operasyonel maliyetlerinizi düşürür. Formdan gelen bir talebin otomatik olarak CRM sisteminize düşmesi, müşteriye yapay zeka (Gemini/GPT) destekli bir karşılama maili gitmesi ve ekibinize WhatsApp üzerinden bildirim düşmesi, APRICODI'nin standart hizmetleri arasındadır. Malatya otomasyon çözümleri için yerel partneriniziz.</p>
      <p>İş süreçlerinizi otomatiğe bağlamak, ekibinizin daha yaratıcı ve stratejik işlere vakit ayırmasını sağlar. n8n senaryolarımız sayesinde insan hatasını minimize ediyor, veri doğruluğunu %100'e çıkarıyoruz. Malatya sanayisi dijitalleşirken, bu teknolojik avantaj sizi rakiplerinizin fersah fersah önüne geçirecektir.</p>

      <h3>4. Sürdürülebilir Kod ve Teknolojik Güncellik</h3>
      <p>Birçok "web tasarımcı" hazır tema (WordPress) kullanarak sitenizi inşa eder. Ancak bu siteler zamanla hantallaşır, güvenlik açıkları verir ve özelleştirmek imkansız hale gelir. APRICODI olarak biz React, Next.js ve TypeScript gibi modern teknolojileri kullanarak "sürdürülebilir" yapılar kuruyoruz. Bu sayede siteniz 5 yıl sonra bile performansından ödün vermez ve yeni teknolojilere kolayca adapte edilebilir. Güvenli ve hızlı bir altyapı, kurumsal imajınızın en büyük destekçisidir.</p>

      <h3>5. Yerel Bilgi, Global Vizyon</h3>
      <p>Malatya'nın sanayi yapısını, yerel ticaret dinamiklerini bilmek projenin ruhunu oluşturur. Ancak bu yerelliği global tasarım standartlarıyla harmanlamak gerçek başarıyı getirir. Biz APRICODI ekibi olarak, Malatya Teknopark merkezli olmanın verdiği avantajla yerel işletmeleri tanıyor, global mühendislik tecrübemizle onları dünyaya açıyoruz. Malatya web tasarım ve yazılım pazarında güven inşa etmeye devam ediyoruz.</p>
    `
  },
  {
    id: '2',
    slug: 'n8n-is-otomasyonu-malatya',
    title: 'n8n ve Yapay Zeka ile İşletmenizde %90 Zaman Tasarrufu Sağlayın',
    excerpt: 'n8n otomasyonu ve yapay zeka entegrasyonu ile manuel işleri nasıl otonom hale getirebilirsiniz? Malatya\'da otomasyonun öncüsü Apricodi.',
    date: '05 Ekim 2025',
    readTime: '18 dk',
    category: 'Yapay Zeka',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Yapay Zeka ve n8n Otomasyonunda Yeni Dönem</h2>
      <p>Modern iş dünyasında en büyük gider kaleminiz personel maaşları değil, verimsiz harcanan "zaman"dır. Her gün onlarca e-postayı okumak, Excel tablolarına veri girmek, fatura takibi yapmak ve sosyal medya paylaşımlarını manuel düzenlemek gibi işler, ekibinizin yaratıcı kapasitesini öldürür. APRICODI olarak, Malatya'daki kurumsal işletmelere n8n (Low-code automation tool) ve yapay zeka entegrasyonu ile bu süreci tamamen değiştirmeyi vaat ediyoruz. İş otomasyonu sadece bir trend değil, verimlilik devrimidir.</p>
      
      <h3>n8n Nedir ve İşletmenize Ne Kazandırır?</h3>
      <p>n8n, 400'den fazla uygulamayı (Gmail, WhatsApp, Excel, SAP, Hubspot vb.) birbirine bağlayabilen gelişmiş bir iş akışı orkestrasyon aracıdır. Diğer otomasyon araçlarının aksine, verilerinizi kendi sunucunuzda tutmanıza izin vererek veri güvenliğini sağlar. Malatya'da sanayi ve ticaret faaliyetleri yürüten firmalar için n8n, "görünmez bir çalışan" gibi tüm rutinleri yönetebilir. Verileriniz Malatya merkezli sunucularımızda veya kendi altyapınızda güvenle saklanır, dışarıya sızma riski ortadan kalkar.</p>
      <p>n8n'in esnekliği sayesinde, işletmenize özel en karmaşık senaryoları bile hayata geçirebiliyoruz. Örneğin, bir e-ticaret siparişi geldiğinde otomatik olarak kargo fişi oluşturup müşteriye WhatsApp'tan takip numarası atan bir sistem, personelinizin saatlerini kurtaracaktır. Bu hız, müşteri memnuniyetini doğrudan artıran bir faktördür.</p>

      <h3>Yapay Zeka (AI) Otomasyona Nasıl Dahil Oluyor?</h3>
      <p>Sadece veri aktarmak otomasyondur; bu veriyi anlamlandırmak ise "Akıllı Otomasyon"dur. Google Gemini veya OpenAI API'lerini n8n senaryolarımıza entegre ederek şu süreçleri otonom hale getiriyoruz:</p>
      <ul>
        <li><strong>Akıllı Müşteri Destek:</strong> Gelen bir destek e-postasının konusunu AI ile analiz edip, teknikse yazılım ekibine, satışsa pazarlama ekibine detaylı bir özetle iletmek.</li>
        <li><strong>Otomatik Fatura Okuma:</strong> Taratılan bir faturayı AI ile okuyup, içindeki kalemleri kuruşu kuruşuna muhasebe sistemine aktarmak. Bu süreçte %100 doğruluk oranı hedeflenmektedir.</li>
        <li><strong>İçerik Üretimi ve Sosyal Medya:</strong> Blog yazılarınızdan otomatik olarak Instagram postları ve LinkedIn makaleleri oluşturan AI asistanlar kuruyoruz.</li>
      </ul>
      <p>Yapay zeka modellerini işletmenizin geçmiş verileriyle eğiterek, size özel kararlar verebilen sistemler tasarlıyoruz. Malatya'daki üretim tesisleri için arıza tahminleme modelleri veya stok optimizasyon araçları, n8n altyapısıyla birleştiğinde devasa maliyet tasarrufları sağlar.</p>

      <h3>Başarı Hikayesi: %92 Verimlilik Artışı</h3>
      <p>Malatya'da tekstil sektöründe faaliyet gösteren bir partnerimiz için kurduğumuz sipariş takip sistemi sayesinde, sipariş alımından sevkiyata kadar geçen tüm süreç dijitalleşti. Eskiden 3 personelin tam gününü alan veri girişleri, artık yapay zeka destekli otonom sistemimizle saniyeler içinde hatasız tamamlanıyor. Bu, işletmenin sadece zaman kazanmasını değil, hata payının sıfıra inmesiyle büyük bir finansal kayıptan kurtulmasını da sağladı. Malatya yazılım ekosisteminde n8n kullanımının gücünü kanıtladık.</p>
    `
  },
  {
    id: '3',
    slug: 'seo-uyumlu-web-yazilimi-nedir',
    title: 'Google Dostu Yazılım: SEO Uyumlu Web Sitesi Nasıl Olmalıdır?',
    excerpt: 'Teknik SEO bir web sitesinin temelidir. Next.js ve Server Side Rendering (SSR) avantajlarını keşfedin.',
    date: '10 Ekim 2025',
    readTime: '20 dk',
    category: 'SEO',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Modern Web Yazılımında SEO'nun Görünmeyen Yüzü</h2>
      <p>SEO (Arama Motoru Optimizasyonu) denildiğinde birçok kişinin aklına sadece "anahtar kelimeler" ve "backlinkler" gelir. Oysa 2025 yılında Google'ın sıralama algoritmaları, web sitenizin kod kalitesini ve hızını her şeyden önde tutuyor. APRICODI olarak Malatya web tasarım projelerimizde kullandığımız Next.js altyapısı, tam da bu teknik gereksinimleri karşılamak üzere tasarlandı. SEO uyumlu yazılım, dijital dünyada kalıcı olmanın tek yoludur.</p>
      
      <h3>Teknik SEO Neden Yazılım Aşamasında Başlar?</h3>
      <p>Modern SEO, ilk satır kodun yazıldığı andan itibaren başlar. Statik site oluşturma (SSG) sayesinde, web sayfalarınız ziyaretçi gelmeden önce sunucuda hazırlanır. Bu da Google botlarının sitenizi saniyeler içinde taramasını sağlar. Malatya yazılım pazarında hızıyla öne çıkan siteler, arama sonuçlarında da öne çıkar. Hızlı açılan sayfalar, düşük hemen çıkma oranı (bounce rate) demektir, bu da Google için en büyük pozitif sinyaldir.</p>
      <p>Ayrıca, teknik SEO kapsamında semantik HTML yapısı (H1, H2, H3 hiyerarşisi), görsel optimizasyonu (WebP formatı ve lazy loading) ve JavaScript bundle boyutunun minimize edilmesi gibi onlarca teknik detay bulunur. APRICODI olarak biz, bu tekniklerin hepsini projelerimize standart olarak uyguluyoruz.</p>

      <h3>Next.js ve Server Side Rendering (SSR) Avantajı</h3>
      <p>Geleneksel React uygulamaları (Client-Side Rendering), içeriği tarayıcıda yükler. Bu durum Google botlarının içeriği görmesini zorlaştırabilir. Next.js ile kullandığımız SSR tekniği, içeriği doğrudan sunucudan render edilmiş olarak gönderir. Sonuç: Anında indexlenen sayfalar ve mükemmel sıralama performansı. SEO uyumlu Malatya web yazılımı için APRICODI en doğru adrestir. SSR sadece SEO için değil, aynı zamanda düşük internet hızına sahip kullanıcılar için de mükemmel bir deneyim sunar.</p>

      <h3>Core Web Vitals: Kullanıcı Deneyimi Ölçümlemesi</h3>
      <p>Google, sitenizin performansını ölçmek için üç ana metriğe bakar:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Sayfanızın ana içeriği ne kadar sürede yükleniyor? 2.5 saniyenin altı "Harika" kabul edilir.</li>
        <li><strong>FID (First Input Delay):</strong> Bir kullanıcı bir butona tıkladığında site ne kadar hızlı tepki veriyor? 100ms altı hedeflenmelidir.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Sayfa yüklenirken içerikler aşağı yukarı kayıyor mu? Görsel stabilite, kullanıcı güveni için kritiktir.</li>
      </ul>
      <p>Bu metriklerdeki başarınız, doğrudan reklam maliyetlerinizi (CPC) düşürür. Google, performansı yüksek sitelere daha düşük maliyetli reklam alanı sağlar. Teknik SEO yatırımı, aslında pazarlama bütçenizi en verimli şekilde kullanmaktır. Malatya kurumsal web tasarımı denince akla gelen performans odaklı yaklaşımımız budur.</p>
    `
  },
  {
    id: '4',
    slug: 'react-native-mobil-uygulama-gelistirme',
    title: 'Neden React Native? Tek Kod Tabanı ile Çift Platform Avantajı',
    excerpt: 'Mobil uygulama yaptırmak isteyen işletmeler için React Native maliyet ve zaman tasarrufu sağlıyor. Malatya mobil yazılım rehberi.',
    date: '15 Ekim 2025',
    readTime: '22 dk',
    category: 'Yazılım',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Mobil Uygulama Dünyasında Verimlilik: React Native Rehberi</h2>
      <p>İşletmenizi mobil dünyaya taşımaya karar verdiğinizde karşınıza çıkan ilk büyük soru şudur: "iOS ve Android için iki ayrı uygulama mı yaptırmalıyım?" Meta (Facebook) tarafından geliştirilen React Native teknolojisi, bu dengeyi tamamen değiştirdi. APRICODI olarak Malatya mobil uygulama geliştirme süreçlerimizde bu teknolojiyi kullanarak maliyetleri minimize ediyoruz. Mobil yazılım artık ulaşılamaz bir lüks değil, her işletme için gerekliliktir.</p>
      
      <h3>React Native'in İşletmenize 5 Temel Faydası</h3>
      <ol>
        <li><strong>%40 Maliyet Tasarrufu:</strong> Tek bir yetkin ekiple her iki mağazaya da (App Store & Play Store) uygulama çıkabilirsiniz. Bu, bütçenizi pazarlama gibi diğer alanlara kaydırmanıza olanak tanır.</li>
        <li><strong>Hızlı Pazara Giriş:</strong> Geliştirme süreci neredeyse yarı yarıya kısalır. Fikriniz taze iken müşterilerinizle buluşur.</li>
        <li><strong>Native Performans:</strong> React Native hibrit bir web görünümü değil, cihazın kendi bileşenlerini kullanan bir yapıdır. Kullanıcı, uygulamanın native dillerle yazılmadığını fark bile edemez.</li>
        <li><strong>Tek Kod, Kolay Bakım:</strong> Bir hata düzeltildiğinde veya yeni bir özellik eklendiğinde her iki platform da aynı anda güncellenir.</li>
        <li><strong>Geniş Topluluk Desteği:</strong> Global devlerin kullandığı bu teknoloji, geleceğe dönük en güvenli yatırımdır.</li>
      </ol>
      <p>Malatya'daki startup projelerinden kurumsal çözümlere kadar, mobil dünyadaki varlığınızı sağlam temellere oturtuyoruz. Malatya yazılım ekosisteminde mobil öncelikli çözümler için yanınızdayız. React Native ile geliştirdiğimiz uygulamalar, kullanıcılarınızın telefonunda akıcı, güvenli ve modern bir deneyim sunar.</p>
    `
  },
  {
    id: '5',
    slug: 'e-ticaret-satis-artirma-yollari',
    title: 'E-Ticaret Sitenizde Satışları Artıracak 7 UX/UI Stratejisi',
    excerpt: 'Kullanıcı deneyimi (UX) tasarımı satışlarınızı doğrudan etkiler. Sepet terk etme oranlarını nasıl düşürürsünüz?',
    date: '20 Ekim 2025',
    readTime: '25 dk',
    category: 'Strateji',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Dönüşüm Odaklı E-Ticaret Tasarımı: Psikoloji ve Yazılım</h2>
      <p>Bir e-ticaret sitenizin olması, satış yapacağınız anlamına gelmez. Müşterilerin %70'inden fazlası ödeme adımına gelmeden sepeti terk ediyor. Neden mi? Çünkü dijital dükkanınızda "güven", "hız" veya "kolaylık" eksik. APRICODI olarak Malatya e-ticaret yazılımı projelerimizde sadece ürün listelemiyoruz, satış psikolojisini koda döküyoruz. E-ticaret başarısı sadece ürün kalitesiyle değil, platform kalitesiyle de ölçülür.</p>
      
      <h3>1. Üç Tık Kuralı ve Basit Navigasyon</h3>
      <p>Bir kullanıcı aradığı ürüne ana sayfadan itibaren en fazla 3 tıklama ile ulaşabilmelidir. Karmaşık menüler kullanıcıyı yorar. SEO uyumlu ve hızlı e-ticaret altyapılarımızla dönüşüm oranlarını artırıyoruz. Malatya'dan dünyaya satış yapmak için ihtiyacınız olan teknik altyapı APRICODI tarafından sağlanmaktadır.</p>
      
      <h3>2. Misafir Ödeme (Guest Checkout) Zorunluluğu</h3>
      <p>Müşterinizi alışveriş yapmadan önce 15 alanlık bir kayıt formuna zorlamak, satış kaybına davetiye çıkarmaktır. Malatya e-ticaret çözümlerimizde hızlı ve kolay ödeme akışları kurguluyoruz. Müşteri deneyimini basitleştirmek, sepet dönüşüm oranlarınızı (CRO) anında %20 artırabilir.</p>
      <p>E-ticaret sistemlerimizde kullandığımız Next.js mimarisi, sayfalar arası geçişi saniyelerin altına indirerek kullanıcının sabrını zorlamaz. "Sayfa yükleniyor" ibaresi ne kadar az görünürse, satış o kadar çok olur. Malatya yazılım ajansı olarak e-ticaretin her adımında verimliliği gözetiyoruz.</p>
    `
  },
  {
    id: '6',
    slug: 'malatya-dijital-donusum-rehberi',
    title: 'Malatya İş Dünyası İçin 2025 Dijital Dönüşüm Yol Haritası',
    excerpt: 'Teknolojiyi işinize entegre etmenin tam zamanı. Malatya yazılım ajansı Apricodi ile dijitalde büyüyün.',
    date: '25 Ekim 2025',
    readTime: '15 dk',
    category: 'Strateji',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
    content: `
      <h2>Malatya'nın Sanayisinden Dijital Gücüne: Dönüşüm Başlıyor</h2>
      <p>Malatya, tekstilden gıdaya geniş bir üretim yelpazesine sahip. Ancak bu fiziksel güç, dijital dünyada ne kadar temsil ediliyor? APRICODI olarak Malatya'daki sanayici ve esnafın dijital dönüşüm yolculuğuna rehberlik ediyoruz. Kurumsal web yazılımı ve otomasyon süreçleriyle rekabet gücünüzü artırın. Dijital dönüşüm bir lüks değil, küresel pazarda hayatta kalma mücadelesidir.</p>
      
      <h3>Malatya Firmaları İçin 3 Adımlık Plan</h3>
      <ol>
        <li><strong>Altyapı Modernizasyonu:</strong> Eski sistemleri bulut tabanlı yapılara taşımak. Bu, veriye her yerden erişim ve ölçeklenebilirlik sağlar.</li>
        <li><strong>Süreç Otomasyonu:</strong> Personelin vaktini alan işleri n8n ile otomatiğe bağlamak. Veri girişi gibi sıkıcı işleri makinelere devretmek, insan kaynağınızı daha verimli kullanmanızı sağlar.</li>
        <li><strong>Veri Odaklı Karar Verme:</strong> İşletmenizin verilerini toplayıp analiz ederek, gelecekteki talepleri tahmin etmek.</li>
      </ol>
      <p>Malatya Teknopark merkezli olmanın verdiği avantajla yerel işletmeleri tanıyor, global mühendislik tecrübemizle onları dünyaya açıyoruz. Malatya dijital dönüşüm ajansı APRICODI ile geleceği planlayın. Bizimle dijitalleşen işletmeler, operasyonel maliyetlerini yıllık bazda %30'a varan oranlarda azaltmaktadır.</p>
    `
  },
  {
    id: '7',
    slug: 'kurumsal-siber-guvenlik-onlemleri',
    title: 'Şirket Verileriniz Güvende mi? Kurumsal Siber Güvenlik Temelleri',
    excerpt: 'Küçük ve orta ölçekli işletmeler için veri güvenliği rehberi. Siber saldırılardan nasıl korunursunuz?',
    date: '01 Kasım 2025',
    readTime: '24 dk',
    category: 'Yazılım',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Siber Tehditler Kapıda: İşletmenizi Nasıl Korursunuz?</h2>
      <p>Siber saldırılar artık sadece büyük bankaları hedef almıyor. Güvenlik önlemleri zayıf olan KOBİ'ler siber korsanlar için "kolay hedef" haline geldi. Malatya'da faaliyet gösteren bir şirket olarak, verilerinizin çalınması onarılmaz bir prestij kaybı demektir. Güvenli Malatya yazılım çözümleri için en güncel protokolleri uyguluyoruz. Bilgi güvenliği, iş sürekliliğinizin sigortasıdır.</p>
      
      <h3>1. Güvenli Kod Geliştirme (OWASP Standartları)</h3>
      <p>SQL Injection, Cross-Site Scripting (XSS) gibi temel saldırılara karşı korumalı olmayan bir yazılım büyük risk taşır. APRICODI olarak, teslim ettiğimiz her projede OWASP Top 10 güvenlik standartlarını harfiyen uyguluyoruz. Malatya'da siber güvenlik odaklı yazılım geliştirme prensibimizdir. Yazılımın her aşamasında penetrasyon testleri yaparak açıklarımızı önceden kapatıyoruz.</p>
      <p>Kurumsal verilerinizin şifrelenmesi (Encryption), SSL sertifikaları ve firewall yapılandırmaları APRICODI'nin sunduğu temel güvenlik katmanlarıdır. Müşteri verilerinizin güvenliği, markanıza olan sadakati belirleyen en önemli unsurlardan biridir.</p>
    `
  },
  {
    id: '8',
    slug: 'gemini-yapay-zeka-entegrasyonu',
    title: 'Google Gemini API ile Yazılımlarınıza Zeka Katın',
    excerpt: 'Yapay zeka artık bir lüks değil. Gemini API entegrasyonu ile akıllı raporlama ve tahminleme sistemleri kurun.',
    date: '10 Kasım 2025',
    readTime: '18 dk',
    category: 'Yapay Zeka',
    imageUrl: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2047&auto=format&fit=crop',
    content: `
      <h2>Google Gemini: Kurumsal Yazılımda Yeni Bir Beyin</h2>
      <p>Yapay zeka modelleri operasyonel süreçlerde verimlilik rekorları kırıyor. Google'ın en güçlü modeli olan Gemini serisi, APRICODI'nin projelerinde sunduğu "akıllı katman"ın temelini oluşturuyor. Malatya'da yapay zeka odaklı uygulama geliştirme konusunda uzman ekibimizle fark yaratıyoruz. LLM (Large Language Models) teknolojileri artık web sitenizin içine kadar giriyor.</p>
      
      <h3>Gemini ile Neler Yapabiliriz?</h3>
      <ul>
        <li><strong>Anlamsal Arama:</strong> Kullanıcı niyetini anlayan akıllı arama motorları. Müşteriniz "Bana kışlık, uygun fiyatlı ama kaliteli bir bot göster" dediğinde Gemini ona en uygun listeyi sunar.</li>
        <li><strong>Otomatik Rapor Özetleme:</strong> Binlerce satırlık veriyi saniyeler içinde analiz edip yöneticiye bir paragraflık özet ve öneri sunmak.</li>
        <li><strong>Chatbot ve Destek:</strong> İnsan gibi konuşabilen, ürünlerinizi ezbere bilen 7/24 aktif dijital satış temsilcileri.</li>
      </ul>
      <p>Geleceği beklemeyin, onu yapay zeka ile bugün inşa edin. Malatya otomasyon ve AI çözümleri için APRICODI hizmetinizde. Gemini'nin çok modlu yetenekleri sayesinde ses, görüntü ve metin verilerini aynı anda işleyebilen gelişmiş uygulamalar geliştiriyoruz.</p>
    `
  },
  {
    id: '9',
    slug: 'modern-ui-ux-trendleri-2025',
    title: '2025 Web ve Mobil Tasarım Trendleri: Geleceğin Arayüzleri',
    excerpt: 'Bento Grid, Glassmorphism ve Minimalizm... 2025 tasarım trendlerini projelerinize nasıl uygularız?',
    date: '20 Kasım 2025',
    readTime: '15 dk',
    category: 'Strateji',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>2025 Tasarım Estetiği: Kullanıcıyı Yormayan Arayüzler</h2>
      <p>Tasarım trendleri her yıl değişir ancak kullanıcı alışkanlıkları daha yavaş evrilir. 2025 yılında tasarımın odağı "daha çok süs" değil, "daha az dikkat dağıtıcı" olmaktır. APRICODI tasarım ekibi olarak, projelerimizde estetik ile fonksiyonelliği birleştiren trendleri merkeze alıyoruz. Malatya web tasarım pazarında modern arayüzlerimizle öne çıkıyoruz. İyi tasarım, kullanıcının siteyi nasıl kullanacağını sormasına gerek bırakmaz.</p>
      
      <h3>1. Bento Grid Düzeni</h3>
      <p>Apple'ın popülerleştirdiği bu yapı, bilgileri farklı boyutlardaki kutucuklar içinde organize eder. Hem masaüstü hem de mobilde muazzam bir hiyerarşi sunar. Malatya kurumsal web sitesi projelerimizde bu modern yaklaşımı uyguluyoruz. Bento gridler, karmaşık verileri sadeleştirerek sunmanın en estetik yoludur.</p>
      <p>Ayrıca, 2025'te "micro-interactions" dediğimiz küçük canlandırmalar, kullanıcıya yaptığı işlem hakkında geri bildirim vererek deneyimi zenginleştirir. APRICODI projelerinde Framer Motion kullanarak bu akıcı deneyimi sağlıyoruz. Tasarımımız sadece göze hitap etmez, markanızın hikayesini anlatır.</p>
    `
  }
];

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Ahmet Yılmaz', role: 'Genel Müdür', company: 'TechVentures', quote: 'Apricodi ekibi, iş modelimizi anlayarak bize özel, ölçeklenebilir bir çözüm sundu.' },
  { id: 't2', name: 'Elif Demir', role: 'Pazarlama Yöneticisi', company: 'ModaZen', quote: 'E-ticaret altyapımızın yenilenmesi satışlarımıza doğrudan olumlu yansıdı.' }
];

export const faqs: FAQItem[] = [
  { question: 'Proje süreçleriniz nasıl işliyor?', answer: 'Analiz, Tasarım, Geliştirme, Test ve Yayın aşamalarını takip ediyoruz.' }
];

export const jobPositions: JobPosition[] = [
  { id: '1', title: 'Frontend Developer', level: 'Yeni Mezun', department: 'Yazılım', workType: 'Remote', location: 'Türkiye', summary: 'React ekosisteminde kendini geliştirmek isteyen ekip arkadaşı arıyoruz.', tags: ['React', 'TS'] }
];

export const contentItems: ContentItem[] = [
  { id: 'CNT-024', title: 'SEO Rehberi', type: 'Blog', owner: 'Apricodi Team', status: 'Yayında', dueDate: '10 Mart 2025', channel: 'Web', priority: 'Orta', tags: ['SEO'], lastUpdate: '02 Mart 2025' }
];
