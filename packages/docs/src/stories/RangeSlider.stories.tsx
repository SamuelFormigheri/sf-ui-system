import type { Meta, StoryObj } from '@storybook/react'
import { RangeSlider, IRangeSliderProps } from '@sf-ui-system/react'

export default {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  args: {
    defaultValue: [50],
    max: 100,
    step: 1
  }
} as Meta<IRangeSliderProps>

export const Primary: StoryObj<IRangeSliderProps> = {}
