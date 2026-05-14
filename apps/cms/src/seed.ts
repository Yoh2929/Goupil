import type { CmsAboutPage, CmsActionsPage, CmsHomePage } from "../../../packages/cms-contracts/src";

export const homePageSeed: CmsHomePage = {
  hero: {
    eyebrow: "Réemploi informatique en Bretagne",
    title: "Lutter contre la",
    highlight: "fracture numérique",
    description: "Réemploi informatique, inclusion numérique et accompagnement humain sur le territoire breton.",
    primaryCtaLabel: "Découvrir nos actions",
    primaryCtaHref: "/nos-actions",
    secondaryCtaLabel: "Obtenir du matériel",
    secondaryCtaHref: "/contact",
  },
  impactMetrics: [
    { label: "Ordinateurs reconditionnés", value: "2500+", icon: "monitor" },
    { label: "Personnes accompagnées", value: "1200+", icon: "users" },
    { label: "Tonnes de déchets évités", value: "15T", icon: "recycle" },
    { label: "Ateliers réalisés", value: "150+", icon: "graduation-cap" },
  ],
  missions: [
    { title: "Réemploi informatique", description: "Collecte, reconditionnement et redistribution de matériel informatique pour une économie circulaire.", icon: "recycle", accent: "from-blue-500 to-blue-600" },
    { title: "Inclusion numérique", description: "Accompagnement des publics éloignés du numérique pour réduire la fracture digitale.", icon: "users", accent: "from-cyan-500 to-cyan-600" },
    { title: "Ateliers & formation", description: "Sensibilisation aux usages numériques responsables et formation aux outils digitaux.", icon: "graduation-cap", accent: "from-purple-500 to-purple-600" },
    { title: "Médiation numérique", description: "Aide technique et support pour l'accès aux services en ligne et démarches administratives.", icon: "wrench", accent: "from-orange-500 to-orange-600" },
  ],
  projects: [],
  events: [],
  gallery: [],
  testimonials: [],
  newsletter: {
    title: "Restez informé·e",
    description: "Recevez nos actualités, événements et conseils pour un numérique solidaire directement dans votre boîte mail.",
  },
  cta: {
    donateTitle: "Faire un don",
    donateDescription: "Soutenez nos actions d'inclusion numérique et de réemploi informatique.",
    volunteerTitle: "Devenir bénévole",
    volunteerDescription: "Rejoignez une équipe engagée pour un numérique solidaire en Bretagne.",
  },
};

export const aboutPageSeed: CmsAboutPage = {
  hero: {
    eyebrow: "Notre histoire",
    title: "Depuis 2010 au service de",
    highlight: "l'inclusion numérique",
    description: "Association bretonne engagée pour un numérique accessible, solidaire et durable.",
  },
  summary: [
    "Goupil est une association d'inclusion numérique basée en Bretagne qui lutte contre la fracture digitale à travers le réemploi informatique.",
    "Nous collectons, reconditionnons et redistribuons du matériel informatique pour le rendre accessible aux personnes et structures en ayant besoin.",
    "Au-delà du matériel, nous accompagnons les publics éloignés du numérique vers l'autonomie grâce à des ateliers, formations et permanences dédiées.",
  ],
  highlights: [
    { label: "Ordinateurs reconditionnés", value: "2500+", icon: "cpu" },
    { label: "Personnes accompagnées", value: "1200+", icon: "users" },
    { label: "Déchets évités", value: "15T", icon: "recycle" },
    { label: "Territoires couverts", value: "Bretagne", icon: "globe" },
  ],
  values: [
    { title: "Solidarité", description: "Un accès au numérique pour tous, sans discrimination ni barrière financière.", icon: "heart" },
    { title: "Écologie", description: "Donner une seconde vie au matériel informatique pour réduire les déchets.", icon: "recycle" },
    { title: "Inclusion", description: "Accompagner les publics éloignés du numérique vers l'autonomie digitale.", icon: "users" },
    { title: "Territoire", description: "Agir localement en Bretagne pour un impact social et environnemental durable.", icon: "globe" },
  ],
  milestones: [
    { year: "2010", title: "Création de l'association", description: "Fondation sur le territoire de Morlaix" },
    { year: "2013", title: "Premier atelier de réemploi", description: "Lancement des ateliers de reconditionnement" },
    { year: "2016", title: "Agrément ESS", description: "Reconnaissance Économie Sociale et Solidaire" },
    { year: "2019", title: "Extension territoriale", description: "Déploiement sur le Centre Ouest Bretagne" },
    { year: "2022", title: "1000 ordinateurs reconditionnés", description: "Cap symbolique franchi" },
    { year: "2026", title: "Programme d'inclusion numérique", description: "Accompagnement de 500+ personnes par an" },
  ],
};

export const actionsPageSeed: CmsActionsPage = {
  hero: {
    eyebrow: "Nos actions",
    title: "Agir concrètement pour",
    highlight: "un numérique solidaire",
    description: "Quatre piliers d'action pour lutter contre la fracture numérique en Bretagne.",
  },
  impact: [
    { icon: "monitor", value: "2500+", label: "Ordinateurs reconditionnés", color: "text-blue-600" },
    { icon: "recycle", value: "15T", label: "Déchets électroniques évités", color: "text-green-600" },
    { icon: "users", value: "1200+", label: "Personnes accompagnées", color: "text-cyan-600" },
    { icon: "graduation-cap", value: "150+", label: "Ateliers animés", color: "text-purple-600" },
  ],
  actions: [
    {
      icon: "recycle",
      title: "Réemploi informatique",
      description: "Collecte, reconditionnement et redistribution de matériel informatique reconditionné.",
      color: "from-blue-500 to-blue-600",
      stats: "2500+ ordinateurs reconditionnés",
      projects: [
        "Collecte auprès des entreprises et particuliers",
        "Reconditionnement en atelier avec garantie",
        "Redistribution à prix solidaire ou don",
        "Recyclage responsable du matériel irrécupérable",
      ],
    },
    {
      icon: "users",
      title: "Inclusion numérique",
      description: "Accompagnement des publics éloignés du numérique vers l'autonomie digitale.",
      color: "from-cyan-500 to-cyan-600",
      stats: "1200+ personnes accompagnées",
      projects: [
        "Permanences d'aide aux démarches en ligne",
        "Accompagnement personnalisé selon les besoins",
        "Accès facilité au matériel informatique",
        "Médiation avec les services publics numériques",
      ],
    },
    {
      icon: "graduation-cap",
      title: "Ateliers & formations",
      description: "Sensibilisation et formation aux usages numériques responsables.",
      color: "from-purple-500 to-purple-600",
      stats: "150+ ateliers réalisés",
      projects: [
        "Ateliers d'initiation au numérique",
        "Formations bureautique et Internet",
        "Sensibilisation aux enjeux écologiques du numérique",
        "Ateliers parents-enfants",
      ],
    },
    {
      icon: "wrench",
      title: "Médiation numérique",
      description: "Support technique et aide à l'utilisation des outils numériques.",
      color: "from-orange-500 to-orange-600",
      stats: "300+ interventions techniques",
      projects: [
        "Aide technique et dépannage",
        "Configuration et prise en main du matériel",
        "Accompagnement aux outils de communication",
        "Support pour les démarches administratives",
      ],
    },
  ],
  cta: {
    title: "Participez à nos actions",
    description: "Rejoignez-nous sur le terrain et contribuez concrètement à l'inclusion numérique.",
    primaryLabel: "Devenir bénévole",
    secondaryLabel: "Donner du matériel",
  },
};
