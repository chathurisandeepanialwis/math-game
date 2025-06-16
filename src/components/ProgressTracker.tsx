import React from 'react';
import { Star } from 'lucide-react';
import { useProgress } from '../context/ProgressContex';

const ProgressTracker: React.FC = () => {
  const { totalStars, sessionStars } = useProgress();

  return (
    <div className="flex items-center gap-4">
      {/* Session Stars */}
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-lg">
        <Star className="text-yellow-500 fill-current w-6 h-6 animate-pulse" />
        <span className="font-bold text-gray-800">This Session: {sessionStars}</span>
      </div>

      {/* Total Stars */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-lg" style={{ backgroundColor: '#D5ECC2' }}>
        <Star className="text-yellow-500 fill-current w-6 h-6" />
        <span className="font-bold text-gray-800">Total: {totalStars}</span>
      </div>
    </div>
  );
};

export default ProgressTracker;