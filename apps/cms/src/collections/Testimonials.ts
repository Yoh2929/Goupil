import type { CollectionConfig } from "payload";
import { canManageContent } from "../access/canManageContent";
import { canReadPublicContent } from "../access/canReadPublicContent";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "role", "excerpt", "createdAt"],
  },
  access: {
    read: canReadPublicContent,
    create: canManageContent,
    update: canManageContent,
    delete: canManageContent,
  },
  fields: [
    {
      name: "author",
      type: "text",
      required: true,
      label: "Nom de la personne",
    },
    {
      name: "role",
      type: "text",
      required: true,
      label: "Rôle/Titre",
      admin: {
        description: "Ex: Senior, Demandeur d'emploi, Bénéficiaire",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      label: "Témoignage",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Photo",
      admin: {
        description: "Photo optionnelle de la personne",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Mettre en avant",
      admin: {
        description: "Afficher ce témoignage sur la page d'accueil",
      },
    },
  ],
  timestamps: true,
};
