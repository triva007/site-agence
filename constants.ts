import { ProcessStep, FaqItem, TradePreset } from './types';

export const TRADE_PRESETS: TradePreset[] = [
  {
    id: "pool",
    name: "Pisciniste (Coque, Béton, Rénovation)",
    defaultTicket: 32000,
    minTicket: 18000,
    maxTicket: 80000,
    typicalMargin: 35,
    description: "Installations complètes, bassins maçonnés, couloirs de nage, volets immergés."
  },
  {
    id: "renovation",
    name: "Rénovation Globale & Aménagement",
    defaultTicket: 45000,
    minTicket: 25000,
    maxTicket: 150000,
    typicalMargin: 30,
    description: "Rénovations complètes de maisons ou appartements, redistribution des pièces, second œuvre lourd."
  },
  {
    id: "extension",
    name: "Extension de maison & Surélévation",
    defaultTicket: 65000,
    minTicket: 35000,
    maxTicket: 200000,
    typicalMargin: 28,
    description: "Agrandissements ossature bois ou maçonnerie, création d'étages, suites parentales."
  },
  {
    id: "joinery",
    name: "Menuiserie Extérieure & Vérandas / Pergolas",
    defaultTicket: 16000,
    minTicket: 8000,
    maxTicket: 45000,
    typicalMargin: 38,
    description: "Pergolas bioclimatiques, vérandas aluminium haut de gamme, baies coulissantes XXL."
  },
  {
    id: "landscape",
    name: "Aménagement Extérieur & Paysagisme de prestige",
    defaultTicket: 22000,
    minTicket: 12000,
    maxTicket: 60000,
    typicalMargin: 32,
    description: "Terrasses bois/grès cérame, cuisines d'été, aménagements complets de jardins de villa."
  },
  {
    id: "roofing",
    name: "Couverture, Charpente & Toiture complète",
    defaultTicket: 28000,
    minTicket: 15000,
    maxTicket: 70000,
    typicalMargin: 33,
    description: "Réfections complètes de toitures, charpentes traditionnelles, zinguerie haut de gamme."
  }
];

export const PILLARS = [
  {
    number: "01",
    title: "Ciblage géographique laser",
    subtitle: "Uniquement les propriétaires de maisons sur votre secteur",
    description: "Nous paramétrons les algorithmes Meta pour diffuser vos campagnes exclusivement auprès des propriétaires résidant dans un rayon défini autour de votre entreprise (ex: 25 à 45 km). Finis les contacts hors zone ou non finançables."
  },
  {
    number: "02",
    title: "Mise en valeur de votre savoir-faire",
    subtitle: "Des annonces qui imposent votre autorité locale",
    description: "Nous structurons des publicités attractives basées sur vos chantiers récents et vos atouts (garantie décennale, finitions irréprochables, respect des délais). L'objectif : créer le coup de cœur chez des particuliers en phase de réflexion active."
  },
  {
    number: "03",
    title: "Filtre anti-curieux multi-questions",
    subtitle: "Élimination des projets non qualifiés avant tout appel",
    description: "Avant de pouvoir vous contacter, le prospect doit obligatoirement renseigner son statut (propriétaire confirmé), la nature exacte de ses travaux, sa date idéale de démarrage et son budget estimé. Vous ne perdez plus une seule minute avec des locataires ou des budgets irréalistes."
  },
  {
    number: "04",
    title: "Transmission exclusive en temps réel",
    subtitle: "Chaque demande vous appartient à 100%",
    description: "Dès qu'un dossier est validé, vous recevez une alerte instantanée sur WhatsApp, SMS ou par e-mail avec l'ensemble des réponses du client. Vous êtes le seul et unique professionnel contacté : aucune mise en concurrence artificielle."
  }
];

