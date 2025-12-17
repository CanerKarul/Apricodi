import { Service, Project, BlogPost, Testimonial, FAQItem, JobPosition, ContentItem } from './types';

export const services: Service[] = [
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
    goals: [
      'Marka bilinirliğini artırmak ve dijital vitrin oluşturmak.',
      'Potansiyel müşteriler için koleksiyon inceleme deneyimini iyileştirmek.',
      'Randevu taleplerini dijital ortamdan almak.'
    ],
    challenges: [
      'Yüksek çözünürlüklü görsellerin performans optimizasyonu.',
      'Minimal tasarım dili ile zengin içerik yapısının dengelenmesi.'
    ],
    solution: [
      'Görsel odaklı, temiz ve modern bir arayüz tasarlandı.',
      'SEO uyumlu içerik yapısı ile arama motoru görünürlüğü artırıldı.',
      'Kullanıcı dostu iletişim modülleri entegre edildi.'
    ],
    keyFeatures: [
      'Gelişmiş Galeri Yönetimi',
      'Blog ve İçerik Yönetim Sistemi',
      'Hızlı İletişim Entegrasyonları'
    ],
    techStack: [
      'Modern CMS Altyapısı',
      'Responsive Frontend',
      'Image Optimization'
    ],
    uxHighlights: [
      'Mobil öncelikli (Mobile-first) yaklaşım.',
      'Sezgisel navigasyon yapısı.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519744531200-c1a510376162?q=80&w=2070&auto=format&fit=crop'
    ],
    liveUrl: 'https://filizcekilbridal.com',
    status: 'Live',
    year: '2024'
  },
  {
    id: 'farkindayiz-platform',
    slug: 'farkindayiz-dijital-guvenlik',
    title: 'Farkındayız Platformu',
    clientOrBrand: 'Sosyal Sorumluluk',
    category: 'Social Impact',
    categoryTags: ['Social Impact', 'Web'],
    industry: 'Sivil Toplum / Eğitim',
    location: 'Türkiye',
    summary: 'Dijital güvenlik ve siber zorbalık konularında toplumsal farkındalık yaratan bilgi platformu.',
    description: 'Dijital dünyadaki risklere karşı bireyleri ve ebeveynleri bilgilendiren, rehber içerikler sunan kapsamlı web portalı.',
    goals: [
      'Dijital okuryazarlık seviyesini artırmak.',
      'Güvenilir bilgiye erişimi kolaylaştırmak.'
    ],
    challenges: [
      'Karmaşık teknik ve hukuki konuların sadeleştirilmesi.',
      'Farklı yaş gruplarına hitap eden bir dil oluşturulması.'
    ],
    solution: [
      'Modüler içerik yapısı ile kolay okunabilir sayfalar tasarlandı.',
      'Kategori bazlı filtreleme sistemi geliştirildi.'
    ],
    keyFeatures: [
      'İçerik Kütüphanesi',
      'E-Bülten Altyapısı',
      'Erişilebilir Tasarım'
    ],
    techStack: [
      'React',
      'Static Site Generation',
      'Headless CMS'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
    ],
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
    description: 'Yerel bir işletmenin dijital varlığını oluşturmak, ürünlerini sergilemek ve müşterilerin mekana ulaşımını kolaylaştırmak için hazırlanan proje.',
    goals: [
      'Dijital menü deneyimi sunmak.',
      'Mekan atmosferini web sitesine yansıtmak.'
    ],
    challenges: [
      'Mobil kullanıcılar için hızlı yüklenen görsel içerik sunumu.'
    ],
    solution: [
      'Tek sayfa (Landing Page) yapısında akıcı bir deneyim kurgulandı.',
      'Google Maps ve sosyal medya entegrasyonları sağlandı.'
    ],
    keyFeatures: [
      'Mobil Uyumlu Tasarım',
      'QR Menü Entegrasyonu',
      'Lokasyon Servisleri'
    ],
    techStack: [
      'HTML/CSS/JS',
      'Responsive Design'
    ],
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
    slug: 'kurumsal-dijital-donusum',
    title: 'Kurumsal Dijital Dönüşüm Yol Haritası',
    excerpt: 'İşletmenizi dijital çağa hazırlarken dikkat etmeniz gereken stratejik adımlar ve teknoloji seçimleri.',
    content: '...',
    date: 'Kasım 2023',
    readTime: '6 dk',
    category: 'Strateji',
    imageUrl: 'https://picsum.photos/seed/strategy/800/400'
  },
  {
    id: '2',
    slug: 'web-performans-seo',
    title: 'Web Performansının SEO ve Dönüşüme Etkisi',
    excerpt: 'Sayfa yüklenme hızının kullanıcı deneyimi ve Google sıralamaları üzerindeki kritik rolü.',
    content: '...',
    date: 'Ekim 2023',
    readTime: '5 dk',
    category: 'Teknoloji',
    imageUrl: 'https://picsum.photos/seed/tech/800/400'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmet Yılmaz',
    role: 'Genel Müdür',
    company: 'TechVentures',
    quote: 'Apricodi ekibi, iş modelimizi anlayarak bize özel, ölçeklenebilir bir çözüm sundu. Süreç yönetimi konusundaki titizlikleri etkileyiciydi.'
  },
  {
    id: 't2',
    name: 'Elif Demir',
    role: 'Pazarlama Yöneticisi',
    company: 'ModaZen',
    quote: 'E-ticaret altyapımızın yenilenmesi sürecinde gösterdikleri profesyonellik, satışlarımıza doğrudan olumlu yansıdı.'
  },
   {
    id: 't3',
    name: 'Caner Öztürk',
    role: 'Kurucu Ortak',
    company: 'LojistikPro',
    quote: 'Teknik yetkinliklerinin yanı sıra iletişim dilleri ve çözüm odaklı yaklaşımları sayesinde projemizi zamanında hayata geçirdik.'
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'Proje süreçleriniz nasıl işliyor?',
    answer: 'Analiz, Tasarım, Geliştirme, Test ve Yayın olmak üzere 5 aşamalı, şeffaf bir süreç yürütüyoruz.'
  },
  {
    question: 'Destek hizmetiniz var mı?',
    answer: 'Evet, proje tesliminden sonra SLA kapsamında bakım ve teknik destek hizmeti sunuyoruz.'
  }
];

