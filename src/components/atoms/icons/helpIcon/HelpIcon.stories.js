import React from 'react'
import HelpIcon from './HelpIcon'

export default {
    title: 'atoms/icons/HelpIcon',
    component: HelpIcon,
}

const Template = args => <HelpIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
    canHover: true,
}
