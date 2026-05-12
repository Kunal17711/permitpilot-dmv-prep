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

## Prompt 2 — Startup asset and package compatibility fix

Fix the current Expo runtime error and compatibility warning in PermitPilot.

Current terminal output:

Error:
Asset not found: E:\permitpilot-dmv-prep\assets\logo.png for platform: (unspecified)

Compatibility warning:
@react-native-async-storage/async-storage@3.0.2 - expected version: 2.2.0

Tasks:

1. Fix the missing asset issue properly.
   - Open app.json / app.config if present.
   - Find every reference to assets/logo.png.
   - Either create a valid assets/logo.png file OR update the config to point to a valid existing PNG asset.
   - Preferred approach:
     - Create a simple original PermitPilot app icon/logo PNG inside assets/logo.png if possible.
     - If PNG generation is not practical, update app.json to use an existing valid asset from the assets folder.
   - Make sure all icon, splash, adaptiveIcon, and favicon paths point to files that actually exist.
   - Do not use remote images.
   - Do not use Zutobi assets.

2. Fix the AsyncStorage Expo compatibility warning.
   - Install the Expo-compatible version:
     npx expo install @react-native-async-storage/async-storage
   - Ensure package.json and package-lock.json are updated correctly.

3. Clean Metro cache and test.
   - Run:
     npx expo start --clear
   - If the dev server starts successfully without the missing logo error, stop after confirming.
   - Do not leave the terminal running forever if you can avoid it.

4. Keep app functionality unchanged.
   - Do not redesign the app in this prompt.
   - Do not remove screens.
   - Do not break routes.
   - Only fix asset paths, package compatibility, and any direct startup errors.

5. Update AI logs.
   - Append this full prompt under:
     ## Prompt 2 — Startup asset and package compatibility fix
   - Add your response under:
     ## Response 2
   - Include:
     - what caused the error
     - files changed
     - packages updated
     - commands run
     - whether the app now starts
   - File:
     ai-logs/codex-session-01.md

6. Commit and push.
   - Run:
     git add .
     git commit -m "fix expo startup assets and package compatibility"
     git push

Final response:
Tell me:
1. What exactly you fixed.
2. Which files changed.
3. Whether npm start / expo start works now.
4. Whether GitHub push succeeded.
5. The exact command I should run next to open it on my phone.

## Response 2

Fixed the Expo startup asset error by creating a valid original local PNG at `assets/logo.png`. The checked-in `app.json` already pointed `icon`, `splash.image`, `android.adaptiveIcon.foregroundImage`, and `web.favicon` to existing files under `assets/images`, and no checked-in config reference to `assets/logo.png` was found. The runtime error was caused by Expo/Metro looking for `assets/logo.png` while the file did not exist.

Updated `@react-native-async-storage/async-storage` with `npx expo install @react-native-async-storage/async-storage`, changing it from `^3.0.2` to the Expo SDK 54 compatible `2.2.0` and updating `package-lock.json`.

Files changed:
- `assets/logo.png`
- `package.json`
- `package-lock.json`
- `ai-logs/codex-session-01.md`

Commands run:
- `Get-Content app.json`
- `Get-ChildItem -Recurse -File assets`
- `rg "assets/logo\.png|logo\.png|icon|splash|favicon|adaptiveIcon" app.json app.config.* package.json`
- `rg "assets/logo\.png|logo\.png" --glob "!node_modules/**" --glob "!dist/**" --glob "!.expo/**"`
- PowerShell/System.Drawing command to generate `assets/logo.png`
- `npx expo install @react-native-async-storage/async-storage`
- `npx tsc --noEmit`
- `npx expo start --clear`
- `npx expo start --clear --port 8082`
- `npx expo start --clear --offline --port 8082`

Testing result:
- `npx tsc --noEmit` passed.
- `npx expo start --clear` started Expo but stopped because port `8081` was already occupied and the non-interactive shell could not accept the suggested port change.
- `npx expo start --clear --port 8082` no longer showed the missing `assets/logo.png` error; it hit a sandbox network `fetch failed`.
- `npx expo start --clear --offline --port 8082` successfully cleared the cache, started Metro, and reached `Waiting on http://localhost:8082` without the missing asset error.

