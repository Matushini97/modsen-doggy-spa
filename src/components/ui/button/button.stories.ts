import type { Meta, StoryObj } from '@storybook/react'
 
import { Button } from './index'
 
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>
 
export default meta
type Story = StoryObj<typeof meta>
 
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const AsLink: Story = {
    args: {
      variant: 'link',
      children: 'Link that looks like a button',
      as: 'a',
    },
  }