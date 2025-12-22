
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { GetQuote } from './pages/GetQuote';
import { About } from './pages/About';
import { KVKK } from './pages/KVKK';
import { KVKKBasvuru } from './pages/KVKKBasvuru';
import { CookiePolicy } from './pages/CookiePolicy';
import { Careers } from './pages/Careers';
import { Volunteering } from './pages/Volunteering';
import { CMS } from './pages/CMS';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/projeler/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/teklif-al" element={<GetQuote />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kvkk" element={<KVKK />} />
          <Route path="/kvkk-basvuru-formu" element={<KVKKBasvuru />} />
          <Route path="/cerez-politikasi" element={<CookiePolicy />} />
          <Route path="/bize-katil" element={<Careers />} />
          <Route path="/gonulluluk" element={<Volunteering />} />
          <Route path="/cms" element={<CMS />} />
          
          {/* Aliases */}
          <Route path="/kariyer" element={<Careers />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
