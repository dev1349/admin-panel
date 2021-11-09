import React from 'react'
import MenuItem from './MenuItem'

export default {
    title: 'atoms/inputs/selectField/MenuItem',
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
