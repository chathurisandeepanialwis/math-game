import React from 'react';
import { Home } from 'lucide-react';
import MathProblem from './MathProblem';
import ProgressTracker from './ProgressTracker';

interface SubtractionPageProps {
  onBack: () => void;
}

const SubtractionPage: React.FC<SubtractionPageProps> = ({ onBack }) => {
  const generateSubtractionProblem = () => {
    const num1 = Math.floor(Math.random() * 9) + 2; // 2-10
    const num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // 1 to num1-1
    return {
      num1,
      num2,
      operator: '-' as const,
      answer: num1 - num2
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
          ➖ Subtraction Fun! ➖
        </h1>
        <p className="text-2xl text-white font-semibold">
          Let's subtract some numbers! 🎯
        </p>
      </div>

      {/* Math Problem Component */}
      <MathProblem
        generateProblem={generateSubtractionProblem}
        encouragementMessages={[
          "Excellent subtraction! 🌟",
          "You're a subtraction star! ⭐",
          "Perfect! Well done! 🎉",
          "Outstanding work! 💫",
          "You're amazing! 🔥"
        ]}
        backgroundColor="#FFAAA7"
      />
    </div>
  );
};

export default SubtractionPage;