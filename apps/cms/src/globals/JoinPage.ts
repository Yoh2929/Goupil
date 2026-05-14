import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../collections/access";

export const JoinPage: GlobalConfig = {
  slug: "join-page",
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
        { name: "description", type: "textarea", required: true },
      ],
    },
    {
      name: "benefitsOverview",
      type: "array",
      fields: [
        { name: "icon", type: "select", required: true, options: ["calendar", "book-open", "gift", "mail"] },
        { name: "title", type: "text", required: true },
        { name: "description", type: "text", required: true },
      ],
    },
    {
      name: "membershipPlans",
      type: "array",
      fields: [
        { name: "id", type: "select", required: true, options: ["student", "individual", "family"] },
        { name: "name", type: "text", required: true },
        { name: "annualPrice", type: "number", required: true },
        { name: "monthlyPrice", type: "number", required: true },
        { name: "description", type: "text", required: true },
        { name: "icon", type: "select", required: true, options: ["users", "heart", "book-open"] },
        { name: "color", type: "text", required: true },
        { name: "popular", type: "checkbox" },
      ],
    },
    { name: "benefits", type: "array", fields: [{ name: "text", type: "text", required: true }] },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "primaryLabel", type: "text", required: true },
      ],
    },
  ],
};
