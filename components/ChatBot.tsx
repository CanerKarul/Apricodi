import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Minus, Bot, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Option {
  label: string;
  value: string;
  action?: () => void;
  link?: string;
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Ana Menü Seçenekleri
  const mainOptions: Option[] = [
    { label: '🚀 Yeni Proje Başlat', value: 'new_project' },
    { label: '🛠 Hizmetleri İncele', value: 'services' },
    { label: '👨‍💻 Bize Katıl (Kariyer)', value: 'career' },
    { label: '📞 İletişime Geç', value: 'contact' },
  ];

  // İlk mesajı yükle
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
          text: 'Merhaba! Ben Apricodi Asistan. Size nasıl yardımcı olabilirim? Aşağıdaki seçeneklerden birini seçebilir veya sorunuzu yazabilirsiniz.',
          options: mainOptions,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleOptionClick = (option: Option) => {
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: option.label };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse: Message;

      switch (option.value) {
        case 'new_project':
          botResponse = {
            id: (Date.now() + 1).toString(),
            role: 'bot',
            text: 'Harika bir fikir! APRICODI olarak kurumsal web siteleri, mobil uygulamalar ve özel yazılım çözümleri geliştiriyoruz. Projenizi detaylandırmak ve teklif almak için formumuza yönelebilirsiniz.',
            options: [
              { label: 'Teklif Formuna Git', value: 'go_quote', action: () => navigate('/teklif-al') },
              { label: 'Ana Menüye Dön', value: 'main' }
            ]
          };
          break;
        case 'services':
          botResponse = {
            id: (Date.now() + 1).toString(),
            role: 'bot',
            text: 'Kurumsal Web Yazılım, Mobil Uygulama, UI/UX Tasarım ve E-Ticaret çözümleri sunuyoruz. Tüm hizmetlerimizi detaylıca incelemek ister misiniz?',
            options: [
              { label: 'Tüm Hizmetleri Gör', value: 'go_services', action: () => navigate('/hizmetler') },
              { label: 'Özel Yazılım Detayları', value: 'main' }, // Placeholder for deep dive if needed
              { label: 'Ana Menü', value: 'main' }
            ]
          };
          break;
        case 'career':
          botResponse = {
            id: (Date.now() + 1).toString(),
            role: 'bot',
            text: 'APRICODI ekibi her zaman yetenekli ve öğrenmeye açık yeni takım arkadaşları arıyor. Güncel açık pozisyonlarımızı görebilir veya genel başvuru yapabilirsiniz.',
            options: [
              { label: 'Açık Pozisyonlar', value: 'go_careers', action: () => navigate('/bize-katil') },
              { label: 'Gönüllülük Programı', value: 'go_volunteer', action: () => navigate('/gonulluluk') },
              { label: 'Ana Menü', value: 'main' }
            ]
          };
          break;
        case 'contact':
          botResponse = {
            id: (Date.now() + 1).toString(),
            role: 'bot',
            text: 'Bize Malatya ofisimizden ulaşabilir veya info@apricodi.com üzerinden yazabilirsiniz. İletişim sayfamızda tüm detaylı bilgiler yer alıyor.',
            options: [
              { label: 'İletişim Bilgileri', value: 'go_contact', action: () => navigate('/iletisim') },
              { label: 'Haritada Gör', value: 'main' },
              { label: 'Ana Menü', value: 'main' }
            ]
          };
          break;
        case 'main':
          botResponse = {
            id: (Date.now() + 1).toString(),
            role: 'bot',
            text: 'Tabii, size başka nasıl yardımcı olabilirim?',
            options: mainOptions
          };
          break;
        default:
          botResponse = {
            id: (Date.now() + 1).toString(),
            role: 'bot',
            text: 'Sizi ilgili sayfaya yönlendiriyorum. Başka bir sorunuz olursa buradayım.',
            options: [{ label: 'Ana Menü', value: 'main' }]
          };
      }
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleSend = () => {
    const userInput = input.trim().toLowerCase();
    if (!userInput) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let botText = '';
      let botOptions: Option[] = mainOptions;

      // Keyword Detection
      const isPriceQuery = userInput.includes('fiyat') || userInput.includes('kaç lira') || userInput.includes('maliyet') || userInput.includes('ücret') || userInput.includes('ne kadar');
      const isProjectRequest = userInput.includes('site yaptırmak') || userInput.includes('web sitesi') || userInput.includes('proje') || userInput.includes('yaptırmak istiyorum');
      const isCareerQuery = userInput.includes('iş') || userInput.includes('ilan') || userInput.includes('kariyer') || userInput.includes('çalışmak') || userInput.includes('staj');
      const isServicesQuery = userInput.includes('hizmet') || userInput.includes('neler yapıyorsunuz') || userInput.includes('ne iş yaparsınız');
      const isContactQuery = userInput.includes('iletişim') || userInput.includes('adres') || userInput.includes('telefon') || userInput.includes('mail') || userInput.includes('ulaşım');

      if (isPriceQuery) {
        botText = 'Web sitesi ve yazılım projelerimizde fiyatlandırma; projenin kapsamına ve ihtiyaç duyulan teknik özelliklere göre belirlenir. Size özel bir fiyat çalışması için teklif formumuzu doldurabilirsiniz.';
        botOptions = [
          { label: 'Teklif Al', value: 'go_quote', action: () => navigate('/teklif-al') },
          { label: 'Ana Menü', value: 'main' }
        ];
      } else if (isProjectRequest) {
        botText = 'APRICODI olarak kurumsal web siteleri ve özel yazılımlar konusunda uzmanız. Projenizden bahsederseniz size en uygun yol haritasını hazırlayabiliriz.';
        botOptions = [
          { label: 'Proje Formuna Git', value: 'go_quote', action: () => navigate('/teklif-al') },
          { label: 'Referansları Gör', value: 'projects', link: '/projeler' },
          { label: 'Ana Menü', value: 'main' }
        ];
      } else if (isCareerQuery) {
        botText = 'Yazılım dünyasına bizimle adım atmak ister misiniz? Açık pozisyonlarımızı ve staj imkanlarımızı kariyer sayfamızdan takip edebilirsiniz.';
        botOptions = [
          { label: 'İş İlanlarını Gör', value: 'go_careers', action: () => navigate('/bize-katil') },
          { label: 'Genel Başvuru Yap', value: 'go_careers', action: () => navigate('/bize-katil') },
          { label: 'Ana Menü', value: 'main' }
        ];
      } else if (isServicesQuery) {
        botText = 'Web, mobil, tasarım ve e-ticaret alanlarında profesyonel çözümler sunuyoruz. Detaylı hizmet listemize göz atmak ister misiniz?';
        botOptions = [
          { label: 'Hizmetlerimizi İncele', value: 'go_services', action: () => navigate('/hizmetler') },
          { label: 'Ana Menü', value: 'main' }
        ];
      } else if (isContactQuery) {
        botText = 'Bizimle her zaman iletişime geçebilirsiniz. Malatya Teknopark ofisimizde veya dijital kanallarımızda sizi bekliyoruz.';
        botOptions = [
          { label: 'İletişim Sayfası', value: 'go_contact', action: () => navigate('/iletisim') },
          { label: 'Ana Menü', value: 'main' }
        ];
      } else {
        botText = `"${input}" hakkındaki mesajınızı aldım. Size daha iyi yardımcı olabilmem için ana menüdeki kategorilerden seçim yapabilirsiniz:`;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: botText,
        options: botOptions
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Apricodi Asistan</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-slate-400 font-medium">Size yardım için hazır</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1">
                <Minus size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-6 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {/* Bot Options (Buttons) */}
                  {msg.role === 'bot' && msg.options && (
                    <div className="flex flex-wrap gap-2 mt-3 w-full">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (opt.value === 'main') {
                              handleOptionClick({ label: 'Ana Menüye Dön', value: 'main' });
                            } else if (opt.action) {
                              opt.action();
                            } else {
                              handleOptionClick(opt);
                            }
                          }}
                          className="bg-white hover:bg-brand-50 text-slate-700 border border-slate-200 hover:border-brand-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 group"
                        >
                          {opt.label}
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  placeholder="Bir şeyler yazın..." 
                  className="flex-grow px-4 py-3 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                />
                <button 
                  onClick={handleSend} 
                  disabled={!input.trim()} 
                  className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-600 transition-all shadow-lg active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">
                Apricodi Guided Assistant v1.0
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`fixed bottom-6 right-4 md:right-8 z-50 w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-brand-600'
        }`}
      >
        <div className="relative">
          {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={28} className="text-white" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-4 border-brand-600 animate-ping"></span>
          )}
        </div>
        
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-white text-slate-900 text-xs font-bold py-3 px-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-xl border border-slate-100 translate-x-4 group-hover:translate-x-0">
            👋 Size nasıl yardımcı olabilirim?
          </div>
        )}
      </button>
    </>
  );
};