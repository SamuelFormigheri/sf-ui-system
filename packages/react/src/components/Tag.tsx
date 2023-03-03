import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tag = styled('span', {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    border: '2px solid transparent',
    borderRadius: '$lg',
    fontWeight: '$bold',
    cursor: 'default',
    padding: '$2 $4',
    transition: '$fast',
    variants: {
        size: {
            xxs: { fontSize: '$xxs' },
            xs: { fontSize: '$xs' },
            sm: { fontSize: '$sm' },
            md: { fontSize: '$md' },
            lg: { fontSize: '$lg' },
            xl: { fontSize: '$xl' },
            '2xl': { fontSize: '$2xl' },
            '4xl': { fontSize: '$4xl' },
            '5xl': { fontSize: '$5xl' },
            '6xl': { fontSize: '$6xl' },
            '7xl': { fontSize: '$7xl' },
            '8xl': { fontSize: '$8xl' },
            '9xl': { fontSize: '$9xl' },
        },
        variant: {
            active: {
                color: '$white',
                backgroundColor: '$gray500',
                '&:not(:disabled):hover': {
                    backgroundColor: '$gray400',
                },
            },
            inactive: {
                color: '$white',
                backgroundColor: 'transparent',
                borderColor: '$gray500'
            }
        }
    },

    defaultVariants: {
        size: 'md',
        variant: 'active'
    },
})

export interface ITagProps extends ComponentProps<typeof Tag> {
    as?: ElementType
}

Tag.displayName = 'Tag'
