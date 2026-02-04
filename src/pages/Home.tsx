

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Libérez votre temps, nous écrivons pour vous
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            TranscriptPro est votre partenaire de confiance pour la retranscription de fichiers audio en texte. 
            Nous offrons des services de haute qualité à des prix 15% moins chers que les standards internationaux.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Demander un devis
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir TranscriptPro ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Rapide et Fiable</h3>
              <p className="text-gray-600">
                Nos délais varient de 72 heures à 35 jours selon vos besoins. 
                Qualité garantie à 99%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Confidentiel et Sécurisé</h3>
              <p className="text-gray-600">
                Vos données sont traitées avec la plus grande confidentialité. 
                Suppression sécurisée après 30 jours.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">Tarifs Compétitifs</h3>
              <p className="text-gray-600">
                15% moins chers que les standards internationaux. 
                Pack Étudiant Solidaire à partir de 450 FCFA/min.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Qui sommes-nous ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pour les chercheurs et doctorants</h3>
            <p className="text-gray-600 mb-4">
              Vous faites face au travail fastidieux que représente la retranscription de vos entretiens 
              réalisés dans le cadre de vos études de terrain ? Vous avez d'autres responsabilités et 
              n'avez pas suffisamment de temps ni d'énergie pour réaliser cette tâche ?
            </p>
            <p className="text-gray-600">
              Pas de souci, nous sommes là ! Nous gèrerons vos enregistrements et vous permettrons 
              d'utiliser ce temps et cette énergie pour d'autres tâches aussi importantes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Retranscription d'entretiens semi-directifs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Transcription de focus groups</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Enregistrements de cours et conférences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Podcasts et webinaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Comptes-rendus de réunions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-lg mb-8">
            Contactez-nous pour obtenir un devis personnalisé en moins de 24 heures.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Demander un devis
          </button>
        </div>
      </section>
    </div>
  );
}
