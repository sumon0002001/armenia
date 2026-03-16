import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ApplicationForm from './components/ApplicationForm';
import StatusCheck from './components/StatusCheck';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'application' | 'status'>('home');

  return (
    <div className="min-h-screen bg-gray-50">
     
      {currentPage === 'home' && (
        <>
          <Hero
            onApply={() => setCurrentPage('application')}
            onCheckStatus={() => setCurrentPage('status')}
          />
          <InfoSection />
        </>
      )}
      {currentPage === 'application' && (
        <ApplicationForm onBack={() => setCurrentPage('home')} />
      )}
      {currentPage === 'status' && (
        <StatusCheck onBack={() => setCurrentPage('home')} />
      )}
      <Footer />
    </div>
  );
}

export default App;
