export type SiteRoute = {
  label: string;
  path: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: SiteRoute[];
};

export type PrimaryCta = {
  label: string;
  path: string;
};

export const navGroups: NavGroup[] = [
  {
    label: "L'association",
    items: [
      { label: "À propos", path: "/a-propos", description: "Notre histoire et nos valeurs" },
      { label: "Nos actions", path: "/nos-actions", description: "Impact et projets sur le terrain" },
    ],
  },
  {
    label: "Expertises",
    items: [
      { label: "Réemploi informatique", path: "/reemploi-informatique", description: "Collecte et reconditionnement" },
      { label: "Inclusion numérique", path: "/inclusion-numerique", description: "Accompagnement des publics" },
      { label: "Ateliers", path: "/ateliers-accompagnement", description: "Formation et médiation" },
    ],
  },
  {
    label: "Vie associative",
    items: [
      { label: "Événements", path: "/evenements", description: "Agenda et rencontres" },
      { label: "Actualités", path: "/actualites", description: "Blog et nouvelles" },
    ],
  },
];

export const navStandalone: SiteRoute[] = [
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

/** Liste à plat pour le pied de page et les liens secondaires */
export const publicRoutes: SiteRoute[] = [
  ...navGroups.flatMap((group) => group.items),
  ...navStandalone,
];

export const primaryCta: PrimaryCta = {
  label: "Faire un don",
  path: "/faire-un-don",
};

export const secondaryCta: PrimaryCta = {
  label: "Adhérer",
  path: "/adherer",
};

export function isRouteActive(pathname: string, path: string): boolean {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function isGroupActive(pathname: string, group: NavGroup): boolean {
  return group.items.some((item) => isRouteActive(pathname, item.path));
}