export const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Frontend Developer (React)',
    level: 'Yeni Mezun',
    department: 'Yazılım',
    workType: 'Remote',
    location: 'Türkiye Geneli',
    summary: 'Modern web teknolojilerine hakim, UI/UX prensiplerine önem veren ve React ekosisteminde kendini geliştirmek isteyen ekip arkadaşı arıyoruz.',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: '2',
    title: 'Stajyer Yazılım Geliştirici',
    level: 'Staj',
    department: 'Yazılım',
    workType: 'Hybrid',
    location: 'Malatya',
    summary: 'Teknopark ofisimizde gerçek projelerde deneyim kazanmak isteyen, öğrenmeye aç, 3. veya 4. sınıf bilgisayar/yazılım mühendisliği öğrencileri.',
    tags: ['Staj', 'Mentorship', 'Fullstack']
  }
];

export const contentItems: ContentItem[] = [
  {
    id: 'CNT-024',
    title: 'Kurumsal Dijital Dönüşüm Yol Haritası (Longform)',
    type: 'Blog',
    owner: 'Ece Karaca',
    status: 'Yayında',
    dueDate: '12 Şubat 2025',
    channel: 'Web',
    priority: 'Orta',
    tags: ['Strateji', 'Dijitalleşme'],
    lastUpdate: '10 Şubat 2025'
  },
  {
    id: 'CNT-027',
    title: 'SaaS Landing Page revizyonu – Pazaryeri entegrasyonları',
    type: 'Sayfa',
    owner: 'Mert Yılmaz',
    status: 'Revizyon',
    dueDate: '18 Şubat 2025',
    channel: 'Web',
    priority: 'Yüksek',
    tags: ['SEO', 'UI/UX'],
    lastUpdate: '14 Şubat 2025'
  },
  {
    id: 'CNT-031',
    title: 'LinkedIn Carousel: Apricodi CMS başarı hikayesi',
    type: 'Sosyal',
    owner: 'Selin Demir',
    status: 'Yazım',
    dueDate: '16 Şubat 2025',
    channel: 'LinkedIn',
    priority: 'Orta',
    tags: ['Case Study', 'B2B'],
    lastUpdate: '13 Şubat 2025'
  },
  {
    id: 'CNT-034',
    title: 'E-posta Bülteni: Şubat ürün iyileştirmeleri',
    type: 'E-posta',
    owner: 'Okan Sarı',
    status: 'Planlama',
    dueDate: '20 Şubat 2025',
    channel: 'E-posta',
    priority: 'Orta',
    tags: ['Bülten', 'Changelog'],
    lastUpdate: '12 Şubat 2025'
  },
  {
    id: 'CNT-036',
    title: 'YouTube video: Headless CMS entegrasyon süreci',
    type: 'Sosyal',
    owner: 'Ece Karaca',
    status: 'Planlama',
    dueDate: '22 Şubat 2025',
    channel: 'YouTube',
    priority: 'Düşük',
    tags: ['Video', 'Teknik'],
    lastUpdate: '11 Şubat 2025'
  }
];