import { router } from 'expo-router';
import { ArrowRight, BarChart3, BookOpenCheck, CalendarCheck2, ClipboardList, Gauge, Settings, Target } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { ProgressBar } from '@/src/components/ProgressBar';
import { Screen } from '@/src/components/Screen';
import { StatCard } from '@/src/components/StatCard';
import { theme } from '@/src/constants/theme';
import { getStateName } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';
import { buildProgressSummary } from '@/src/utils/scoring';

export default function HomeScreen() {
  const selectedState = useAppStore((state) => state.selectedState);
  const practiceAnswered = useAppStore((state) => state.practiceAnswered);
  const practiceCorrect = useAppStore((state) => state.practiceCorrect);
  const wrongByTopic = useAppStore((state) => state.wrongByTopic);
  const examHistory = useAppStore((state) => state.examHistory);
  const summary = buildProgressSummary({ answered: practiceAnswered, correct: practiceCorrect, wrongByTopic, examHistory });
  const recommendedTitle = summary.weakTopicCount > 0 ? 'Review weak topics, then retake a full exam.' : practiceAnswered < 20 ? 'Build a 20-question practice streak today.' : 'Take a full exam to confirm readiness.';
  const recommendedDetail = summary.weakTopicCount > 0 ? 'A short focused review will lift your readiness score fastest.' : practiceAnswered < 20 ? 'Answering more practice questions gives the dashboard a stronger signal.' : 'Your practice base is ready for a timed simulation.';

  if (!selectedState) {
    router.replace('/state-select');
    return null;
  }

  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>PermitPilot</Text>
          <Text style={styles.title}>{getStateName(selectedState)} dashboard</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconButton} onPress={() => router.push('/settings')}>
          <Settings color={theme.colors.text} size={22} />
        </TouchableOpacity>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.heroIcon}>
            <Gauge color="#FFFFFF" size={28} />
          </View>
          <View>
            <Text style={styles.heroLabel}>Readiness score</Text>
            <Text style={styles.heroState}>{getStateName(selectedState)}</Text>
          </View>
        </View>
        <Text style={styles.heroScore}>{summary.readinessScore}%</Text>
        <ProgressBar value={summary.readinessScore} fillColor="#FFFFFF" trackColor="rgba(255,255,255,0.28)" />
        <Text style={styles.heroCopy}>Built from your practice accuracy, completed questions, exam performance, and weak-topic load.</Text>
      </View>

      <View style={styles.planCard}>
        <View style={styles.planIcon}>
          <CalendarCheck2 color={theme.colors.primary} size={22} />
        </View>
        <View style={styles.planCopy}>
          <Text style={styles.planLabel}>Recommended next step</Text>
          <Text style={styles.planTitle}>{recommendedTitle}</Text>
          <Text style={styles.planDetail}>{recommendedDetail}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <AppButton title="Practice questions" onPress={() => router.push('/practice')} icon={<BookOpenCheck color="#FFFFFF" size={20} />} style={styles.actionButton} />
        <AppButton title="Start full exam" onPress={() => router.push('/exam')} variant="secondary" icon={<ClipboardList color={theme.colors.primaryDark} size={20} />} style={styles.actionButton} />
      </View>

      <View style={styles.grid}>
        <StatCard label="Accuracy" value={`${summary.accuracy}%`} detail={`${practiceCorrect}/${practiceAnswered || 0} correct`} icon={<Target color={theme.colors.primary} size={20} />} />
        <StatCard label="Best exam" value={`${summary.bestExamScore}%`} detail={examHistory.length ? 'Saved from exam mode' : 'No exam yet'} icon={<BarChart3 color={theme.colors.primary} size={20} />} />
      </View>

      <TouchableOpacity activeOpacity={0.85} style={styles.linkCard} onPress={() => router.push('/weak-topics')}>
        <View>
          <Text style={styles.linkTitle}>Weak topics</Text>
          <Text style={styles.linkCopy}>{summary.weakTopicCount ? `${summary.weakTopicCount} topic areas need attention` : 'No weak topics recorded yet'}</Text>
        </View>
        <ArrowRight color={theme.colors.primary} size={22} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.85} style={styles.linkCard} onPress={() => router.push('/progress')}>
        <View>
          <Text style={styles.linkTitle}>Progress dashboard</Text>
          <Text style={styles.linkCopy}>Review stats, history, and readiness in one place.</Text>
        </View>
        <ArrowRight color={theme.colors.primary} size={22} />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 14,
  },
  kicker: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '900',
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    marginTop: 5,
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
  hero: {
    marginTop: 24,
    backgroundColor: theme.colors.primary,
    borderRadius: 28,
    padding: 22,
    ...theme.shadow,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heroIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLabel: {
    color: '#DDF7F1',
    fontSize: 14,
    fontWeight: '800',
  },
  heroState: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 2,
  },
  heroScore: {
    color: '#FFFFFF',
    fontSize: 58,
    fontWeight: '900',
    marginVertical: 12,
  },
  heroCopy: {
    color: '#E9FFFA',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 14,
  },
  planCard: {
    marginTop: 16,
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    flexDirection: 'row',
    gap: 13,
    ...theme.shadow,
  },
  planIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: theme.colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planCopy: {
    flex: 1,
  },
  planLabel: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '900',
  },
  planTitle: {
    color: theme.colors.text,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
    marginTop: 3,
  },
  planDetail: {
    color: theme.colors.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  actions: {
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  linkCard: {
    marginTop: 14,
    backgroundColor: theme.colors.surface,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
  },
  linkTitle: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: '900',
  },
  linkCopy: {
    color: theme.colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },
});
