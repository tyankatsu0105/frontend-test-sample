import * as React from "react";

import Page from "./index.page";

import { Storybook } from "~shared/modules";
import { screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  component: Page,
  title: "Pages/Home",
} as Storybook.StoryMeta<typeof Page>;

const Template: Storybook.StoryType<typeof Page> = {
  render: (args) => <Page {...args} />,
};

export const Primary: Storybook.StoryType<typeof Page> = {
  ...Template,
  name: "Primary",
  play: async () => {
    const text = screen.getByText("error");

    expect(text.textContent).toBe("error");
  },
};
