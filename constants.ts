export const CONTACT_INFO = {
  phone: '07 67 05 60 66',
  phoneDisplay: '07 67 05 60 66',
  phoneHref: 'tel:+33767056066',
  email: 'aaron@triva-media.com',
  whatsAppHref: 'https://wa.me/33767056066?text=Bonjour%20Aaron%2C%20je%20suis%20pisciniste%20et%20je%20voudrais%20savoir%20si%20mon%20secteur%20est%20libre.',
  calendlyUrl: 'https://calendly.com/aaron-triva-media/decouverte?hide_gdpr_banner=1',
  founder: 'Aaron, fondateur de Triva Media',
  area: 'France entière, un secteur réservé par client'
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'garantie-echec',
    question: 'Et si ça ne marche pas ?',
    answer: 'Si vous n\'avez pas signé au moins 5 000 € de chantiers dans les 45 jours après le lancement, vous êtes remboursé. Les conditions vous sont expliquées pendant le diagnostic, avant tout engagement.'
  },
  {
    id: 'prix',
    question: 'Combien ça coûte ?',
    answer: 'Le prix dépend de votre zone et de vos objectifs : on vous le donne pendant le diagnostic, par écrit, avant tout paiement. Pas de frais cachés.'
  },
  {
    id: 'references',
    question: 'Vous l\'avez déjà fait pour un pisciniste ?',
    answer: 'On débute sur cette activité, et on ne publiera pas de témoignage avant d\'en avoir un vrai. C\'est pour ça qu\'on s\'engage sur un résultat : vous ne nous croyez pas sur parole, vous nous jugez sur vos chantiers.'
  },
  {
    id: 'plateformes',
    question: 'Quelle différence avec les plateformes de demandes ?',
    answer: 'Une plateforme revend la même demande à 4 ou 5 concurrents, et ça finit en guerre des prix. Chez nous, la demande vient d\'une publicité à votre nom et elle est à vous seul. Un seul pisciniste par secteur.'
  },
  {
    id: 'acces-compte',
    question: 'Vous allez me demander mes accès Facebook et ma carte bancaire ?',
    answer: 'Non. Vous autorisez seulement notre compte à gérer la publicité depuis votre page, et ça se retire en deux clics. Votre carte reste chez Facebook, jamais chez nous.'
  }
];
