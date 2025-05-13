import React from 'react';

export default function LanguageSelectorButton({ name, flag, onClick }) {
  return (
    <div
      className="bg-green-100 hover:bg-green-200 rounded-xl p-4 shadow-sm transition"
    >
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center w-full text-green-800 font-medium"
      >
        <span className="text-3xl mb-1">{flag}</span>
        <span>{name}</span>
      </button>
    </div>
  );
}
