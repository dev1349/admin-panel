import React from 'react'
import MenuItem from './MenuItem'

export default {
    title: 'atoms/inputs/MenuItem',
    component: MenuItem,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <MenuItem {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div>menu item text...</div>,
}

export const Example2 = Template.bind({})
Example2.args = {
    children: <div>menu item text...</div>,
    forTable: true,
}

export const DialogMenuItem = Template.bind({})
DialogMenuItem.args = {
    children: <div>menu item text...</div>,
    dialogMenuItem: true,
}
