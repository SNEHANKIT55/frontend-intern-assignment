import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  showPrevious: boolean;
  showNext: boolean;
  isNextDisabled?: boolean;
}

export function NavigationButtons({
  onPrevious,
  onNext,
  showPrevious,
  showNext,
  isNextDisabled = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-end gap-3 mt-8">
      {showPrevious && (
        <button
          onClick={onPrevious}
          className="p-3 rounded-xl bg-cyan-50/80 border border-cyan-100 text-slate-600 
            hover:bg-cyan-100 hover:border-cyan-200 transition-all duration-300 ease-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
            active:scale-95"
          aria-label="Previous question"
          type="button"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {showNext && (
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 text-white button-shadow
            hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 ease-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-cyan-400 disabled:hover:to-blue-400
            active:scale-95"
          aria-label="Next question"
          type="button"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
