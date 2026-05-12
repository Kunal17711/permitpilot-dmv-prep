# PermitPilot Reflection

## What Was Easy

The product scope was clear: a focused DMV permit prep app with local data, practice, exams, progress, and settings. Expo Router made it straightforward to create clean screen routes, and Zustand with AsyncStorage was a good fit for local progress persistence.

## What Was Difficult

The most delicate part was balancing a screenshot-ready mobile UI with practical phone constraints. Practice and exam screens need enough room for long questions, four answer choices, explanations, and bottom actions without being cut off by Android gesture navigation. The final polish pass focused heavily on safe-area behavior and scroll spacing.

## What I Learned

Small layout details matter a lot in mobile education apps. Clear answer states, readable explanations, and reliable bottom padding can make the app feel much more trustworthy. I also learned that contest submissions benefit from strong supporting files, especially a clear README, reflection, and AI log.

## What I Would Improve With More Time

With more time, I would add a dedicated review mode for missed questions, more state-specific question depth, optional study streaks, and richer exam history charts. I would also create a set of polished app store screenshots and run the app on several physical Android and iOS devices.

## How AI Helped During Development

AI helped scaffold the app quickly, generate original question-bank content, keep the architecture organized, and iterate on startup/runtime fixes. It was especially useful for maintaining the AI log, spotting compatibility issues, and applying consistent UI polish across many screens.
