import { expect } from "@storybook/jest";
import { screen, waitFor } from "@storybook/testing-library";
import * as React from "react";

import { handler } from "~api/mocks/handlers";
import { Storybook } from "~shared/modules";

import Page, { getLayout } from "./[slug].page";

export default {
  component: Page,
  title: "Pages/Posts/[slug]",
} as Storybook.StoryMeta<typeof Page>;

const Template: Storybook.StoryType<typeof Page> = {
  args: {
    data: {
      article: {
        author: {
          bio: "I work at Thinkmill, and I'm building a bunch of tools for the modern web developer.",
          following: false,
          image: "https://static.productionready.io/images/smiley-cyrus.jpg",
          username: "jake",
        },
        body: "This is a test article",
        createdAt: "2021-01-01T00:00:00.000Z",
        description: "How to build webapps that scale",
        favorited: false,
        favoritesCount: 0,
        slug: "how-to-train-your-dragon",
        tagList: ["dragons", "training"],
        title: "How to train your dragon",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
    },
  },
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
