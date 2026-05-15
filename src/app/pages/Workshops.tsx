export function Workshops() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Ateliers & Accompagnement</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez nos ateliers pour apprendre, créer et progresser ensemble dans un environnement bienveillant et inclusif
          </p>
        </div>
      </section>

      {/* Current Workshops */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Ateliers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Informatique pour Débutants</h3>
              <p className="text-muted-foreground mb-4">Découvrez les bases de l'informatique, l'utilisation d'un ordinateur et les logiciels essentiels</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Tous les mardis - 14h à 16h</p>
            </div>

            <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Internet et Navigation</h3>
              <p className="text-muted-foreground mb-4">Maîtrisez le web, les moteurs de recherche et la sécurité en ligne</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Tous les jeudis - 14h à 16h</p>
            </div>

            <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email et Communication</h3>
              <p className="text-muted-foreground mb-4">Créez votre email, communiquez efficacement et utilisez les réseaux sociaux</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Mercredi - 10h à 12h</p>
            </div>

            <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Sécurité Numérique</h3>
              <p className="text-muted-foreground mb-4">Protégez-vous en ligne, gérez vos données et luttez contre les arnagues</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Lundi - 15h à 17h</p>
            </div>

            <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Smartphone & Tablette</h3>
              <p className="text-muted-foreground mb-4">Apprenez à utiliser votre smartphone ou votre tablette au quotidien</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Vendredi - 14h à 16h</p>
            </div>

            <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Accompagnement Personnalisé</h3>
              <p className="text-muted-foreground mb-4">Rendez-vous individuel pour résoudre vos questions spécifiques</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Sur rendez-vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Ce que nos participants en disent</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <p className="italic text-muted-foreground mb-4">"Grâce aux ateliers de Goupil, j'ai enfin appris à utiliser un ordinateur. Je suis fière d'avoir progressé et de pouvoir communiquer avec ma famille en ligne."</p>
              <p className="font-semibold">- Marie, 72 ans</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <p className="italic text-muted-foreground mb-4">"L'équipe de Goupil est super accueillante et patiente. Les ateliers m'ont vraiment aidé à reprendre confiance face à la technologie."</p>
              <p className="font-semibold">- Jean, 68 ans</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à rejoindre nos ateliers ?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Aucun prérequis nécessaire, juste la volonté d'apprendre !
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
}
