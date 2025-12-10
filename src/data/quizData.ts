import { QuizData } from '../types/quiz';

export const quizData: QuizData = {
  title: 'Test Your Knowledge',
  subtitle: 'Answer all questions to see your results',
  questions: [
    {
      id: 1,
      question: 'What sound does a cat make?',
      options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris'],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: 'How many legs does a spider have?',
      options: ['6', '8', '10'],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: 'What color is the sky on a clear day?',
      options: ['Green', 'Blue', 'Red'],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: 'Which planet is closest to the Sun?',
      options: ['Venus', 'Mercury', 'Mars'],
      correctAnswer: 1,
    },
  ],
};
