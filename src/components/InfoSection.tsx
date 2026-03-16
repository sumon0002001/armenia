import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
      >
        <span className="font-semibold text-gray-900 text-left">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Information</h2>
        <p className="text-gray-600">
          Important information about Armenia e-visa application process
        </p>
      </div>

      <div className="space-y-4">
        <AccordionItem
          title="Who Can Apply?"
          isOpen={openIndex === 0}
          onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
        >
          <div className="text-gray-700 space-y-2">
            <p>
              Citizens of countries not listed in the visa-exempt category can apply for an
              Armenian e-visa. The e-visa is available for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Tourism purposes</li>
              <li>Business visits</li>
              <li>Humanitarian purposes</li>
              <li>Other short-term stays</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem
          title="Required Documents"
          isOpen={openIndex === 1}
          onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
        >
          <div className="text-gray-700 space-y-2">
            <p>You will need the following documents to complete your application:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Valid passport (minimum 6 months validity)</li>
              <li>Digital passport-style photograph</li>
              <li>Proof of accommodation in Armenia</li>
              <li>Travel itinerary or flight tickets</li>
              <li>Valid email address for communication</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem
          title="Processing Time & Validity"
          isOpen={openIndex === 2}
          onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
        >
          <div className="text-gray-700 space-y-2">
            <p>
              <strong>Processing Time:</strong> Most applications are processed within 3-5
              business days. In some cases, processing may take up to 55 days.
            </p>
            <p>
              <strong>Visa Validity:</strong> The e-visa is typically valid for 120 days from
              the date of issue and allows a stay of up to 21 or 120 days, depending on the
              visa type.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          title="Fees & Payment"
          isOpen={openIndex === 3}
          onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}
        >
          <div className="text-gray-700 space-y-2">
            <p>
              E-visa fees vary depending on the type of visa and processing time selected:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>21-day single entry visa: Approx. $10 USD</li>
              <li>120-day single entry visa: Approx. $40 USD</li>
              <li>120-day multiple entry visa: Approx. $60 USD</li>
            </ul>
            <p className="mt-3">
              Payment is processed securely through the integrated payment gateway. Major
              credit cards are accepted.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          title="Application Process"
          isOpen={openIndex === 4}
          onToggle={() => setOpenIndex(openIndex === 4 ? null : 4)}
        >
          <div className="text-gray-700 space-y-2">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Complete the online application form with accurate information</li>
              <li>Upload required documents (passport copy, photo, etc.)</li>
              <li>Review your application details carefully</li>
              <li>Pay the visa fee through the secure payment gateway</li>
              <li>Receive confirmation email with application reference number</li>
              <li>Check application status online using your reference number</li>
              <li>Receive e-visa via email once approved</li>
              <li>Print the e-visa and present it upon arrival in Armenia</li>
            </ol>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}
