# PermitPilot AI Build Log

## Prompt 1

You are working inside an already-open EMPTY project folder.

Important:
- Do NOT inspect for an existing app.
- Do NOT create a nested folder.
- Do NOT ask questions.
- Initialize and build everything directly inside this current folder.
- Complete as much as possible in one run.
- This is for an 8x Engineer contest submission.

Project:
PermitPilot — DMV Permit & Driving Test Prep

Goal:
Build a polished mobile app inspired by Zutobi-style DMV permit test prep apps, but fully original. Do not copy Zutobi logo, assets, exact UI, screenshots, wording, or exact questions.

Contest requirement:
The repository must include AI logs inside:

/ai-logs/codex-session-01.md

If AI logs are missing, the submission can be rejected. Create this file and maintain it.

Tech stack:
- Expo React Native
- TypeScript
- Expo Router
- NativeWind or clean React Native styling if NativeWind setup causes issues
- Zustand
- AsyncStorage
- Local TypeScript question bank
- No backend
- No auth
- No Supabase
- No Firebase
- No paid APIs
- No API keys

First, initialize the Expo app directly in this current folder:
- Use Expo + TypeScript + Expo Router.
- Prefer the Expo Router tabs template if suitable.
- Install required packages:
  - expo-router
  - zustand
  - @react-native-async-storage/async-storage
  - react-native-safe-area-context
  - react-native-screens
  - lucide-react-native
  - nativewind
  - tailwindcss
- If NativeWind setup becomes slow or unstable, use plain React Native StyleSheet but keep the UI premium.

App name:
PermitPilot

Design style:
Create a premium screenshot-ready mobile UI:
- Clean white background
- Teal / emerald primary color
- Soft cards
- Rounded corners
- Subtle shadows
- Good spacing
- Modern education/testing app feel
- Minimal driving-related icons
- No childish emoji-heavy UI
- No clutter
- App Store screenshot quality
- Original UI, not a direct Zutobi copy

Core screens to build:
1. Welcome / onboarding screen
2. State selector screen
3. Home dashboard
4. Practice mode screen
5. Instant explanation after answer
6. Weak topics tracker screen
7. Full exam mode screen
8. Exam result pass/fail screen
9. Progress dashboard screen
10. Settings / reset progress screen

Routes:
Create clean Expo Router routes.

Suggested route structure:
app/
  _layout.tsx
  index.tsx
  onboarding.tsx
  state-select.tsx
  home.tsx
  practice.tsx
  exam.tsx
  exam-result.tsx
  progress.tsx
  weak-topics.tsx
  settings.tsx

Create this source structure:
src/
  components/
    AppButton.tsx
    Screen.tsx
    StatCard.tsx
    QuestionCard.tsx
    TopicPill.tsx
    StateCard.tsx
    ProgressBar.tsx
  constants/
    theme.ts
  data/
    states.ts
    questions.ts
  store/
    useAppStore.ts
  types/
    index.ts
  utils/
    scoring.ts
    exam.ts
    progress.ts

Required app functionality:

1. State selector
- Include 4 states:
  - California
  - Texas
  - New York
  - Florida
- User can select state.
- Save selected state locally with AsyncStorage.
- Show selected state on dashboard.

2. Local question bank
Create at least 40 original DMV-style questions total.
Minimum 10 questions per state.

Each question must include:
- id
- state
- topic
- question
- options
- correctAnswerIndex
- explanation
- difficulty: easy | medium | hard

Topics must include:
- Road Signs
- Right of Way
- Speed Limits
- Parking
- Lane Changes
- Intersections
- Defensive Driving
- Alcohol & Safety
- School Zones
- Emergency Vehicles

Important:
Questions must be original and official-style, but do not copy any exact official question or Zutobi question.

3. Practice mode
- Show one question at a time.
- Show selected state.
- Show topic and difficulty.
- Show 4 answer options.
- User taps an option.
- Immediately show correct/wrong feedback.
- Highlight correct answer.
- If wrong, highlight selected wrong option.
- Show explanation card immediately.
- Add “Next Question” button.
- Track total answered.
- Track correct answers.
- Track wrong answers by topic.
- Save progress locally.

4. Weak topics tracker
- Show topics where user has made mistakes.
- Show wrong count per topic.
- Show short recommendation text.
- Example: “Review this topic before your next full exam.”
- If no weak topics exist, show a premium positive empty state.

5. Full exam mode
- Simulate a 20-question exam.
- Use questions from selected state.
- If selected state has fewer than 20 questions, reuse/shuffle safely.
- Show progress like Question 1/20.
- Show elapsed timer.
- User answers and moves to next.
- At the end, calculate:
  - score
  - percentage
  - pass/fail
- Passing threshold: 80%.
- Save exam history locally.
- Show “Review weak topics” and “Practice again” actions.

6. Exam result screen
- Show pass/fail clearly.
- Show score like 17/20.
- Show percentage.
- Show readiness message.
- Show topic breakdown if possible.
- Make this screen screenshot-worthy.

