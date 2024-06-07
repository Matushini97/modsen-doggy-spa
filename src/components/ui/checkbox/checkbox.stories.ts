import type { Meta, StoryObj } from '@storybook/react'
 
import { Checkbox } from './index'
 
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>
 
export default meta
type Story = StoryObj<typeof meta>
 
export const Primary: Story = {
  args: {
    id: 'checkbox',
    label: '11 am - 12 pm',
  },
}