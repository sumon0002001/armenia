import { Globe, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/gerb.png"

export default function Header() {
  const [language, setLanguage] = useState('EN');

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              
              <img src={logo}  alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">E-VISA Issuance System</h1>
                <p className="text-sm text-gray-600">Republic of Armenia</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span>+374 10 544-041</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span>visa@mfa.am</span>
              </div>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="EN">English</option>
              <option value="RU">Русский</option>
              <option value="HY">Հայերեն</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
