import { Search, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

interface StatusResult {
  referenceNumber: string;
  fullName: string;
  passportNumber: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  expectedDate: string;
  visaType: string;
}

export default function StatusCheck({ onBack }: { onBack: () => void }) {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState<StatusResult | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!referenceNumber || !passportNumber) {
      setError('Please fill in all fields');
      return;
    }

    setHasSearched(true);
    setError('');

    const mockResults: { [key: string]: StatusResult } = {
      'MCPNLOWHCKXIBR55': {
        referenceNumber: 'MCPNLOWHCKXIBR55',
        fullName: 'MD HIRA ALI',
        passportNumber: 'A09881711',
        status: 'approved',
        submittedDate: '2026-02-28',
        expectedDate: '2026-06-06',
        visaType: 'Single Entry',
      },
      'ARM2024002': {
        referenceNumber: 'ARM2024002',
        fullName: 'Jane Doe',
        passportNumber: 'CD789012',
        status: 'pending',
        submittedDate: '2024-03-10',
        expectedDate: '2024-04-15',
        visaType: 'Multiple Entry',
      },
    };

    if (mockResults[referenceNumber] && mockResults[referenceNumber].passportNumber === passportNumber) {
      setResult(mockResults[referenceNumber]);
    } else {
      setError('No application found with the provided information. Please check your reference number and passport number.');
      setResult(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'pending':
        return <Clock className="w-8 h-8 text-blue-600" />;
      case 'rejected':
        return <AlertCircle className="w-8 h-8 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending':
        return 'Under Review';
      case 'rejected':
        return 'Rejected';
      default:
        return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-50 border-green-200';
      case 'pending':
        return 'bg-blue-50 border-blue-200';
      case 'rejected':
        return 'bg-red-50 border-red-200';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Check Visa Status</h1>
            <p className="text-gray-600">Enter your application details to check the status of your visa application</p>
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-2">
                  Application Reference Number
                </label>
                <input
                  id="reference"
                  type="text"
                  placeholder="e.g., ARM2024001"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="passport" className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Number
                </label>
                <input
                  id="passport"
                  type="text"
                  placeholder="e.g., AB123456"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              Check Status
            </button>
          </form>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {result && hasSearched && (
            <div className="space-y-6">
              <div className={`border-2 rounded-lg p-6 ${getStatusColor(result.status)}`}>
                <div className="flex items-center gap-4 mb-4">
                  {getStatusIcon(result.status)}
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Application Status</p>
                    <p className="text-2xl font-bold text-gray-900">{getStatusText(result.status)}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">Full Name</p>
                  <p className="text-gray-900 font-semibold">{result.fullName}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">Passport Number</p>
                  <p className="text-gray-900 font-semibold">{result.passportNumber}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">Visa Type</p>
                  <p className="text-gray-900 font-semibold">{result.visaType}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">Reference Number</p>
                  <p className="text-gray-900 font-semibold">{result.referenceNumber}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">Submitted Date</p>
                  <p className="text-gray-900 font-semibold">{new Date(result.submittedDate).toLocaleDateString()}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">Decision Date</p>
                  <p className="text-gray-900 font-semibold">{new Date(result.expectedDate).toLocaleDateString()}</p>
                </div>
              </div>

              {result.status === 'approved' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700">
                    Congratulations! Your visa has been approved. You can now proceed with your e-visa.
                  </p>
                </div>
              )}

              {result.status === 'pending' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    Your application is under review. You will receive an email notification once a decision is made.
                  </p>
                </div>
              )}

              {result.status === 'rejected' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700">
                    Unfortunately, your application was not approved. Please contact visa@mfa.am for more information.
                  </p>
                </div>
              )}
            </div>
          )}

          {hasSearched && !result && !error && (
            <div className="text-center py-8">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No results found. Please check your information and try again.</p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 text-sm mb-4">
            If you cannot find your application or have questions about your visa status, please contact us:
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Phone:</strong> +374 60 620 516</p>
            <p><strong>Email:</strong> visa@mfa.am</p>
            <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (GMT+4)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
