
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "Apricodi, Apricody, Apricode, yazılım geliştirme, mobil uygulama, web tasarım, malatya yazılım şirketi, kurumsal web sitesi, n8n otomasyon, yapay zeka, ui/ux tasarım",
  image = "https://uuiwyrjzbagvwoobbuor.supabase.co/storage/v1/object/public/apricody/apricodilogo.png",
  url = "https://apricodi.com"
}) => {
  useEffect(() => {
    // Başlığı güncelle
    document.title = `${title} | APRICODI`;

    // Meta yardımcı fonksiyonu
    const setMeta = (attr: string, value: string, content: string, isProperty = false) => {
      let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(isProperty ? 'property' : 'name', value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Temel Metalar
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);

    // Open Graph
    setMeta('property', 'og:title', title, true);
    setMeta('property', 'og:description', description, true);
    setMeta('property', 'og:image', image, true);
    setMeta('property', 'og:url', url, true);

    // Twitter
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

  }, [title, description, keywords, image, url]);

  return null;
};
