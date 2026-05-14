import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import type { CmsContactPage } from "../../../../packages/cms-contracts/src";
import { fetchContactPage } from "../lib/payload-client";

const contactIconMap = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
} as const;

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
} as const;

export function Contact() {
  const [page, setPage] = useState<CmsContactPage | null>(null);

  useEffect(() => {
    fetchContactPage().then(setPage).catch(() => setPage(null));
  }, []);

  if (!page) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement du contenu CMS...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">{page.hero.eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">{page.hero.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">{page.hero.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.contactCards.map((info, index) => {
              const Icon = contactIconMap[info.icon];
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-primary/10 rounded-xl p-3 inline-flex mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">{info.content}</a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <p className="text-muted-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <select required className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <option value="">Sélectionnez un sujet</option>
                    {page.subjectOptions.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-br from-primary to-secondary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="rounded-2xl overflow-hidden border border-border aspect-square lg:aspect-auto lg:h-96 bg-muted">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=6.9%2C43.7%2C7.3%2C44.0&layer=mapnik&marker=43.85%2C7.1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location map"
                />
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-bold mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  {page.socialLinks.map((social) => {
                    const Icon = socialIconMap[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-14 h-14 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8">
                <h3 className="font-bold mb-4">{page.faq.title}</h3>
                <p className="text-white/90 text-sm mb-6">{page.faq.description}</p>
                <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                  {page.faq.ctaLabel}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
