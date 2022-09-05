import * as ReduxToolkit from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { api } from "./api";
import * as Reducer from "./reducer";
export type PreloadedState = ReduxToolkit.PreloadedState<RootState>;

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

export const wrapper = createWrapper<AppStore>(() => createStore(), {
  debug: process.env.NODE_ENV !== "production",
});

// ==================================================
// types
// ==================================================

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<
  ReturnType<typeof Reducer.createReducer>["reducer"]
>;
