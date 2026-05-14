export type CmsCollectionSlug = "pages" | "posts" | "events" | "media" | "users";

export type CmsImage = {
  id: string;
  url: string;
  alt: string;
};

export type CmsPostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  publishedAt: string;
  readingTimeMinutes: number;
  featuredImage?: CmsImage;
};

export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
};

export type CmsEvent = {
  id: string;
  title: string;
  slug: string;
  startsAt: string;
  capacity: number;
  location: string;
};

export type CmsEventsPage = {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  events: Array<{
    title: string;
    dateLabel: string;
    startsAt: string;
    location: string;
    capacity: number;
    description: string;
  }>;
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

export type CmsContactPage = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contactCards: Array<{
    icon: "map-pin" | "phone" | "mail" | "clock";
    title: string;
    content: string;
    link?: string;
  }>;
  subjectOptions: Array<{
    label: string;
    value: string;
  }>;
  socialLinks: Array<{
    label: string;
    href: string;
    icon: "facebook" | "instagram" | "linkedin";
  }>;
  faq: {
    title: string;
    description: string;
    ctaLabel: string;
  };
};

export type CmsDonatePage = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  presetAmounts: number[];
  benefits: string[];
  impact: Array<{
    amount: number;
    text: string;
  }>;
  paymentMethods: Array<{
    icon: "credit-card" | "building" | "smartphone";
    label: string;
  }>;
  otherWays: Array<{
    title: string;
    description: string;
    cta: string;
  }>;
};

export type CmsJoinPage = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  benefitsOverview: Array<{
    icon: "calendar" | "book-open" | "gift" | "mail";
    title: string;
    description: string;
  }>;
  membershipPlans: Array<{
    id: "student" | "individual" | "family";
    name: string;
    annualPrice: number;
    monthlyPrice: number;
    description: string;
    icon: "users" | "heart" | "book-open";
    color: string;
    popular?: boolean;
  }>;
  benefits: string[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
  };
};

export type CmsHomePage = {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  impactMetrics: Array<{
    label: string;
    value: string;
    icon: "monitor" | "users" | "recycle" | "graduation-cap";
  }>;
  missions: Array<{
    title: string;
    description: string;
    icon: "recycle" | "users" | "graduation-cap" | "wrench";
    accent: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    impact: string;
    image: CmsImage;
    accent: string;
  }>;
  events: Array<{
    title: string;
    dateLabel: string;
    time: string;
    location: string;
    spots: string;
  }>;
  gallery: Array<{
    title: string;
    image: CmsImage;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    text: string;
    avatar: CmsImage;
  }>;
  newsletter: {
    title: string;
    description: string;
  };
  cta: {
    donateTitle: string;
    donateDescription: string;
    volunteerTitle: string;
    volunteerDescription: string;
  };
};

export type CmsAboutPage = {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  summary: string[];
  highlights: Array<{
    label: string;
    value: string;
    icon: "award" | "users" | "recycle" | "globe" | "cpu";
  }>;
  values: Array<{
    title: string;
    description: string;
    icon: "heart" | "recycle" | "users" | "globe";
  }>;
  milestones: Array<{
    year: string;
    title: string;
    description: string;
  }>;
};

export type CmsActionsPage = {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  impact: Array<{
    icon: "monitor" | "recycle" | "users" | "graduation-cap";
    value: string;
    label: string;
    color: string;
  }>;
  actions: Array<{
    icon: "recycle" | "users" | "graduation-cap" | "wrench";
    title: string;
    description: string;
    color: string;
    stats: string;
    projects: string[];
  }>;
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};
