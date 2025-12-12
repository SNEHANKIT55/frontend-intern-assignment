import React from 'react';

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
}

export function QuestionCard({ questionNumber, questionText }: QuestionCardProps) {
  return (
    <div 
      className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl px-8 py-6 mb-6 border border-cyan-100/50"
      role="heading"
      aria-level={2}
    >
      <p className="text-slate-700 text-center">
        <span className="font-medium">{questionNumber}.</span> {questionText}
      </p>
    </div>
  );
}
