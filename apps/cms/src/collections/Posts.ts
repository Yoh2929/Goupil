import type { CollectionConfig } from "payload";
import { canManageContent, canReadPublicContent } from "./access";

export const Posts: CollectionConfig = {
  slug: "posts",
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
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      required: true,
      options: ["draft", "published", "archived"],
    },
    {
      name: "categories",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    { name: "content", type: "richText" },
  ],
};
