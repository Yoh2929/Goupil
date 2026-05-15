import type { CollectionConfig } from "payload";
import { canManageContent } from "../access/canManageContent";
import { canReadPublicContent } from "../access/canReadPublicContent";

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "website", "featured"],
  },
  access: {
    read: canReadPublicContent,
    create: canManageContent,
    update: canManageContent,
    delete: canManageContent,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nom du partenaire",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Logo",
    },
    {
      name: "website",
      type: "text",
      label: "Site web",
      admin: {
        description: "URL du site web du partenaire",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: "Catégorie",
      options: [
        { label: "Collectivité", value: "collectivity" },
        { label: "Association", value: "association" },
        { label: "Entreprise", value: "company" },
        { label: "Fournisseur", value: "supplier" },
        { label: "Soutien", value: "support" },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Partenaire principal",
      admin: {
        description: "Afficher ce partenaire en avant",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Ordre d'affichage",
    },
  ],
  timestamps: true,
};
