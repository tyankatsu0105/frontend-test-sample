import { expect } from "@storybook/jest";
import { screen, userEvent, waitFor } from "@storybook/testing-library";
import * as React from "react";

import { handlerCreator } from "~api/mocks/handlers/create-article";
import { Storybook } from "~shared/modules";

import Page, { getLayout } from "./post.page";

export default {
  component: Page,
  title: "Pages/Post",
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
      handlers: [
        handlerCreator(async (req, res, ctx) => {
          const { article } = await req.body;

          return res(
            ctx.status(200),
            ctx.json({
              article: {
                author: {
                  bio: "bio",
                  following: false,
                  image: "image",
                  username: "username",
                },
                body: article.body,
                createdAt: "2021-01-01T00:00:00.000Z",
                description: article.description,
                favorited: false,
                favoritesCount: 0,
                slug: "slug",
                tagList: [],
                title: article.title,
                updatedAt: "2021-01-01T00:00:00.000Z",
              },
            })
          );
        }),
      ],
    },
  },
  play: async () => {
    const titleElement = screen.getByTestId("title");
    await userEvent.type(titleElement, "title");

    const descriptionElement = screen.getByTestId("description");
    await userEvent.type(descriptionElement, "description");

    const bodyElement = screen.getByTestId("body");
    await userEvent.type(bodyElement, "body");

    const button = screen.getByTestId("submit");
    await userEvent.click(button);
  },
};

export const ErrorForm: Storybook.StoryType<typeof Page> = {
  ...Primary,
  play: async () => {
    const titleElement = screen.getByTestId("title");
    await userEvent.type(titleElement, "");

    const descriptionElement = screen.getByTestId("description");
    await userEvent.type(descriptionElement, "");

    const bodyElement = screen.getByTestId("body");
    await userEvent.type(bodyElement, "");

    const button = screen.getByTestId("submit");
    await userEvent.click(button);

    await waitFor(async () => {
      const titleErrorMessage = screen.getByTestId("errorMessage-title");
      await expect(titleErrorMessage.textContent).toBe("Required");

      const descriptionErrorMessage = screen.getByTestId(
        "errorMessage-description"
      );
      await expect(descriptionErrorMessage.textContent).toBe("Required");

      const bodyErrorMessage = screen.getByTestId("errorMessage-body");
      await expect(bodyErrorMessage.textContent).toBe("Required");
    });
  },
};
