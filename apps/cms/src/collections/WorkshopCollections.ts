import type { CollectionConfig } from "payload";
import { canManageContent } from "../access/canManageContent";
import { canReadPublicContent } from "../access/canReadPublicContent";

export const WorkshopCollections: CollectionConfig = {
  slug: "workshops",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "day", "time", "maxParticipants", "status"],
  },
  access: {
    read: canReadPublicContent,
    create: canManageContent,
    update: canManageContent,
    delete: canManageContent,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre de l'atelier",
    },
    {
      name: "description",
      type: "richText",
      required: true,
      label: "Description détaillée",
    },
    {
      name: "icon",
      type: "text",
      label: "Emoji icône",
      admin: {
        description: "Ex: 💻, 🌐, 📧, 🔒, 📱",
      },
    },
    {
      name: "day",
      type: "select",
      required: true,
      label: "Jour de la semaine",
      options: [
        { label: "Lundi", value: "monday" },
        { label: "Mardi", value: "tuesday" },
        { label: "Mercredi", value: "wednesday" },
        { label: "Jeudi", value: "thursday" },
        { label: "Vendredi", value: "friday" },
        { label: "Samedi", value: "saturday" },
      ],
    },
    {
      name: "time",
      type: "text",
      required: true,
      label: "Horaire",
      admin: {
        description: "Ex: 14h à 16h",
      },
    },
    {
      name: "location",
      type: "text",
      label: "Lieu",
      admin: {
        description: "Adresse ou salle",
      },
    },
    {
      name: "level",
      type: "select",
      label: "Niveau",
      options: [
        { label: "Débutant", value: "beginner" },
        { label: "Intermédiaire", value: "intermediate" },
        { label: "Avancé", value: "advanced" },
        { label: "Tous les niveaux", value: "all" },
      ],
    },
    {
      name: "maxParticipants",
      type: "number",
      label: "Nombre max de participants",
      admin: {
        description: "Laissez vide pour pas de limite",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      label: "Statut",
      options: [
        { label: "Actif", value: "active" },
        { label: "Suspendu", value: "suspended" },
        { label: "Archivé", value: "archived" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Image",
    },
  ],
  timestamps: true,
};
