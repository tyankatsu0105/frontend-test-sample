import * as ReduxToolkit from "@reduxjs/toolkit";

import { api } from "~store/api";

import * as Constants from "./constants";

// ==================================================
// Setups
// ==================================================

type State = {
  name: string;
  permissions: {
    isLoggedIn: boolean;
  };
};

export const initialState: State = {
  name: "",
  permissions: {
    isLoggedIn: false,
  },
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
        state.name = action.payload.user.username;
        state.permissions.isLoggedIn = true;
      })
      .addMatcher(
        api.endpoints.getCurrentUser.matchFulfilled,
        (state, action) => {
          state.name = action.payload.user.username;
        }
      );
  },
  initialState: initialState,
  name,
  reducers: {
    updatePermissions: (
      state,
      action: ReduxToolkit.PayloadAction<State["permissions"]>
    ) => {
      state.permissions = {
        ...state.permissions,
        ...action.payload,
      };
    },
  },
});

export const { actions, reducer } = slice;
