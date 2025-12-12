import React from 'react';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  return (
    <div 
      className="flex gap-2 w-full max-w-md mx-auto mb-8"
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Question ${currentStep + 1} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full flex-1 transition-all duration-500 ease-out ${
            index <= currentStep
              ? 'bg-teal-700'
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
