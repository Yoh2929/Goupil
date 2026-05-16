import type { GlobalConfig } from "payload";
import { canManageContent, canReadPublicContent } from "../access";

export const FaqPage: GlobalConfig = {
  slug: "faq-page",
  label: "FAQ",
  access: {
    read: canReadPublicContent,
    update: canManageContent,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text", required: true, defaultValue: "FAQ" },
        { name: "title", type: "text", required: true, defaultValue: "Questions fréquentes" },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue: "Retrouvez les réponses aux questions les plus posées sur Goupil.",
        },
      ],
    },
    {
      name: "questions",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true, label: "Question" },
        { name: "answer", type: "textarea", required: true, label: "Réponse" },
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true, defaultValue: "Une autre question ?" },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue: "Si vous ne trouvez pas votre réponse ici, contactez notre équipe.",
        },
        { name: "buttonLabel", type: "text", required: true, defaultValue: "Nous contacter" },
        { name: "buttonHref", type: "text", required: true, defaultValue: "/contact" },
      ],
    },
  ],
};