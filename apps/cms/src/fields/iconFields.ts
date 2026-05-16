import type { Field } from "payload";

const lucideIconOptions = [
  { label: "Recycle", value: "recycle" },
  { label: "Utilisateurs", value: "users" },
  { label: "Formation", value: "graduation-cap" },
  { label: "Outils", value: "wrench" },
  { label: "Écran", value: "monitor" },
  { label: "Cœur", value: "heart" },
  { label: "Récompense", value: "award" },
  { label: "Globe", value: "globe" },
  { label: "Processeur", value: "cpu" },
  { label: "Carte", value: "map-pin" },
  { label: "Téléphone", value: "phone" },
  { label: "Mail", value: "mail" },
  { label: "Horloge", value: "clock" },
  { label: "Calendrier", value: "calendar" },
  { label: "Livre", value: "book-open" },
  { label: "Cadeau", value: "gift" },
] as const;

const mediaLibraryHint =
  "Pour une icône personnalisée, choisissez « Image » puis importez un SVG ou PNG carré (64×64 min). Vous pouvez d'abord créer le fichier dans Médiathèque → Médias.";

type IconFieldOptions = {
  lucideValues?: string[];
};

export function createIconFields({ lucideValues }: IconFieldOptions = {}): Field[] {
  const iconOptions =
    lucideValues != null
      ? lucideIconOptions.filter((opt) => lucideValues.includes(opt.value))
      : [...lucideIconOptions];

  return [
    {
      name: "iconDisplay",
      type: "radio",
      label: "Type d'icône",
      defaultValue: "lucide",
      required: true,
      options: [
        { label: "Icône intégrée (Lucide)", value: "lucide" },
        { label: "Image personnalisée", value: "image" },
      ],
      admin: {
        description: mediaLibraryHint,
        layout: "horizontal",
      },
    },
    {
      name: "icon",
      type: "select",
      label: "Icône",
      options: iconOptions.map((o) => ({ label: o.label, value: o.value })),
      admin: {
        condition: (_, siblingData) => siblingData?.iconDisplay !== "image",
        description: "Icônes vectorielles affichées sur le site public.",
      },
    },
    {
      name: "iconImage",
      type: "upload",
      relationTo: "media",
      label: "Image d'icône",
      admin: {
        condition: (_, siblingData) => siblingData?.iconDisplay === "image",
        description:
          "Format recommandé : SVG ou PNG carré sur fond transparent. Ouvrez la Médiathèque pour importer un nouveau fichier.",
      },
    },
  ];
}
