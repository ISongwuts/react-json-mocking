import { create } from 'zustand';

type PatternState = {
    pattern: number;
    inputValues: string[];
    selectValues: string[];
    increasePattern: () => void;
    decreasePattern: () => void;
    clearPatterns: () => void;
    setInputValue: (index: number, value: string) => void;
    setSelectValue: (index: number, value: string) => void;
};

const usePatternStore = create<PatternState>((set) => ({
    pattern: 4,
    inputValues: Array(4).fill(''),
    selectValues: Array(4).fill('0'),
    increasePattern: () => set((state) => ({ pattern: state.pattern + 1 })),
    decreasePattern: () => set((state) => ({
        pattern: Math.max(state.pattern - 1, 1),
        inputValues: state.inputValues.slice(0, -1),
        selectValues: state.selectValues.slice(0, -1), 
    })),
    clearPatterns: () => set((state) => ({
        pattern: 0,
        inputValues: Array(state.pattern).fill(''),
        selectValues: Array(state.pattern).fill('0'),
    })),
    setInputValue: (index, value) => set((state) => ({ inputValues: [...state.inputValues.slice(0, index), value, ...state.inputValues.slice(index + 1)] })),
    setSelectValue: (index, value) => set((state) => ({ selectValues: [...state.selectValues.slice(0, index), value, ...state.selectValues.slice(index + 1)] })),
}));

export default usePatternStore;
