import type { Meta, StoryObj } from '@storybook/react'
import { Box, IBoxProps, Text } from '@sf-ui-system/react'

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {}
