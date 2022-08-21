import { StoryObj } from "@storybook/react";
import * as React from "react";

export { default as produce } from "immer";

export type StoryMeta<Component extends React.ElementType> =
  StoryObj<Component>;

/**
 * NOTE: StorybookがargsをPartialにしてくるので、Partialを外す
 */
export type StoryType<Component extends React.ElementType> = Omit<
  StoryObj<React.ComponentProps<Component>>,
  "args"
> & {
  args: React.ComponentProps<Component>;
};
