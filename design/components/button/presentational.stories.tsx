import * as React from "react";

import { Storybook } from "~shared/modules";

import { Button } from "./index";

export default {
  component: Button,
  title: "Design/Components/Button",
} as Storybook.StoryMeta<typeof Button>;

const Template: Storybook.StoryType<typeof Button> = {
  args: {
    as: "button",
    children: <>button</>,
    type: "submit",
    variant: "box",
  },
  render: (args) => <Button {...args} />,
};

export const Primary: Storybook.StoryType<typeof Button> = {
  ...Template,
};
