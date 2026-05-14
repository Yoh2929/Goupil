import type { CollectionConfig } from "payload";
import { canManageMedia, canReadPublicContent } from "./access";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: canManageMedia,
    delete: canManageMedia,
    read: canReadPublicContent,
    update: canManageMedia,
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*", "video/*", "application/pdf"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
