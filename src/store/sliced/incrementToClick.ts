import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const incrementToClick = createSlice({
  name: "clickToEarn",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 10;
      if (state.value > 3000) {
        state.value += 20;
      }
      if (state.value > 20000) {
        state.value += 30;
      }
      if (state.value > 80000) {
        state.value += 60;
      }
      if (state.value > 210000) {
        state.value += 90;
      }
      if (state.value > 630000) {
        state.value += 180;
      }
    },
    incrementByAmout: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementByAmout } = incrementToClick.actions;

export default incrementToClick.reducer;
