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
    answer: 'Si aucun rendez-vous qualifié et tenu n\'arrive dans les 30 premiers jours de diffusion, on vous rembourse la mise en place. Et comme il n\'y a pas d\'engagement de durée, vous pouvez arrêter quand vous voulez.'
  },
{
    id: 'prix',
    question: 'Combien coûte votre accompagnement ?',
    answer: 'Une mise en place unique, puis uniquement les rendez-vous qualifiés et tenus. Les montants exacts vous sont annoncés par écrit pendant le diagnostic, avant tout paiement. Pas de frais cachés, pas d\'abonnement, et la mise en place est remboursée si aucun rendez-vous qualifié et tenu n\'arrive dans les 30 premiers jours de diffusion.'
  },
  {
    id: 'references',
    question: 'Vous l\'avez déjà fait pour un pisciniste ?',
    answer: 'On est sur cette activité depuis peu, et on ne publiera pas de témoignage avant d\'en avoir un vrai, signé par le pisciniste concerné. C\'est exactement pour ça que la mise en place est remboursée s\'il n\'y a aucun rendez-vous tenu en 30 jours, et qu\'il n\'y a aucun engagement de durée : vous ne nous croyez pas sur parole, vous nous jugez sur un mois.'
  },
{
    id: 'exclusivite-demandes',
    question: 'Les demandes sont-elles vraiment à moi seul ?',
    answer: 'Oui. La publicité est au nom de votre entreprise et la personne vous contacte, vous. On ne revend aucune demande, et on ne travaille qu\'avec un pisciniste par secteur.'
  },
  {
    id: 'acces-compte',
    question: 'Vous allez me demander mes accès Facebook et ma carte bancaire ?',
    answer: 'Vos accès restent les vôtres. On vous demande seulement d\'autoriser notre compte à gérer la publicité depuis votre page, ce qui se retire en deux clics quand vous voulez. Votre carte est enregistrée chez Meta, sur votre compte publicitaire, jamais chez nous.'
  },
{
    id: 'budget-pub',
    question: 'Combien dois-je prévoir pour la publicité ?',
    answer: 'On le fixe ensemble pendant le diagnostic, selon la taille de votre zone et vos objectifs. Vous le payez directement à Meta, sur votre compte : vous pouvez l\'augmenter, le baisser ou l\'arrêter.'
  },
  {
    id: 'qui-recoit',
    question: 'La demande arrive chez vous ou chez moi ?',
    answer: 'Chez vous. Le propriétaire remplit le formulaire, et ses coordonnées avec ses réponses arrivent directement sur votre téléphone. On les voit aussi, pour ajuster les publicités et faire le point avec vous.'
  },
{
    id: 'delais-chantiers',
    question: 'Au bout de combien de temps j\'ai des demandes ? Et des chantiers ?',
    answer: 'Les premières demandes arrivent en général dans les premières semaines de diffusion. Une construction de piscine se signe ensuite en 2 à 4 mois : on vous le dit dès le départ pour que vous jugiez sur des bases honnêtes.'
  },
{
    id: 'photos-pro',
    question: 'Je n\'ai pas de photos professionnelles. C\'est bloquant ?',
    answer: 'Non. Des photos de chantiers prises au téléphone suffisent. On s\'occupe de les mettre en valeur.'
  },
{
    id: 'meta-vs-google',
    question: 'Pourquoi Facebook et Instagram plutôt que Google ?',
    answer: 'Sur Google, vous ne touchez que les gens qui cherchent déjà et qui comparent dix devis. Sur Facebook et Instagram, vos réalisations apparaissent chez les propriétaires de votre secteur pendant qu\'ils réfléchissent à leur projet, avant qu\'ils fassent jouer la concurrence.'
  }
];
