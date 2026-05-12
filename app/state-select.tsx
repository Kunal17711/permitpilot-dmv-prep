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
      <Text style={styles.subtitle}>Your dashboard and question bank will focus on the selected state.</Text>

      <View style={styles.list}>
        {states.map((driverState) => (
          <StateCard key={driverState.code} driverState={driverState} selected={selected === driverState.code} onPress={() => setSelected(driverState.code)} />
        ))}
      </View>

      <AppButton title="Save state" onPress={save} disabled={!selected} style={styles.button} />
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
});
