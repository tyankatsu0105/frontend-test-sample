import "the-new-css-reset/css/reset.css";
import "../../styles/globals.css";

import React from "react";
import { DecoratorFn } from "@storybook/react";
import { Provider } from "react-redux";

import { createStore } from "../../store/index";

const store = createStore();

export const App: DecoratorFn = (Story, context) => {
  return (
    <Provider store={store}>
      <Story {...context} />
    </Provider>
  );
};
