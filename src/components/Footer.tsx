import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">E-Visa Portal</h3>
            <p className="text-sm text-gray-400">
              Official electronic visa application system for the Republic of Armenia
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.mfa.am"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  Ministry of Foreign Affairs
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm">
              <li>Phone: +374 60 620 516</li>
              <li>Phone: +374 60 620 553</li>
              <li>Email: visa@mfa.am</li>
              <li className="pt-2 text-gray-400">
                For technical support and inquiries
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Republic of Armenia Ministry of Foreign Affairs. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
