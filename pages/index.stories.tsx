import { expect } from "@storybook/jest";
import { screen, waitFor } from "@storybook/testing-library";
import * as React from "react";

import { handler } from "~api/mocks/handlers";
import { Storybook } from "~shared/modules";

import Page, { getLayout } from "./index.page";

export default {
  component: Page,
  title: "Pages/Home",
} as Storybook.StoryMeta<typeof Page>;

const Template: Storybook.StoryType<typeof Page> = {
  args: {},
  render: (args) => getLayout(<Page {...args} />),
};

export const Primary: Storybook.StoryType<typeof Page> = {
  ...Template,
  parameters: {
    ...Template.parameters,
    msw: {
      handlers: handler,
    },
  },
  play: async () => {
    await waitFor(async () => {
      const text = screen.getByText("How to train your dragon");

      await expect(text.textContent).toBe("How to train your dragon");
    });
  },
};
