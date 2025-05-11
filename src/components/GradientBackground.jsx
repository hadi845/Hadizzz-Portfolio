// components/GradientBackground.jsx
import React from 'react';

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left Blob */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-fade-in" />

      {/* Bottom Right Blob */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30 animate-fade-in delay-200" />
    </div>
  );
};

export default GradientBackground;
