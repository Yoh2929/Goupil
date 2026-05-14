import type { CollectionConfig } from "payload";
import { canManageContent, canReadPublicContent } from "./access";

export const Events: CollectionConfig = {
  slug: "events",
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
    { name: "startsAt", type: "date", required: true },
    { name: "endsAt", type: "date" },
    { name: "capacity", type: "number", required: true, min: 1 },
    { name: "location", type: "text", required: true },
    { name: "description", type: "richText" },
  ],
};
