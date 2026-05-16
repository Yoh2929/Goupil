import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../access";
import { createIconFields } from "../fields/iconFields";

export const ActionsPage: GlobalConfig = {
  slug: "actions-page",
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
      name: "impact",
      type: "array",
      fields: [
        ...createIconFields({ lucideValues: ["monitor", "recycle", "users", "graduation-cap"] }),
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
        { name: "color", type: "text", required: true },
      ],
    },
    {
      name: "actions",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        ...createIconFields({ lucideValues: ["recycle", "users", "graduation-cap", "wrench"] }),
        { name: "color", type: "text", required: true },
        { name: "stats", type: "text", required: true },
        { name: "projects", type: "array", fields: [{ name: "text", type: "text", required: true }] },
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
