export function Reuse() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Réemploi Informatique</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Donner une seconde vie aux ordinateurs pour réduire les déchets électroniques et favoriser l'accès au numérique
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Process de Reconditionnement</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-semibold mb-2">Collecte</h3>
              <p className="text-muted-foreground text-sm">Récupération du matériel informatique auprès de particuliers et organisations</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="font-semibold mb-2">Diagnostic</h3>
              <p className="text-muted-foreground text-sm">Test complet et évaluation de l'état du matériel</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="font-semibold mb-2">Reconditionnement</h3>
              <p className="text-muted-foreground text-sm">Réparation, nettoyage et mise à jour logicielle</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
              </div>
              <h3 className="font-semibold mb-2">Redistribution</h3>
              <p className="text-muted-foreground text-sm">Mise à disposition aux bénéficiaires et structures locales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <p className="text-muted-foreground">Ordinateurs reconditionnés par an</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">25T</div>
              <p className="text-muted-foreground">Déchets électroniques évités</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1000+</div>
              <p className="text-muted-foreground">Bénéficiaires accompagnés</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
