import React from 'react'
import MenuIcon from './MenuIcon'

export default {
    title: 'atoms/icons/MenuIcon',
    component: MenuIcon,
}

const Template = args => <MenuIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
