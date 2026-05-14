import { motion } from "motion/react";
import { Shield, Lock, Cookie, FileText } from "lucide-react";

export function Legal() {
  const sections = [
    {
      id: "editeur",
      icon: FileText,
      title: "Éditeur du site",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">Association Goupil</strong>
            <br />
            Association loi 1901 déclarée en préfecture
            <br />
            SIRET : 123 456 789 00012
            <br />
            06140 Coursegoules, France
          </p>
          <p>
            <strong className="text-foreground">Directrice de publication :</strong> Dr. Marie Forestier, Présidente
            <br />
            <strong className="text-foreground">Contact :</strong> contact@goupil-ere.org
            <br />
            <strong className="text-foreground">Téléphone :</strong> 04 93 59 10 88
          </p>
        </div>
      ),
    },
    {
      id: "hebergement",
      icon: Shield,
      title: "Hébergement",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">Hébergeur du site :</strong>
            <br />
            Exemple Hosting SAS
            <br />
            123 Avenue de l'Hébergement
            <br />
            75001 Paris, France
            <br />
            Téléphone : 01 23 45 67 89
          </p>
        </div>
      ),
    },
    {
      id: "donnees",
      icon: Lock,
      title: "Protection des données personnelles",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
          </p>
          <p>
            <strong className="text-foreground">Responsable du traitement :</strong> Association Goupil
          </p>
          <p>
            <strong className="text-foreground">Données collectées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Nom, prénom, adresse email lors de l'adhésion</li>
            <li>Coordonnées postales pour l'envoi de documents</li>
            <li>Données de navigation (cookies analytics)</li>
          </ul>
          <p>
            <strong className="text-foreground">Finalités :</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Gestion des adhésions et des dons</li>
            <li>Envoi de newsletters et d'informations</li>
            <li>Amélioration du site web</li>
          </ul>
          <p>
            <strong className="text-foreground">Conservation :</strong> Les données sont conservées pendant la durée de l'adhésion puis archivées conformément aux obligations légales.
          </p>
          <p>
            <strong className="text-foreground">Exercer vos droits :</strong> Contactez-nous à l'adresse rgpd@goupil-ere.org ou par courrier à l'adresse de l'association.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "Politique de cookies",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic du site.
          </p>
          <p>
            <strong className="text-foreground">Types de cookies utilisés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Cookies essentiels :</strong> Nécessaires au fonctionnement du site (session, préférences)</li>
            <li><strong className="text-foreground">Cookies analytics :</strong> Pour mesurer l'audience et améliorer le site (Google Analytics)</li>
            <li><strong className="text-foreground">Cookies de préférence :</strong> Pour mémoriser vos choix (thème sombre/clair)</li>
          </ul>
          <p>
            Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur ou en cliquant sur le lien "Gérer les cookies" en bas de page.
          </p>
        </div>
      ),
    },
    {
      id: "propriete",
      icon: FileText,
      title: "Propriété intellectuelle",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, éléments graphiques) est la propriété de l'Association Goupil ou de ses partenaires, et est protégé par les lois sur la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'Association Goupil.
          </p>
          <p>
            <strong className="text-foreground">Photos et illustrations :</strong> Les photographies utilisées sur ce site sont soit la propriété de l'association, soit utilisées avec l'autorisation de leurs auteurs (Unsplash, photographes partenaires).
          </p>
        </div>
      ),
    },
    {
      id: "responsabilite",
      icon: Shield,
      title: "Limitation de responsabilité",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            L'Association Goupil s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
          </p>
          <p>
            L'Association Goupil ne saurait être tenue responsable :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Des dommages directs ou indirects résultant de l'accès au site ou de son utilisation</li>
            <li>Des interruptions temporaires du site pour maintenance ou mise à jour</li>
            <li>Du contenu des sites externes vers lesquels pointent nos liens</li>
          </ul>
        </div>
      ),
    },
    {
      id: "credits",
      icon: FileText,
      title: "Crédits",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">Conception et développement :</strong> Association Goupil
          </p>
          <p>
            <strong className="text-foreground">Technologies utilisées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>React & TypeScript pour l'interface</li>
            <li>Tailwind CSS pour le design</li>
            <li>Framer Motion pour les animations</li>
            <li>Unsplash pour les photographies</li>
          </ul>
          <p>
            <strong className="text-foreground">Remerciements :</strong> Merci à tous nos photographes bénévoles et partenaires qui contribuent à illustrer nos actions.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-muted/30">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Mentions légales
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Informations légales et politique de confidentialité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-primary/10 rounded-xl p-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{section.title}</h2>
                    </div>
                    <div className="prose prose-sm sm:prose-base max-w-none">
                      {section.content}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Navigation rapide</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  → {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Last Update */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p>Dernière mise à jour : 13 mai 2026</p>
            <p className="mt-2">
              Pour toute question concernant ces mentions légales, contactez-nous à{" "}
              <a href="mailto:legal@goupil-ere.org" className="text-primary hover:underline">
                legal@goupil-ere.org
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
