import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const NoLabel: Story = {
    args: {
      placeholder: 'Placeholder',
    },
  }

  export const Error: Story = {
    args: {
      placeholder: 'Placeholder',
      errorMessage: 'Error message',
    },
  }