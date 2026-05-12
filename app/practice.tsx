import { router } from 'expo-router';
import { ArrowLeft, RotateCw } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { ProgressBar } from '@/src/components/ProgressBar';
import { QuestionCard } from '@/src/components/QuestionCard';
import { Screen } from '@/src/components/Screen';
import { theme } from '@/src/constants/theme';
import { questions } from '@/src/data/questions';
import { getStateName } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';
import { shuffleArray } from '@/src/utils/exam';

export default function PracticeScreen() {
  const selectedState = useAppStore((state) => state.selectedState);
  const recordPracticeAnswer = useAppStore((state) => state.recordPracticeAnswer);
  const practiceAnswered = useAppStore((state) => state.practiceAnswered);
  const practiceCorrect = useAppStore((state) => state.practiceCorrect);
  const [position, setPosition] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const stateQuestions = useMemo(() => (selectedState ? shuffleArray(questions.filter((question) => question.state === selectedState)) : []), [selectedState]);
  const question = stateQuestions[position % Math.max(stateQuestions.length, 1)];
  const accuracy = practiceAnswered ? Math.round((practiceCorrect / practiceAnswered) * 100) : 0;

  const chooseAnswer = (index: number) => {
    if (!question || selectedIndex !== null) {
      return;
    }
    setSelectedIndex(index);
    recordPracticeAnswer(question, index === question.correctAnswerIndex);
  };

  const nextQuestion = () => {
    setSelectedIndex(null);
    setPosition((current) => current + 1);
  };

  if (!selectedState || !question) {
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
          <Text style={styles.kicker}>{getStateName(selectedState)} practice</Text>
          <Text style={styles.title}>Question {position + 1}</Text>
        </View>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Practice accuracy</Text>
          <Text style={styles.summaryValue}>{accuracy}%</Text>
        </View>
        <ProgressBar value={accuracy} />
        <Text style={styles.summaryDetail}>{practiceAnswered} answered overall. Explanations appear immediately after each choice.</Text>
      </View>

      <QuestionCard question={question} selectedIndex={selectedIndex} showFeedback={selectedIndex !== null} onSelect={chooseAnswer} />

      <AppButton
        title={selectedIndex === null ? 'Choose an answer' : 'Next question'}
        onPress={nextQuestion}
        disabled={selectedIndex === null}
        icon={selectedIndex === null ? undefined : <RotateCw color="#FFFFFF" size={19} />}
        style={styles.nextButton}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconButton: {
    width: 46,
    height: 46,
    borderRadius: 16,
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
    fontSize: 13,
    fontWeight: '900',
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    marginTop: 3,
  },
  summaryCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 16,
    marginVertical: 18,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  summaryLabel: {
    color: theme.colors.muted,
    fontSize: 13,
    fontWeight: '800',
  },
  summaryValue: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  summaryDetail: {
    color: theme.colors.muted,
    fontSize: 12,
    marginTop: 8,
  },
  nextButton: {
    marginTop: 18,
    marginBottom: 10,
  },
});
