import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../collections/access";

export const EventsPage: GlobalConfig = {
  slug: "events-page",
  access: {
    read: canReadPublicContent,
    update: canManageContent,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "highlight", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    {
      name: "events",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "dateLabel", type: "text", required: true },
        { name: "startsAt", type: "text", required: true },
        { name: "location", type: "text", required: true },
        { name: "capacity", type: "number", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "primaryLabel", type: "text", required: true },
        { name: "secondaryLabel", type: "text", required: true },
      ],
    },
  ],
};
