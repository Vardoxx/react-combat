import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UpgradesProps {
  upgrade: number;
  counter: number;
  lvl: number;
}

const upgrades: UpgradesProps[] = [
  { lvl: 1, upgrade: 10, counter: 1000 },
  { lvl: 2, upgrade: 30, counter: 20000 },
  { lvl: 3, upgrade: 60, counter: 80000 },
  { lvl: 4, upgrade: 90, counter: 210000 },
  { lvl: 5, upgrade: 180, counter: 630000 },
  { lvl: 6, upgrade: 360, counter: 189000000 },
];

export interface CounterState {
  value: number; // Текущее количество кликов
  upgrade: number;
  lvl: number; // Текущий уровень
}

const initialState: CounterState = {
  value: 0,
  upgrade: 1,
  lvl: 0,
};

export const incrementToClick = createSlice({
  name: "clickToEarn",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 10;
      upgrades.forEach(({ upgrade, counter, lvl }) => {
        if (state.value > counter) {
          state.value += upgrade;
          state.upgrade = upgrade;
        }
        if (state.value >= counter) {
          state.lvl = lvl;
        }
      });
    },
    incrementByAmout: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      // Здесь можно добавить логику для обновления уровня, если это необходимо
    },
  },
});

export const { increment, incrementByAmout } = incrementToClick.actions;

export default incrementToClick.reducer;
