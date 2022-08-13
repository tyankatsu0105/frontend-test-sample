import * as ReduxToolkit from "@reduxjs/toolkit";
import * as ReactRedux from "react-redux";

import * as Middleware from "./middleware";
import * as Reducer from "./reducer";

type PreloadedState = Parameters<
  ReturnType<typeof Reducer.createReducer>["reducer"]
>[0];

export const createStore = (preloadedState?: PreloadedState) => {
  const { reducer } = Reducer.createReducer();
  const { middleware } = Middleware.createMiddleware();

  return ReduxToolkit.configureStore({
    middleware,
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
};

// ==================================================
// types
// ==================================================
type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
