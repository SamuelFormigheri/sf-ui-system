import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, InputText, IInputTextProps } from '@sf-ui-system/react'

export default {
  title: 'Components/InputText',
  component: InputText,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<IInputTextProps>

export const Primary: StoryObj<IInputTextProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<IInputTextProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<IInputTextProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
