import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Charter from './pages/Charter';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TranscriptPro</h1>
            </div>
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 'home'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('pricing')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 'pricing'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('charter')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 'charter'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Charte
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 'contact'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'charter' && <Charter />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">TranscriptPro</h3>
              <p className="text-gray-400">Votre partenaire de confiance pour la retranscription audio.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@transcriptpro.com</p>
              <p className="text-gray-400">WhatsApp: +XXX XXX XXXX</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Légal</h3>
              <p className="text-gray-400">© 2025 TranscriptPro. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
