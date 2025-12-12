import React from 'react';
import { motion } from 'motion/react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ResultScreen({ score, totalQuestions, onRestart }: ResultScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center py-12"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-slate-600 mb-8"
      >
        Keep Learning!
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="text-teal-700 mb-4 italic"
      >
        Your Final score is
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="mb-12"
      >
        <span className="text-[120px] leading-none text-teal-800 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          {percentage}
        </span>
        <span className="text-5xl text-teal-700 ml-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          %
        </span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onClick={onRestart}
        className="px-8 py-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 text-white 
          button-shadow hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 ease-out
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
          active:scale-95"
        type="button"
      >
        Start Again
      </motion.button>

      <p className="text-slate-500 mt-8 text-sm">
        You answered {score} out of {totalQuestions} questions correctly
      </p>
    </motion.div>
  );
}
