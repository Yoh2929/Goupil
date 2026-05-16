import { useEffect, useState } from "react";
import type { CmsFaqPage } from "../../../../packages/cms-contracts/src";
import { fetchFaqPage } from "../lib/payload-client";

const FALLBACK_PAGE: CmsFaqPage = {
  hero: {
    eyebrow: "FAQ",
    title: "Questions Fréquentes",
    description: "Trouvez les réponses à vos questions sur Goupil",
  },
  questions: [],
  cta: {
    title: "Une autre question ?",
    description: "Si vous ne trouvez pas votre réponse ici, contactez notre équipe.",
    buttonLabel: "Nous contacter",
    buttonHref: "/contact",
  },
};

export function FAQ() {
  const [page, setPage] = useState<CmsFaqPage>(FALLBACK_PAGE);

  useEffect(() => {
    fetchFaqPage()
      .then(setPage)
      .catch(() => undefined);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{page.hero.eyebrow}</p>
          <h1 className="text-5xl font-bold mb-4">{page.hero.title}</h1>
          <p className="text-xl text-muted-foreground">{page.hero.description}</p>
        </div>

        {page.questions.length > 0 ? (
          <div className="space-y-6">
            {page.questions.map((item) => (
              <div key={item.question} className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-card p-8 text-center text-muted-foreground">
            Aucun contenu FAQ n'est encore saisi dans Payload.
          </div>
        )}

        <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">{page.cta.title}</h2>
          <p className="mt-3 text-muted-foreground">{page.cta.description}</p>
          <a href={page.cta.buttonHref} className="mt-6 inline-flex rounded-full bg-foreground px-6 py-3 font-medium text-background">
            {page.cta.buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
