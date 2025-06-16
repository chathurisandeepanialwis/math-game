import React from 'react';

interface MascotProps {
  message: string;
}

const Mascot: React.FC<MascotProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Mascot Character */}
      <div className="relative animate-bounce">
        <div className="w-24 h-24 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-4xl">🦊</span>
        </div>
        {/* Little sparkles around mascot */}
        <div className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</div>
        <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
      </div>

      {/* Speech Bubble */}
      <div className="relative p-4 bg-white rounded-2xl shadow-lg max-w-sm">
        <p className="text-lg font-semibold text-gray-800 text-center">
          {message}
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
      </div>
    </div>
  );
};

export default Mascot;