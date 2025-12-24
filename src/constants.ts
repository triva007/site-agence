
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
  Star,
  CreditCard,
  Calendar,
  Infinity,
  Users,
  ImageOff
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, ComparisonPoint, TeamMember } from './types';

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Pourquoi nous ?', href: '#problem' },
  { label: 'Résultats', href: '#results' },
  { label: 'Notre Méthode', href: '#process' },
  { label: 'Programme Ambassadeur', href: '#pricing' },
];

export const STATS = [
  { value: "+300%", label: "De visibilité locale" },
  { value: "x5", label: "Appels clients / mois" },
  { value: "7 Jours", label: "Délai de livraison" },
  { value: "100%", label: "Liberté de choix" },
];

export const PROBLEM_CARDS = [
  {
    icon: XCircle,
    title: "L'Invisibilité Numérique",
    description: "97% de vos prospects cherchent une entreprise locale sur Google avant d'appeler. Si vous n'êtes pas dans le Top 3, vous offrez littéralement votre chiffre d'affaires à vos concurrents.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: ImageOff,
    title: "L'Image Amateur",
    description: "Un site lent, moche ou non sécurisé fait fuir 80% des visiteurs instantanément. Votre image doit inspirer confiance dès la première seconde.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Star,
    title: "La Hantise des Mauvais Avis",
    description: "Une seule mauvaise note injustifiée peut ruiner votre réputation. Notre système 'Bouclier' intercepte les mécontents en privé.",
    color: "bg-slate-100 text-slate-600"
  }
];

export const FEATURES: Feature[] = [
  {
    icon: TrendingUp,
    title: "Domination Locale",
    description: "Nous optimisons tout pour que lorsque quelqu'un tape votre métier + votre ville, c'est VOTRE entreprise qui sort en premier."
  },
  {
    icon: ShieldCheck,
    title: "Le Bouclier d'Avis",
    description: "Notre système intelligent filtre les avis : les clients contents sont dirigés vers Google, les mécontents vers un formulaire privé."
  },
  {
    icon: RefreshCcw,
    title: "Création ou Refonte",
    description: "Site existant ou page blanche : nous livrons un site moderne, rapide et vendeur en seulement 7 jours."
  },
  {
    icon: Lock,
    title: "Liberté Totale",
    description: "Pas de frais cachés, pas de location. Vous êtes propriétaire de votre outil de travail numérique à 100%."
  },
  {
    icon: Zap,
    title: "Livraison Express",
    description: "Votre outil de travail est prêt à générer du chiffre d'affaires en une semaine chrono (7 jours)."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Audit & Choix",
    description: "On analyse votre marché et on définit la meilleure stratégie pour votre entreprise locale."
  },
  {
    number: "2",
    title: "Construction Express",
    description: "En 7 jours, nous créons (ou refaisons) votre site haute performance et installons le système de filtrage d'avis."
  },
  {
    number: "3",
    title: "Lancement & Clients",
    description: "Mise en ligne immédiate. Indexation Google. Votre téléphone commence à sonner."
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Bistrot 12",
    category: "Restauration",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "+40% de réservations en ligne dès le premier mois."
  },
  {
    id: 2,
    title: "Garage Vauthier",
    category: "Automobile",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Positionnement en n°1 sur Maps en un temps record."
  },
  {
    id: 3,
    title: "L'Atelier Coiffure",
    category: "Beauté",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Refonte complète et nettoyage des avis Google."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marc",
    role: "Gérant d'entreprise",
    company: "AutoFix",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Avant, on était invisibles sur Google. Maintenant, on a une image pro et les clients du coin nous trouvent facilement."
  },
  {
    id: 2,
    name: "Sophie",
    role: "Gérante d'établissement",
    company: "Le Petit Coin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Je voulais surtout protéger ma réputation. Le filtre d'avis fonctionne parfaitement."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "PACK CROISSANCE INTÉGRAL",
    price: "SUR DEVIS",
    originalPrice: "2 000 €",
    priceNote: "PROGRAMME AMBASSADEUR 2026",
    description: "Devenez notre réussite locale de référence. Nous baissons notre marge, vous nous offrez votre témoignage.",
    features: [
      "🚀 Site Web Pro livré en 7 jours",
      "✅ 100% Propriétaire (0€ de loyer)",
      "📍 Référencement Google Local (SEO)",
      "📱 Design Moderne & Mobile First",
      "🛡️ Certificat Sécurité SSL",
      "✍️ Rédaction Commerciale Incluse"
    ],
    bonuses: [
      {
         title: "Optimisation Fiche Google (GMB)",
         desc: "Pour apparaître sur la carte",
         value: "OFFERT"
      }
    ],
    isPopular: true, 
    buttonText: "Vérifier la disponibilité locale",
    buttonVariant: "primary" 
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Exclusivité",
    bad: "Travaille avec tout le monde",
    good: "Un seul partenaire par ville et métier"
  },
  {
    label: "Propriété du site",
    bad: "Location cachée",
    good: "100% Propriétaire"
  },
  {
    label: "Délai de livraison",
    bad: "Plusieurs semaines",
    good: "7 jours garantis"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Pourquoi ce tarif 'Ambassadeur' pour 2026 ?",
    answer: "Nous cherchons à nous implanter durablement. Nous acceptons de réduire notre marge sur la première entreprise de la zone en échange d'un témoignage honnête."
  },
  {
    question: "Le site appartient-il à mon entreprise ?",
    answer: "Oui, à 100%. Vous êtes propriétaire du code, du design et du contenu. Vous êtes libre de partir quand vous voulez."
  }
];

export const TEAM: TeamMember[] = [];
