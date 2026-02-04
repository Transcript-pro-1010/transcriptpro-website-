

export default function Charter() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Charte Qualité et Confidentialité</h1>
          <p className="text-xl text-gray-600">
            Nos engagements envers vous
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Engagement de Confidentialité</h2>
            <p className="text-gray-700 mb-4">
              Nous comprenons la nature sensible des informations contenues dans les enregistrements de nos clients, 
              en particulier dans les domaines de la recherche académique, médicale ou juridique. À ce titre, 
              TranscriptPro s'engage à :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Non-divulgation :</strong> Toutes les informations contenues dans les fichiers audio 
                  et les transcriptions sont traitées avec la plus grande confidentialité et ne seront jamais 
                  divulguées à des tiers, sauf exigence légale.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Accès Restreint :</strong> Seul le personnel directement impliqué dans le processus 
                  de retranscription et de contrôle qualité aura accès aux fichiers. Chaque membre de notre 
                  équipe est lié par un accord de confidentialité strict.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Suppression Sécurisée :</strong> Les fichiers audio et les transcriptions sont 
                  stockés sur des serveurs sécurisés et seront supprimés de nos systèmes 30 jours après 
                  la livraison et le paiement intégral du service, sauf demande contraire explicite du client.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Sécurité des Données</h2>
            <p className="text-gray-700 mb-4">
              La protection de vos données est notre priorité. Nous mettons en œuvre les mesures de sécurité suivantes :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Transfert Sécurisé :</strong> La transmission des fichiers audio via WhatsApp est 
                  chiffrée de bout en bout. Pour les volumes importants ou les exigences spécifiques, des 
                  plateformes de transfert sécurisées peuvent être proposées.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Stockage Protégé :</strong> Les fichiers sont stockés temporairement sur des serveurs 
                  sécurisés, protégés par des pare-feu et des protocoles de chiffrement avancés.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Protection Antivirus :</strong> Tous nos systèmes sont équipés de logiciels antivirus 
                  et anti-malware à jour pour prévenir toute intrusion ou corruption de données.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Assurance Qualité</h2>
            <p className="text-gray-700 mb-4">
              Notre processus de retranscription est conçu pour garantir une précision maximale :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Transcripteurs Qualifiés :</strong> Notre équipe est composée de transcripteurs 
                  expérimentés, avec une expertise dans divers domaines (académique, technique, etc.).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Processus de Relecture :</strong> Chaque transcription fait l'objet d'une relecture 
                  minutieuse par un second transcripteur ou un relecteur dédié pour corriger les erreurs 
                  et assurer la fidélité au contenu audio.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Retour Client :</strong> Nous encourageons les retours de nos clients pour toute 
                  amélioration continue de nos services.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Éthique Professionnelle</h2>
            <p className="text-gray-700 mb-4">
              TranscriptPro adhère aux principes éthiques les plus élevés :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Impartialité :</strong> Nos transcripteurs s'engagent à retranscrire le contenu 
                  de manière objective, sans altération ni interprétation.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Respect de la Propriété Intellectuelle :</strong> Nous reconnaissons et respectons 
                  la propriété intellectuelle de nos clients sur leurs enregistrements et leurs contenus.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>
                  <strong>Transparence :</strong> Nous communiquons clairement nos conditions de service, 
                  nos tarifs et nos délais, y compris en cas de circonstances exceptionnelles.
                </span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-700 text-lg">
              En choisissant TranscriptPro, vous optez pour un partenaire fiable, respectueux de vos données 
              et engagé envers l'excellence. Nous nous engageons à maintenir les plus hauts standards de 
              qualité, de confidentialité et d'éthique professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Des questions sur notre charte ?</h2>
          <p className="text-gray-600 mb-8">
            N'hésitez pas à nous contacter pour plus d'informations.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
}
