import React from 'react';
import Greeting from './Greeting';
import LanguageSelectorButton from './LanguageSelectorButton';

const languages = [
  { name: 'Spanish', flag: '🇪🇸' },
  { name: 'French', flag: '🇫🇷' },
  { name: 'German', flag: '🇩🇪' },
  { name: 'Italian', flag: '🇮🇹' },
  { name: 'Japanese', flag: '🇯🇵' },
  { name: 'English', flag: '🇬🇧' },
];

export default function LanguageSelector() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center space-y-6">
        <Greeting />

        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <LanguageSelectorButton
              key={lang.name}
              name={lang.name}
              flag={lang.flag}
              onClick={() => console.log(`Selected: ${lang.name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
