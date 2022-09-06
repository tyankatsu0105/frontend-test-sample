import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";
import * as React from "react";

import { handler } from "~api/mocks/handlers";
import { Main } from "~design/layouts";
import { Storybook } from "~shared/modules";

import { useAuth } from "./_app.facade";
import Page from "./index.page";

export default {
  component: Page,
  title: "Pages/Home",
} as Storybook.StoryMeta<typeof Page>;

const Template: Storybook.StoryType<typeof Page> = {
  args: {},
  render: (args) => {
    useAuth();

    return (
      <Main>
        <Page {...args} />
      </Main>
    );
  },
};

export const Primary: Storybook.StoryType<typeof Page> = {
  ...Template,
  parameters: {
    msw: {
      handlers: handler,
    },
  },
  play: async () => {
    const text = screen.getByText("error");

    await expect(text.textContent).toBe("error");
  },
};
