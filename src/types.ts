
import React from 'react';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  originalPrice?: string; // Prix barré
  discountLabel?: string; // Badge promo (-500€)
  priceNote?: string; // Message d'urgence
  description: string;
  features: string[];
  bonuses?: { title: string; value: string; desc: string }[]; // Cadeaux inclus
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}

export interface ComparisonPoint {
  label: string;
  bad: string;
  good: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}
