export function FAQ() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Questions Fréquentes</h1>
          <p className="text-xl text-muted-foreground">
            Trouvez les réponses à vos questions sur Goupil
          </p>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Que fait Goupil ?</h3>
            <p className="text-muted-foreground">
              Goupil est une association qui lutte contre la fracture numérique par le réemploi informatique, le reconditionnement d'ordinateurs et l'inclusion numérique sur la région de Morlaix et du Centre Ouest Breton.
            </p>
          </div>

          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Comment donner du matériel informatique ?</h3>
            <p className="text-muted-foreground">
              Vous pouvez nous contacter via notre formulaire de contact ou nous appeler directement. Nous récupérons les ordinateurs, écrans, claviers et autres équipements informatiques en bon ou mauvais état.
            </p>
          </div>

          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Est-ce que je dois savoir programmer pour participer ?</h3>
            <p className="text-muted-foreground">
              Non ! Nos ateliers sont ouverts à tous les niveaux. Nous proposons des formations pour débutants, intermédiaires et avancés. L'important est la curiosité et la volonté d'apprendre.
            </p>
          </div>

          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Comment devenir bénévole ?</h3>
            <p className="text-muted-foreground">
              Consultez notre page "Devenir bénévole" ou contactez-nous directement. Nous accueillons les personnes ayant des compétences en informatique, en communication, ou simplement ayant du temps à donner.
            </p>
          </div>

          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Où se situent vos ateliers ?</h3>
            <p className="text-muted-foreground">
              Nous sommes principalement basés à Morlaix et dans le Centre Ouest Breton. Certains ateliers peuvent se déplacer selon les demandes des collectivités locales.
            </p>
          </div>

          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Quel est l'impact écologique de votre action ?</h3>
            <p className="text-muted-foreground">
              En reconditionnant et réutilisant des ordinateurs, nous évitons que ces équipements ne finissent à la casse. Chaque ordinateur sauvé, c'est environ 50kg de déchets électroniques en moins et une réduction de l'extraction de matières premières.
            </p>
          </div>

          <div className="border rounded-lg p-6 dark:border-slate-700 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Puis-je financer Goupil autrement que par don matériel ?</h3>
            <p className="text-muted-foreground">
              Oui, vous pouvez faire un don financier qui permettra d'acheter les pièces nécessaires au reconditionnement et de financer nos actions d'inclusion numérique. Toutes les donations sont déductibles fiscalement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
