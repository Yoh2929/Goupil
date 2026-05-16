import { motion } from "motion/react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category: string;
  featured?: boolean;
}

interface PartnersGridProps {
  partners: Partner[];
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
}

export function PartnersGrid({
  partners = [],
  columns = 4,
  showCategory = false,
}: PartnersGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  if (partners.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Aucun partenaire disponible
      </div>
    );
  }

  const featured = partners.filter((p) => p.featured);
  const regular = partners.filter((p) => !p.featured);
  const sorted = [...featured, ...regular];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridClass[columns]} gap-6`}>
      {sorted.map((partner, idx) => (
        <motion.a
          key={partner.id}
          href={partner.website || "#"}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="group relative bg-card dark:bg-slate-800 rounded-lg border border-border dark:border-slate-700 p-6 flex flex-col items-center justify-center min-h-[200px] hover:shadow-lg hover:border-blue-500/50 transition-all"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-24 h-24 object-contain mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 className="font-semibold text-center text-sm md:text-base">
            {partner.name}
          </h3>
          {showCategory && (
            <p className="text-xs text-muted-foreground mt-2">
              {partner.category}
            </p>
          )}
          {partner.featured && (
            <span className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
              Principal
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
}
