import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { PartnersGrid } from "../components/PartnersGrid";
import { ImpactMetrics } from "../components/ImpactMetrics";

// Mock data - À remplacer par des vrais appels API
const MOCK_TESTIMONIALS = [
  {
    id: "1",
    author: "Marie Dupont",
    role: "Senior, 72 ans",
    excerpt:
      "Grâce aux ateliers de Goupil, j'ai enfin appris à utiliser un ordinateur. Je suis fière d'avoir progressé et de pouvoir communiquer avec ma famille en ligne.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marie",
  },
  {
    id: "2",
    author: "Jean Martin",
    role: "Demandeur d'emploi",
    excerpt:
      "L'équipe de Goupil m'a vraiment aidé à reprendre confiance face à la technologie. Les formations m'ont permis d'accéder à de nouveaux postes.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jean",
  },
  {
    id: "3",
    author: "Sophie Bernard",
    role: "Bénéficiaire d'aide sociale",
    excerpt:
      "Recevoir un ordinateur reconditionné et être formée pour l'utiliser a changé ma vie. C'est une vraie chance pour ma famille.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophie",
  },
];

const MOCK_PARTNERS = [
  {
    id: "1",
    name: "Région Bretagne",
    logo: "https://via.placeholder.com/150x100?text=Bretagne",
    website: "#",
    category: "collectivity",
    featured: true,
  },
  {
    id: "2",
    name: "Morlaix Communauté",
    logo: "https://via.placeholder.com/150x100?text=Morlaix",
    website: "#",
    category: "collectivity",
    featured: true,
  },
  {
    id: "3",
    name: "Emmaüs Connect",
    logo: "https://via.placeholder.com/150x100?text=Emmaus",
    website: "#",
    category: "association",
  },
  {
    id: "4",
    name: "Mozilla Foundation",
    logo: "https://via.placeholder.com/150x100?text=Mozilla",
    website: "#",
    category: "organization",
  },
];

const IMPACT_DATA = [
  {
    label: "Ordinateurs reconditionnés",
    value: 500,
    suffix: "+",
    icon: "💻",
    description: "par an",
  },
  {
    label: "Déchets évités",
    value: 25,
    suffix: "T",
    icon: "♻️",
    description: "de déchets électroniques",
  },
  {
    label: "Personnes accompagnées",
    value: 1000,
    suffix: "+",
    icon: "👥",
    description: "en inclusion numérique",
  },
  {
    label: "Ateliers mensuels",
    value: 12,
    suffix: "",
    icon: "📚",
    description: "différents niveaux",
  },
];

export function HomeEnhanced() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero with parallax */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pb-32">
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-950 -z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium">
              ♻️ Innovation sociale
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
              Réduire la{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                fracture numérique
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Goupil récupère, remet en état et redistribue du matériel informatique pour
              favoriser l'accès au numérique pour tous.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/faire-un-don"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2"
              >
                Faire un don <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/adherer"
                className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-all"
              >
                Devenir bénévole
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Notre Impact
          </motion.h2>
          <ImpactMetrics metrics={IMPACT_DATA} columns={4} animate={true} />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Nos Valeurs
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Écologique",
                description: "Réduire les déchets électroniques et l'impact environnemental",
              },
              {
                icon: "🤝",
                title: "Solidaire",
                description: "Favoriser l'accès égal à la technologie pour tous",
              },
              {
                icon: "🎓",
                title: "Éducatif",
                description: "Former et accompagner les personnes dans leur apprentissage",
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Témoignages
          </motion.h2>
          <TestimonialsCarousel testimonials={MOCK_TESTIMONIALS} />
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Nos Partenaires
          </motion.h2>
          <PartnersGrid partners={MOCK_PARTNERS} columns={4} showCategory={false} />
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <NewsletterSignup
            variant="hero"
            title="Restez informé"
            description="Inscrivez-vous à notre newsletter pour recevoir les actualités et les appels à action"
          />
        </div>
      </section>
    </div>
  );
}
