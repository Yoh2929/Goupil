import type {
  CmsAboutPage,
  CmsActionsPage,
  CmsContactPage,
  CmsDonatePage,
  CmsEvent,
  CmsFaqPage,
  CmsHomePage,
  CmsJoinPage,
  CmsNewsletterSettings,
  CmsPostSummary,
  CmsSiteSettings,
} from "../../../../packages/cms-contracts/src";

import { resolveMediaUrl } from "./media-url";

const cmsBaseUrl = import.meta.env.VITE_CMS_URL ?? "http://localhost:3000";

type PayloadListResponse<T> = {
  docs: T[];
};

type PayloadSingleResponse<T> = T;

type PayloadMedia = {
  id?: string;
  url: string;
  alt?: string;
};

function normalizeMedia(media?: PayloadMedia | null): CmsHomePage["projects"][number]["image"] | undefined {
  if (!media?.url) return undefined;
  const url = resolveMediaUrl(media.url) ?? media.url;
  return {
    id: media.id ?? url,
    url,
    alt: media.alt ?? "",
  };
}

function normalizeIconFields<T extends { iconImage?: PayloadMedia | null }>(item: T): T {
  const iconImage = item.iconImage ? normalizeMedia(item.iconImage) : undefined;
  return { ...item, iconImage };
}

type PayloadIconFields = {
  iconDisplay?: "lucide" | "image";
  icon?: string;
  iconImage?: PayloadMedia | null;
};

type PayloadHomePage = {
  hero: CmsHomePage["hero"];
  impactMetrics: Array<CmsHomePage["impactMetrics"][number] & PayloadIconFields>;
  missions: Array<CmsHomePage["missions"][number] & PayloadIconFields>;
  projects: Array<{
    title: string;
    description: string;
    impact: string;
    image: PayloadMedia;
    accent: string;
  }>;
  events: CmsHomePage["events"];
  gallery: Array<{
    title: string;
    image: PayloadMedia;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    text: string;
    avatar: PayloadMedia;
  }>;
  newsletter: CmsHomePage["newsletter"];
  cta: CmsHomePage["cta"];
};

type PayloadAboutPage = {
  hero: CmsAboutPage["hero"];
  summary: Array<{ text: string }>;
  highlights: CmsAboutPage["highlights"];
  values: CmsAboutPage["values"];
  milestones: CmsAboutPage["milestones"];
};

type PayloadActionsPage = {
  hero: CmsActionsPage["hero"];
  impact: Array<CmsActionsPage["impact"][number] & PayloadIconFields>;
  actions: Array<{
    title: string;
    description: string;
    color: string;
    stats: string;
    projects: Array<{ text: string }>;
  } & PayloadIconFields>;
  cta: CmsActionsPage["cta"];
};

type PayloadContactPage = CmsContactPage;
type PayloadDonatePage = CmsDonatePage;
type PayloadJoinPage = CmsJoinPage;

type PayloadPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  categories?: Array<{ label: string }>;
  featuredImage?: PayloadMedia;
  createdAt: string;
};

type PayloadTestimonial = {
  id: string;
  author: string;
  role: string;
  excerpt: string;
  image?: PayloadMedia;
  featured?: boolean;
};

type PayloadPartner = {
  id: string;
  name: string;
  description?: string;
  logo: PayloadMedia;
  website?: string;
  category: "collectivity" | "association" | "company" | "supplier" | "support";
  featured?: boolean;
  order?: number;
};

type PayloadNewsletterSettings = CmsNewsletterSettings;
type PayloadSiteSettings = CmsSiteSettings;
type PayloadFaqPage = CmsFaqPage;

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${cmsBaseUrl}${path}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export async function fetchHomePage(): Promise<CmsHomePage> {
  const data = await fetchJson<PayloadSingleResponse<PayloadHomePage>>("/api/globals/home-page?depth=1");
  return {
    ...data,
    impactMetrics: data.impactMetrics.map((metric) => normalizeIconFields(metric)),
    missions: data.missions.map((mission) => normalizeIconFields(mission)),
    projects: data.projects.map((project) => ({
      ...project,
      image: normalizeMedia(project.image)!,
    })),
    gallery: data.gallery.map((item) => ({
      ...item,
      image: normalizeMedia(item.image)!,
    })),
    testimonials: data.testimonials.map((item) => ({
      ...item,
      avatar: normalizeMedia(item.avatar)!,
    })),
  };
}

