import type { Meta, StoryObj } from '@storybook/react'
import { Tag, ITagProps } from '@sf-ui-system/react'

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    size: 'md',
    children:
      'Tag',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['active', 'inactive'],
      control: {
        type: 'inline-radio',
      },
    }
  },
} as Meta<ITagProps>

export const Primary: StoryObj<ITagProps> = {}

export const CustomTag: StoryObj<ITagProps> = {
  args: {
    children: 'Strong Tag',
    as: 'strong',
  },
}
