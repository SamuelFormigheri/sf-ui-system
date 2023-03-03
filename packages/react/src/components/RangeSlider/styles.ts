import { styled } from "../../styles";
import * as RadixSlider from '@radix-ui/react-slider';

export const Root = styled(RadixSlider.Root, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: '100%',
    height: '$4'
})

export const Track = styled(RadixSlider.Track, {
    background: '$gray800',
    position: 'relative',
    flexGrow: '1',
    borderRadius: '$lg',
    height: '$2'
})

export const Range = styled(RadixSlider.Range, {
    background: '$gray500',
    position: 'absolute',
    borderRadius: '$lg',
    height: '100%',
    variants: {
        color: {
            green: {
                background: '$green500',
            },
            blue: {
                background: '$blue500',
            },
            cyan: {
                background: '$cyan500',
            },
            purple: {
                background: '$purple500',
            },
            yellow: {
                background: '$yellow500',
            },
            pink: {
                background: '$pink500',
            },
            red: {
                background: '$red500',
            },
            gray: {
                background: '$gray500',
            },
            white: {
                background: '$white',
            },
            black: {
                background: '$black',
            }
        }
    }
})

export const Thumb = styled(RadixSlider.Thumb, {
    display: 'block',
    width: '$4',
    height: '$4',
    background: '$gray500',
    borderRadius: '$full',
    '&:hover': {
        filter: 'brightness(1.1)',
        cursor: 'pointer'
    },
    variants: {
        color: {
            green: {
                background: '$green500',
            },
            blue: {
                background: '$blue500',
            },
            cyan: {
                background: '$cyan500',
            },
            purple: {
                background: '$purple500',
            },
            yellow: {
                background: '$yellow500',
            },
            pink: {
                background: '$pink500',
            },
            red: {
                background: '$red500',
            },
            gray: {
                background: '$gray500',
            },
            white: {
                background: '$white',
            },
            black: {
                background: '$black',
            }
        }
    }
})