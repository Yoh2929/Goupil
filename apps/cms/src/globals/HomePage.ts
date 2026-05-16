import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../access";
import { createIconFields } from "../fields/iconFields";

export const HomePage: GlobalConfig = {
  slug: "home-page",
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
        { name: "primaryCtaLabel", type: "text", required: true },
        { name: "primaryCtaHref", type: "text", required: true },
        { name: "secondaryCtaLabel", type: "text", required: true },
        { name: "secondaryCtaHref", type: "text", required: true },
      ],
    },
    {
      name: "impactMetrics",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        ...createIconFields({ lucideValues: ["monitor", "users", "recycle", "graduation-cap"] }),
      ],
    },
    {
      name: "missions",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        ...createIconFields({ lucideValues: ["recycle", "users", "graduation-cap", "wrench"] }),
        { name: "accent", type: "text", required: true },
      ],
    },
    {
      name: "projects",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "impact", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "accent", type: "text", required: true },
      ],
    },
    {
      name: "events",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "dateLabel", type: "text", required: true },
        { name: "time", type: "text", required: true },
        { name: "location", type: "text", required: true },
        { name: "spots", type: "text", required: true },
      ],
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media", required: true },
      ],
    },
    {
      name: "testimonials",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text", required: true },
        { name: "text", type: "textarea", required: true },
        { name: "avatar", type: "upload", relationTo: "media", required: true },
      ],
    },
    {
      name: "newsletter",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "donateTitle", type: "text", required: true },
        { name: "donateDescription", type: "textarea", required: true },
        { name: "volunteerTitle", type: "text", required: true },
        { name: "volunteerDescription", type: "textarea", required: true },
      ],
    },
  ],
};
