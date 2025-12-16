import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data';
import { Badge, Button, SectionHeader, Card } from '../components/ui';
import { ArrowLeft, ExternalLink, CheckCircle2, Server, Layout, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      // Redirect or handle 404
      // navigate('/projeler'); 
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">Proje Bulunamadı</h2>
        <Link to="/projeler"><Button>Projelere Dön</Button></Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header / Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-3xl rounded-full translate-x-1/4"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/projeler" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Tüm Projeler
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider border border-brand-500/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
              {project.industry}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {project.summary}
          </p>

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary" className="border-none shadow-brand-500/20">
                Siteyi Ziyaret Et <ExternalLink size={18} className="ml-2" />
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-b border-slate-100 pb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Proje Hakkında</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Müşteri / Marka</h3>
              <p className="text-slate-600">{project.clientOrBrand}</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Konum</h3>
              <p className="text-slate-600">{project.location}</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Yıl</h3>
              <p className="text-slate-600">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Goals & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 bg-brand-50 border-brand-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center text-sm">01</div>
              Hedefler
            </h3>
            <ul className="space-y-3">
              {project.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-600 mt-1 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">02</div>
              Zorluklar
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></div>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Solution Strategy */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Çözüm & Yaklaşım</h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Layout size={20} className="text-brand-500" /> Strateji
                  </h4>
                  <ul className="space-y-4">
                    {project.solution.map((s, i) => (
                      <li key={i} className="text-slate-600 leading-relaxed border-l-2 border-brand-100 pl-4">
                        {s}
                      </li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Server size={20} className="text-brand-500" /> Teknoloji Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm border border-slate-200 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mt-8 mb-4">Ana Özellikler</h4>
                  <ul className="space-y-2">
                     {project.keyFeatures.map(f => (
                       <li key={f} className="text-sm text-slate-600 flex items-center gap-2">
                         <div className="w-1 h-1 bg-brand-500 rounded-full"></div> {f}
                       </li>
                     ))}
                  </ul>
               </div>
             </div>
          </div>
        </div>

        {/* Specialized Highlights (Conditional) */}
        {(project.uxHighlights || project.seoHighlights || project.complianceOrSafety) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
             {project.uxHighlights && (
               <div className="bg-slate-50 p-6 rounded-xl">
                 <h4 className="font-bold text-slate-900 mb-3">UX Öne Çıkanlar</h4>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                   {project.uxHighlights.map(h => <li key={h}>{h}</li>)}
                 </ul>
               </div>
             )}
             {project.seoHighlights && (
               <div className="bg-slate-50 p-6 rounded-xl">
                 <h4 className="font-bold text-slate-900 mb-3">SEO & Performans</h4>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                   {project.seoHighlights.map(h => <li key={h}>{h}</li>)}
                 </ul>
               </div>
             )}
             {project.complianceOrSafety && (
               <div className="bg-slate-50 p-6 rounded-xl">
                 <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <ShieldCheck size={16} /> Güvenlik & Etik
                 </h4>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                   {project.complianceOrSafety.map(h => <li key={h}>{h}</li>)}
                 </ul>
               </div>
             )}
          </div>
        )}

        {/* Gallery */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Proje Görselleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-slate-100"
              >
                <img src={img} alt={`Screenshot ${i+1}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Benzer Bir Proje mi Düşünüyorsunuz?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            İşletmenizin ihtiyaçlarına özel, ölçülebilir ve etkileyici dijital çözümler için tanışalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/teklif-al">
              <Button size="lg" className="shadow-brand-500/25">
                Hemen Teklif Al <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/iletisim">
              <Button variant="outline" size="lg" className="bg-white">
                İletişime Geç
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};