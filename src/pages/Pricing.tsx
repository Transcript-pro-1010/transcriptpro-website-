

export default function Pricing() {
  const pricingData = [
    {
      name: 'Étudiant Solidaire',
      delay: '35 Jours',
      pricePerMin: '450 FCFA',
      pricePerHour: '27 000 FCFA',
      description: 'Pour les étudiants à faible revenu',
      highlight: false,
    },
    {
      name: 'Éco-Recherche',
      delay: '15 Jours',
      pricePerMin: '600 FCFA',
      pricePerHour: '36 000 FCFA',
      description: 'Pour les projets à long terme',
      highlight: false,
    },
    {
      name: 'Standard',
      delay: '10 Jours',
      pricePerMin: '850 FCFA',
      pricePerHour: '51 000 FCFA',
      description: 'Notre offre la plus populaire',
      highlight: true,
    },
    {
      name: 'Express',
      delay: '5 Jours',
      pricePerMin: '1 400 FCFA',
      pricePerHour: '84 000 FCFA',
      description: 'Pour les délais courts',
      highlight: false,
    },
    {
      name: 'Urgent',
      delay: '72 Heures',
      pricePerMin: '1 950 FCFA',
      pricePerHour: '117 000 FCFA',
      description: 'Pour les urgences',
      highlight: false,
    },
  ];

  const supplements = [
    { name: 'Audio de faible qualité', price: '+ 200 FCFA / min' },
    { name: 'Multi-locuteurs (3+)', price: '+ 150 FCFA / min' },
    { name: 'Terminologie complexe', price: '+ 250 FCFA / min' },
    { name: 'Verbatim (mot à mot)', price: '+ 350 FCFA / min' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Tarifs</h1>
          <p className="text-xl text-gray-600">
            15% moins chers que les standards internationaux
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-4">
                <div className="text-3xl font-bold mb-2">{plan.pricePerMin}</div>
                <div className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                  par minute
                </div>
              </div>
              <div className="mb-4">
                <div className={`text-lg font-semibold ${plan.highlight ? 'text-blue-100' : 'text-gray-700'}`}>
                  {plan.pricePerHour}
                </div>
                <div className={`text-xs ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                  pour 1h audio
                </div>
              </div>
              <div className={`text-sm font-semibold ${plan.highlight ? 'text-blue-100' : 'text-gray-700'}`}>
                Délai: {plan.delay}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supplements */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Suppléments Optionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supplements.map((supplement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                <span className="font-semibold text-gray-900">{supplement.name}</span>
                <span className="text-blue-600 font-bold">{supplement.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Forfaits Étudiants et Chercheurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Pack Thèse</h3>
            <p className="text-gray-700 mb-4">À partir de 10 heures d'audio</p>
            <div className="text-3xl font-bold text-blue-600 mb-2">-10%</div>
            <p className="text-gray-600">Remise sur le tarif total</p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-bold mb-4 text-green-900">Pack Laboratoire</h3>
            <p className="text-gray-700 mb-4">À partir de 50 heures d'audio</p>
            <div className="text-3xl font-bold text-green-600 mb-2">-15%</div>
            <p className="text-gray-600">Remise sur le tarif total</p>
          </div>
        </div>
      </section>

      {/* Comment obtenir un devis */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Comment obtenir un devis ?</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Pour toute demande, envoyez-nous un mail à <strong>contact@transcriptpro.com</strong> en précisant les éléments suivants :
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Nom et Prénom de la personne sollicitant le service</li>
              <li>Durée totale des enregistrements (Heures-Minutes-Secondes)</li>
              <li>Domaine d'études</li>
              <li>Nature de l'enregistrement (entretiens, podcast, réunion, etc.)</li>
              <li>Nombre de locuteurs</li>
              <li>Qualité des audios (bruits de fond, accents forts, etc.)</li>
              <li>Terminologie complexe (médical, juridique, etc.)</li>
              <li>Option Verbatim (souhaitée ou non)</li>
              <li>Délai de livraison sollicité</li>
              <li>Type de forfait (Pack Thèse ou Pack Laboratoire)</li>
            </ol>
            <p className="text-gray-700 mt-6">
              <strong>Dès réception de ces informations, nous vous enverrons un devis détaillé sous 24 heures.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-lg mb-8">
            Contactez-nous pour obtenir un devis personnalisé.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Demander un devis
          </button>
        </div>
      </section>
    </div>
  );
}
