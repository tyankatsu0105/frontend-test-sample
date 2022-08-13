import * as ReduxToolkit from "@reduxjs/toolkit";

type Middleware = Parameters<
  typeof ReduxToolkit.configureStore
>["0"]["middleware"];

export const createMiddleware = () => {
  const middleware: Middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: process.env.NODE_ENV !== "production",
    }).concat();

  return { middleware };
};
