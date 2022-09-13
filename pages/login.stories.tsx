import { expect } from "@storybook/jest";
import { screen, userEvent, waitFor } from "@storybook/testing-library";
import * as React from "react";

import { handlerCreator } from "~api/mocks/handlers/login";
import { Storybook } from "~shared/modules";

import Page, { getLayout } from "./login.page";

export default {
  component: Page,
  title: "Pages/Login",
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
          const { user } = await req.body;

          return res(
            ctx.status(200),
            ctx.json({
              user: {
                bio: "bio",
                email: user.email,
                image: "image",
                token: "token",
                username: "username",
              },
            })
          );
        }),
      ],
    },
  },
  play: async () => {
    const emailElement = screen.getByTestId("email");
    await userEvent.type(emailElement, "email");

    const passwordElement = screen.getByTestId("password");
    await userEvent.type(passwordElement, "password");

    const button = screen.getByTestId("submit");
    await userEvent.click(button);

    await waitFor(async () => {
      const username = screen.getByTestId("header-username");
      await expect(username.textContent).toBe("Hello, username!");
    });
  },
};

export const ErrorForm: Storybook.StoryType<typeof Page> = {
  ...Primary,
  play: async () => {
    const emailElement = screen.getByTestId("email");
    await userEvent.type(emailElement, "");

    const passwordElement = screen.getByTestId("password");
    await userEvent.type(passwordElement, "");

    const button = screen.getByTestId("submit");
    await userEvent.click(button);

    await waitFor(async () => {
      const emailErrorMessage = screen.getByTestId("errorMessage-email");
      await expect(emailErrorMessage.textContent).toBe("Required");

      const passwordErrorMessage = screen.getByTestId("errorMessage-password");
      await expect(passwordErrorMessage.textContent).toBe("Required");
    });
  },
};
