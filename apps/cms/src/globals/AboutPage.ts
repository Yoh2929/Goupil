import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../access";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
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
      name: "summary",
      type: "array",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    {
      name: "highlights",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "icon", type: "select", required: true, options: ["award", "users", "recycle", "globe", "cpu"] },
      ],
    },
    {
      name: "values",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "select", required: true, options: ["heart", "recycle", "users", "globe"] },
      ],
    },
    {
      name: "milestones",
      type: "array",
      fields: [
        { name: "year", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
