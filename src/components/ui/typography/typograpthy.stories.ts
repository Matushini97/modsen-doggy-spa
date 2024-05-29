import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '.'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'body1',
        'body2',
        'body3',
        'subheading1',
        'subheading2',
        'logo1',
        'logo2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>


export const H1: Story = {
  args: {
    children: 'Card content',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Card content',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Card content',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'Card content',
    variant: 'h4',
  },
}
export const H5: Story = {
  args: {
    children: 'Card content',
    variant: 'h5',
  },
}
export const Body1: Story = {
  args: {
    children: 'Card content',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Card content',
    variant: 'body2',
  },
}
export const Body3: Story = {
  args: {
    children: 'Card content',
    variant: 'body3',
  },
}
export const Subheading1: Story = {
  args: {
    children: 'Card content',
    variant: 'subheading1',
  },
}
export const Subheading2: Story = {
  args: {
    children: 'Card content',
    variant: 'subheading2',
  },
}
export const Logo1: Story = {
  args: {
    children: 'Card content',
    variant: 'logo1',
  },
}
export const Logo2: Story = {
  args: {
    children: 'Card content',
    variant: 'logo2',
  },
}


