import * as React from "react";

import { Storybook } from "~shared/modules";

import { Header } from "./index";

export default {
  component: Header,
  title: "Design/Recipes/Header",
} as Storybook.StoryMeta<typeof Header>;

const Template: Storybook.StoryType<typeof Header> = {
  args: {},
  render: () => <Header />,
};

export const Primary: Storybook.StoryType<typeof Header> = {
  ...Template,
};
