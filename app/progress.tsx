import { router } from 'expo-router';
import { ArrowLeft, CheckCircle2, ClipboardCheck, Gauge, MapPinned, Target, Trophy } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ProgressBar } from '@/src/components/ProgressBar';
import { Screen } from '@/src/components/Screen';
import { StatCard } from '@/src/components/StatCard';
import { theme } from '@/src/constants/theme';
import { getStateName } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';
import { buildProgressSummary } from '@/src/utils/scoring';

export default function ProgressScreen() {
  const selectedState = useAppStore((state) => state.selectedState);
  const practiceAnswered = useAppStore((state) => state.practiceAnswered);
  const practiceCorrect = useAppStore((state) => state.practiceCorrect);
  const wrongByTopic = useAppStore((state) => state.wrongByTopic);
  const examHistory = useAppStore((state) => state.examHistory);
  const summary = buildProgressSummary({ answered: practiceAnswered, correct: practiceCorrect, wrongByTopic, examHistory });

  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={theme.colors.text} size={22} />
        </TouchableOpacity>
        <View>
          <Text style={styles.kicker}>Progress</Text>
          <Text style={styles.title}>Readiness dashboard</Text>
        </View>
      </View>

      <View style={styles.readinessCard}>
        <View style={styles.readinessTop}>
          <View style={styles.readinessIcon}>
            <Gauge color="#FFFFFF" size={25} />
          </View>
          <Text style={styles.readinessLabel}>Readiness score</Text>
        </View>
        <Text style={styles.readinessScore}>{summary.readinessScore}%</Text>
        <ProgressBar value={summary.readinessScore} fillColor="#FFFFFF" trackColor="rgba(255,255,255,0.26)" />
        <Text style={styles.readinessCopy}>Combines practice accuracy, completed questions, best exam score, and weak-topic load.</Text>
      </View>

      <View style={styles.grid}>
        <StatCard label="Accuracy" value={`${summary.accuracy}%`} detail="Practice mode" icon={<Target color={theme.colors.primary} size={20} />} />
        <StatCard label="Completed" value={practiceAnswered} detail="Questions answered" icon={<ClipboardCheck color={theme.colors.primary} size={20} />} />
        <StatCard label="Correct" value={practiceCorrect} detail="Practice answers" icon={<CheckCircle2 color={theme.colors.primary} size={20} />} />
        <StatCard label="Best exam" value={`${summary.bestExamScore}%`} detail="Full exam mode" icon={<Trophy color={theme.colors.primary} size={20} />} />
        <StatCard label="Last exam" value={`${summary.lastExamScore}%`} detail={examHistory[0] ? new Date(examHistory[0].date).toLocaleDateString() : 'No exam yet'} />
        <StatCard label="Weak topics" value={summary.weakTopicCount} detail="Mistake clusters" />
      </View>

      <View style={styles.stateCard}>
        <MapPinned color={theme.colors.primary} size={22} />
        <View>
          <Text style={styles.stateLabel}>Selected state</Text>
          <Text style={styles.stateValue}>{getStateName(selectedState)}</Text>
          <Text style={styles.stateDetail}>All practice and exam scoring is stored locally on this device.</Text>
        </View>
      </View>
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
  readinessCard: {
    marginTop: 22,
    backgroundColor: theme.colors.primary,
    borderRadius: 28,
    padding: 22,
    ...theme.shadow,
  },
  readinessTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  readinessIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  readinessLabel: {
    color: '#DDF7F1',
    fontSize: 15,
    fontWeight: '900',
  },
  readinessScore: {
    color: '#FFFFFF',
    fontSize: 58,
    fontWeight: '900',
    marginVertical: 12,
  },
  readinessCopy: {
    color: '#E9FFFA',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 20,
  },
  stateCard: {
    marginTop: 18,
    backgroundColor: theme.colors.surface,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stateLabel: {
    color: theme.colors.muted,
    fontSize: 13,
    fontWeight: '800',
  },
  stateValue: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 2,
  },
  stateDetail: {
    color: theme.colors.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
});
