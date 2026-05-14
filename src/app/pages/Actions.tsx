import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Monitor, Recycle, Users, Wrench } from "lucide-react";
import type { CmsActionsPage } from "../../../../packages/cms-contracts/src";
import { fetchActionsPage } from "../lib/payload-client";

const actionIconMap = {
  recycle: Recycle,
  users: Users,
  "graduation-cap": GraduationCap,
  wrench: Wrench,
} as const;

const impactIconMap = {
  monitor: Monitor,
  recycle: Recycle,
  users: Users,
  "graduation-cap": GraduationCap,
} as const;

export function Actions() {
  const [page, setPage] = useState<CmsActionsPage | null>(null);

  useEffect(() => {
    fetchActionsPage()
      .then(setPage)
      .catch(() => setPage(null));
  }, []);

  if (!page) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement du contenu CMS...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">{page.hero.eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              {page.hero.title}
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {page.hero.highlight}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {page.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {page.impact.map((item, index) => {
              const Icon = impactIconMap[item.icon];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <Icon className={`w-10 h-10 mx-auto mb-4 ${item.color}`} />
                  <div className="text-3xl font-bold mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Actions */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {page.actions.map((action, index) => {
              const Icon = actionIconMap[action.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${action.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      {action.title}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {action.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {action.projects.map((project, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <p className="text-foreground">{project}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{action.stats}</span>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className={`bg-gradient-to-br ${action.color} rounded-3xl p-12 text-white`}>
                      <Icon className="w-20 h-20 mb-6 opacity-80" />
                      <h3 className="text-2xl font-bold mb-3">En pratique</h3>
                      <p className="text-white/90">
                        Notre équipe de bénévoles et salariés intervient directement sur le terrain pour rendre le numérique accessible à tous.
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{page.cta.title}</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10">{page.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                {page.cta.primaryLabel}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                {page.cta.secondaryLabel}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
