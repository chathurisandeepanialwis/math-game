import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AdditionPage from './components/AdditionPage';
import SubtractionPage from './components/SubstractionPage';
import { ProgressProvider } from './context/ProgressContex';

type Page = 'home' | 'addition' | 'subtraction';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'addition':
        return <AdditionPage onBack={() => setCurrentPage('home')} />;
      case 'subtraction':
        return <SubtractionPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <HomePage
            onStartAddition={() => setCurrentPage('addition')}
            onStartSubtraction={() => setCurrentPage('subtraction')}
          />
        );
    }
  };

  return (
    <ProgressProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#98DDCA' }}>
        {renderPage()}
      </div>
    </ProgressProvider>
  );
}

export default App;