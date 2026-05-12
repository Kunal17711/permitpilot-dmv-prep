import { CheckCircle2, XCircle } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '@/src/constants/theme';
import { Question } from '@/src/types';
import { TopicPill } from './TopicPill';

type QuestionCardProps = {
  question: Question;
  selectedIndex: number | null;
  showFeedback?: boolean;
  onSelect: (index: number) => void;
};

export function QuestionCard({ question, selectedIndex, showFeedback = false, onSelect }: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <TopicPill topic={question.topic} difficulty={question.difficulty} />
      <Text style={styles.question}>{question.question}</Text>
      <View style={styles.options}>
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswerIndex;
          const isSelected = index === selectedIndex;
          const showCorrect = showFeedback && isCorrect;
          const showWrong = showFeedback && isSelected && !isCorrect;

          return (
            <TouchableOpacity
              activeOpacity={0.86}
              key={option}
              onPress={() => onSelect(index)}
              disabled={showFeedback}
              style={[styles.option, showCorrect && styles.correctOption, showWrong && styles.wrongOption, isSelected && !showFeedback && styles.selectedOption]}
            >
              <View style={[styles.optionIndex, showCorrect && styles.correctIndex, showWrong && styles.wrongIndex]}>
                <Text style={[styles.optionIndexText, (showCorrect || showWrong) && styles.optionIndexTextActive]}>{String.fromCharCode(65 + index)}</Text>
              </View>
              <Text style={[styles.optionText, showCorrect && styles.correctText, showWrong && styles.wrongText]}>{option}</Text>
              {showCorrect ? <CheckCircle2 color={theme.colors.success} size={20} /> : null}
              {showWrong ? <XCircle color={theme.colors.danger} size={20} /> : null}
            </TouchableOpacity>
          );
        })}
      </View>
      {showFeedback ? (
        <View style={styles.explanation}>
          <Text style={styles.explanationLabel}>Explanation</Text>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    ...theme.shadow,
  },
  question: {
    color: theme.colors.text,
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '900',
    marginTop: 18,
  },
  options: {
    gap: 12,
    marginTop: 20,
  },
  option: {
    minHeight: 64,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: '#FBFDFC',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectedOption: {
    borderColor: theme.colors.primary,
    backgroundColor: '#F0FDFA',
  },
  correctOption: {
    borderColor: theme.colors.success,
    backgroundColor: theme.colors.successSoft,
  },
  wrongOption: {
    borderColor: theme.colors.danger,
    backgroundColor: theme.colors.dangerSoft,
  },
  optionIndex: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EAF1EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctIndex: {
    backgroundColor: theme.colors.success,
  },
  wrongIndex: {
    backgroundColor: theme.colors.danger,
  },
  optionIndexText: {
    color: theme.colors.slate,
    fontWeight: '900',
  },
  optionIndexTextActive: {
    color: '#FFFFFF',
  },
  optionText: {
    flex: 1,
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
  },
  correctText: {
    color: '#065F46',
  },
  wrongText: {
    color: '#991B1B',
  },
  explanation: {
    marginTop: 18,
    borderRadius: 18,
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  explanationLabel: {
    color: theme.colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 6,
  },
  explanationText: {
    color: theme.colors.slate,
    fontSize: 14,
    lineHeight: 21,
  },
});
