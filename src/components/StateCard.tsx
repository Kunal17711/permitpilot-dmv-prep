import { Check } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '@/src/constants/theme';
import { DriverState } from '@/src/types';

type StateCardProps = {
  driverState: DriverState;
  selected: boolean;
  onPress: () => void;
};

export function StateCard({ driverState, selected, onPress }: StateCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <View style={[styles.badge, { backgroundColor: driverState.accent }]}>
        <Text style={styles.badgeText}>{driverState.shortName}</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.name}>{driverState.name}</Text>
        <Text style={styles.note}>{driverState.permitNote}</Text>
      </View>
      {selected ? (
        <View style={styles.check}>
          <Check color="#FFFFFF" size={18} strokeWidth={3} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 96,
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    ...theme.shadow,
  },
  selected: {
    borderColor: theme.colors.primary,
    backgroundColor: '#FBFFFE',
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  note: {
    color: theme.colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
