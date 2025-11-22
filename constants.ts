import { 
  MapPin, 
  Smartphone, 
  TrendingUp, 
  Zap,
  Search,
  Layout,
  PhoneCall,
  Clock,
  ArrowUpRight,
  XCircle,
  CheckCircle,
  ShieldCheck,
  Lock,
  RefreshCcw,
  Star
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, ComparisonPoint, TeamMember } from './types';

// Suppression de l'équipe, focus sur le résultat.
export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Pourquoi nous ?', href: '#problem' },
  { label: 'Résultats', href: '#results' },
  { label: 'Comment ça marche', href: '#process' },
  { label: 'Tarifs', href: '#pricing' },
];

export const STATS = [
  { value: "+300%", label: "De visibilité locale" },
  { value: "x5", label: "Appels clients / mois" },
  { value: "100%", label: "Propriétaire du site" },
  { value: "4.9/5", label: "Note moyenne clients" },
];

export const PROBLEM_CARDS = [
  {
    icon: XCircle,
    title: "L'Invisible",
    description: "Vos voisins cherchent vos services sur Google. S'ils ne vous voient pas dans les 3 premiers résultats, vous n'existez pas.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Lock,
    title: "Le Piège de la Location",
    description: "Beaucoup d'agences vous 'louent' votre site. Si vous arrêtez de payer, vous perdez tout. Avec nous, le site est à VOUS.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Star,
    title: "La Peur des Avis",
    description: "Un seul mauvais avis peut ruiner votre réputation. Vous ne savez pas comment inciter les clients heureux à poster et calmer les mécontents.",
    color: "bg-slate-100 text-slate-600"
  }
];

export const FEATURES: Feature[] = [
  {
    icon: TrendingUp,
    title: "Domination Locale",
    description: "Nous optimisons tout pour que lorsque quelqu'un tape votre métier + votre ville, c'est VOUS qui sortez en premier."
  },
  {
    icon: ShieldCheck,
    title: "Le Bouclier d'Avis",
    description: "Notre système intelligent filtre les avis : les clients contents sont dirigés vers Google, les mécontents vers un formulaire privé pour vous."
  },
  {
    icon: RefreshCcw,
    title: "Création ou Refonte",
    description: "Vous avez déjà un site vieux et moche ? On garde votre nom de domaine et on refait tout à neuf pour convertir."
  },
  {
    icon: Lock,
    title: "Propriété à 100%",
    description: "Contrairement aux autres, vous êtes propriétaire de votre site. Pas d'abonnement à vie pour garder votre outil."
  },
  {
    icon: Zap,
    title: "Hébergement Offert",
    description: "La première année, nous vous offrons l'hébergement haute performance, la sécurité SSL et la maintenance."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "L'Audit & Stratégie",
    description: "On analyse votre situation (site existant ou création). On définit comment vous faire passer devant vos concurrents."
  },
  {
    number: "2",
    title: "La Construction",
    description: "En 7 jours, nous créons (ou refaisons) votre site haute performance et installons le système de filtrage d'avis."
  },
  {
    number: "3",
    title: "La Livraison & Propriété",
    description: "On vous remet les clés. Le site est à vous. On lance l'indexation Google pour faire sonner le téléphone."
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Bistrot 12",
    category: "Restauration",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Refonte complète : +40% de réservations le premier mois."
  },
  {
    id: 2,
    title: "Garage Vauthier",
    category: "Automobile",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Note Google passée de 3.8 à 4.7 grâce au filtre d'avis."
  },
  {
    id: 3,
    title: "L'Atelier Coiffure",
    category: "Beauté",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Création de site : 1ère position Google sur sa ville."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marc",
    role: "Gérant Garage",
    company: "AutoFix",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "J'avais un site Wix que je payais tous les mois pour rien. Triva-Media m'a fait un vrai site qui m'appartient et qui m'amène du monde."
  },
  {
    id: 2,
    name: "Sophie",
    role: "Restauratrice",
    company: "Le Petit Coin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Le système de filtre d'avis est génial. J'ai évité deux mauvaises notes injustifiées et j'ai plein de 5 étoiles sur Google maintenant."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Pack Visibilité",
    price: "1'490 €",
    description: "Idéal pour une création ou une refonte efficace.",
    features: [
      "Création ou Refonte complète du site",
      "Livraison clé en main sous 7 jours",
      "Propriété à 100% (Pas de location)",
      "Optimisation Google Maps (GMB)",
      "Hébergement & Sécurité inclus (1 an)",
      "Rédaction des textes de vente"
    ],
    isPopular: false,
    buttonText: "Je lance mon projet",
    buttonVariant: "primary"
  },
  {
    title: "Pack Domination",
    price: "2'490 €",
    description: "Pour blinder votre réputation et écraser la concurrence.",
    features: [
      "Tout du Pack Visibilité",
      "Livraison express sous 7 jours",
      "Système 'Bouclier d'Avis' (Filtrage)",
      "Campagne d'Avis Clients Automatisée",
      "Site Illimité (Pages & Blog)",
      "Shooting Photo Pro Inclus",
      "Priorité Support 7j/7"
    ],
    isPopular: true,
    buttonText: "Je veux dominer ma ville",
    buttonVariant: "secondary"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Propriété du site",
    bad: "Location (Le site ne vous appartient pas)",
    good: "100% Propriétaire (Le site est à vous)"
  },
  {
    label: "Réputation",
    bad: "Vous subissez les mauvais avis",
    good: "Filtrage : Seuls les bons vont sur Google"
  },
  {
    label: "Coût",
    bad: "Abonnements mensuels à vie",
    good: "Paiement unique & transparent"
  },
  {
    label: "Type de prestation",
    bad: "Outil à bricoler soi-même",
    good: "Clé en main (Création ou Refonte)"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "J'ai déjà un site web, pouvez-vous le modifier ?",
    answer: "Oui ! Nous faisons de la refonte. On garde votre nom de domaine, on récupère ce qui est bon, et on refait tout le design et la technique pour qu'il convertisse enfin les visiteurs en clients."
  },
  {
    question: "Le site m'appartient-il vraiment ?",
    answer: "Absolument. Contrairement à beaucoup d'agences qui fonctionnent par abonnement (leasing), chez Triva-Media, une fois le site payé, il est à vous à 100%. Vous êtes libre."
  },
  {
    question: "C'est quoi le 'Filtre d'Avis' ?",
    answer: "C'est un système intelligent qu'on installe. Quand un client veut laisser un avis : s'il met 4 ou 5 étoiles, on l'envoie sur Google. S'il met 1, 2 ou 3 étoiles, on l'envoie vers un formulaire privé que seul vous recevez. Ça protège votre note publique."
  },
  {
    question: "Combien coûte l'hébergement après la 1ère année ?",
    answer: "La première année est offerte. Ensuite, c'est un petit coût annuel (environ 100-150€/an) pour le serveur et le nom de domaine. Vous pouvez payer via nous ou directement à l'hébergeur, c'est transparent."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Alexandre",
    role: "Fondateur & Stratégie",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Sarah",
    role: "Directrice Artistique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "David",
    role: "Lead Développeur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  }
];