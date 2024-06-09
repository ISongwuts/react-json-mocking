import { create } from 'zustand';

interface PatternState {
  pattern: number;
  increasePattern: () => void;
  decreasePattern: () => void;
  clearPatterns: () => void;
}

const usePatternStore = create<PatternState>((set) => ({
  pattern: 4,
  increasePattern: () => set((state) => ({ pattern: state.pattern + 1 })),
  decreasePattern: () => set((state) => ({ pattern: state.pattern - 1 })),
  clearPatterns: () => set({ pattern: 0 })
}));

export default usePatternStore;