import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ExamResult, Question, StateCode, Topic } from '@/src/types';

type AppState = {
  selectedState?: StateCode;
  hasCompletedOnboarding: boolean;
  practiceAnswered: number;
  practiceCorrect: number;
  wrongByTopic: Partial<Record<Topic, number>>;
  examHistory: ExamResult[];
  completeOnboarding: () => void;
  selectState: (state: StateCode) => void;
  recordPracticeAnswer: (question: Question, isCorrect: boolean) => void;
  saveExamResult: (result: ExamResult) => void;
  resetProgress: () => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      selectedState: undefined,
      hasCompletedOnboarding: false,
      practiceAnswered: 0,
      practiceCorrect: 0,
      wrongByTopic: {},
      examHistory: [],
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      selectState: (selectedState) => set({ selectedState, hasCompletedOnboarding: true }),
      recordPracticeAnswer: (question, isCorrect) =>
        set((state) => ({
          practiceAnswered: state.practiceAnswered + 1,
          practiceCorrect: state.practiceCorrect + (isCorrect ? 1 : 0),
          wrongByTopic: isCorrect
            ? state.wrongByTopic
            : {
                ...state.wrongByTopic,
                [question.topic]: (state.wrongByTopic[question.topic] ?? 0) + 1,
              },
        })),
      saveExamResult: (result) =>
        set((state) => ({
          examHistory: [result, ...state.examHistory].slice(0, 12),
          wrongByTopic: result.answers.reduce<Partial<Record<Topic, number>>>(
            (topics, answer) => {
              if (!answer.correct) {
                topics[answer.topic] = (topics[answer.topic] ?? 0) + 1;
              }
              return topics;
            },
            { ...state.wrongByTopic },
          ),
        })),
      resetProgress: () =>
        set({
          practiceAnswered: 0,
          practiceCorrect: 0,
          wrongByTopic: {},
          examHistory: [],
        }),
    }),
    {
      name: 'permitpilot-progress-v1',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
