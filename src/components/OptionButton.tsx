import React from 'react';

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function OptionButton({ option, isSelected, onClick, disabled = false }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-8 py-4 rounded-2xl transition-all duration-300 ease-out
        ${
          isSelected
            ? 'bg-gradient-to-br from-cyan-100 to-blue-100 border-2 border-teal-500 text-slate-800 button-shadow'
            : 'bg-gradient-to-br from-cyan-50/80 to-blue-50/80 border-2 border-transparent text-slate-700 hover:border-cyan-200 hover:from-cyan-50 hover:to-blue-50'
        }
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        active:scale-[0.98]
      `}
      aria-pressed={isSelected}
      type="button"
    >
      <span className="font-medium">{option}</span>
    </button>
  );
}
