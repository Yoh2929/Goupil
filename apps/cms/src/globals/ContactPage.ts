import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../access";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
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
      name: "contactCards",
      type: "array",
      fields: [
        { name: "icon", type: "select", required: true, options: ["map-pin", "phone", "mail", "clock"] },
        { name: "title", type: "text", required: true },
        { name: "content", type: "text", required: true },
        { name: "link", type: "text" },
      ],
    },
    {
      name: "subjectOptions",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
        { name: "icon", type: "select", required: true, options: ["facebook", "instagram", "linkedin"] },
      ],
    },
    {
      name: "faq",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "ctaLabel", type: "text", required: true },
      ],
    },
  ],
};
