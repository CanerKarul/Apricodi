export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  details: string[];
  features: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientOrBrand: string;
  category: string; // Primary category for high-level grouping
  categoryTags: string[]; // Specific tags for filtering
  industry: string;
  location: string;
  summary: string; // Short summary for cards
  description: string; // Longer description if needed
  
  // Case Study Details
  goals: string[];
  challenges: string[];
  solution: string[];
  keyFeatures: string[];
  techStack: string[]; // e.g., "React", "Netlify", "CMS"
  
  // Highlights
  uxHighlights?: string[];
  seoHighlights?: string[];
  complianceOrSafety?: string[]; // Specific for social impact/legal projects
  
  imageUrl: string; // Cover image
  gallery: string[]; // Additional screenshots
  
  liveUrl?: string;
  status: 'Live' | 'In Progress' | 'Maintenance';
  year: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface JobPosition {
  id: string;
  title: string;
  level: 'Staj' | 'Yeni Mezun' | 'Junior' | 'Mid' | 'Senior';
  department: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  location: string;
  summary: string;
  tags: string[];
}