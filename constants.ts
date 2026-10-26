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
    answer: 'Si vous n\'avez pas signé au moins 5 000 € de chantiers grâce aux publicités dans les 45 jours après le lancement, on vous rembourse nos honoraires. Le budget publicitaire, payé directement à Facebook, n\'est jamais remboursable. Pour que la garantie s\'applique, vous honorez les rendez-vous, vous envoyez vos devis sous 48 à 72 h, vous gardez la publicité active et vous répondez vite.'
  },
  {
    id: 'prix',
    question: 'Combien ça coûte ?',
    answer: 'On démarre par un engagement de 3 mois, payé en 3 étapes : une partie au démarrage, une partie après 2 visites qualifiées selon vos critères, et le reste au premier chantier signé grâce aux publicités. Pas de frais cachés. Les montants exacts vous sont donnés par écrit pendant l\'appel, avant tout paiement. À la fin des 3 mois, on fait le point et on vous propose la suite.'
  },
  {
    id: 'references',
    question: 'Vous l\'avez déjà fait pour un pisciniste ?',
    answer: 'On débute sur cette activité, et on ne publiera pas de témoignage avant d\'en avoir un vrai, signé par le pisciniste concerné. C\'est pour ça qu\'on s\'engage sur un résultat : au moins 5 000 € de chantiers signés en 45 jours, ou nos honoraires remboursés. Vous ne nous croyez pas sur parole, vous nous jugez sur vos chantiers.'
  },
  {
    id: 'exclusivite-demandes',
    question: 'Les demandes sont-elles vraiment à moi seul ?',
    answer: 'Oui. La publicité est au nom de votre entreprise, et les rendez-vous arrivent dans votre agenda. On ne revend jamais une demande, et on ne travaille qu\'avec un pisciniste par secteur.'
  },
  {
    id: 'plateformes',
    question: 'Quelle différence avec les plateformes de demandes ?',
    answer: 'Une plateforme revend la même demande à 4 ou 5 concurrents : le propriétaire compare, et ça finit en guerre des prix. Chez nous, la demande est à vous seul, elle vient d\'une publicité à votre nom avec le prix indiqué, elle est triée par 4 questions, puis rappelée. Seuls les rendez-vous qualifiés selon vos critères arrivent dans votre agenda.'
  },
  {
    id: 'acces-compte',
    question: 'Vous allez me demander mes accès Facebook et ma carte bancaire ?',
    answer: 'Non. Vous autorisez seulement notre compte à gérer la publicité depuis votre page, et ça se retire en deux clics. Votre carte reste enregistrée chez Facebook, sur votre compte publicitaire, jamais chez nous.'
  },
  {
    id: 'budget-pub',
    question: 'Combien prévoir pour la publicité ?',
    answer: 'On le fixe ensemble pendant l\'appel, selon la taille de votre zone. Vous le payez directement à Facebook, avec votre carte. Il est distinct de nos honoraires et n\'est jamais remboursable, même au titre de la garantie.'
  },
  {
    id: 'delais-chantiers',
    question: 'Au bout de combien de temps j\'ai des demandes ? Et des chantiers ?',
    answer: 'Vous le voyez dès le lancement : chaque demande est rappelée, on fait le point chaque semaine, et la garantie se juge à 45 jours. On met en avant la rénovation et les piscines coques, parce qu\'elles se décident plus vite qu\'une construction neuve : on vous le dit dès le départ, pour que vous jugiez sur des bases honnêtes.'
  }
];
