import { ExamAnswer, ExamResult, Topic } from '@/src/types';

export function getAccuracy(correct: number, answered: number) {
  if (answered === 0) {
    return 0;
  }
  return Math.round((correct / answered) * 100);
}

export function getWeakTopics(wrongByTopic: Partial<Record<Topic, number>>) {
  return Object.entries(wrongByTopic)
    .filter((entry): entry is [Topic, number] => typeof entry[1] === 'number' && entry[1] > 0)
    .sort((a, b) => b[1] - a[1]);
}

export function getBestExamScore(examHistory: ExamResult[]) {
  return examHistory.reduce((best, exam) => Math.max(best, exam.percentage), 0);
}

export function getLastExamScore(examHistory: ExamResult[]) {
  return examHistory[0]?.percentage ?? 0;
}

export function calculateReadinessScore({
  answered,
  correct,
  examHistory,
  weakTopicCount,
}: {
  answered: number;
  correct: number;
  examHistory: ExamResult[];
  weakTopicCount: number;
}) {
  const accuracyScore = getAccuracy(correct, answered) * 0.45;
  const volumeScore = Math.min(answered / 80, 1) * 20;
  const bestExamScore = getBestExamScore(examHistory) * 0.35;
  const weakPenalty = Math.min(weakTopicCount * 4, 18);
  return Math.max(0, Math.min(100, Math.round(accuracyScore + volumeScore + bestExamScore - weakPenalty)));
}

export function getTopicBreakdown(answers: ExamAnswer[]) {
  const breakdown = new Map<Topic, { correct: number; total: number }>();

  answers.forEach((answer) => {
    const current = breakdown.get(answer.topic) ?? { correct: 0, total: 0 };
    breakdown.set(answer.topic, {
      correct: current.correct + (answer.correct ? 1 : 0),
      total: current.total + 1,
    });
  });

  return Array.from(breakdown.entries()).map(([topic, stats]) => ({
    topic,
    ...stats,
    percentage: Math.round((stats.correct / stats.total) * 100),
  }));
}
