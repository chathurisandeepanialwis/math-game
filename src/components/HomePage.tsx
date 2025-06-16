import React from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import Mascot from './Mascot';
import { useProgress } from '../context/ProgressContex';

interface HomePageProps {
  onStartAddition: () => void;
  onStartSubtraction: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartAddition, onStartSubtraction }) => {
  const { totalStars } = useProgress();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
          🌟 Math Fun World 🌟
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold">
          Let's learn math together! 🎉
        </p>
      </div>

      {/* Mascot */}
      <div className="mb-8">
        <Mascot message="Hi there! Ready to have some math fun?" />
      </div>

      {/* Progress Display */}
      {totalStars > 0 && (
        <div className="mb-8 p-4 rounded-2xl" style={{ backgroundColor: '#D5ECC2' }}>
          <div className="flex items-center justify-center gap-2">
            <Star className="text-yellow-500 fill-current w-8 h-8" />
            <span className="text-2xl font-bold text-gray-800">
              You've earned {totalStars} star{totalStars !== 1 ? 's' : ''}! ⭐
            </span>
          </div>
        </div>
      )}

      {/* Game Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <button
          onClick={onStartAddition}
          className="group relative px-8 py-6 rounded-3xl text-2xl md:text-3xl font-bold text-white transform transition-all duration-300 hover:scale-105 hover:rotate-1 active:scale-95 shadow-lg"
          style={{ backgroundColor: '#FFD3B4' }}
        >
          <div className="flex items-center gap-4">
            <Plus className="w-10 h-10" />
            <span>Learn Addition</span>
            <span className="text-4xl">➕</span>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        <button
          onClick={onStartSubtraction}
          className="group relative px-8 py-6 rounded-3xl text-2xl md:text-3xl font-bold text-white transform transition-all duration-300 hover:scale-105 hover:-rotate-1 active:scale-95 shadow-lg"
          style={{ backgroundColor: '#FFAAA7' }}
        >
          <div className="flex items-center gap-4">
            <Minus className="w-10 h-10" />
            <span>Learn Subtraction</span>
            <span className="text-4xl">➖</span>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Fun Facts */}
      <div className="max-w-2xl p-6 rounded-2xl" style={{ backgroundColor: '#D5ECC2' }}>
        <p className="text-xl text-gray-800 font-semibold">
          🎈 Math is magical! Every problem you solve makes you stronger! 💪
        </p>
      </div>
    </div>
  );
};

export default HomePage;