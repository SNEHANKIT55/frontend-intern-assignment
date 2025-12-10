import React from 'react';
import { X } from 'lucide-react';

interface QuizContainerProps {
  children: React.ReactNode;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export function QuizContainer({ children, onClose, showCloseButton = true }: QuizContainerProps) {
  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      {/* Main quiz card */}
      <div className="relative w-full max-w-3xl">
        <div className="bg-white rounded-[32px] card-shadow p-12 relative">
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="absolute -top-4 right-6 w-12 h-12 bg-slate-700 hover:bg-slate-800 
                text-white rounded-full flex items-center justify-center transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
                button-shadow active:scale-95"
              aria-label="Close quiz"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {children}
        </div>

        {/* Decorative character - positioned outside the card */}
        <div className="absolute -bottom-8 -left-12 hidden lg:block">
          <div className="relative">
            {/* Speech bubble */}
            <div className="absolute -top-16 left-0 bg-white px-4 py-2 rounded-2xl rounded-bl-none card-shadow">
              <p className="text-slate-700 whitespace-nowrap" style={{ fontFamily: "'Kalam', cursive" }}>
                Best of Luck!
              </p>
            </div>
            {/* Character placeholder - using a simple illustration */}
            <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center border-4 border-white button-shadow">
              <span className="text-4xl">🐱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
