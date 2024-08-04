import { configureStore } from "@reduxjs/toolkit";
import incrementToClick from "./sliced/incrementToClick.slice";

export const store = configureStore({
  reducer: {
    clickToEarn: incrementToClick,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
