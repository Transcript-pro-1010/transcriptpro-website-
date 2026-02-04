import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    duration: '',
    field: '',
    recordingType: '',
    speakers: '',
    audioQuality: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Merci ! Votre demande a été reçue. Nous vous répondrons sous 24 heures.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      duration: '',
      field: '',
      recordingType: '',
      speakers: '',
      audioQuality: '',
      message: '',
    });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">
            Nous sommes là pour répondre à vos questions et vous fournir un devis personnalisé.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-700">contact@transcriptpro.com</p>
            <p className="text-sm text-gray-600 mt-4">
              Pour les demandes de devis et les informations générales.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-700">+XXX XXX XXXX</p>
            <p className="text-sm text-gray-600 mt-4">
              Pour la transmission de vos fichiers audio.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold mb-2">Délai de Réponse</h3>
            <p className="text-gray-700">Sous 24 heures</p>
            <p className="text-sm text-gray-600 mt-4">
              Nous vous enverrons un devis détaillé rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Formulaire de Demande de Devis</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Objet du mail (Nom Prénom - besoin service retranscription) *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Jean Dupont - besoin service retranscription"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Durée totale des enregistrements (H-M-S) *
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 2-30-45"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Domaine d'études *
                </label>
                <input
                  type="text"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Sociologie, Médecine, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nature de l'enregistrement *
                </label>
                <select
                  name="recordingType"
                  value={formData.recordingType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="entretiens">Entretiens</option>
                  <option value="podcast">Podcast</option>
                  <option value="reunion">Réunion</option>
                  <option value="cours">Enregistrement de cours</option>
                  <option value="conference">Conférence</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre de locuteurs *
                </label>
                <input
                  type="number"
                  name="speakers"
                  value={formData.speakers}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 2"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Qualité des audios
              </label>
              <textarea
                name="audioQuality"
                value={formData.audioQuality}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez la qualité (bruits de fond, accents forts, enregistrement distant, etc.)"
                rows={3}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message supplémentaire
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Informations supplémentaires (terminologie complexe, option verbatim, délai souhaité, etc.)"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      {/* Important Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Informations Importantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold mb-4">Modalités de Paiement</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Acompte de 50% non remboursable avant démarrage</li>
              <li>• Paiement via Orange Money (OM) ou MoMo</li>
              <li>• Solde dû à la livraison du service</li>
              <li>• Fichier Word remis après paiement intégral</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
            <h3 className="text-lg font-bold mb-4">Délai de Livraison</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Débute à réception de l'acompte</li>
              <li>• De 72 heures à 35 jours selon le service</li>
              <li>• Relance sous 7 jours en cas de saturation</li>
              <li>• Réduction de 15% en cas de retard</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
