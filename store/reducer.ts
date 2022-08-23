import * as ReduxToolkit from "@reduxjs/toolkit";

// import * as Domain from "./domain";
import * as API from "./api";
import * as Application from "./application";
// import * as UI from "./ui";

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    [API.api.reducerPath]: API.api.reducer,
    // [Domain.featureKey]: Domain.reducer,
    [Application.featureKey]: Application.reducer,
    // [UI.featureKey]: UI.reducer,
  });

  return { reducer };
};
