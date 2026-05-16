import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Cpu,
  Gift,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Recycle,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { resolveMediaUrl } from "./media-url";

export const cmsLucideIcons = {
  monitor: Monitor,
  users: Users,
  recycle: Recycle,
  "graduation-cap": GraduationCap,
  wrench: Wrench,
  heart: Heart,
  award: Award,
  globe: Globe,
  cpu: Cpu,
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  calendar: Calendar,
  "book-open": BookOpen,
  gift: Gift,
} as const satisfies Record<string, LucideIcon>;

export type CmsLucideIconSlug = keyof typeof cmsLucideIcons;

export function getLucideIcon(slug?: string | null): LucideIcon {
  if (slug && slug in cmsLucideIcons) {
    return cmsLucideIcons[slug as CmsLucideIconSlug];
  }
  return HelpCircle;
}

export type CmsIconSource = {
  iconDisplay?: "lucide" | "image" | null;
  icon?: string | null;
  iconImage?: { url?: string; alt?: string } | string | null;
};

type CmsIconProps = {
  source: CmsIconSource;
  className?: string;
  imageClassName?: string;
};

export function CmsIcon({ source, className = "h-6 w-6", imageClassName }: CmsIconProps) {
  const useImage =
    (source.iconDisplay === "image" || (!source.iconDisplay && !source.icon && !!source.iconImage)) &&
    source.iconImage;

  if (useImage) {
    const media = typeof source.iconImage === "string" ? { url: source.iconImage } : source.iconImage;
    const src = resolveMediaUrl(media?.url);
    if (src) {
      return (
        <img
          src={src}
          alt={media?.alt ?? ""}
          className={imageClassName ?? className}
          loading="lazy"
        />
      );
    }
  }

  const Icon = getLucideIcon(source.icon);
  return <Icon className={className} aria-hidden />;
}
