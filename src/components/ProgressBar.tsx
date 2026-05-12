import { DimensionValue, StyleSheet, View } from 'react-native';

import { theme } from '@/src/constants/theme';

type ProgressBarProps = {
  value: number;
  trackColor?: string;
  fillColor?: string;
};

export function ProgressBar({ value, trackColor = '#E8F0EE', fillColor = theme.colors.primary }: ProgressBarProps) {
  const width = `${Math.max(0, Math.min(100, value))}%` as DimensionValue;

  return (
    <View style={[styles.track, { backgroundColor: trackColor }]}>
      <View style={[styles.fill, { width, backgroundColor: fillColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 999,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
  },
});
