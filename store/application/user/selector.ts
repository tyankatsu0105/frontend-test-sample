import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~store/index";

const featureState = (state: RootState) => state.application.user;

export const nameSelector = createSelector(featureState, (state) => state.name);
export const isLoggedInSelector = createSelector(
  featureState,
  (state) => state.permissions.isLoggedIn
);
