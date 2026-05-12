import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/src/constants/theme';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Route not found</Text>
      <Text style={styles.copy}>Head back to PermitPilot and keep your prep moving.</Text>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Return home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: '900',
  },
  copy: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 8,
  },
  link: {
    marginTop: 18,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
  },
  linkText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '900',
  },
});
