import type { GlobalConfig } from "payload";
import { canManageContent } from "../access/canManageContent";
import { canReadPublicContent } from "../access/canReadPublicContent";

export const Newsletter: GlobalConfig = {
  slug: "newsletter",
  label: "Newsletter",
  access: {
    read: canReadPublicContent,
    update: canManageContent,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre",
      defaultValue: "Restez informé",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Description",
      defaultValue:
        "Inscrivez-vous à notre newsletter pour recevoir les actualités et les appels à action de Goupil",
    },
    {
      name: "placeholder",
      type: "text",
      defaultValue: "Votre adresse email",
      label: "Placeholder du champ email",
    },
    {
      name: "buttonText",
      type: "text",
      defaultValue: "S'inscrire",
      label: "Texte du bouton",
    },
    {
      name: "successMessage",
      type: "text",
      defaultValue: "Merci pour votre inscription !",
      label: "Message de succès",
    },
    {
      name: "emailProvider",
      type: "select",
      label: "Prestataire email",
      options: [
        { label: "HelloAsso", value: "helloasso" },
        { label: "Mailchimp", value: "mailchimp" },
        { label: "Brevo", value: "brevo" },
        { label: "Autre", value: "other" },
      ],
      admin: {
        description: "Plateforme utilisée pour gérer les inscriptions",
      },
    },
    {
      name: "integrationUrl",
      type: "text",
      label: "URL d'intégration",
      admin: {
        description: "URL API ou webhook pour l'intégration",
      },
    },
  ],
};
