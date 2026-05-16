import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { CmsHomePage } from "../../../../packages/cms-contracts/src";
import { CmsIcon } from "../lib/cms-icons";
import { fetchHomePage } from "../lib/payload-client";

function LoadingState() {
  return <motion.div className="min-h-[60vh] flex items-center justify-center text-muted-foreground">Chargement du contenu CMS...</motion.div>;
}

export function Home() {
  const [page, setPage] = useState<CmsHomePage | null>(null);

  useEffect(() => {
    fetchHomePage()
      .then(setPage)
      .catch(() => setPage(null));
  }, []);

  if (!page) {
    return <LoadingState />;
  }

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-background py-20 sm:py-28">
        <motion.div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="inline-flex rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium text-foreground/80">
            {page.hero.eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {page.hero.title}{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              {page.hero.highlight}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">{page.hero.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={page.hero.primaryCtaHref} className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background">
              {page.hero.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={page.hero.secondaryCtaHref} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground">
              {page.hero.secondaryCtaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {page.impactMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-border bg-card p-6">
              <CmsIcon source={metric} className="h-6 w-6 text-primary" imageClassName="h-8 w-8 object-contain" />
              <motion.div className="mt-4 text-4xl font-bold">{metric.value}</motion.div>
              <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos missions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {page.missions.map((mission) => (
              <div key={mission.title} className="rounded-3xl border border-border bg-card p-8">
                <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${mission.accent} p-4 text-white`}>
                  <CmsIcon source={mission} className="h-6 w-6" imageClassName="h-8 w-8 object-contain" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{mission.title}</h3>
                <p className="mt-3 text-muted-foreground">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projets récents</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {page.projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-border bg-card">
              <img src={project.image.url} alt={project.image.alt} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className={`inline-flex rounded-full bg-gradient-to-r ${project.accent} px-4 py-2 text-sm font-semibold text-white`}>
                  {project.impact}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Événements à venir</h2>
          <div className="mt-8 space-y-4">
            {page.events.map((event) => (
              <motion.div key={event.title} className="rounded-3xl border border-border bg-card p-6 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-primary">{event.dateLabel}</div>
                  <h3 className="mt-2 text-2xl font-bold">{event.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{event.time}</span>
                    <span>{event.location}</span>
                    <span>{event.spots}</span>
                  </div>
                </div>
                <a href="/actualites" className="mt-4 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background sm:mt-0">
                  Voir l'actualité
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Galerie</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {page.gallery.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-3xl border border-border bg-card">
              <img src={item.image.url} alt={item.image.alt} className="aspect-square w-full object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Témoignages</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {page.testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-3xl border border-border bg-card p-6">
                <p className="text-muted-foreground">{testimonial.text}</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={testimonial.avatar.url} alt={testimonial.avatar.alt} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-10 text-white sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">{page.newsletter.title}</h2>
          <p className="mt-4 max-w-2xl text-white/85">{page.newsletter.description}</p>
        </div>
      </section>

      <section className="bg-foreground py-16 text-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">{page.cta.donateTitle}</h3>
            <p className="mt-3 text-white/70">{page.cta.donateDescription}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">{page.cta.volunteerTitle}</h3>
            <p className="mt-3 text-white/70">{page.cta.volunteerDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
