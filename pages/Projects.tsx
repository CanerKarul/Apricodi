
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Card, Badge, Button, Input } from '../components/ui';
import { projects } from '../data';
import { ExternalLink, Search, ArrowRight, Filter, LayoutGrid, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectIllustration } from '../components/ProjectIllustration';
import { SEO } from '../components/SEO';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Web', 'Social Impact', 'Fashion', 'Food & Beverage'];

  const filteredProjects = projects.filter(p => {
    const matchesFilter = filter === 'All' || p.categoryTags.includes(filter);
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pb-32">
      <SEO 
        title="Projelerimiz | APRICODI" 
        description="APRICODI tarafından hayata geçirilen kurumsal web yazılımı, mobil uygulama ve dijital dönüşüm projelerini inceleyin."
      />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-40 pb-32 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="brand" className="mb-6">PORTFOLYO</Badge>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
              Dijital <span className="text-brand-500">Başarı</span> <br/>
              Hikayelerimiz
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Fikirlerin nasıl gerçeğe dönüştüğünü, piksellerin nasıl değer ürettiğini keşfedin. Sektör sınırlaması olmaksızın en iyisini tasarlıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        {/* Controls Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white p-6 md:p-10 mb-16"
        >
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-3 rounded-2xl text-sm font-black transition-all duration-300 ${
                    filter === f 
                    ? 'bg-brand-500 text-white shadow-xl shadow-brand-500/20 scale-105' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {f === 'All' ? 'TÜM PROJELER' : f.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-96 relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Proje veya teknoloji ara..." 
                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-100 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none bg-slate-50/50 text-slate-900 placeholder:text-slate-400 font-bold transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card className="overflow-hidden group h-full flex flex-col bg-white border-none shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 rounded-[2.5rem]">
                    {/* Visual Area */}
                    <Link to={`/projeler/${project.slug}`} className="block relative overflow-hidden h-72">
                      <ProjectIllustration projectId={project.id} className="transform group-hover:scale-110 transition-transform duration-1000" />
                      
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm z-20">
                        <Button variant="primary" size="md" className="rounded-2xl px-8 shadow-2xl">
                          Projeyi İncele <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </div>

                      {/* Floating Category Badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black text-brand-600 uppercase tracking-widest shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content Area */}
                    <div className="p-10 flex-grow flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 text-slate-400">
                          <LayoutGrid size={14} />
                          <span className="text-xs font-bold uppercase tracking-widest">{project.industry}</span>
                        </div>
                        <span className="text-xs font-black text-slate-300">{project.year}</span>
                      </div>
                      
                      <Link to={`/projeler/${project.slug}`} className="group-hover:text-brand-600 transition-colors">
                        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                          {project.title}
                        </h3>
                      </Link>
                      
                      <p className="text-slate-500 text-lg mb-8 flex-grow line-clamp-3 leading-relaxed font-light">
                        {project.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-slate-50">
                        {project.techStack.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                            {tag}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-[10px] font-black text-slate-300 py-1.5">+{project.techStack.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200"
            >
              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 text-slate-200">
                <Search size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Eşleşen proje bulunamadı.</h3>
              <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">
                Aradığınız kriterlere uygun sonuç yok. Filtreleri temizleyerek tüm çalışmalarımızı görebilirsiniz.
              </p>
              <Button onClick={() => {setFilter('All'); setSearchQuery('');}} variant="outline" className="px-12 py-4 rounded-2xl font-black">
                Tümünü Göster
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA Teaser */}
        <section className="mt-32">
           <Card className="p-12 md:p-20 bg-slate-900 border-none shadow-2xl rounded-[4rem] relative overflow-hidden text-center text-white">
             <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
             <div className="relative z-10">
               <div className="w-20 h-20 bg-brand-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-500/30">
                 <Sparkles size={40} />
               </div>
               <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">Kendi Projenizi Başlatın</h2>
               <p className="text-slate-200 text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                 Sizin projeniz de bir sonraki başarı hikayemiz olabilir. Hayalinizdeki dijital ürünü birlikte inşa edelim.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link to="/teklif-al">
                   <Button size="lg" className="px-12 py-6 text-xl rounded-2xl shadow-xl shadow-brand-500/20 font-black">Ücretsiz Teklif Al</Button>
                 </Link>
                 <Link to="/iletisim">
                    <Button variant="outline" size="lg" className="px-12 py-6 text-xl rounded-2xl !bg-transparent border-slate-600 text-white hover:border-brand-500 transition-colors font-black">Bize Ulaşın</Button>
                 </Link>
               </div>
             </div>
           </Card>
        </section>
      </div>
    </div>
  );
};
