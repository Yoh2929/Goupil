export type SiteRoute = {
  label: string;
  path: string;
};

export type PrimaryCta = {
  label: string;
  path: string;
};

export const publicRoutes: SiteRoute[] = [
  { label: "L'association", path: "/a-propos" },
  { label: "Nos actions", path: "/nos-actions" },
  { label: "Événements", path: "/evenements" },
  { label: "Actualités", path: "/actualites" },
  { label: "Contact", path: "/contact" },
];

export const primaryCta: PrimaryCta = {
  label: "Faire un don",
  path: "/faire-un-don",
};

export const secondaryCta: PrimaryCta = {
  label: "Adhérer",
  path: "/adherer",
};
