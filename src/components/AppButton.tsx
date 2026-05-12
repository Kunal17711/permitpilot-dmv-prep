import { ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { theme } from '@/src/constants/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function AppButton({ title, onPress, variant = 'primary', icon, disabled, loading, style }: AppButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.86}
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.base, styles[variant], isDisabled && styles.disabled, style]}
    >
      {loading ? <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : theme.colors.primary} /> : icon}
      <Text style={[styles.text, styles[`${variant}Text`], isDisabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 54,
    borderRadius: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.primarySoft,
    borderWidth: 1,
    borderColor: '#BFECE2',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  danger: {
    backgroundColor: theme.colors.dangerSoft,
    borderWidth: 1,
    borderColor: '#F8B4B4',
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: theme.colors.primaryDark,
  },
  ghostText: {
    color: theme.colors.text,
  },
  dangerText: {
    color: theme.colors.danger,
  },
  disabled: {
    opacity: 0.58,
  },
  disabledText: {
    opacity: 0.8,
  },
});
