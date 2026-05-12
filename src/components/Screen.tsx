import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { theme } from '@/src/constants/theme';

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  contentStyle?: ViewStyle;
};

export function Screen({ children, scroll = true, contentStyle }: ScreenProps) {
  const insets = useSafeAreaInsets();
  const paddedContent = [
    styles.content,
    { paddingBottom: Math.max(64, insets.bottom + 48) },
    contentStyle,
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />
      {scroll ? (
        <ScrollView
          contentContainerStyle={paddedContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[...paddedContent, styles.flex]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  flex: {
    flex: 1,
  },
});
