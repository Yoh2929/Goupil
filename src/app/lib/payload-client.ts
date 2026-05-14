import type { CmsAboutPage, CmsActionsPage, CmsContactPage, CmsDonatePage, CmsEvent, CmsHomePage, CmsJoinPage, CmsPostSummary } from "../../../../packages/cms-contracts/src";

const cmsBaseUrl = import.meta.env.VITE_CMS_URL ?? "http://localhost:3000";

type PayloadListResponse<T> = {
  docs: T[];
};

type PayloadSingleResponse<T> = T;

type PayloadMedia = {
  url: string;
  alt?: string;
};

type PayloadHomePage = {
  hero: CmsHomePage["hero"];
  impactMetrics: CmsHomePage["impactMetrics"];
  missions: CmsHomePage["missions"];
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
  impact: CmsActionsPage["impact"];
  actions: Array<{
    title: string;
    description: string;
    icon: CmsActionsPage["actions"][number]["icon"];
    color: string;
    stats: string;
    projects: Array<{ text: string }>;
  }>;
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

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${cmsBaseUrl}${path}`);
  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export async function fetchHomePage(): Promise<CmsHomePage> {
  const data = await fetchJson<PayloadSingleResponse<PayloadHomePage>>("/api/globals/home-page?depth=1");
  return data as CmsHomePage;
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
    actions: data.actions.map((action) => ({
      ...action,
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
    featuredImage: post.featuredImage,
  }));
}

export async function fetchEvents(): Promise<CmsEvent[]> {
  const response = await fetchJson<PayloadListResponse<CmsEvent>>("/api/events?limit=50&sort=startsAt");
  return response.docs;
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
