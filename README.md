# PermitPilot — DMV Permit & Driving Test Prep

PermitPilot is a polished Expo React Native mobile app for DMV permit and driving test prep. It uses local state-specific question banks, instant explanations, weak-topic tracking, and a 20-question exam simulator to help learners understand readiness before test day.

## Contest Context

This project was built as an 8x Engineer contest submission. The goal was to create a complete, original, screenshot-ready permit prep app without a backend, authentication, paid APIs, or copied assets.

## Features

- Premium onboarding and state setup flow
- State selector for California, Texas, New York, and Florida
- Local TypeScript DMV-style question bank with 40 original questions
- Practice mode with instant correct/wrong feedback
- Clean explanations after every practice answer
- Weak-topic tracker ranked by mistake count
- 20-question full exam simulation with timer and 80% passing threshold
- Pass/fail exam result screen with topic breakdown
- Progress dashboard with readiness score, accuracy, completed questions, best exam, last exam, weak topics, and selected state
- Settings screen for changing state and safely resetting progress
- Fully local persistence with AsyncStorage and Zustand

## Tech Stack

- Expo React Native
- TypeScript
- Expo Router
- Zustand
- AsyncStorage
- lucide-react-native
- React Native StyleSheet styling
- Local TypeScript data files

## Screens

- Onboarding
- State selector
- Home dashboard
- Practice mode
- Full exam mode
- Exam result
- Weak topics
- Progress dashboard
- Settings

## How To Run

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start --clear --port 8082
```

Then scan the QR code with Expo Go on your phone.

For offline local startup checks:

```bash
npx expo start --clear --offline --port 8082
```

## AI Logs

The contest-required AI build log is included at:

```text
ai-logs/codex-session-01.md
```

It records the major build prompts, implementation summaries, commands, fixes, and testing notes.

## Originality Note

PermitPilot is inspired by the category of DMV permit prep apps, but it does not copy Zutobi branding, assets, exact UI, screenshots, wording, or questions. The app icon, UI, copy, question bank, and local data model are original for this project.

## Submission And Demo Notes

Recommended screenshots:

- Onboarding
- State selector with a selected state
- Home dashboard
- Practice screen after answering a question
- Weak topics screen
- Full exam screen
- Exam result screen
- Progress dashboard
- Settings

Recommended walkthrough:

1. Open PermitPilot and show the onboarding screen.
2. Select a state and enter the dashboard.
3. Start practice, answer a question, and show the explanation.
4. Show weak topics and progress tracking.
5. Start a full exam and explain the 20-question simulation.
6. Show the result screen with pass/fail, score, percentage, and topic breakdown.
7. End on the progress dashboard and settings reset flow.
