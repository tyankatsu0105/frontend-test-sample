import * as React from "react";

import { Page } from "./index";
import { Main } from "~design/layouts";
import { Storybook } from "~shared/modules";
import { screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
  name: "Primary",
  args: {
    title: "page title",
  },
};
