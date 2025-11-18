import { 
  MapPin, 
  Smartphone, 
  TrendingUp, 
  Zap,
  Search,
  Layout,
  MousePointerClick,
  ShieldCheck,
  Users,
  PhoneCall,
  Clock
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, ComparisonPoint, TeamMember } from './types';

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Comment ça marche', href: '#process' },
  { label: 'Exemples', href: '#portfolio' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Questions', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    icon: Users,
    title: "Attirez les voisins",
    description: "Quand quelqu'un cherche votre service dans le quartier, c'est vous qu'il doit voir en premier, pas votre concurrent."
  },
  {
    icon: PhoneCall,
    title: "Faites sonner le téléphone",
    description: "Nous ne faisons pas juste 'un site'. Nous mettons en place des boutons d'appels et de réservation partout où c'est utile."
  },
  {
    icon: Layout,
    title: "L'image d'un pro",
    description: "Un site moche ou cassé fait fuir les clients. Nous vous donnons une image haut de gamme qui inspire immédiatement confiance."
  },
  {
    icon: Smartphone,
    title: "Parfait sur mobile",
    description: "80% de vos clients vous cherchent sur leur téléphone dans la rue ou le canapé. Votre site sera ultra-rapide pour eux."
  },
  {
    icon: Search,
    title: "Passez devant les autres",
    description: "Nous analysons ce que font vos concurrents locaux pour vous permettre de récupérer leurs clients déçus."
  },
  {
    icon: Clock,
    title: "On s'occupe de tout",
    description: "Vous avez un métier à gérer. Nous gérons la technique, les mises à jour et la sécurité. Vous ne levez pas le petit doigt."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "On discute (30 min)",
    description: "Pas de jargon. Vous nous parlez de votre activité, de vos clients idéaux et de ce que vous voulez vendre le plus."
  },
  {
    number: "2",
    title: "On construit tout",
    description: "Nous créons votre site, écrivons les textes pour convaincre vos clients et paramétrons votre fiche Google Maps."
  },
  {
    number: "3",
    title: "On valide ensemble",
    description: "On vous montre le résultat. On ajuste si besoin. Une fois que vous êtes ravi, on appuie sur le bouton 'Mettre en ligne'."
  },
  {
    number: "4",
    title: "Vous recevez les clients",
    description: "C'est tout. Votre site travaille pour vous 24h/24. Nous restons disponibles sur WhatsApp si vous avez une question."
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Bistrot 12",
    category: "Restauration",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Réservations complètes tous les weekends depuis la mise en ligne."
  },
  {
    id: 2,
    title: "Garage Vauthier",
    category: "Automobile",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "+15 appels par semaine grâce à la fiche Google optimisée."
  },
  {
    id: 3,
    title: "L'Atelier Coiffure",
    category: "Beauté",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Attire une nouvelle clientèle jeune grâce au design moderne."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marc",
    role: "Gérant",
    company: "Garage Vauthier",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Je n'y connais rien en informatique. Triva-Media a tout géré. Aujourd'hui, quand on tape 'garage' dans ma ville, je sors en premier. C'est rentabilisé x10."
  },
  {
    id: 2,
    name: "Sarah",
    role: "Fleuriste",
    company: "Fleur de Coton",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "J'avais peur que ça me prenne du temps. Au final, j'ai juste validé les photos. Le site est magnifique et mes clientes m'en parlent tout le temps."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Pack Visibilité",
    price: "1'980 €",
    description: "Tout ce qu'il faut pour exister localement et rassurer vos clients.",
    features: [
      "Site vitrine complet (Design Pro)",
      "On écrit les textes pour vous",
      "Optimisation Fiche Google (Maps)",
      "Boutons 'Appeler' & 'Venir'",
      "Nom de domaine offert (monsite.fr)",
      "Support direct WhatsApp"
    ],
    isPopular: true,
    buttonText: "Je veux être visible",
    buttonVariant: "primary"
  },
  {
    title: "Pack Croissance",
    price: "Sur Devis",
    description: "Pour ceux qui veulent écraser la concurrence et automatiser.",
    features: [
      "Site multi-pages illimité",
      "Système de réservation en ligne",
      "Shooting Photo Pro inclus",
      "Gestion des avis clients",
      "Campagne de pub locale",
      "Suivi mensuel des résultats"
    ],
    isPopular: false,
    buttonText: "On en discute",
    buttonVariant: "secondary"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Votre implication",
    bad: "Vous devez écrire les textes",
    good: "On fait tout pour vous"
  },
  {
    label: "Résultats",
    bad: "Un site joli mais inutile",
    good: "Un site qui fait sonner le tél"
  },
  {
    label: "Google Maps",
    bad: "Souvent oublié ou mal fait",
    good: "Optimisé pour être N°1"
  },
  {
    label: "Support",
    bad: "Emails sans réponse",
    good: "WhatsApp direct avec l'équipe"
  },
  {
    label: "Propriété",
    bad: "Location (Le site n'est pas à vous)",
    good: "100% à vous après paiement"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Je n'ai pas le temps de m'en occuper, c'est grave ?",
    answer: "C'est justement pour ça qu'on est là. Notre méthode est conçue pour les patrons débordés. On récupère vos infos en 30 minutes, et on s'occupe de tout le reste (textes, design, mise en ligne)."
  },
  {
    question: "Est-ce que je serai visible sur Google ?",
    answer: "Oui, c'est notre priorité. On ne fait pas juste un site, on configure votre fiche Google Maps pour que les gens du quartier vous trouvent quand ils cherchent vos services."
  },
  {
    question: "Y a-t-il des frais cachés chaque mois ?",
    answer: "Non. Le prix du site est unique. Ensuite, vous payez juste l'hébergement (environ 10€/mois) pour que le site reste en ligne. Pas d'abonnement surprise à l'agence."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Alex",
    role: "Expert Stratégie",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Julie",
    role: "Design & Image",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Thomas",
    role: "Référencement Google",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];