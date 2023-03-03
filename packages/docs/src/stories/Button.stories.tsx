import { StoryObj, Meta } from '@storybook/react';
import { Button } from '@sf-ui-system/react';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    argTypes: {
        outlined: {
            options: ['true', 'false'],
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            control: {
                type: 'inline-radio',
            },
        },
        color: {
            options: ["green", "blue", "cyan", "purple", "yellow", "pink", "red", "gray", "white", "black"],
            control: {
                type: 'inline-radio',
            }
        },
        onClick: { action: 'clicked' }
    }
} as Meta;

export const Default: StoryObj = {

}

export const Outlined: StoryObj = {
    args: {
        outlined: true
    }
}