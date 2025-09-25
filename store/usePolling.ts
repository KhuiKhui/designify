import { create } from 'zustand';

export const usePolling = create((set) => ({
  moodScore: 0,
  currentQuestion: 1,
  completed: false,
  resetMoodScore: () => set((state: any) => ({ moodScore: 0 })),
  setMoodScore: (by: number) =>
    set((state: any) => ({ moodScore: state.moodScore + by })),
  increaseCurrentQuestion: () =>
    set((state: any) => ({ currentQuestion: state.currentQuestion + 1 })),
  setCurrentQuestion: (value: number) =>
    set(() => ({ currentQuestion: value })),
  setCompleted: (bool: boolean) =>
    set((state: any) => ({ completed: (state.completed = bool) })),
}));
