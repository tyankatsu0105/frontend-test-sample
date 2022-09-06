import "the-new-css-reset/css/reset.css";
import "../styles/globals.css";
import { App } from "./decorators/app";

import { Parameters } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator, App];
