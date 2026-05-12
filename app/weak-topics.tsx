import { router } from 'expo-router';
import { ArrowLeft, Sparkles, TrendingUp } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { Screen } from '@/src/components/Screen';
import { theme } from '@/src/constants/theme';
import { useAppStore } from '@/src/store/useAppStore';
import { getWeakTopics } from '@/src/utils/progress';

export default function WeakTopicsScreen() {
  const wrongByTopic = useAppStore((state) => state.wrongByTopic);
  const weakTopics = getWeakTopics(wrongByTopic);

  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={theme.colors.text} size={22} />
        </TouchableOpacity>
        <View>
          <Text style={styles.kicker}>Mistake tracker</Text>
          <Text style={styles.title}>Weak topics</Text>
        </View>
      </View>

      {weakTopics.length === 0 ? (
        <View style={styles.emptyCard}>
          <View style={styles.emptyIcon}>
            <Sparkles color={theme.colors.primary} size={30} />
          </View>
          <Text style={styles.emptyTitle}>No weak topics yet</Text>
          <Text style={styles.emptyCopy}>Your mistakes will appear here after practice or a full exam. For now, your record is clean and ready for a smart first pass.</Text>
          <AppButton title="Start practice" onPress={() => router.push('/practice')} style={styles.emptyButton} />
        </View>
      ) : (
        <View style={styles.list}>
          {weakTopics.map(([topic, count], index) => (
            <View key={topic} style={styles.topicCard}>
              <View style={styles.topicRank}>
                <Text style={styles.topicRankText}>{index + 1}</Text>
              </View>
              <View style={styles.topicCopy}>
                <Text style={styles.topicName}>{topic}</Text>
                <Text style={styles.topicRecommendation}>Review this topic before your next full exam.</Text>
              </View>
              <View style={styles.countBadge}>
                <TrendingUp color={theme.colors.danger} size={16} />
                <Text style={styles.countText}>{count}</Text>
              </View>
            </View>
          ))}
          <AppButton title="Practice weak areas" onPress={() => router.push('/practice')} style={styles.practiceButton} />
        </View>
      )}
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
  emptyCard: {
    marginTop: 28,
    backgroundColor: theme.colors.surface,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 24,
    alignItems: 'center',
    ...theme.shadow,
  },
  emptyIcon: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: theme.colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  emptyTitle: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '900',
  },
  emptyCopy: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 10,
  },
  emptyButton: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
  list: {
    gap: 12,
    marginTop: 24,
  },
  topicCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  topicRank: {
    width: 34,
    height: 34,
    borderRadius: 13,
    backgroundColor: theme.colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicRankText: {
    color: theme.colors.primaryDark,
    fontWeight: '900',
  },
  topicCopy: {
    flex: 1,
  },
  topicName: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
  topicRecommendation: {
    color: theme.colors.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },
  countBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: theme.colors.dangerSoft,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  countText: {
    color: theme.colors.danger,
    fontWeight: '900',
  },
  practiceButton: {
    marginTop: 10,
  },
});
