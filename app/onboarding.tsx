import { router } from 'expo-router';
import { Car, ClipboardCheck, MapPinned, ShieldCheck, Sparkles } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { Screen } from '@/src/components/Screen';
import { theme } from '@/src/constants/theme';
import { useAppStore } from '@/src/store/useAppStore';

export default function OnboardingScreen() {
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);

  const begin = () => {
    completeOnboarding();
    router.push('/state-select');
  };

  return (
    <Screen contentStyle={styles.screen}>
      <View style={styles.hero}>
        <View style={styles.brandRow}>
          <View style={styles.brandMark}>
            <Car color="#FFFFFF" size={34} strokeWidth={2.5} />
          </View>
          <View style={styles.badge}>
            <Sparkles color={theme.colors.primary} size={15} />
            <Text style={styles.badgeText}>Local progress</Text>
          </View>
        </View>
        <Text style={styles.kicker}>PermitPilot</Text>
        <Text style={styles.title}>Permit prep that feels focused, modern, and calm.</Text>
        <Text style={styles.subtitle}>Study original DMV-style questions, get instant explanations, and build exam readiness without accounts or distractions.</Text>
      </View>

      <View style={styles.featurePanel}>
        <View style={styles.featureRow}>
          <View style={styles.featureIcon}>
            <MapPinned color={theme.colors.primary} size={21} />
          </View>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>State-focused prep</Text>
            <Text style={styles.featureCopy}>Choose California, Texas, New York, or Florida.</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.featureIcon}>
            <ClipboardCheck color={theme.colors.primary} size={21} />
          </View>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Instant explanations</Text>
            <Text style={styles.featureCopy}>Learn why an answer is right the moment you choose.</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.featureIcon}>
            <ShieldCheck color={theme.colors.primary} size={21} />
          </View>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Readiness tracking</Text>
            <Text style={styles.featureCopy}>Progress, weak topics, and exam history stay on device.</Text>
          </View>
        </View>
      </View>

      <AppButton title="Choose my state" onPress={begin} style={styles.cta} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 22,
  },
  hero: {
    paddingTop: 8,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
    marginBottom: 24,
  },
  brandMark: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadow,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: theme.colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  kicker: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 12,
  },
  title: {
    color: theme.colors.text,
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '900',
  },
  subtitle: {
    color: theme.colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  featurePanel: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
    padding: 16,
    gap: 16,
    ...theme.shadow,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: theme.colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  featureCopy: {
    color: theme.colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 2,
  },
  cta: {
    marginTop: 2,
  },
});
