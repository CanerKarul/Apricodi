import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Button, Badge } from '../components/ui';
import { services } from '../data';
import { Check, ArrowRight, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-24 px-4 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="brand">Hizmetlerimiz</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-8 mb-6 tracking-tight">
            Uçtan Uca Dijital Çözümler
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            İşletmenizin dijital olgunluk seviyesini artırmak için strateji, tasarım ve yazılımı birleştiriyoruz.
          </p>
        </div>
      </section>

      {/* Services List - Long Form */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-24 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-black text-slate-100">{`0${index + 1}`}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description} İş süreçlerinizi optimize etmek ve dijital varlığınızı güçlendirmek için en modern metodolojileri kullanıyoruz.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Kapsam</h4>
                      <ul className="space-y-3">
                        {service.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-slate-700">
                            <Check size={18} className="text-brand-600 mt-0.5 shrink-0" />
                            <span className="text-sm">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Kazanımlar</h4>
                      <ul className="space-y-3">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-slate-700">
                            <Minus size={18} className="text-slate-300 mt-0.5 shrink-0" />
                            <span className="text-sm font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/teklif-al">
                    <Button variant={index % 2 === 0 ? 'primary' : 'secondary'}>
                      Bu Hizmet İçin Teklif Al <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1 w-full">
                   <div className="relative aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                     {/* Replace with actual image related to service */}
                     <img 
                       src={`https://picsum.photos/seed/${service.id}/800/600?grayscale`} 
                       alt={service.title} 
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                   </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projeniz için doğru zaman mı?</h2>
          <p className="text-slate-400 text-lg mb-10">
            15 dakikalık ücretsiz bir keşif görüşmesi ile ihtiyaçlarınızı analiz edelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/teklif-al">
              <Button size="lg" className="bg-brand-600 text-white hover:bg-brand-500 border-none px-10">
                Hemen Başlayın
              </Button>
            </Link>
            <Link to="/iletisim">
              <Button variant="outline" size="lg" className="bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:text-white hover:border-slate-500">
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};