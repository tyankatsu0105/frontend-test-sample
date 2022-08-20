import * as ReduxToolkit from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { api } from "./api";
import * as Reducer from "./reducer";
type PreloadedState = Parameters<
  ReturnType<typeof Reducer.createReducer>["reducer"]
>[0];

export const createStore = (preloadedState?: PreloadedState) => {
  const { reducer } = Reducer.createReducer();

  return ReduxToolkit.configureStore({
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
    reducer,
  });
};

export const wrapper = createWrapper<AppState>(() => createStore(), {
  debug: process.env.NODE_ENV !== "production",
});

// ==================================================
// types
// ==================================================

type AppState = ReturnType<typeof createStore>;
export type RootState = ReturnType<
  ReturnType<typeof Reducer.createReducer>["reducer"]
>;
