import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import { Card } from "./index";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: "div",
    children: "Children",
  },
};

export const Form: Story = {
  args: {
    as: "form",
    children: "Children",
  },
};

export const ImageVar: Story = {
  args: {
    as: "div",
    children: <Image src="/doggy-spa-package.png" alt="doggy spa package" width={550} height={550}/>,
  },
};
