import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Reducer from "./reducer";
import { createWrapper } from "next-redux-wrapper";
import { api } from "./api";
type PreloadedState = Parameters<
  ReturnType<typeof Reducer.createReducer>["reducer"]
>[0];

export const createStore = (preloadedState?: PreloadedState) => {
  const { reducer } = Reducer.createReducer();

  return ReduxToolkit.configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
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