7. Progress dashboard
Show:
- Readiness score
- Accuracy percentage
- Questions completed
- Correct answers
- Best exam score
- Last exam score
- Weak topics count
- Selected state
- Progress cards

Readiness score formula:
Use a simple sensible formula based on:
- practice accuracy
- number of completed questions
- best exam score
- weak topic penalty

8. Settings
- Show current selected state.
- Button to change state.
- Button to reset progress.
- Keep UI clean and safe.

Implementation quality:
- Use TypeScript properly.
- Avoid “any” unless absolutely necessary.
- Keep reusable components clean.
- Do not leave placeholder screens.
- Do not leave broken imports.
- Do not use remote images.
- Do not add secrets.
- Do not add backend.
- Do not overcomplicate.
- The app must run.

AI logs:
Create:

ai-logs/codex-session-01.md

Add the following structure:

# PermitPilot AI Build Log

## Prompt 1
Paste this full prompt here.

## Response 1
Add a clear summary of what you built, including:
- files created
- files edited
- packages installed
- commands run
- errors found and fixed
- how to run the app
- what is pending

Git setup and push:
After the app is built and running:

1. Create/update .gitignore with:
node_modules
.expo
dist
web-build
.env
.env.local
.env*.local

2. Initialize git if needed.
3. Set branch to main.
4. Add remote if missing:
https://github.com/Kunal17711/permitpilot-dmv-prep.git

5. Commit all changes:
git add .
git commit -m "build permitpilot core app"

6. Push:
git push -u origin main

If push fails because of authentication, remote conflict, or GitHub login issue:
- Do not delete anything.
- Do not force push unless absolutely required.
- Clearly tell me the exact command I should run manually.

Testing:
Run the app after implementation using the correct Expo command.
Fix any TypeScript/import/runtime errors you can find.
Make sure the app opens and screens are navigable.

Final response:
When finished, reply with:
1. What you built.
2. Packages installed.
3. Exact command to run the app.
4. Exact screens I should screenshot for the contest.
5. Whether GitHub push succeeded.
6. If push failed, exact manual command to run.
7. What prompt I should ask next for UI polish.

## Response 1

Built PermitPilot as a root-level Expo React Native app using TypeScript, Expo Router, Zustand, AsyncStorage, lucide-react-native icons, and clean React Native StyleSheet styling. The UI uses a white/teal premium card style with onboarding, state selection, dashboard, practice, full exam, result, weak topics, progress, and settings screens.

Files created:
- `app/index.tsx`
- `app/onboarding.tsx`
- `app/state-select.tsx`
- `app/home.tsx`
- `app/practice.tsx`
- `app/exam.tsx`
- `app/exam-result.tsx`
- `app/progress.tsx`
- `app/weak-topics.tsx`
- `app/settings.tsx`
- `src/components/AppButton.tsx`
- `src/components/Screen.tsx`
- `src/components/StatCard.tsx`
- `src/components/QuestionCard.tsx`
- `src/components/TopicPill.tsx`
- `src/components/StateCard.tsx`
- `src/components/ProgressBar.tsx`
- `src/constants/theme.ts`
- `src/data/states.ts`
- `src/data/questions.ts`
- `src/store/useAppStore.ts`
- `src/types/index.ts`
- `src/utils/scoring.ts`
- `src/utils/exam.ts`
- `src/utils/progress.ts`
- `ai-logs/codex-session-01.md`

Files edited:
- `app/_layout.tsx`
- `app.json`
- `package.json`
- `package-lock.json`
- `.gitignore`

Template/demo files removed:
- `app/(tabs)/_layout.tsx`
- `app/(tabs)/index.tsx`
- `app/(tabs)/two.tsx`
- `app/modal.tsx`
- Generated starter component/test files under root `components/` and `constants/`.

Packages installed:
- `expo-router`
- `zustand`
- `@react-native-async-storage/async-storage`
- `react-native-safe-area-context`
- `react-native-screens`
- `lucide-react-native`
- `nativewind`
- `tailwindcss`

Commands run:
- `npx create-expo-app@latest . --template tabs`
- `npm install expo-router zustand @react-native-async-storage/async-storage react-native-safe-area-context react-native-screens lucide-react-native nativewind tailwindcss`
- `npx tsc --noEmit`
- `npm run web -- --port 8082`
- `npx expo start --web --offline --port 8082`
- `npx expo export --platform web`

Errors found and fixed:
- Initial Expo scaffold command failed under restricted network/cache permissions, then succeeded with approved elevated access.
- Dependency install timed out once, then succeeded with approved elevated access.
- TypeScript found an unused template `@ts-expect-error`; the generated starter file was removed during cleanup.
- TypeScript found `ProgressBar` percent width needed an explicit `DimensionValue`; fixed.
- `npm run web -- --port 8082` hit `TypeError: fetch failed` in the restricted environment; Expo was rerun in offline mode and successfully bundled the web app.
- Static web export completed successfully and generated all app routes.

How to run the app:
- `npm start`
- Or for web verification: `npx expo start --web --offline --port 8082`

What is pending:
- Git commit and push are performed after this log is written so the log is included in the commit.
