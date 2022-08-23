import * as ReduxToolkit from "@reduxjs/toolkit";

import * as User from "./user";

export type State = {
  [User.featureKey]: ReturnType<typeof User.reducer>;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [User.featureKey]: User.reducer,
});
