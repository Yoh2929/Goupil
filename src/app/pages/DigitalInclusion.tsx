export function DigitalInclusion() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Inclusion Numérique</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Réduire la fracture numérique en accompagnant les publics dans l'apprentissage et l'accès aux outils numériques
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Accompagnements</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Formation Débutants</h3>
              <p className="text-muted-foreground">Initiation aux bases de l'informatique et d'Internet pour les personnes sans expérience préalable</p>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Ateliers Pratiques</h3>
              <p className="text-muted-foreground">Créer un email, utiliser les réseaux sociaux, naviguer sur Internet, gérer ses données personnelles</p>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Accompagnement Personnalisé</h3>
              <p className="text-muted-foreground">Suivi individuel pour surmonter les blocages et gains de confiance face aux outils numériques</p>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Sensibilisation Seniors</h3>
              <p className="text-muted-foreground">Programmes spécifiques pour les personnes de plus de 60 ans avec approche douce et progressive</p>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Formations Professionnelles</h3>
              <p className="text-muted-foreground">Formations pour l'emploi et l'entrepreneuriat numérique adaptées aux demandeurs d'emploi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Publics Accompagnés</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Seniors</h3>
              <p className="text-muted-foreground text-sm">Accompagnement doux pour apprivoiser la technologie et rester connecté</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Demandeurs d'emploi</h3>
              <p className="text-muted-foreground text-sm">Formation aux compétences numériques essentielles pour l'emploi</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Personnes en précarité</h3>
              <p className="text-muted-foreground text-sm">Accès au matériel reconditionné et apprentissage des outils numériques</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Jeunes</h3>
              <p className="text-muted-foreground text-sm">Apprentissage des usages responsables et créatifs du numérique</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Structures locales</h3>
              <p className="text-muted-foreground text-sm">Support aux écoles, associations et collectivités locales</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Migrants</h3>
              <p className="text-muted-foreground text-sm">Inclusion numérique et apprentissage de la langue française</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
