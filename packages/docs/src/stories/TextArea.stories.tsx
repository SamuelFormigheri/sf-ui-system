import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, ITextAreaProps } from '@sf-ui-system/react'

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ITextAreaProps>

export const Primary: StoryObj<ITextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<ITextAreaProps> = {
  args: {
    disabled: true,
  },
}