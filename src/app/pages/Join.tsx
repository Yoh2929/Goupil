import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Users, Check, Heart, Gift, Calendar, BookOpen, Mail, CreditCard } from "lucide-react";
import type { CmsJoinPage } from "../../../../packages/cms-contracts/src";
import { fetchJoinPage } from "../lib/payload-client";

const joinIconMap = {
  users: Users,
  heart: Heart,
  "book-open": BookOpen,
  calendar: Calendar,
  gift: Gift,
  mail: Mail,
} as const;

export function Join() {
  const [page, setPage] = useState<CmsJoinPage | null>(null);
  const [membershipType, setMembershipType] = useState<CmsJoinPage["membershipPlans"][number]["id"]>("individual");
  const [paymentFrequency, setPaymentFrequency] = useState<"annual" | "monthly">("annual");

  useEffect(() => {
    fetchJoinPage().then(setPage).catch(() => setPage(null));
  }, []);

  const selectedPlan = useMemo(
    () => page?.membershipPlans.find((plan) => plan.id === membershipType) ?? null,
    [page, membershipType]
  );

  if (!page) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement du contenu CMS...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6"><Users className="w-10 h-10 text-white" /></div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">{page.hero.eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">{page.hero.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">{page.hero.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.benefitsOverview.map((benefit, index) => {
              const Icon = joinIconMap[benefit.icon];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-primary/10 rounded-xl p-3 inline-flex mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Choisissez votre adhésion</h2>
            <p className="text-lg text-muted-foreground mb-8">Tous nos membres bénéficient des mêmes avantages</p>
            <div className="inline-flex gap-2 p-2 bg-muted rounded-xl">
              <button onClick={() => setPaymentFrequency("annual")} className={`px-6 py-3 rounded-lg font-medium transition-all ${paymentFrequency === "annual" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground"}`}>Annuel <span className="text-xs ml-1">(économisez 20%)</span></button>
              <button onClick={() => setPaymentFrequency("monthly")} className={`px-6 py-3 rounded-lg font-medium transition-all ${paymentFrequency === "monthly" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground"}`}>Mensuel</button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {page.membershipPlans.map((plan, index) => {
              const Icon = joinIconMap[plan.icon];
              const isSelected = membershipType === plan.id;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMembershipType(plan.id)}
                  className={`relative bg-card border-2 rounded-3xl p-8 cursor-pointer transition-all hover:shadow-2xl ${isSelected ? "border-primary shadow-xl scale-105" : "border-border hover:border-primary/50"} ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                >
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full">Le plus populaire</div>}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-6`}><Icon className="w-8 h-8 text-white" /></div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2"><span className="text-5xl font-bold">{paymentFrequency === "annual" ? plan.annualPrice : plan.monthlyPrice}€</span><span className="text-muted-foreground">/{paymentFrequency === "annual" ? "an" : "mois"}</span></div>
                    {paymentFrequency === "monthly" && <p className="text-xs text-muted-foreground mt-2">Soit {plan.monthlyPrice * 12}€/an au lieu de {plan.annualPrice}€</p>}
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full px-6 py-4 rounded-xl font-semibold transition-all ${isSelected ? `bg-gradient-to-br ${plan.color} text-white` : "bg-muted hover:bg-muted/80"}`}>{isSelected ? "Sélectionné" : "Sélectionner"}</motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold mb-6">Vos avantages membres</h2></motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.benefits.map((benefit, index) => (
              <motion.div key={benefit} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"><div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0"><Check className="w-4 h-4 text-primary" /></div><span className="font-medium">{benefit}</span></motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">{page.cta.title}</h2>
            <p className="text-muted-foreground mb-8">{page.cta.description}</p>
            {selectedPlan && <div className="mb-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Formule sélectionnée</p><p className="text-xl font-bold">{selectedPlan.name}</p></div><div className="text-right"><p className="text-3xl font-bold text-primary">{paymentFrequency === "annual" ? selectedPlan.annualPrice : selectedPlan.monthlyPrice}€</p><p className="text-sm text-muted-foreground">/{paymentFrequency === "annual" ? "an" : "mois"}</p></div></div></div>}
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6"><div><label className="block text-sm font-medium mb-2">Prénom</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div><div><label className="block text-sm font-medium mb-2">Nom</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div></div>
              <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div>
              <div><label className="block text-sm font-medium mb-2">Téléphone</label><input type="tel" className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div>
              <div><label className="block text-sm font-medium mb-2">Adresse</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div>
              <div className="grid sm:grid-cols-3 gap-4"><div className="sm:col-span-2"><label className="block text-sm font-medium mb-2">Ville</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div><div><label className="block text-sm font-medium mb-2">Code postal</label><input type="text" required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" /></div></div>
              <div className="pt-4"><label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" required className="mt-1" /><span className="text-sm text-muted-foreground">J'accepte les conditions générales et la politique de confidentialité</span></label></div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-8 py-4 bg-gradient-to-br from-primary to-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"><CreditCard className="w-5 h-5" />{page.cta.primaryLabel}</motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
