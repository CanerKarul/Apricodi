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
  keywords = "yazılım geliştirme, mobil uygulama, web tasarım, malatya yazılım şirketi, kurumsal web sitesi, e-ticaret çözümleri, ui/ux tasarım",
  image = "https://apricodi.com/og-image.jpg", // Placeholder
  url = "https://apricodi.com"
}) => {
  useEffect(() => {
    // Başlığı güncelle
    document.title = `${title} | APRICODI`;

    // Meta açıklamayı güncelle
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Anahtar kelimeleri güncelle
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Open Graph etiketleri (Sosyal Medya için)
    const updateOg = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOg('og:title', title);
    updateOg('og:description', description);
    updateOg('og:image', image);
    updateOg('og:url', url);
    updateOg('og:type', 'website');

  }, [title, description, keywords, image, url]);

  return null;
};