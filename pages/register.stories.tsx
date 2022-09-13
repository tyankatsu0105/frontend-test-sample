import { expect } from "@storybook/jest";
import { screen, userEvent, waitFor } from "@storybook/testing-library";
import * as React from "react";

import { handlerCreator } from "~api/mocks/handlers/create-user";
import { Storybook } from "~shared/modules";

import Page, { getLayout } from "./register.page";

export default {
  component: Page,
  title: "Pages/Register",
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
                username: user.username,
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

    const usernameElement = screen.getByTestId("username");
    await userEvent.type(usernameElement, "username");

    const button = screen.getByTestId("submit");
    await userEvent.click(button);
  },
};

export const ErrorForm: Storybook.StoryType<typeof Page> = {
  ...Primary,
  play: async () => {
    const emailElement = screen.getByTestId("email");
    await userEvent.type(emailElement, "");

    const passwordElement = screen.getByTestId("password");
    await userEvent.type(passwordElement, "");

    const usernameElement = screen.getByTestId("username");
    await userEvent.type(usernameElement, "");

    const button = screen.getByTestId("submit");
    await userEvent.click(button);

    await waitFor(async () => {
      const emailErrorMessage = screen.getByTestId("errorMessage-email");
      await expect(emailErrorMessage.textContent).toBe("Required");

      const passwordErrorMessage = screen.getByTestId("errorMessage-password");
      await expect(passwordErrorMessage.textContent).toBe("Required");

      const usernameErrorMessage = screen.getByTestId("errorMessage-username");
      await expect(usernameErrorMessage.textContent).toBe("Required");
    });
  },
};
