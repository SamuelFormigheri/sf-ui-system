import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, RADII, SPACES, TRANSITIONS } from '@sf-ui-system/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    keyframes,
    prefix,
    reset,
    styled,
    theme
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    theme: {
        colors: COLORS,
        fontSizes: FONT_SIZES,
        fontWeights: FONT_WEIGHTS,
        fonts: FONTS,
        lineHeights: LINE_HEIGHTS,
        radii: RADII,
        space: SPACES,
        transitions: TRANSITIONS
    }
})