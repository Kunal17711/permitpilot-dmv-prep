import { getAccuracy, getBestExamScore, getLastExamScore, getWeakTopics, calculateReadinessScore } from './progress';
import { ExamResult, Topic } from '@/src/types';

export function buildProgressSummary({
  answered,
  correct,
  wrongByTopic,
  examHistory,
}: {
  answered: number;
  correct: number;
  wrongByTopic: Partial<Record<Topic, number>>;
  examHistory: ExamResult[];
}) {
  const weakTopicCount = getWeakTopics(wrongByTopic).length;

  return {
    accuracy: getAccuracy(correct, answered),
    bestExamScore: getBestExamScore(examHistory),
    lastExamScore: getLastExamScore(examHistory),
    weakTopicCount,
    readinessScore: calculateReadinessScore({
      answered,
      correct,
      examHistory,
      weakTopicCount,
    }),
  };
}
