import { router } from 'expo-router';
import { ArrowLeft, MapPinned, RotateCcw } from 'lucide-react-native';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { Screen } from '@/src/components/Screen';
import { theme } from '@/src/constants/theme';
import { getStateName } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';

export default function SettingsScreen() {
  const selectedState = useAppStore((state) => state.selectedState);
  const resetProgress = useAppStore((state) => state.resetProgress);

  const confirmReset = () => {
    Alert.alert('Reset progress?', 'This clears practice stats, weak topics, and exam history on this device.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Reset', style: 'destructive', onPress: resetProgress },
    ]);
  };

  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={theme.colors.text} size={22} />
        </TouchableOpacity>
        <View>
          <Text style={styles.kicker}>Settings</Text>
          <Text style={styles.title}>Study preferences</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.stateRow}>
          <View style={styles.stateIcon}>
            <MapPinned color={theme.colors.primary} size={23} />
          </View>
          <View style={styles.stateCopy}>
            <Text style={styles.label}>Current state</Text>
            <Text style={styles.value}>{getStateName(selectedState)}</Text>
          </View>
        </View>
        <AppButton title="Change state" onPress={() => router.push('/state-select')} variant="secondary" />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progress controls</Text>
        <Text style={styles.cardCopy}>Resetting keeps your selected state but clears local practice stats, weak topics, and full exam history. A confirmation appears before anything changes.</Text>
        <AppButton title="Reset progress" onPress={confirmReset} variant="ghost" icon={<RotateCcw color={theme.colors.text} size={19} />} />
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
  card: {
    marginTop: 22,
    backgroundColor: theme.colors.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 18,
    gap: 16,
    ...theme.shadow,
  },
  stateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  stateIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: theme.colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stateCopy: {
    flex: 1,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 13,
    fontWeight: '800',
  },
  value: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 3,
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: 19,
    fontWeight: '900',
  },
  cardCopy: {
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
});
