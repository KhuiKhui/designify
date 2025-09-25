import { create } from 'zustand';

export const usePlayer = create((set) => ({
  player: undefined,
}));
