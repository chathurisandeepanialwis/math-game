import React from 'react';
import { Home } from 'lucide-react';
import MathProblem from './MathProblem';
import ProgressTracker from './ProgressTracker';

interface AdditionPageProps {
  onBack: () => void;
}

const AdditionPage: React.FC<AdditionPageProps> = ({ onBack }) => {
  const generateAdditionProblem = () => {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1-9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
    return {
      num1,
      num2,
      operator: '+' as const,
      answer: num1 + num2
    };
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl text-lg font-bold bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300 shadow-lg"
        >
          <Home className="w-6 h-6" />
          <span>Back Home</span> 🏠
        </button>
        <ProgressTracker />
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          ➕ Addition Fun! ➕
        </h1>
        <p className="text-2xl text-white font-semibold">
          Let's add some numbers together! 🎯
        </p>
      </div>

      {/* Math Problem Component */}
      <MathProblem
        generateProblem={generateAdditionProblem}
        encouragementMessages={[
          "Amazing addition! 🌟",
          "You're a math superstar! ⭐",
          "Perfect! Keep going! 🎉",
          "Wonderful work! 💫",
          "You're on fire! 🔥"
        ]}
        backgroundColor="#FFD3B4"
      />
    </div>
  );
};

export default AdditionPage;