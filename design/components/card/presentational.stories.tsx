import * as React from "react";

import { Storybook } from "~shared/modules";

import { Card } from "./index";

export default {
  component: Card,
  title: "Design/Components/Card",
} as Storybook.StoryMeta<typeof Card>;

const Template: Storybook.StoryType<typeof Card> = {
  args: {
    renderBody: () => (
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iure
        excepturi, delectus ipsa illo voluptatum esse nesciunt quae, aut facilis
        nam veniam illum quas quod animi nostrum, quidem sapiente molestiae!
      </div>
    ),
    renderHead: (props) => (
      <div>
        <h2 className={props.styles.heading}>heading</h2>
      </div>
    ),
  },
  render: (args) => <Card {...args} />,
};

export const Primary: Storybook.StoryType<typeof Card> = {
  ...Template,
};
