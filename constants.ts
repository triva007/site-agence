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
  ShieldCheck
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
  { value: "1er", label: "Sur Google Maps" },
  { value: "24/7", label: "Votre commercial digital" },
];

export const PROBLEM_CARDS = [
  {
    icon: XCircle,
    title: "L'Invisible",
    description: "Vos voisins cherchent vos services sur Google. S'ils ne vous voient pas dans les 3 premiers résultats, vous n'existez pas.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Smartphone,
    title: "Le Site Moche",
    description: "53% des utilisateurs quittent un site qui met plus de 3 secondes à charger ou qui s'affiche mal sur mobile. C'est autant de clients perdus.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Clock,
    title: "La Perte de Temps",
    description: "Essayer de faire son site soi-même ou gérer ses réseaux sociaux, c'est des heures perdues que vous ne passez pas à faire votre vrai métier.",
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
    icon: MapPin,
    title: "Fiche Google N°1",
    description: "Votre fiche établissement optimisée pour apparaître dans le 'Pack Local' (les 3 premiers résultats de la carte)."
  },
  {
    icon: Layout,
    title: "Design Convertisseur",
    description: "Un site beau, oui. Mais surtout un site psychologiquement conçu pour transformer le visiteur en client."
  },
  {
    icon: Clock,
    title: "Zéro Maintenance",
    description: "Mises à jour, sécurité, modifications... On gère tout. Vous, vous gérez juste l'afflux de clients."
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité Totale",
    description: "Hébergement sécurisé, certificats SSL et sauvegardes automatiques. Votre business est en sécurité."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "L'Audit (Gratuit)",
    description: "On regarde ensemble votre présence actuelle et combien de clients vous perdez chaque mois au profit de vos concurrents."
  },
  {
    number: "2",
    title: "La Construction",
    description: "En 14 jours, nous créons votre site haute performance et optimisons votre fiche Google. Vous validez, on lance."
  },
  {
    number: "3",
    title: "L'Avalanche",
    description: "Votre site est en ligne. Votre fiche Google remonte. Votre téléphone commence à sonner plus souvent."
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
    role: "Gérant Garage",
    company: "AutoFix",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Avant, on ne me trouvait pas sur Google. Depuis que Triva-Media a repris ma fiche et mon site, j'ai dû embaucher un mécano de plus pour suivre la cadence."
  },
  {
    id: 2,
    name: "Sophie",
    role: "Ostéopathe",
    company: "Cabinet Bien-être",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Simple, rapide et super efficace. Je ne m'occupe de rien, et mon agenda Doctolib se remplit tout seul grâce au référencement."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Pack Essentiel",
    price: "1'490 €",
    description: "L'arme absolue pour démarrer et prendre des parts de marché.",
    features: [
      "Site Web Ultra-Rapide (5 pages)",
      "Optimisation Google Maps (GMB)",
      "Rédaction des textes de vente",
      "Hébergement & Nom de domaine inclus",
      "Support WhatsApp Réactif"
    ],
    isPopular: false,
    buttonText: "Je lance mon site",
    buttonVariant: "primary"
  },
  {
    title: "Pack Domination",
    price: "2'490 €",
    description: "Pour ceux qui veulent être N°1 incontesté sur leur ville.",
    features: [
      "Site Web Illimité & Blog",
      "Système de Réservation / Commande",
      "Campagne d'Avis Clients Automatisée",
      "Shooting Photo Pro Inclus",
      "Audit Mensuel des résultats",
      "Priorité Support 7j/7"
    ],
    isPopular: true,
    buttonText: "Je veux dominer ma ville",
    buttonVariant: "secondary"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Temps nécessaire",
    bad: "Des semaines de réunions",
    good: "30 min de votre temps (on gère le reste)"
  },
  {
    label: "Référencement",
    bad: "Site invisible sur Google",
    good: "Optimisé pour être en 1ère page"
  },
  {
    label: "Coût",
    bad: "Abonnements mensuels cachés",
    good: "Paiement unique & transparent"
  },
  {
    label: "Design",
    bad: "Template générique",
    good: "Design sur-mesure haute conversion"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien de temps avant d'avoir des résultats ?",
    answer: "Dès la mise en ligne, votre image change instantanément. Pour le référencement Google, les premiers effets se font sentir sous 2 à 4 semaines, avec une montée en puissance constante."
  },
  {
    question: "Je suis nul en informatique, comment je gère mon site ?",
    answer: "Vous ne gérez rien. C'est notre promesse. Si vous avez une modification à faire (changer un prix, une photo), vous nous envoyez un WhatsApp et on le fait pour vous dans la journée."
  },
  {
    question: "Pourquoi c'est plus cher qu'un site Wix ?",
    answer: "Un site Wix est un outil que vous devez bricoler vous-même. Nous, nous vous vendons un résultat commercial clé en main, optimisé par des experts pour transformer les visiteurs en clients."
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