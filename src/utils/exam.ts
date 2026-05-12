import { ExamAnswer, ExamResult, Question, StateCode } from '@/src/types';

export function shuffleArray<T>(items: T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function buildExamQuestions(allQuestions: Question[], state: StateCode, count = 20) {
  const stateQuestions = allQuestions.filter((question) => question.state === state);
  if (stateQuestions.length === 0) {
    return [];
  }

  const examQuestions: Question[] = [];
  while (examQuestions.length < count) {
    examQuestions.push(...shuffleArray(stateQuestions));
  }

  return examQuestions.slice(0, count);
}

export function createExamResult(state: StateCode, answers: ExamAnswer[], elapsedSeconds: number): ExamResult {
  const score = answers.filter((answer) => answer.correct).length;
  const total = answers.length;
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);

  return {
    id: `${Date.now()}`,
    state,
    date: new Date().toISOString(),
    score,
    total,
    percentage,
    passed: percentage >= 80,
    elapsedSeconds,
    answers,
  };
}

export function formatElapsedTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
