import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, ICheckboxProps } from '@sf-ui-system/react'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<ICheckboxProps>

export const Primary: StoryObj<ICheckboxProps> = {}
