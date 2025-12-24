
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Mail, Phone, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { Button, Badge } from './ui';
import { CookieBanner } from './CookieBanner';
import { ChatBot } from './ChatBot';

const ApricodiLogo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <img 
    src="https://uuiwyrjzbagvwoobbuor.supabase.co/storage/v1/object/public/apricody/apricodilogo.png" 
    alt="APRICODI Logo" 
    className={className} 
  />
);

// Reusable Brand Name component with modern gradient and spacing
const BrandName = ({ className = "" }: { className?: string }) => (
  <span className={`font-brand font-black tracking-[0.15em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 select-none ${className}`}>
    APRICODI
  </span>
);

// Modern X Brand Logo Component
const XLogo = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Bize Katıl', path: '/bize-katil' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  // Determine navbar classes based on state
  const navClasses = isOpen
    ? 'bg-white border-b border-slate-100'
    : scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
      : 'bg-white py-4 border-b border-transparent';

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <ApricodiLogo className="h-10 w-auto group-hover:scale-105 transition-transform" />
              <BrandName className="text-2xl" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors flex items-center gap-1.5 ${
                    location.pathname === link.path ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {link.path === '/bize-katil' && (
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  )}
                </Link>
              ))}
              <div className="pl-4 border-l border-slate-200">
                <Link to="/teklif-al">
                  <Button size="sm" variant="primary" className="shadow-none rounded-md px-5">
                    Teklif Al
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-slate-900 hover:bg-slate-50 focus:outline-none relative z-50"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 animate-in slide-in-from-right-10 duration-200 h-[100dvh] overflow-y-auto">
            <Link to="/teklif-al" className="w-full">
              <Button fullWidth size="lg" className="bg-brand-600 text-white">Hemen Teklif Al</Button>
            </Link>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-4 text-xl font-bold border-b border-slate-100 ${
                    location.pathname === link.path ? 'text-brand-600' : 'text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {link.name}
                    {link.path === '/bize-katil' && <Badge variant="brand">YENİ</Badge>}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-auto pb-8 text-slate-500 text-sm text-center">
              &copy; Apricodi Yazılım A.Ş.
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-brand-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-4 mb-6">
              <ApricodiLogo className="h-10 w-auto" />
              <BrandName className="text-2xl" />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Kurumsal dijital dönüşüm, yüksek performanslı web sistemleri ve marka odaklı tasarım çözümleri. İşinizi geleceğe güvenle taşıyın.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'X', icon: XLogo, url: '#' },
                { name: 'LinkedIn', icon: Linkedin, url: '#' },
                { name: 'Instagram', icon: Instagram, url: '#' }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-brand-500 transition-all text-brand-500 hover:text-white border border-slate-700 hover:border-brand-500 group"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Kurumsal</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Hakkımızda', path: '/hakkimizda' },
                { name: 'Projeler / Case Studies', path: '/projeler' },
                { name: 'Bize Katıl / Kariyer', path: '/bize-katil' },
                { name: 'Gönüllülük', path: '/gonulluluk' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-brand-500" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-4 text-sm">
              {[
                'Özel Web Yazılımı',
                'Mobil Uygulama Geliştirme',
                'Kurumsal UI/UX Tasarım',
                'E-ticaret Altyapıları',
                'Bakım & SLA Destek'
              ].map((service) => (
                <li key={service}>
                  <Link to="/hizmetler" className="hover:text-brand-400 transition-colors block">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-500 mt-0.5 shrink-0" size={18} />
                <span className="text-slate-400 leading-relaxed">Yeşilyurt / Malatya</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-500 shrink-0" size={18} />
                <a href="mailto:info@apricodi.com" className="hover:text-brand-400">info@apricodi.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-500 shrink-0" size={18} />
                <a href="tel:+908500000000" className="hover:text-brand-400">+90 850 000 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Apricodi Yazılım A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-slate-500">
            <Link to="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
            <Link to="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <ChatBot />
    </div>
  );
};
