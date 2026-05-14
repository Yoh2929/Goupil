import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import type { CmsEventsPage } from "../../../../packages/cms-contracts/src";

type PayloadEventsPage = {
  hero: CmsEventsPage["hero"];
  events: CmsEventsPage["events"];
  cta: CmsEventsPage["cta"];
};

const cmsBaseUrl = import.meta.env.VITE_CMS_URL ?? "http://localhost:3000";

async function fetchEventsPage(): Promise<CmsEventsPage> {
  const response = await fetch(`${cmsBaseUrl}/api/globals/events-page?depth=1`);
  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status}`);
  }
  const data = (await response.json()) as PayloadEventsPage;
  return data;
}

export function Events() {
  const [page, setPage] = useState<CmsEventsPage | null>(null);

  useEffect(() => {
    fetchEventsPage()
      .then(setPage)
      .catch(() => setPage(null));
  }, []);

  if (!page) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement des événements CMS...</div>;
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

      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="space-y-5">
            {page.events.map((event) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-wide text-primary">{event.dateLabel}</div>
                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{event.title}</h2>
                    <p className="mt-3 max-w-3xl text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:min-w-[320px]">
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-3"><Clock className="h-4 w-4 text-primary" /> {event.startsAt}</span>
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-3"><MapPin className="h-4 w-4 text-primary" /> {event.location}</span>
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-3"><Users className="h-4 w-4 text-primary" /> {event.capacity} places</span>
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-3"><CalendarDays className="h-4 w-4 text-primary" /> Inscription ouverte</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{page.cta.title}</h2>
          <p className="mt-4 text-white/90">{page.cta.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-primary">{page.cta.primaryLabel}</button>
            <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm">{page.cta.secondaryLabel}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
