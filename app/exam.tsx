import { router } from 'expo-router';
import { ArrowLeft, Clock3 } from 'lucide-react-native';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { ProgressBar } from '@/src/components/ProgressBar';
import { QuestionCard } from '@/src/components/QuestionCard';
import { Screen } from '@/src/components/Screen';
import { theme } from '@/src/constants/theme';
import { questions } from '@/src/data/questions';
import { getStateName } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';
import { ExamAnswer } from '@/src/types';
import { buildExamQuestions, createExamResult, formatElapsedTime } from '@/src/utils/exam';

export default function ExamScreen() {
  const selectedState = useAppStore((state) => state.selectedState);
  const saveExamResult = useAppStore((state) => state.saveExamResult);
  const examQuestions = useMemo(() => (selectedState ? buildExamQuestions(questions, selectedState, 20) : []), [selectedState]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<ExamAnswer[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const currentQuestion = examQuestions[currentIndex];
  const progress = examQuestions.length ? ((currentIndex + 1) / examQuestions.length) * 100 : 0;

  useEffect(() => {
    const timer = setInterval(() => setElapsedSeconds((seconds) => seconds + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const advance = () => {
    if (!selectedState || selectedIndex === null || !currentQuestion) {
      return;
    }

    const nextAnswer: ExamAnswer = {
      questionId: currentQuestion.id,
      topic: currentQuestion.topic,
      selectedIndex,
      correctAnswerIndex: currentQuestion.correctAnswerIndex,
      correct: selectedIndex === currentQuestion.correctAnswerIndex,
    };
    const nextAnswers = [...answers, nextAnswer];

    if (currentIndex === examQuestions.length - 1) {
      const result = createExamResult(selectedState, nextAnswers, elapsedSeconds);
      saveExamResult(result);
      router.replace({ pathname: '/exam-result', params: { id: result.id } });
      return;
    }

    setAnswers(nextAnswers);
    setSelectedIndex(null);
    setCurrentIndex((index) => index + 1);
  };

  if (!selectedState || !currentQuestion) {
    return (
      <Screen>
        <Text style={styles.title}>Choose a state first</Text>
        <AppButton title="Select state" onPress={() => router.replace('/state-select')} />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={theme.colors.text} size={22} />
        </TouchableOpacity>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>{getStateName(selectedState)} full exam</Text>
          <Text style={styles.title}>Question {currentIndex + 1}/20</Text>
        </View>
        <View style={styles.timer}>
          <Clock3 color={theme.colors.primary} size={16} />
          <Text style={styles.timerText}>{formatElapsedTime(elapsedSeconds)}</Text>
        </View>
      </View>

      <View style={styles.progressCard}>
        <ProgressBar value={progress} />
        <Text style={styles.progressText}>Passing score: 80%</Text>
      </View>

      <QuestionCard question={currentQuestion} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />

      <AppButton title={currentIndex === examQuestions.length - 1 ? 'Finish exam' : 'Next'} onPress={advance} disabled={selectedIndex === null} style={styles.nextButton} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCopy: {
    flex: 1,
  },
  kicker: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '900',
  },
  title: {
    color: theme.colors.text,
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '900',
    marginTop: 2,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.surface,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
  },
  timerText: {
    color: theme.colors.text,
    fontWeight: '900',
    fontSize: 13,
  },
  progressCard: {
    marginVertical: 18,
    backgroundColor: theme.colors.surface,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    gap: 9,
  },
  progressText: {
    color: theme.colors.muted,
    fontSize: 12,
    fontWeight: '800',
  },
  nextButton: {
    marginTop: 18,
  },
});
