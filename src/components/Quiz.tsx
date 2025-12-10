import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizContainer } from './QuizContainer';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { OptionButton } from './OptionButton';
import { NavigationButtons } from './NavigationButtons';
import { ResultScreen } from './ResultScreen';
import { QuizData } from '../types/quiz';

interface QuizProps {
  quizData: QuizData;
}

export function Quiz({ quizData }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizData.questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const totalQuestions = quizData.questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(totalQuestions).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === quizData.questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== null);

  return (
    <QuizContainer>
      {!showResults ? (
        <>
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-teal-700 mb-3 italic text-5xl">
              {quizData.title}
            </h1>
            <div className="inline-block bg-white border border-slate-200 rounded-full px-5 py-2 button-shadow">
              <p className="text-slate-600 text-sm">
                {quizData.subtitle}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar totalSteps={totalQuestions} currentStep={currentQuestionIndex} />

          {/* Question and Options */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <QuestionCard
                questionNumber={currentQuestionIndex + 1}
                questionText={currentQuestion.question}
              />

              <div className="space-y-4 mb-6" role="radiogroup" aria-label="Answer options">
                {currentQuestion.options.map((option, index) => (
                  <OptionButton
                    key={index}
                    option={option}
                    isSelected={selectedAnswers[currentQuestionIndex] === index}
                    onClick={() => handleOptionSelect(index)}
                  />
                ))}
              </div>

              <NavigationButtons
                onPrevious={handlePrevious}
                onNext={handleNext}
                showPrevious={!isFirstQuestion}
                showNext={true}
                isNextDisabled={selectedAnswers[currentQuestionIndex] === null}
              />
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <ResultScreen
          score={calculateScore()}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </QuizContainer>
  );
}
