import { 
  MapPin, 
  Smartphone, 
  TrendingUp, 
  Zap,
  Search,
  Layout,
  MousePointerClick,
  ShieldCheck
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, ComparisonPoint, TeamMember } from './types';

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Comment ça marche', href: '#process' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Offres', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    icon: Search,
    title: "Analyse de vos concurrents",
    description: "Découvrez ce que font vos concurrents et comment vous démarquer. Nous analysons votre marché local pour vous proposer une stratégie simple."
  },
  {
    icon: TrendingUp,
    title: "Apparaissez sur Google",
    description: "Soyez visible ! Nous faisons en sorte que vos clients locaux vous trouvent facilement lorsqu'ils cherchent vos services."
  },
  {
    icon: Zap,
    title: "Un site qui transforme",
    description: "Un site web qui transforme vos visiteurs en clients. Chaque détail est conçu pour attirer l'attention et inciter à l'action."
  },
  {
    icon: MousePointerClick,
    title: "Suivez vos résultats",
    description: "Suivez vos résultats en un coup d'œil. Découvrez combien de nouveaux clients votre site web génère chaque mois."
  },
  {
    icon: Layout,
    title: "Expérience Mobile",
    description: "Votre site s'affiche parfaitement partout : ordinateur, tablette ou smartphone. Vos clients sont mobiles, votre site aussi."
  },
  {
    icon: Smartphone,
    title: "Passer à l'action",
    description: "Facilitez le contact avec vos clients. Nos formulaires capturent plus de demandes et simplifient vos échanges."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Vous nous contactez",
    description: "Vous réservez votre appel de découverte sur notre site. Vous obtenez votre devis et toutes les réponses à vos questions."
  },
  {
    number: "2",
    title: "Vous validez",
    description: "Vous validez le devis et répondez à un questionnaire complet pour lancer notre prestation. Simple et rapide."
  },
  {
    number: "3",
    title: "On crée votre site",
    description: "Nous créons votre site web sur mesure en délais records. Design optimisé, rédaction incluse et intégration technique."
  },
  {
    number: "4",
    title: "Vous profitez",
    description: "Vous recevez directement votre site web clé en main. Il vous reste simplement à partager votre nouvelle vitrine."
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Kyomu",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Donne à tes prods l'impact qu'elles méritent."
  },
  {
    id: 2,
    title: "Graines de Vie",
    category: "Santé & Bien-être",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Maison de naissance et accompagnement périnatal."
  },
  {
    id: 3,
    title: "Toiture Sorens",
    category: "Artisanat BTP",
    image: "https://images.unsplash.com/photo-1621905252507-b355f6225d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ferblanterie, Couverture, Charpente et Rénovation."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Nicolas",
    role: "CEO",
    company: "Clown Art",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Un grand merci pour notre nouveau site web. Leur professionnalisme ont dépassé nos attentes. Le résultat est moderne, élégant et parfaitement fonctionnel."
  },
  {
    id: 2,
    name: "Henoch",
    role: "Directeur",
    company: "STM Bâtiment",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    quote: "Les mots me manquent pour décrire à quel point ce site a changé la dynamique de ma société. Qualité des vidéos et du design au top."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Site One-Page",
    price: "1'980 €",
    description: "La solution idéale pour une petite entreprise souhaitant un site web rapide, épuré et efficace.",
    features: [
      "Design moderne et personnalisé",
      "Une page claire et professionnelle",
      "Intégration de vos contenus",
      "Optimisation SEO locale",
      "Formulaire de contact efficace",
      "Livraison rapide (15 jours)",
      "Support réactif"
    ],
    isPopular: true,
    buttonText: "Nous contacter sur Whatsapp",
    buttonVariant: "primary"
  },
  {
    title: "Sur Devis",
    price: "Sur mesure",
    description: "Un site complet et sur-mesure, conçu pour répondre à vos besoins spécifiques. Idéal pour une croissance robuste.",
    features: [
      "Site multi-page complet",
      "Possibilité d'ajouter un blog",
      "Shooting photo et vidéo (sur devis)",
      "Processus de démarrage rapide",
      "Personnalisation totale",
      "Intégration d'outils métiers",
      "Support étendu"
    ],
    isPopular: false,
    buttonText: "Demander un devis",
    buttonVariant: "secondary"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Design & Performance",
    bad: "Design vieillot qui ne convertit pas",
    good: "Un site moderne et performant"
  },
  {
    label: "Prix & Transparence",
    bad: "Prix excessifs et coûts cachés",
    good: "Tarifs justes et 100% transparents"
  },
  {
    label: "Délais de livraison",
    bad: "Délais interminables (plusieurs mois)",
    good: "Livraison rapide en quelques semaines"
  },
  {
    label: "Suivi & Support",
    bad: "Vous êtes laissé seul après la livraison",
    good: "Travail réalisé par des experts dédiés"
  },
  {
    label: "Engagement",
    bad: "Contrats complexes et contraignants",
    good: "Zéro engagement contraignant"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Est-ce que l'hébergement du site est compris ?",
    answer: "Oui, nous gérons l'hébergement pour vous garantir une performance optimale et une sécurité maximale. Tout est inclus dans notre offre de maintenance annuelle."
  },
  {
    question: "Pourquoi vos sites ne sont pas des sites classiques ?",
    answer: "Les sites web classiques sont souvent des 'cartes de visite' statiques. Nos sites sont des machines à vendre, optimisés pour le référencement local et la conversion."
  },
  {
    question: "Quels sont les délais de réalisation ?",
    answer: "Une fois les éléments reçus, nous livrons une première version en moins de 15 jours. Nous sommes rapides car nous connaissons les besoins des pros locaux."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Thomas",
    role: "Fondateur",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sophie",
    role: "Directrice Artistique",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Marc",
    role: "Développeur",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];