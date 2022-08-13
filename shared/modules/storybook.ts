import { StoryObj } from "@storybook/react";
import * as React from "react";

export type StoryMeta<Component extends React.ElementType> =
  StoryObj<Component>;
export type StoryType<Component extends React.ElementType> = StoryObj<
  React.ComponentProps<Component>
>;