export async function fetchAboutPage(): Promise<CmsAboutPage> {
  const data = await fetchJson<PayloadSingleResponse<PayloadAboutPage>>("/api/globals/about-page?depth=1");
  return {
    ...data,
    summary: data.summary.map((item) => item.text),
  } as CmsAboutPage;
}

export async function fetchActionsPage(): Promise<CmsActionsPage> {
  const data = await fetchJson<PayloadSingleResponse<PayloadActionsPage>>("/api/globals/actions-page?depth=1");
  return {
    ...data,
    impact: data.impact.map((item) => normalizeIconFields(item)),
    actions: data.actions.map((action) => ({
      ...normalizeIconFields(action),
      projects: action.projects.map((item) => item.text),
    })),
  } as CmsActionsPage;
}

export async function fetchPosts(): Promise<CmsPostSummary[]> {
  const response = await fetchJson<PayloadListResponse<PayloadPost>>("/api/posts?limit=50&sort=-createdAt&depth=1&where[status][equals]=published");
  return response.docs.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.categories?.[0]?.label ?? "actualités",
    publishedAt: post.createdAt,
    readingTimeMinutes: Math.max(2, Math.ceil((post.excerpt?.length ?? 400) / 180)),
    featuredImage: post.featuredImage ? normalizeMedia(post.featuredImage) : undefined,
  }));
}

export async function fetchEvents(): Promise<CmsEvent[]> {
  const response = await fetchJson<PayloadListResponse<CmsEvent>>("/api/events?limit=50&sort=startsAt");
  return response.docs;
}

export async function fetchTestimonials(): Promise<Array<{ id: string; author: string; role: string; excerpt: string; image?: string; featured?: boolean }>> {
  const response = await fetchJson<PayloadListResponse<PayloadTestimonial>>("/api/testimonials?limit=20&sort=-featured,-createdAt&depth=1");
  return response.docs.map((testimonial) => ({
    id: testimonial.id,
    author: testimonial.author,
    role: testimonial.role,
    excerpt: testimonial.excerpt,
    image: testimonial.image?.url,
    featured: testimonial.featured,
  }));
}

export async function fetchPartners(): Promise<Array<{ id: string; name: string; logo: string; website?: string; category: string; featured?: boolean }>> {
  const response = await fetchJson<PayloadListResponse<PayloadPartner>>("/api/partners?limit=20&sort=order&depth=1");
  return response.docs.map((partner) => ({
    id: partner.id,
    name: partner.name,
    logo: partner.logo.url,
    website: partner.website,
    category: partner.category,
    featured: partner.featured,
  }));
}

export async function fetchNewsletterSettings(): Promise<CmsNewsletterSettings> {
  return fetchJson<PayloadSingleResponse<PayloadNewsletterSettings>>("/api/globals/newsletter?depth=1");
}

export async function fetchSiteSettings(): Promise<CmsSiteSettings> {
  return fetchJson<PayloadSingleResponse<PayloadSiteSettings>>("/api/globals/site-settings?depth=1");
}

export async function fetchFaqPage(): Promise<CmsFaqPage> {
  return fetchJson<PayloadSingleResponse<PayloadFaqPage>>("/api/globals/faq-page?depth=1");
}

export async function fetchContactPage(): Promise<CmsContactPage> {
  return fetchJson<PayloadSingleResponse<PayloadContactPage>>("/api/globals/contact-page?depth=1");
}

export async function fetchDonatePage(): Promise<CmsDonatePage> {
  return fetchJson<PayloadSingleResponse<PayloadDonatePage>>("/api/globals/donate-page?depth=1");
}

export async function fetchJoinPage(): Promise<CmsJoinPage> {
  return fetchJson<PayloadSingleResponse<PayloadJoinPage>>("/api/globals/join-page?depth=1");
}