export const COMPARISON_POINTS = [
  {
    criterion: "Propriété des demandes",
    triva: "100% Exclusif. Chaque prospect demande explicitement à travailler avec votre entreprise.",
    traditional: "Partagé avec 3 à 5 concurrents simultanément.",
    wordOfMouth: "Exclusif, mais totalement imprévisible d'un mois à l'autre."
  },
  {
    criterion: "Filtrage du budget",
    triva: "Filtre strict obligatoire (seuls les projets au-dessus de votre seuil de rentabilité passent).",
    traditional: "Aucun filtre sérieux : multitude de demandes de dépannage ou sans budget.",
    wordOfMouth: "Aléatoire : beaucoup de temps passé à chiffrer des projets qui n'aboutissent pas."
  },
  {
    criterion: "Contrôle du carnet de commandes",
    triva: "Volume pilotable : vous pouvez accélérer ou freiner selon la charge de vos équipes.",
    traditional: "Abonnement fixe avec des leads de qualité très variable.",
    wordOfMouth: "Subi : périodes de surcharge suivies de trous imprévus dans le planning."
  },
  {
    criterion: "Notoriété locale de votre marque",
    triva: "Toutes les publicités valorisent votre nom, vos réalisations et votre réputation locale.",
    traditional: "Vous financez la marque de la plateforme tierce, pas la vôtre.",
    wordOfMouth: "Limitée au cercle proche de vos anciens clients."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnostic de votre zone (30 min)",
    description: "Échange direct avec Aaron pour analyser votre secteur, vos prestations cibles et votre capacité d'absorption de nouveaux chantiers.",
    details: [
      "Définition du rayon d'intervention optimal",
      "Sélection des chantiers les plus rentables pour votre planning",
      "Vérification de la disponibilité exclusive de votre secteur"
    ]
  },
  {
    number: "02",
    title: "Conception du dispositif d'acquisition",
    description: "Nous rédigeons les angles publicitaires et assemblons les visuels valorisant vos réalisations, sans vous faire perdre de temps.",
    details: [
      "Rédaction des accroches adaptées à la psychologie des propriétaires",
      "Mise en avant de vos garanties (décennale, finitions, sérieux)",
      "Création des formats publicitaires prêts à diffuser"
    ]
  },
  {
    number: "03",
    title: "Paramétrage du filtre de qualification",
    description: "Construction du questionnaire qui vérifie le budget, le type d'habitation et le délai souhaité par le particulier.",
    details: [
      "Seuil de budget minimum personnalisé",
      "Vérification de l'adresse et du statut de propriétaire",
      "Connexion de la transmission directe sur votre WhatsApp / E-mail"
    ]
  },
  {
    number: "04",
    title: "Lancement & Optimisation continue",
    description: "Activation des campagnes sur Facebook & Instagram avec un suivi serré pour maximiser le nombre de contacts pertinents.",
    details: [
      "Ajustement quotidien du ciblage et des budgets",
      "Élimination des requêtes non pertinentes",
      "Point régulier et transparent avec Aaron sur les retours chantiers"
    ]
  }
];

export const WHO_IS_IT_FOR = {
  ideal: [
    "Vous êtes artisan ou dirigeant d'une entreprise du BTP spécialisée dans les chantiers à panier moyen élevé (piscines, rénovations complètes, extensions, menuiseries premium, toitures).",
    "Vous avez un véritable savoir-faire, une assurance décennale à jour et des réalisations dont vous êtes fier.",
    "Vous souhaitez stabiliser votre planning plusieurs mois à l'avance sans dépendre uniquement du bouche-à-oreille.",
    "Vous avez la capacité commerciale et technique de rappeler les demandes sérieuses sous 24 à 48 heures."
  ],
  notFor: [
    "Les artisans qui recherchent uniquement des interventions de dépannage urgent ou des chantiers à moins de 5 000 €.",
    "Les entreprises déjà saturées pour les 18 prochains mois sans volonté d'augmenter leur panier moyen ou de recruter.",
    "Les structures qui ne peuvent pas répondre au téléphone ou traiter les demandes des clients dans un délai raisonnable.",
    "Ceux qui cherchent une solution magique sans investissement publicitaire dédié."
  ]
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Pourquoi privilégier Meta Ads (Facebook & Instagram) plutôt que Google ou d'autres canaux ?",
    answer: "Sur Google, vous captez uniquement les personnes qui cherchent déjà activement et qui comparent 10 devis sur la première page. Sur Facebook et Instagram, nous allons chercher directement les propriétaires de maisons dans leur quotidien avec des visuels qui déclenchent un coup de cœur pour vos réalisations. Cela permet de susciter des projets avant même qu'ils ne songent à faire jouer la concurrence."
  },
  {
    question: "Les demandes reçues sont-elles vraiment exclusives à mon entreprise ?",
    answer: "Oui, à 100%. Contrairement aux plateformes d'annonces ou de mise en relation qui revendent la même coordonnée à plusieurs artisans, toutes nos campagnes sont diffusées au nom et aux couleurs de votre entreprise. Quand un particulier remplit le formulaire, c'est pour être recontacté par vous, et uniquement par vous."
  },
  {
    question: "Quel budget publicitaire dois-je prévoir pour la régie Meta ?",
    answer: "Nous conseillons généralement un budget publicitaire régie de 15 € à 25 € par jour (soit environ 450 € à 750 € par mois), versé directement à Meta. Pour des chantiers dont le panier moyen oscille entre 20 000 € et 70 000 €, une seule signature par mois (voire un chantier tous les deux mois) rentabilise très largement l'ensemble du dispositif."
  },
  {
    question: "Je n'ai pas de photos professionnelles ou de vidéos tournées par une agence, est-ce bloquant ?",
    answer: "Pas du tout. Au contraire, les photos et courtes vidéos réelles prises sur vos chantiers avec un smartphone génèrent souvent plus de confiance et de proximité que des visuels trop aseptisés. Nous nous chargeons de les recadrer, de les mettre en valeur et de concevoir des textes percutants."
  },
  {
    question: "Pourquoi appliquez-vous une règle d'exclusivité par zone géographique ?",
    answer: "Parce qu'il serait malhonnête de faire tourner des publicités concurrentes pour deux piscinistes ou deux maîtres d'œuvre sur la même agglomération. Nous travaillons avec une seule entreprise par corps d'état et par secteur géographique pour maximiser votre impact local."
  },
  {
    question: "Comment se déroule la collaboration et y a-t-il un engagement long terme ?",
    answer: "La collaboration est directe et humaine avec Aaron. Nous fonctionnons sans engagement contraignant : la meilleure façon de pérenniser notre partenariat est de générer des chantiers rentables et réguliers pour votre entreprise."
  }
];
