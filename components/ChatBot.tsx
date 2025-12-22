
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Minus, Bot, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Option {
  label: string;
  value: string;
  path?: string;
  action?: () => void;
}

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  options?: Option[];
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const mainOptions: Option[] = [
    { label: '🚀 Yeni Proje Başlat', value: 'quote', path: '/teklif-al' },
    { label: '🛠 Hizmetleri İncele', value: 'services', path: '/hizmetler' },
    { label: '👨‍💻 Kariyer Fırsatları', value: 'career', path: '/bize-katil' },
    { label: '📞 İletişime Geç', value: 'contact', path: '/iletisim' },
  ];

  // Enhanced Local Knowledge Base & Keyword Matching Logic
  const getLocalResponse = (userInput: string): { text: string; options?: Option[] } => {
    const text = userInput.toLowerCase().trim();
    
    // 1. IDENTITY & ABOUT
    if (text.includes('sen kimsin') || text.includes('apricodi nedir') || text.includes('burası neresi') || text.includes('tanıt') || text.includes('hakkında')) {
      return {
        text: 'Ben APRICODI Dijital Asistanıyım. APRICODI; Malatya Teknopark merkezli, kurumsal web yazılımları, mobil uygulamalar ve yapay zeka entegrasyonları geliştiren bir teknoloji ajansıdır. İsmimiz "Apricot" (Kayısı) ve "Code" kelimelerinin birleşiminden geliyor.',
        options: [{ label: 'Hakkımızda Detay', value: 'about', path: '/hakkimizda' }, ...mainOptions]
      };
    }

    // 2. TEAM & FOUNDERS
    if (text.includes('ekip') || text.includes('kimler var') || text.includes('çalışanlar') || text.includes('caner') || text.includes('nisa') || text.includes('hatice') || text.includes('kurucusu')) {
      return {
        text: 'Ekibimiz uzman mühendislerden oluşuyor. Kurucumuz Caner Karul (Yazılım & Ürün Stratejisi), Nisa Üstündağ (Full-stack & İletişim) ve Hatice Arslan (Yazılım Mühendisliği) APRICODI\'nin çekirdek kadrosunu oluşturmaktadır.',
        options: [{ label: 'Ekibi Tanı', value: 'team', path: '/hakkimizda' }, { label: '👨‍💻 Bize Katıl', value: 'career', path: '/bize-katil' }]
      };
    }

    // 3. CONTACT & REACH OUT
    if (text.includes('iletişim') || text.includes('ulaş') || text.includes('numara') || text.includes('telefon') || text.includes('mail') || text.includes('adres')) {
      return {
        text: 'Bize info@apricodi.com adresinden veya hafta içi 09:00 - 18:00 saatleri arasında +90 850 000 00 00 numaralı telefondan ulaşabilirsiniz. Ofisimiz Malatya Teknopark içerisindedir.',
        options: [{ label: '📞 İletişim Sayfası', value: 'contact', path: '/iletisim' }, { label: '📍 Haritada Gör', value: 'map', path: '/iletisim' }]
      };
    }

    // 4. PROJECT & STARTING BUSINESS
    if (text.includes('iş yaptırmak') || text.includes('proje') || text.includes('fikrim var') || text.includes('yaptırmak istiyorum') || text.includes('yeni iş')) {
      return {
        text: 'Yeni bir proje fikriniz olması harika! Web, mobil veya otomasyon konularında size uçtan uca çözüm sunabiliriz. Detayları paylaşırsanız size özel bir yol haritası çıkarabiliriz.',
        options: [{ label: '🚀 Teklif Formu', value: 'quote', path: '/teklif-al' }, { label: '💡 Hizmetlerimiz', value: 'services', path: '/hizmetler' }]
      };
    }

    // 5. AUTOMATION & N8N / AI
    if (text.includes('n8n') || text.includes('otomasyon') || text.includes('yapay zeka') || text.includes('ai') || text.includes('süreç')) {
      return {
        text: 'n8n ve yapay zeka entegrasyonları ile iş süreçlerinizi otomatikleştiriyoruz. Veri girişinden raporlamaya kadar manuel işleri minimize eden sistemler kuruyoruz. Dijital dönüşümde öncüyüz.',
        options: [{ label: 'Otomasyon Detay', value: 'services', path: '/hizmetler' }, { label: 'Teklif İste', value: 'quote', path: '/teklif-al' }]
      };
    }

    // 6. CAREERS & SALARY
    if (text.includes('maaş') || text.includes('ucret') || text.includes('ücret') || text.includes('kazanç')) {
      return {
        text: 'APRICODI olarak ekibimizin emeğine değer veriyor ve piyasa standartlarının üzerinde, adil bir ücret politikası izliyoruz. Spesifik rakamlar pozisyon ve deneyime göre mülakat aşamasında belirlenmektedir.',
        options: [{ label: '👨‍💻 İlanları Gör', value: 'career', path: '/bize-katil' }]
      };
    }

    if (text.includes('iş arıyorum') || text.includes('staj') || text.includes('başvuru') || text.includes('çalışmak istiyorum') || text.includes('ilan')) {
      return {
        text: 'Kariyer yolculuğunu APRICODI\'de sürdürmek istemen çok güzel! Genç ve dinamik bir ekibimiz var. Güncel ilanlarımızı ve genel başvuru formunu Bize Katıl sayfasında bulabilirsin.',
        options: [{ label: '👨‍💻 İlanları Gör', value: 'career', path: '/bize-katil' }, { label: '🌟 Gönüllü Ol', value: 'vol', path: '/gonulluluk' }]
      };
    }

    // 7. WEB & SEO
    if (text.includes('web') || text.includes('site') || text.includes('seo') || text.includes('google') || text.includes('hız')) {
      return {
        text: 'Ultra hızlı Next.js web siteleri geliştiriyoruz. Teknik SEO skorlarımız (Lighthouse) genellikle 95 üzerindedir. Google\'da üst sıralara çıkmanız için gerekli tüm altyapıyı sağlıyoruz.',
        options: [{ label: 'Web Hizmetleri', value: 'web', path: '/hizmetler' }, { label: '🔍 Projelerimiz', value: 'projects', path: '/projeler' }]
      };
    }

    // 8. MOBILE APPS
    if (text.includes('mobil') || text.includes('uygulama') || text.includes('ios') || text.includes('android') || text.includes('app')) {
      return {
        text: 'React Native ile hem iOS hem de Android için yüksek performanslı mobil uygulamalar üretiyoruz. Uygulamanızı markete (Store) hazır hale getirene kadar yanınızdayız.',
        options: [{ label: 'Mobil Detaylar', value: 'mobile', path: '/hizmetler' }, { label: '🚀 Teklif Al', value: 'quote', path: '/teklif-al' }]
      };
    }

    // 9. GREETINGS & POLiteness
    if (text.includes('teşekkür') || text.includes('sagol') || text.includes('sağol') || text.includes('eyvallah')) {
      return {
        text: 'Rica ederim! Yardımcı olabildiğime sevindim. Başka bir sorunuz olursa her zaman buradayım.',
        options: mainOptions
      };
    }

    if (text.includes('merhaba') || text.includes('selam') || text.includes('naber') || text.includes('nasılsın') || text.includes('hey')) {
      return {
        text: 'Harikayım! APRICODI ekibinin dijital yüzü olarak size yardımcı olmaya hazırım. Web, mobil veya otomasyon... Bugün neyi dijitalleştiriyoruz?',
        options: mainOptions
      };
    }

    // Default Fallback
    return {
      text: 'Bunu tam olarak anlayamadım ama isterseniz hizmetlerimizden, ekibimizden veya nasıl teklif alabileceğinizden bahsedebilirim. Aşağıdaki hızlı seçenekleri deneyebilirsiniz:',
      options: mainOptions
    };
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
          text: 'Merhaba! Ben Apricodi Asistan. APRICODI dünyasına hoş geldiniz. Size nasıl yardımcı olabilirim?',
          options: mainOptions,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getLocalResponse(currentInput);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.text,
        options: response.options
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleOptionClick = (option: Option) => {
    if (option.path) {
      navigate(option.path);
      setIsOpen(false);
    } else {
      const userMsg: Message = { id: Date.now().toString(), role: 'user', text: option.label };
      setMessages(prev => [...prev, userMsg]);
      setIsTyping(true);
      
      setTimeout(() => {
        const response = getLocalResponse(option.label);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: response.text,
          options: response.options
        };
        setMessages(prev => [...prev, botMsg]);
        setIsTyping(false);
      }, 500);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[420px] h-[650px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Apricodi Asistan</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Aktif</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-xl">
                <Minus size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-5 space-y-6 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none font-medium' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-slate-200/50'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {msg.role === 'bot' && msg.options && !isTyping && (
                    <div className="flex flex-wrap gap-2 mt-4 w-full">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-white hover:bg-brand-50 text-slate-700 border border-slate-200 hover:border-brand-500/50 px-4 py-3 rounded-xl text-[11px] font-extrabold transition-all shadow-sm flex items-center gap-2 group active:scale-95"
                        >
                          {opt.label}
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-500" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="bg-white text-slate-400 border border-slate-200 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-brand-500 rounded-full"></motion.span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-brand-500 rounded-full"></motion.span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-brand-500 rounded-full"></motion.span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Yanıt Hazırlanıyor</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-5 bg-white border-t border-slate-100">
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  placeholder="Soru sorun (Örn: Proje fiyatları?)" 
                  className="flex-grow px-5 py-3.5 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400"
                />
                <button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isTyping} 
                  className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-600 transition-all shadow-lg active:scale-95 shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`fixed bottom-6 right-4 md:right-8 z-50 w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-brand-600'
        }`}
      >
        <div className="relative">
          {isOpen ? <X size={26} className="text-white" /> : <MessageSquare size={30} className="text-white" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-4 border-brand-600 animate-ping"></span>
          )}
        </div>
      </button>
    </>
  );
};
