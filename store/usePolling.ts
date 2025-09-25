import { create } from 'zustand';

export const usePolling = create((set) => ({
  moodScore: 0,
  currentQuestion: 1,
  completed: false,
  setMoodScore: (by: number) =>
    set((state: any) => ({ moodScore: state.moodScore + by })),
  increaseCurrentQuestion: () =>
    set((state: any) => ({ currentQuestion: state.currentQuestion + 1 })),
  setCompleted: (bool: boolean) =>
    set((state: any) => ({ completed: (state.completed = bool) })),
}));
