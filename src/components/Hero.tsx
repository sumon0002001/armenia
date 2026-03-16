import { FileText, Clock, CheckCircle } from 'lucide-react';
import Logo from '../assets/gerb.png'

interface HeroProps {
  onApply: () => void;
  onCheckStatus: () => void;
}

export default function Hero({ onApply, onCheckStatus }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-white-600 to-white-800 text-dark">
      <img src={Logo} alt="logo" className='object-cover h-160 w-160 mx-auto m-8'/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">E-VISA Issuance System
         
          </h2>
          <p className="text-3xl text-dark-100 mb-8">
Ministry of Foreign Affairs             
          </p>
           <p className="text-3xl text-dark-100 mb-8">
Republic of Armenia           
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onApply}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Apply for E-Visa
            </button>
            <button
              onClick={onCheckStatus}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors shadow-lg"
            >
              Check Status
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <FileText className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Application</h3>
            <p className="text-dark-100">
              Simple online form with step-by-step guidance through the application process
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Clock className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
            <p className="text-dark-100">
              Processing within 3-5 business days. Maximum processing time: 55 days
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <CheckCircle className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-dark-100">
              Secure payment gateway and data protection for all applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
