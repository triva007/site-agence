
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
  { label: 'Offres & Tarifs', href: '#pricing' },
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
    description: "97% de vos prospects cherchent un pro sur Google avant d'appeler. Si vous n'êtes pas dans le Top 3, vous offrez littéralement votre chiffre d'affaires à vos concurrents.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: ImageOff,
    title: "L'Image Amateur",
    description: "Un site lent, moche ou non sécurisé fait fuir 80% des visiteurs instantanément. Votre site doit inspirer confiance dès la première seconde, sinon vous perdez des appels.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Star,
    title: "La Hantise des Mauvais Avis",
    description: "Une seule mauvaise note injustifiée peut ruiner votre réputation. Notre système 'Bouclier' intercepte les mécontents en privé et propulse les clients ravis sur Google.",
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
    description: "Choisissez votre modèle : Pack Visibilité (Achat unique) ou Pack Sérénité (Abonnement). Pas de frais cachés."
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
    description: "On analyse votre marché. Vous choisissez la formule qui arrange votre trésorerie : Achat Comptant ou Abonnement Mensuel."
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
    description: "Formule Abonnement : +40% de réservations sans sortir de trésorerie."
  },
  {
    id: 2,
    title: "Garage Vauthier",
    category: "Automobile",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pack Visibilité : Site rentabilisé en 2 mois grâce au SEO local."
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
    role: "Gérant Garage",
    company: "AutoFix",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "J'ai pris l'abonnement à 149€ pour ne pas toucher à ma trésorerie. C'est parfait, tout est inclus et je n'ai rien à gérer."
  },
  {
    id: 2,
    name: "Sophie",
    role: "Restauratrice",
    company: "Le Petit Coin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Je voulais que le site soit à moi tout de suite. J'ai pris le Pack Visibilité. C'est clair, net et le site m'appartient vraiment."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "PACK INTÉGRAL : DOMINATION LOCALE",
    price: "990 €",
    originalPrice: "2'200 €",
    priceNote: "LE PRIX AUGMENTE TRÈS BIENTÔT",
    description: "Tout le système (Site + Google + Réputation). Attention, vu la demande, ce tarif de lancement va bientôt augmenter.",
    features: [
      "🚀 Livré en 7 jours (Clé en main)",
      "Site Web Pro (Création ou Refonte complète)",
      "Positionnement Google (Pour être vu)",
      "🛡️ Filtre Anti-Mauvais Avis (Protection)",
      "Optimisation Fiche Google Maps",
      "Rédaction Commerciale (On vend votre expertise)",
      "✅ 100% À VOUS (Propriétaire à vie)"
    ],
    bonuses: [
      "Formation : Maîtriser Google (Valeur 290€)",
      "Hébergement & Maintenance (3 mois offerts) (Valeur 180€)",
      "Pack 'Réponses aux Avis' (Valeur 150€)"
    ],
    isPopular: true, 
    buttonText: "Bloquer ce tarif maintenant",
    buttonVariant: "primary" 
  },
  {
    title: "PACK SÉRÉNITÉ (ABONNEMENT)",
    price: "149 € /mois",
    originalPrice: "250 € /mois",
    discountLabel: "Idéal Trésorerie",
    priceNote: "Prix bloqué à vie",
    description: "La solution sans risque pour démarrer fort sans toucher à votre trésorerie.",
    features: [
      "Création Site Internet Pro",
      "Hébergement & Nom de domaine",
      "Maintenance technique 24/7",
      "Modifications illimitées",
      "Zéro apport de départ",
      "Support Prioritaire"
    ],
    bonuses: [
      "Frais de mise en service OFFERTS",
    ],
    isPopular: false,
    buttonText: "Je choisis la mensualisation",
    buttonVariant: "outline"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Paiement",
    bad: "Souvent rigide (tout ou rien)",
    good: "Flexible : Comptant (990€) ou Mensuel (149€)"
  },
  {
    label: "Propriété du site",
    bad: "Souvent flou (Location cachée)",
    good: "100% Propriétaire avec le Pack Domination"
  },
  {
    label: "Gestion technique",
    bad: "Facturée à l'heure",
    good: "Incluse avec le Pack Sérénité"
  },
  {
    label: "Délai de livraison",
    bad: "Plusieurs semaines",
    good: "7 jours garantis"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quelle offre dois-je choisir ?",
    answer: "Si vous avez la trésorerie et que vous voulez être propriétaire immédiat sans frais récurrents (hors hébergement après 1 an), le 'Pack Domination' à 990€ (tarif promo) est l'investissement le plus rentable. Si vous préférez lisser la dépense, le 'Pack Sérénité' à 149€/mois est idéal."
  },
  {
    question: "Pour le Pack Domination, que se passe-t-il après 1 an ?",
    answer: "La première année, nous vous offrons l'hébergement et la sécurité. Ensuite, le site vous appartient, vous payez simplement l'hébergement (environ 70€/an) directement au fournisseur. Vous êtes libre."
  },
  {
    question: "Y a-t-il un engagement sur l'abonnement ?",
    answer: "Oui, l'abonnement Sérénité comprend un engagement de 12 mois pour couvrir les frais de création initiale. Au-delà, vous êtes libre de continuer pour bénéficier de la maintenance ou d'arrêter."
  },
  {
    question: "Le délai de 7 jours est-il réel ?",
    answer: "Absolument. Dès que nous avons validé vos besoins, notre équipe se met au travail pour livrer une première version complète sous une semaine."
  }
];

export const TEAM: TeamMember[] = [];
