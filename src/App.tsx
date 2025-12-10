import React from 'react';
import { Quiz } from './components/Quiz';
import { quizData } from './data/quizData';

export default function App() {
  return <Quiz quizData={quizData} />;
}
