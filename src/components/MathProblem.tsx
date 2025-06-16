import React, { useState, useEffect } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import Mascot from './Mascot';
import { useProgress } from '../context/ProgressContex'; 

interface Problem {
  num1: number;
  num2: number;
  operator: '+' | '-';
  answer: number;
}

interface MathProblemProps {
  generateProblem: () => Problem;
  encouragementMessages: string[];
  backgroundColor: string;
}

const MathProblem: React.FC<MathProblemProps> = ({
  generateProblem,
  encouragementMessages,
  backgroundColor
}) => {
  const [currentProblem, setCurrentProblem] = useState<Problem>(generateProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const { addStar } = useProgress();

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    if (answer === currentProblem.answer) {
      setFeedback('correct');
      setShowConfetti(true);
      addStar();
      setTimeout(() => {
        setShowConfetti(false);
        generateNewProblem();
      }, 2000);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback(null);
      }, 2000);
    }
  };

  const generateNewProblem = () => {
    setCurrentProblem(generateProblem());
    setUserAnswer('');
    setFeedback(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userAnswer && !feedback) {
      checkAnswer();
    }
  };

  const getRandomEncouragement = () => {
    return encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 animate-pulse">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                🎉
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Problem Card */}
      <div
        className="p-8 rounded-3xl shadow-2xl mb-8 transform transition-all duration-300"
        style={{ backgroundColor }}
      >
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-bold text-white mb-6 font-mono">
            {currentProblem.num1} {currentProblem.operator} {currentProblem.num2} = ?
          </div>

          <div className="flex flex-col items-center gap-4">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-32 h-20 text-4xl font-bold text-center rounded-2xl border-4 border-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
              placeholder="?"
              disabled={feedback === 'correct'}
              autoFocus
            />

            {!feedback && userAnswer && (
              <button
                onClick={checkAnswer}
                className="px-8 py-4 bg-white text-gray-800 font-bold text-xl rounded-2xl hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Check Answer ✓
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="text-center mb-8">
          {feedback === 'correct' ? (
            <div className="animate-bounce">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-green-500 text-white font-bold text-2xl rounded-2xl shadow-lg">
                <Check className="w-8 h-8" />
                <span>{getRandomEncouragement()}</span>
              </div>
            </div>
          ) : (
            <div className="animate-pulse">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-orange-400 text-white font-bold text-2xl rounded-2xl shadow-lg">
                <X className="w-8 h-8" />
                <span>Oops! Try again, you've got this! 💪</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mascot */}
      <div className="text-center mb-8">
        <Mascot
          message={
            feedback === 'correct'
              ? "Hooray! You did it! 🎉"
              : feedback === 'incorrect'
              ? "Keep trying! You're doing great! 😊"
              : "Take your time and think it through! 🤔"
          }
        />
      </div>

      {/* New Problem Button */}
      {!feedback && (
        <div className="text-center">
          <button
            onClick={generateNewProblem}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            <RotateCcw className="w-6 h-6" />
            <span>New Problem</span> 🔄
          </button>
        </div>
      )}
    </div>
  );
};

export default MathProblem;