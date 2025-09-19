// src/pages/CareerCard.jsx
import React from 'react';

export default function CareerCard({ title, description, onExplore }) {
  return (
    <div className="recommended-card backdrop-glass p-6 rounded-xl flex flex-col justify-between items-center text-center">
      <div>
        <h3 className="text-xl font-semibold text-green-300 mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>
      </div>
      <button 
        onClick={onExplore}
        className="bg-green-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-green-300 transition-all duration-300"
      >
        Explore Pathway
      </button>
    </div>
  );
}