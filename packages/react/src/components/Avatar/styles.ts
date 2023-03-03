import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'
import { TRANSITIONS } from '@sf-ui-system/tokens';

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
  padding: '$1',
  transition: '$fast',
  transitionDelay: TRANSITIONS.slow,
  '&:hover': {
    transform: 'scale(1.5)',
  },
  variants: {
    color: {
      green: {
        border: '2px solid $green500',
      },
      blue: {
        border: '2px solid $blue500',
      },
      cyan: {
        border: '2px solid $cyan500',
      },
      purple: {
        border: '2px solid $purple500',
      },
      yellow: {
        border: '2px solid $yellow500',
      },
      pink: {
        border: '2px solid $pink500',
      },
      red: {
        border: '2px solid $red500',
      },
      gray: {
        border: '2px solid $gray500',
      },
      white: {
        border: '2px solid $white',
      },
      black: {
        border: '2px solid $black',
      }
    }
  },
  defaultVariants: {
    color: "gray"
  }
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',

  transition: '$fast',
  transitionDelay: TRANSITIONS.slow,

  svg: {
    width: '60%',
    height: '60%',
  },

  variants: {
    color: {
      green: {
        svg: {
          stroke: '$green500',
        }
      },
      blue: {
        svg: {
          stroke: '$blue500',
        }
      },
      cyan: {
        svg: {
          stroke: '$cyan500',
        }
      },
      purple: {
        svg: {
          stroke: '$purple500',
        }
      },
      yellow: {
        svg: {
          stroke: '$yellow500',
        }
      },
      pink: {
        svg: {
          stroke: '$pink500',
        }
      },
      red: {
        svg: {
          stroke: '$red500',
        }
      },
      gray: {
        svg: {
          stroke: '$gray500',
        }
      },
      white: {
        svg: {
          stroke: '$white',
        }
      },
      black: {
        svg: {
          stroke: '$black',
        }
      }
    }
  },
  defaultVariants: {
    color: "gray"
  }
})
