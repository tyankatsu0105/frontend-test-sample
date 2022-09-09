import { StoryObj } from "@storybook/react";
import { DecoratorParameters } from "msw-storybook-addon";
import * as React from "react";

import { GetLayout } from "./next";
export { default as produce } from "immer";
export type StoryMeta<Component extends React.ElementType> =
  StoryObj<Component> & {
    parameters?: StoryObj<Component>["parameters"] &
      DecoratorParameters & {
        getLayout?: GetLayout;
      };
  };

/**
 * NOTE: StorybookがargsをPartialにしてくるので、Partialを外す
 */
export type StoryType<Component extends React.ElementType> = Omit<
  StoryObj<React.ComponentProps<Component>>,
  "args"
> & {
  args: React.ComponentProps<Component>;
  parameters?: StoryObj<React.ComponentProps<Component>>["parameters"] &
    DecoratorParameters & {
      getLayout?: GetLayout;
    };
};
