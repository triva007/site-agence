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
    answer: 'Si aucun rendez-vous qualifié et tenu n\'arrive dans les 30 premiers jours de diffusion, on vous rembourse la mise en place. Le budget payé à Meta n\'est pas concerné. Et sans engagement de durée, vous arrêtez quand vous voulez.'
  },
  {
    id: 'prix',
    question: 'Combien ça coûte ?',
    answer: 'Pendant le mois test : une mise en place payée une fois, puis uniquement les rendez-vous qualifiés et tenus. Pas de frais cachés. Les montants exacts vous sont donnés par écrit pendant l\'appel, avant tout paiement. Au bilan des 30 jours, on vous propose la suite, et vous décidez.'
  },
  {
    id: 'references',
    question: 'Vous l\'avez déjà fait pour un pisciniste ?',
    answer: 'On débute sur cette activité, et on ne publiera pas de témoignage avant d\'en avoir un vrai, signé par le pisciniste concerné. C\'est pour ça que la mise en place est remboursée sans rendez-vous tenu en 30 jours : vous ne nous croyez pas sur parole, vous nous jugez sur un mois.'
  },
  {
    id: 'exclusivite-demandes',
    question: 'Les demandes sont-elles vraiment à moi seul ?',
    answer: 'Oui. La publicité est au nom de votre entreprise, et les coordonnées du propriétaire arrivent directement sur votre téléphone. On ne revend aucune demande, et on ne travaille qu\'avec un pisciniste par secteur.'
  },
  {
    id: 'plateformes',
    question: 'Quelle différence avec les plateformes de demandes ?',
    answer: 'Une plateforme revend la même demande à 4 ou 5 concurrents : le propriétaire compare, et ça finit en guerre des prix. Chez nous, la demande est à vous seul, elle vient d\'une publicité à votre nom, et elle est triée par 4 questions avant d\'arriver.'
  },
  {
    id: 'acces-compte',
    question: 'Vous allez me demander mes accès Facebook et ma carte bancaire ?',
    answer: 'Non. Vous autorisez seulement notre compte à gérer la publicité depuis votre page, et ça se retire en deux clics. Votre carte reste enregistrée chez Meta, sur votre compte publicitaire, jamais chez nous.'
  },
  {
    id: 'budget-pub',
    question: 'Combien prévoir pour la publicité ?',
    answer: 'On le fixe ensemble pendant l\'appel, selon la taille de votre zone. Vous le payez directement à Meta, avec votre carte : vous pouvez l\'augmenter, le baisser ou l\'arrêter.'
  },
  {
    id: 'delais-chantiers',
    question: 'Au bout de combien de temps j\'ai des demandes ? Et des chantiers ?',
    answer: 'Vous le voyez pendant le mois test : chaque demande arrive sur votre téléphone, on fait le point chaque semaine, puis un bilan à 30 jours. Une construction se signe ensuite en 2 à 4 mois : on vous le dit dès le départ, pour que vous jugiez sur des bases honnêtes.'
  }
];
