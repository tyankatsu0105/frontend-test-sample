import * as React from "react";

import { Card } from "./index";

import { Storybook } from "~shared/modules";
import { screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  component: Card,
  title: "Design/Components/Card",
} as Storybook.StoryMeta<typeof Card>;

const Template: Storybook.StoryType<typeof Card> = {
  render: (args) => <Card {...args} />,
};

export const Primary: Storybook.StoryType<typeof Card> = {
  ...Template,
  name: "Primary",
  args: {
    renderHead: (props) => (
      <div>
        <h2 className={props.styles.heading}>heading</h2>
      </div>
    ),
    renderBody: () => (
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iure
        excepturi, delectus ipsa illo voluptatum esse nesciunt quae, aut facilis
        nam veniam illum quas quod animi nostrum, quidem sapiente molestiae!
      </div>
    ),
  },
};
