import "the-new-css-reset/css/reset.css";
import "../../styles/globals.css";

import React from "react";
import { DecoratorFn } from "@storybook/react";
import { Provider } from "react-redux";

import { createStore } from "../../store/index";
import { useAuth } from "../../pages/_app.facade";

const store = createStore();

export const App: DecoratorFn = (Story, context) => {
  const WrapStory = () => {
    useAuth();

    return <Story {...context} />;
  };

  return (
    <Provider store={store}>
      <WrapStory />
    </Provider>
  );
};
