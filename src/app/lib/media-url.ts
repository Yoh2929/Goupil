const cmsBaseUrl = import.meta.env.VITE_CMS_URL ?? "http://localhost:3000";

export function resolveMediaUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) {
    return url;
  }
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${cmsBaseUrl.replace(/\/$/, "")}${path}`;
}
