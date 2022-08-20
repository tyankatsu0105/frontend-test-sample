import * as React from "react";

import { Main } from "~design/layouts";
import { Storybook } from "~shared/modules";

import { Page } from "./index";

export default {
  component: Page,
  title: "Design/Layouts/Page",
} as Storybook.StoryMeta<typeof Page>;

const Template: Storybook.StoryType<typeof Page> = {
  render: (args) => (
    <Main>
      <Page {...args} />
    </Main>
  ),
};

export const Primary: Storybook.StoryType<typeof Page> = {
  ...Template,
  args: {
    title: "page title",
  },
};
