import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./index";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "checkbox",
    label: "11 am - 12 pm",
  },
};
export const Group: Story = {
  render: () => {
    return (
      <form>
        <Radio id={"1"} label="11 am - 12 pm" />
        <Radio id={"2"} label="11 am - 12 pm" />
        <Radio id={"3"} label="11 am - 12 pm" />
      </form>
    );
  },
};
