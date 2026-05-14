import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../access";

export const DonatePage: GlobalConfig = {
  slug: "donate-page",
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
    { name: "presetAmounts", type: "array", fields: [{ name: "value", type: "number", required: true }] },
    { name: "benefits", type: "array", fields: [{ name: "text", type: "text", required: true }] },
    {
      name: "impact",
      type: "array",
      fields: [
        { name: "amount", type: "number", required: true },
        { name: "text", type: "text", required: true },
      ],
    },
    {
      name: "paymentMethods",
      type: "array",
      fields: [
        { name: "icon", type: "select", required: true, options: ["credit-card", "building", "smartphone"] },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "otherWays",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "cta", type: "text", required: true },
      ],
    },
  ],
};
