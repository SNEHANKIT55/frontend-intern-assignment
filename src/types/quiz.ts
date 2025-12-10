export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  title: string;
  subtitle: string;
  questions: Question[];
}