## Prompt 3 — Final UI polish, README, and reflection

You are continuing work on PermitPilot — DMV Permit & Driving Test Prep.

The core app is already built and running. Now perform final contest polish for an 8x Engineer submission.

Important:
- Do not rebuild the app from scratch.
- Do not remove working functionality.
- Do not add backend/auth/API keys.
- Keep everything local.
- Keep Expo React Native + TypeScript + Expo Router.
- Keep the app original and do not copy Zutobi assets, logo, exact UI, or exact questions.
- Update ai-logs/codex-session-01.md with this full prompt and your response summary.
- Commit and push changes after finishing.

Current issues observed from phone screenshots:
1. Practice screen bottom button is too close to the Android home indicator and partially cut off.
2. Exam screen bottom “Next” button is also too close to the bottom.
3. Some screens need safer bottom padding and better ScrollView behavior.
4. Progress dashboard is good but should be more screenshot-ready.
5. Home dashboard should feel more premium and clearer as the main demo screen.
6. Exam result screen should be more visually impressive and easier to screenshot.
7. Remove unused default Expo template screens/files/routes if they are not used, especially any leftover tabs/two/modal demo files, but only if safe.
8. Add a professional README.md.
9. Add a contest reflection file.

Tasks:

1. Fix safe area and bottom spacing everywhere
- Ensure every screen works on Android devices with gesture navigation.
- Use safe area handling and proper bottom padding.
- Buttons must not be hidden behind the Android home indicator.
- Practice and Exam buttons should be fully visible.
- Long screens should scroll smoothly.
- Avoid content being cut off at top or bottom.

2. Polish onboarding screen
- Make it feel like a premium DMV prep app landing screen.
- Keep the PermitPilot brand.
- Improve microcopy if needed.
- Make CTA clear.
- Keep visual style clean, modern, teal/emerald, white cards, soft shadows.

3. Polish state selector
- Keep California, Texas, New York, Florida.
- Make selected state visually strong.
- Ensure Save State button is always visible and not cut off.
- Add small supporting copy about localized question banks.

4. Polish home dashboard
- Make it screenshot-worthy.
- It should clearly show:
  - selected state
  - readiness score
  - practice CTA
  - full exam CTA
  - weak topics shortcut
  - progress dashboard shortcut
- Add a small “Today’s plan” or “Recommended next step” card if useful.
- Keep the layout clean and not cluttered.

5. Polish practice mode
- Improve question UX.
- Answer options should feel tappable.
- After selecting an option:
  - correct answer should be clearly highlighted
  - wrong selected answer should be clearly highlighted if wrong
  - explanation card should appear cleanly
  - “Next Question” button should be visible and not cut off
- Before selecting an answer, disabled button should be visible and not cut off.
- Keep topic and difficulty pills.

6. Polish weak topics screen
- Keep both states:
  - empty state
  - weak topics list
- Improve ranking/visual hierarchy.
- Add helpful reviewer-friendly microcopy.

7. Polish full exam mode
- Make progress and timer clean.
- Ensure option selection and Next button work smoothly.
- Button must not be cut off.
- Show passing score clearly.
- Make it feel like a real test simulation.

8. Polish exam result screen
- Make pass/fail result very screenshot-worthy.
- Show:
  - pass/fail
  - score out of 20
  - percentage
  - readiness message
  - actions to practice weak topics / retake exam / go home
- Add topic breakdown if already available or simple summary if easy.
- Do not overcomplicate.

9. Polish progress dashboard
- Make the top readiness card premium.
- Show accuracy, completed questions, correct answers, best exam, last exam, weak topics, selected state.
- Improve spacing so screenshots look clean.
- Ensure lower content is scrollable and not cut off.

10. Settings screen
- Keep current state.
- Change state button.
- Reset progress button.
- Make reset action safe and visually clear.
- Do not make it look scary unless user intentionally taps it.

11. Clean project structure
- Remove unused default Expo template demo files/routes/components only if they are not imported or needed.
- Do not break imports.
- Do not remove assets required by app.json.
- Make sure there are no broken routes.
- Keep the code clean.

