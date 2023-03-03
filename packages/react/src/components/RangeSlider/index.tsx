import { ComponentProps, forwardRef, ElementRef } from 'react'
import * as Slider from './styles';

export const RangeSlider = forwardRef<ElementRef<typeof Slider.Root>, IRangeSliderProps>(
    ({ prefix, color = "green", ...props }: IRangeSliderProps, ref) => {
        return (
            <Slider.Root {...props}>
                <Slider.Track >
                    <Slider.Range color={color} />
                </Slider.Track>
                <Slider.Thumb color={color} />
            </Slider.Root>
        )
    },
)

export type IRangeSliderProps = ComponentProps<typeof Slider.Root> & {
    /**
     * @default green
     */
    color?: "green" | "blue" | "cyan" | "purple" | "yellow" | "pink" | "red" | "gray" | "white" | "black";
}


RangeSlider.displayName = 'RangeSlider'
