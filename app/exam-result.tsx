import { router, useLocalSearchParams } from 'expo-router';
import { Award, Home, RotateCw, TriangleAlert } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { ProgressBar } from '@/src/components/ProgressBar';
import { Screen } from '@/src/components/Screen';
import { theme } from '@/src/constants/theme';
import { getStateName } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';
import { getTopicBreakdown } from '@/src/utils/progress';

export default function ExamResultScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const examHistory = useAppStore((state) => state.examHistory);
  const result = examHistory.find((exam) => exam.id === id) ?? examHistory[0];
  const breakdown = result ? getTopicBreakdown(result.answers) : [];

  if (!result) {
    return (
      <Screen>
        <Text style={styles.title}>No exam result yet</Text>
        <AppButton title="Start full exam" onPress={() => router.replace('/exam')} />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={[styles.resultHero, result.passed ? styles.passHero : styles.failHero]}>
        <View style={styles.resultIcon}>{result.passed ? <Award color="#FFFFFF" size={30} /> : <TriangleAlert color="#FFFFFF" size={30} />}</View>
        <Text style={styles.status}>{result.passed ? 'Passed' : 'Keep practicing'}</Text>
        <Text style={styles.score}>{result.score}/{result.total}</Text>
        <Text style={styles.percent}>{result.percentage}% score</Text>
        <ProgressBar value={result.percentage} fillColor="#FFFFFF" trackColor="rgba(255,255,255,0.28)" />
        <Text style={styles.message}>
          {result.passed ? `Nice work. Your ${getStateName(result.state)} readiness is looking solid.` : 'You are close. Review your weakest topics, then take another full exam.'}
        </Text>
        <View style={styles.resultStats}>
          <View style={styles.resultStat}>
            <Text style={styles.resultStatValue}>{result.total}</Text>
            <Text style={styles.resultStatLabel}>Questions</Text>
          </View>
          <View style={styles.resultDivider} />
          <View style={styles.resultStat}>
            <Text style={styles.resultStatValue}>80%</Text>
            <Text style={styles.resultStatLabel}>Pass mark</Text>
          </View>
          <View style={styles.resultDivider} />
          <View style={styles.resultStat}>
            <Text style={styles.resultStatValue}>{result.passed ? 'Ready' : 'Review'}</Text>
            <Text style={styles.resultStatLabel}>Next step</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Topic breakdown</Text>
      <View style={styles.breakdownList}>
        {breakdown.map((topic) => (
          <View key={topic.topic} style={styles.breakdownRow}>
            <View style={styles.breakdownCopy}>
              <Text style={styles.topic}>{topic.topic}</Text>
              <Text style={styles.topicDetail}>{topic.correct}/{topic.total} correct</Text>
            </View>
            <Text style={styles.topicPercent}>{topic.percentage}%</Text>
          </View>
        ))}
      </View>

      <View style={styles.actions}>
        <AppButton title="Review weak topics" onPress={() => router.push('/weak-topics')} variant="secondary" />
        <AppButton title="Retake full exam" onPress={() => router.replace('/exam')} icon={<RotateCw color="#FFFFFF" size={19} />} />
        <AppButton title="Go home" onPress={() => router.replace('/home')} variant="ghost" icon={<Home color={theme.colors.text} size={19} />} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  resultHero: {
    borderRadius: 30,
    padding: 24,
    ...theme.shadow,
  },
  passHero: {
    backgroundColor: theme.colors.primary,
  },
  failHero: {
    backgroundColor: theme.colors.navy,
  },
  resultIcon: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    color: '#DDF7F1',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 18,
  },
  score: {
    color: '#FFFFFF',
    fontSize: 68,
    fontWeight: '900',
    marginTop: 4,
  },
  percent: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 16,
  },
  message: {
    color: '#E9FFFA',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 16,
  },
  resultStats: {
    marginTop: 20,
    borderRadius: 20,
    padding: 14,
    backgroundColor: 'rgba(255,255,255,0.14)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultStat: {
    flex: 1,
    alignItems: 'center',
  },
  resultStatValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  resultStatLabel: {
    color: '#DDF7F1',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 3,
  },
  resultDivider: {
    width: 1,
    height: 34,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 21,
    fontWeight: '900',
    marginTop: 24,
    marginBottom: 12,
  },
  breakdownList: {
    gap: 10,
  },
  breakdownRow: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  breakdownCopy: {
    flex: 1,
  },
  topic: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  topicDetail: {
    color: theme.colors.muted,
    fontSize: 12,
    marginTop: 3,
  },
  topicPercent: {
    color: theme.colors.primary,
    fontSize: 17,
    fontWeight: '900',
  },
  actions: {
    marginTop: 22,
    gap: 12,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 16,
  },
});
