import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Heart, Shield, Sparkles, Calendar, Gift, BadgeEuro, CreditCard, Lock } from "lucide-react";
import type { CmsDonatePage } from "../../../../packages/cms-contracts/src";
import { fetchDonatePage } from "../lib/payload-client";

const donateIconMap = {
  heart: Heart,
  shield: Shield,
  sparkles: Sparkles,
  calendar: Calendar,
  gift: Gift,
} as const;

const presetAmountOptions = [10, 25, 50, 100, 250] as const;

export function Donate() {
  const [page, setPage] = useState<CmsDonatePage | null>(null);
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);

  useEffect(() => {
    fetchDonatePage().then(setPage).catch(() => setPage(null));
  }, []);

  const impact = useMemo(() => {
    if (!page) {
      return null;
    }

    return page.impactTiers.find((tier) => selectedAmount >= tier.minimumAmount) ?? page.impactTiers[0] ?? null;
  }, [page, selectedAmount]);

  if (!page) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement du contenu CMS...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6"><Heart className="w-10 h-10 text-white" /></div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">{page.hero.eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">{page.hero.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">{page.hero.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.impactHighlights.map((item, index) => {
              const Icon = donateIconMap[item.icon];
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-primary/10 rounded-xl p-3 inline-flex mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="flex items-center gap-3 mb-8"><BadgeEuro className="w-8 h-8 text-primary" /><h2 className="text-3xl font-bold">Choisissez votre don</h2></div>

              <div className="inline-flex gap-2 p-2 bg-muted rounded-xl mb-8">
                <button onClick={() => setDonationType("one-time")} className={`px-6 py-3 rounded-lg font-medium transition-all ${donationType === "one-time" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground"}`}>Ponctuel</button>
                <button onClick={() => setDonationType("monthly")} className={`px-6 py-3 rounded-lg font-medium transition-all ${donationType === "monthly" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground"}`}>Mensuel</button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {presetAmountOptions.map((amount) => {
                  const isSelected = selectedAmount === amount;
                  return (
                    <button key={amount} onClick={() => setSelectedAmount(amount)} className={`px-6 py-4 rounded-2xl border-2 font-semibold text-lg transition-all ${isSelected ? "border-primary bg-primary text-primary-foreground shadow-lg scale-105" : "border-border bg-background hover:border-primary/50"}`}>
                      {amount}€
                    </button>
                  );
                })}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Montant personnalisé</label>
                <input type="range" min="5" max="500" step="5" value={selectedAmount} onChange={(event) => setSelectedAmount(Number(event.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-sm text-muted-foreground mt-2"><span>5€</span><span className="font-bold text-primary text-lg">{selectedAmount}€</span><span>500€</span></div>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6"><div><label className="block text-sm font-medium mb-2">Prénom</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div><div><label className="block text-sm font-medium mb-2">Nom</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div></div>
                <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div>
                <div><label className="block text-sm font-medium mb-2">Message de soutien</label><textarea rows={4} className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Un mot pour notre équipe..." /></div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-8 py-4 bg-gradient-to-br from-primary to-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"><CreditCard className="w-5 h-5" />{page.cta.primaryLabel}</motion.button>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground"><Lock className="w-4 h-4" />{page.cta.securityNote}</div>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 sm:p-10">
                <h3 className="text-2xl font-bold mb-4">{impact?.title ?? page.cta.title}</h3>
                <p className="text-white/90 leading-relaxed">{impact?.description ?? page.cta.description}</p>
              </div>

              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Ce que votre don finance</h3>
                <div className="space-y-4">
                  {page.fundingUses.map((item) => (
                    <div key={item.title} className="flex items-start gap-4"><div className="bg-primary/10 rounded-xl p-3 flex-shrink-0"><item.icon className="w-5 h-5 text-primary" /></div><div><h4 className="font-semibold">{item.title}</h4><p className="text-sm text-muted-foreground">{item.description}</p></div></div>
                  ))}
                </div>
              </div>

              <div className="bg-muted rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4">Questions fréquentes</h3>
                <div className="space-y-4">
                  {page.faq.map((entry) => (
                    <div key={entry.question} className="border-b border-border pb-4 last:border-b-0 last:pb-0"><h4 className="font-semibold mb-2">{entry.question}</h4><p className="text-sm text-muted-foreground">{entry.answer}</p></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
