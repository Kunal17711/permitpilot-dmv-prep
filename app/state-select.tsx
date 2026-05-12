import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { Screen } from '@/src/components/Screen';
import { StateCard } from '@/src/components/StateCard';
import { theme } from '@/src/constants/theme';
import { states } from '@/src/data/states';
import { useAppStore } from '@/src/store/useAppStore';
import { StateCode } from '@/src/types';

export default function StateSelectScreen() {
  const savedState = useAppStore((state) => state.selectedState);
  const selectState = useAppStore((state) => state.selectState);
  const [selected, setSelected] = useState<StateCode | undefined>(savedState);

  const save = () => {
    if (!selected) {
      return;
    }
    selectState(selected);
    router.replace('/home');
  };

  return (
    <Screen>
      <Text style={styles.kicker}>State setup</Text>
      <Text style={styles.title}>Pick the permit test track you want to study.</Text>
      <Text style={styles.subtitle}>Your dashboard, practice queue, and full exam simulation will use a localized question bank for the state you choose.</Text>

      <View style={styles.list}>
        {states.map((driverState) => (
          <StateCard key={driverState.code} driverState={driverState} selected={selected === driverState.code} onPress={() => setSelected(driverState.code)} />
        ))}
      </View>

      <View style={styles.savePanel}>
        <Text style={styles.saveCopy}>{selected ? 'Ready to build your personalized prep plan.' : 'Select a state to unlock your dashboard.'}</Text>
        <AppButton title="Save state" onPress={save} disabled={!selected} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '900',
    marginTop: 6,
  },
  title: {
    color: theme.colors.text,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '900',
    marginTop: 10,
  },
  subtitle: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },
  list: {
    gap: 14,
    marginTop: 26,
  },
  button: {
    marginTop: 24,
  },
  savePanel: {
    marginTop: 24,
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 14,
    gap: 12,
  },
  saveCopy: {
    color: theme.colors.muted,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 19,
  },
});
