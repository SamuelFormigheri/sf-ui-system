import { ButtonHTMLAttributes, ComponentProps, ElementType } from 'react';
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    border: '2px solid $green500',
    backgroundColor: '$green500',
    borderRadius: '$md',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    boxSizing: 'border-box',
    color: '$white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4'
    },

    transition: '$fast',

    '&:not(:disabled):hover': {
        filter: 'brightness(0.8)',
    },

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5
    },

    variants: {
        size: {
            xs: {
                fontSize: '$xs',
                padding: '$2 $4'
            },
            sm: {
                fontSize: '$sm',
                padding: '$2 $4'
            },
            md: {
                fontSize: '$md',
                padding: '$3 $6'
            },
            lg: {
                fontSize: '$lg',
                padding: '$4 $6'
            },
            xl: {
                fontSize: '$xl',
                padding: '$4 $6'
            },
            '2xl': {
                fontSize: '$2xl',
                padding: '$4 $6'
            }
        },
        outlined: {
            true: {
                color: '$green500',
                border: '2px solid $green500',
                background: 'transparent'
            }
        },
        color: {
            green: {
                border: '2px solid $green500',
                backgroundColor: '$green500',
            },
            blue: {
                border: '2px solid $blue500',
                backgroundColor: '$blue500',
            },
            cyan: {
                border: '2px solid $cyan500',
                backgroundColor: '$cyan500',
            },
            purple: {
                border: '2px solid $purple500',
                backgroundColor: '$purple500',
            },
            yellow: {
                border: '2px solid $yellow500',
                backgroundColor: '$yellow500',
            },
            pink: {
                border: '2px solid $pink500',
                backgroundColor: '$pink500',
            },
            red: {
                border: '2px solid $red500',
                backgroundColor: '$red500',
            },
            gray: {
                border: '2px solid $gray500',
                backgroundColor: '$gray500',
            },
            white: {
                border: '2px solid $white',
                backgroundColor: '$white',
                color: 'transparent'
            },
            black: {
                border: '2px solid $black',
                backgroundColor: '$black'
            }
        }
    },

    compoundVariants: [
        {
            color: 'green',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$green500',
            },
        },
        {
            color: 'blue',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$blue500',
            },
        },
        {
            color: 'cyan',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$cyan500',
            },
        },
        {
            color: 'purple',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$purple500',
            },
        },
        {
            color: 'yellow',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$yellow500',
            },
        },
        {
            color: 'pink',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$pink500',
            },
        },
        {
            color: 'red',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$red500',
            },
        },
        {
            color: 'gray',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$gray500',
            },
        },
        {
            color: 'white',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$white',
            },
        },
        {
            color: 'black',
            outlined: true,
            css: {
                background: 'transparent',
                color: '$black',
            },
        },
    ],

    defaultVariants: {
        size: 'sm',
        color: 'green'
    }
});

export type IButtonProps = ComponentProps<typeof Button> & ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: ElementType
};

Button.displayName = 'Button'