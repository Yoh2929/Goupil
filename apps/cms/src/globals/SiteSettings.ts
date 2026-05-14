import type { GlobalConfig } from "payload";
import { canManagePlatform, canReadPublicContent } from "../access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: canReadPublicContent,
    update: canManagePlatform,
  },
  fields: [
    { name: "siteName", type: "text", required: true, defaultValue: "Goupil" },
    { name: "tagline", type: "text" },
    { name: "supportEmail", type: "email" },
    { name: "socialLinks", type: "array", fields: [{ name: "url", type: "text", required: true }] },
  ],
};
