import * as React from "react";

import { Main } from "./index";

import { Storybook } from "~shared/modules";
import { screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  component: Main,
  title: "Design/Layouts/Main",
} as Storybook.StoryMeta<typeof Main>;

const Template: Storybook.StoryType<typeof Main> = {
  render: (args) => <Main {...args} />,
};

export const Primary: Storybook.StoryType<typeof Main> = {
  ...Template,
  name: "Primary",
};
