import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, IAvatarProps } from '@sf-ui-system/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/SamuelFormigheri.png',
    alt: 'Samuel Formigheri',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    color: {
      options: ["green", "blue", "cyan", "purple", "yellow", "pink", "red", "gray", "white", "black"],
      control: {
        type: 'inline-radio',
      }
    }
  },
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {
}

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined
  },
}
