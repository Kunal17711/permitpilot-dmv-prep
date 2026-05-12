import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/src/constants/theme';
import { Difficulty, Topic } from '@/src/types';

type TopicPillProps = {
  topic: Topic | string;
  difficulty?: Difficulty;
};

export function TopicPill({ topic, difficulty }: TopicPillProps) {
  return (
    <View style={styles.row}>
      <View style={styles.pill}>
        <Text style={styles.text}>{topic}</Text>
      </View>
      {difficulty ? (
        <View style={[styles.pill, styles.difficulty]}>
          <Text style={[styles.text, styles.difficultyText]}>{difficulty}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: theme.colors.primarySoft,
  },
  difficulty: {
    backgroundColor: '#EEF2FF',
  },
  text: {
    color: theme.colors.primaryDark,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  difficultyText: {
    color: '#3730A3',
  },
});
