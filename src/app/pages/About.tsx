import { useEffect, useState } from "react";
import { Award, Cpu, Globe, Heart, Recycle, Users } from "lucide-react";
import type { CmsAboutPage } from "../../../../packages/cms-contracts/src";
import { fetchAboutPage } from "../lib/payload-client";

const aboutIconMap = {
  award: Award,
  users: Users,
  recycle: Recycle,
  globe: Globe,
  cpu: Cpu,
  heart: Heart,
} as const;

export function About() {
  const [page, setPage] = useState<CmsAboutPage | null>(null);

  useEffect(() => {
    fetchAboutPage()
      .then(setPage)
      .catch(() => setPage(null));
  }, []);

  if (!page) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement du contenu CMS...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{page.hero.eyebrow}</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {page.hero.title} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{page.hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">{page.hero.description}</p>
        </div>
      </section>

      <section className="bg-muted/30 py-20 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Notre mission</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {page.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {page.highlights.map((item) => {
              const Icon = aboutIconMap[item.icon];
              return (
                <div key={item.label} className="rounded-2xl border border-border bg-card p-6">
                  <Icon className="mb-3 h-10 w-10 text-primary" />
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Nos valeurs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {page.values.map((value) => {
              const Icon = aboutIconMap[value.icon];
              return (
                <div key={value.title} className="rounded-3xl border border-border bg-card p-8">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Notre parcours</h2>
          <div className="mt-8 space-y-4">
            {page.milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                  <div>
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
