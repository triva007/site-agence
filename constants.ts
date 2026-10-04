export const CONTACT_INFO = {
  phone: '07 67 05 60 66',
  phoneDisplay: '07 67 05 60 66',
  phoneHref: 'tel:+33767056066',
  email: 'aaron@triva-media.com',
  whatsAppHref: 'https://wa.me/33767056066?text=Bonjour%20Aaron%2C%20je%20suis%20pisciniste%20et%20je%20voudrais%20savoir%20si%20mon%20secteur%20est%20libre.',
  calendlyUrl: 'https://calendly.com/aaron-triva-media/decouverte?hide_gdpr_banner=1',
  founder: 'Aaron — fondateur de Triva Media',
  area: 'France entière, un secteur réservé par client'
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'meta-vs-google',
    question: 'Pourquoi Facebook et Instagram plutôt que Google ?',
    answer: 'Sur Google, vous ne touchez que les gens qui cherchent déjà et qui comparent dix devis. Sur Facebook et Instagram, vos réalisations apparaissent chez les propriétaires de votre secteur pendant qu\'ils réfléchissent à leur projet, avant qu\'ils fassent jouer la concurrence.'
  },
  {
    id: 'exclusivite-demandes',
    question: 'Les demandes sont-elles vraiment à moi seul ?',
    answer: 'Oui. La publicité est au nom de votre entreprise et la personne vous contacte, vous. On ne revend aucune demande, et on ne travaille qu\'avec un pisciniste par secteur.'
  },
  {
    id: 'budget-pub',
    question: 'Combien dois-je prévoir pour la publicité ?',
    answer: 'On le fixe ensemble pendant le diagnostic, selon la taille de votre zone et vos objectifs. Vous le payez directement à Meta, sur votre compte : vous pouvez l\'augmenter, le baisser ou l\'arrêter.'
  },
  {
    id: 'photos-pro',
    question: 'Je n\'ai pas de photos professionnelles. C\'est bloquant ?',
    answer: 'Non. Des photos de chantiers prises au téléphone suffisent. On s\'occupe de les mettre en valeur.'
  },
  {
    id: 'delais-chantiers',
    question: 'Au bout de combien de temps j\'ai des demandes ? Et des chantiers ?',
    answer: 'Les premières demandes arrivent en général dans les premières semaines de diffusion. Une construction de piscine se signe ensuite en 2 à 4 mois : on vous le dit dès le départ pour que vous jugiez sur des bases honnêtes.'
  },
  {
    id: 'garantie-echec',
    question: 'Et si ça ne marche pas ?',
    answer: 'Si aucun rendez-vous qualifié et tenu n\'arrive dans les 30 premiers jours de diffusion, on vous rembourse la mise en place. Et comme il n\'y a pas d\'engagement de durée, vous pouvez arrêter au bilan.'
  },
  {
    id: 'pourquoi-exclusivite',
    question: 'Pourquoi un seul pisciniste par secteur ?',
    answer: 'Pour que vous ne soyez jamais en concurrence avec un autre de nos clients. Votre zone vous est réservée tant qu\'on travaille ensemble.'
  },
  {
    id: 'attentes-pisciniste',
    question: 'Qu\'est-ce que vous attendez de moi ?',
    answer: 'Des photos de vos réalisations, vos critères (zone, type de projets, budget minimum) et que vous rappeliez les demandes sous 48 h. Le reste, on s\'en occupe.'
  }
];
