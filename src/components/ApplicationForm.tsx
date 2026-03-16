import { useState } from 'react';
import { ArrowLeft, Upload, User, MapPin, Calendar, CreditCard } from 'lucide-react';

interface ApplicationFormProps {
  onBack: () => void;
}

export default function ApplicationForm({ onBack }: ApplicationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    email: '',
    phone: '',
    visaType: '21-day',
    arrivalDate: '',
    departureDate: '',
    accommodation: '',
    purpose: 'tourism',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">E-Visa Application</h2>
          <p className="text-gray-600">Please fill out all required information accurately</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= num
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {num}
              </div>
              {num < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step > num ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Personal Information</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationality *
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Passport Information</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport Number *
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport Expiry Date *
                </label>
                <input
                  type="date"
                  name="passportExpiry"
                  value={formData.passportExpiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-900">
                <strong>Important:</strong> Your passport must be valid for at least 6 months
                from your planned date of entry into Armenia.
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Travel Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Visa Type *
                </label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="21-day">21-Day Single Entry ($10)</option>
                  <option value="120-day-single">120-Day Single Entry ($40)</option>
                  <option value="120-day-multiple">120-Day Multiple Entry ($60)</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Arrival Date *
                  </label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Departure Date *
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose of Visit *
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="tourism">Tourism</option>
                  <option value="business">Business</option>
                  <option value="humanitarian">Humanitarian</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Accommodation Address in Armenia *
                </label>
                <input
                  type="text"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleInputChange}
                  placeholder="Hotel name and address or residence address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <Upload className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Document Upload</h3>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Upload Passport Photo Page
                </p>
                <p className="text-xs text-gray-500">PDF, JPG or PNG (Max 5MB)</p>
                <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Upload Passport-Style Photo
                </p>
                <p className="text-xs text-gray-500">JPG or PNG (Max 2MB)</p>
                <input type="file" className="hidden" accept=".jpg,.jpeg,.png" />
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold">Application Summary</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Visa Type:</span>
                  <span className="font-medium">{formData.visaType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee:</span>
                  <span className="font-medium">
                    {formData.visaType === '21-day' && '$10.00'}
                    {formData.visaType === '120-day-single' && '$40.00'}
                    {formData.visaType === '120-day-multiple' && '$60.00'}
                  </span>
                </div>
                <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total Amount:</span>
                  <span className="text-blue-600">
                    {formData.visaType === '21-day' && '$10.00'}
                    {formData.visaType === '120-day-single' && '$40.00'}
                    {formData.visaType === '120-day-multiple' && '$60.00'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2 mt-4">
              <input type="checkbox" className="mt-1" required />
              <label className="text-sm text-gray-700">
                I confirm that all information provided is accurate and I have read and agree
                to the terms and conditions
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Next Step
            </button>
          ) : (
            <button className="ml-auto px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold">
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
