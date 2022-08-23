import * as React from "react";

import { Storybook } from "~shared/modules";

import { Main } from "./index";

export default {
  component: Main,
  title: "Design/Layouts/Main",
} as Storybook.StoryMeta<typeof Main>;

const Template: Storybook.StoryType<typeof Main> = {
  args: {
    children: <>contents</>,
  },
  render: (args) => <Main {...args} />,
};

export const Primary: Storybook.StoryType<typeof Main> = {
  ...Template,
};
