import * as React from "react";

import { Storybook } from "~shared/modules";

import { Input } from "./index";

export default {
  component: Input,
  title: "Design/Components/Input",
} as Storybook.StoryMeta<typeof Input>;

const Template: Storybook.StoryType<typeof Input> = {
  args: {
    inputProps: {
      type: "text",
    },
    label: "First name",
  },
  render: (args) => <Input {...args} />,
};

export const Primary: Storybook.StoryType<typeof Input> = {
  ...Template,
};

export const Disabled: Storybook.StoryType<typeof Input> = {
  ...Template,
  args: Storybook.produce(Template.args, (draft) => {
    draft.inputProps.disabled = true;
  }),
};