12. README.md
Create a strong README.md for GitHub with:
- Project title: PermitPilot — DMV Permit & Driving Test Prep
- Short description
- Contest context
- Features
- Tech stack
- Screens
- How to run
- AI logs note
- Originality note
- Submission/demo note

13. Reflection
Create:
reflection.md

Include:
- What was easy
- What was difficult
- What I learned
- What I would improve with more time
- How AI helped during development
Keep it honest, clear, and professional.

14. AI logs
Append this prompt to:
ai-logs/codex-session-01.md

Use:

## Prompt 3 — Final UI polish, README, and reflection

Then paste this full prompt.

Add:

## Response 3

Include:
- summary of changes
- files edited
- files created
- commands run
- issues fixed
- testing result
- GitHub push status

15. Testing
Run:
npm run lint if available
npx tsc --noEmit if available
npx expo start --clear --offline --port 8082

Fix TypeScript/import/runtime errors if found.

16. Git
Run:
git add .
git commit -m "polish permitpilot for contest submission"
git push

Final response:
Tell me:
1. What UI issues you fixed.
2. Which screens were polished.
3. Which files were created/edited.
4. Whether TypeScript/build checks passed.
5. Whether GitHub push succeeded.
6. Exact command to run the app on phone.
7. Final screenshot list for submission.
8. Final Loom walkthrough outline.

## Response 3

Summary of changes:
- Added safe-area-aware bottom padding in the shared `Screen` component so Android gesture navigation does not cover bottom buttons.
- Polished onboarding with stronger brand presentation, clearer microcopy, local-progress badge, and a clearer CTA.
- Improved state selector copy and added a save panel so the selected state flow feels more intentional.
- Polished the home dashboard with selected-state emphasis and a recommended next-step card.
- Improved practice answer UX with stronger tappable options, clearer prompt copy, polished explanation labeling, and safer bottom spacing.
- Polished full exam mode with cleaner progress, timer, passing-score context, and safer bottom spacing.
- Improved weak topics hierarchy and reviewer-friendly guidance copy.
- Upgraded exam results with a more screenshot-ready hero, result stats, retake action, weak-topic action, and home action.
- Improved progress dashboard with readiness formula copy and local-storage context.
- Made settings reset feel safer by using a neutral reset button and clearer confirmation copy.
- Confirmed leftover default tabs/two/modal demo routes had already been removed; no app routes were broken.
- Added a professional `README.md`.
- Added `reflection.md`.

Files edited:
- `src/components/Screen.tsx`
- `src/components/QuestionCard.tsx`
- `src/components/StateCard.tsx`
- `app/onboarding.tsx`
- `app/state-select.tsx`
- `app/home.tsx`
- `app/practice.tsx`
- `app/exam.tsx`
- `app/exam-result.tsx`
- `app/progress.tsx`
- `app/weak-topics.tsx`
- `app/settings.tsx`
- `ai-logs/codex-session-01.md`

Files created:
- `README.md`
- `reflection.md`

Commands run:
- `Get-Content` on current route/component files
- `rg --files`
- `npm run lint`
- `npx tsc --noEmit`
- `npx expo start --clear --offline --port 8082`
- `netstat -ano | Select-String ':8082'`
- `Get-Process -Id 9188`
- `Stop-Process -Id 9188 -Force`
- `npx expo export --platform web`

Issues fixed:
- Practice bottom button spacing on Android gesture navigation.
- Exam bottom button spacing on Android gesture navigation.
- Safer shared ScrollView bottom padding for long screens.
- Improved screenshot readiness for onboarding, home, exam result, progress, weak topics, and settings.
- Added contest documentation and reflection artifacts.

Testing result:
- `npm run lint` could not run because `package.json` has no `lint` script.
- `npx tsc --noEmit` passed.
- First `npx expo start --clear --offline --port 8082` found port `8082` already occupied.
- The existing Node listener on `8082` was stopped.
- Rerunning `npx expo start --clear --offline --port 8082` successfully cleared Metro cache and reached `Waiting on http://localhost:8082`.
- `npx expo export --platform web` completed successfully and exported all 12 static routes.

GitHub push status:
- Pending at the time this log entry was written; the changes are committed and pushed immediately after this file is staged.
