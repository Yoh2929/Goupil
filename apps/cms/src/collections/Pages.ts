import type { CollectionConfig } from "payload";
import { canManageContent, canReadPublicContent } from "./access";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: canManageContent,
    delete: canManageContent,
    read: canReadPublicContent,
    update: canManageContent,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "excerpt", type: "textarea" },
    { name: "content", type: "richText" },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
