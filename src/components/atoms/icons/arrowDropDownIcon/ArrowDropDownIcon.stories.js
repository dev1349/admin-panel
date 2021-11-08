import React from 'react'
import ArrowDropDownIcon from './ArrowDropDownIcon'

export default {
    title: 'atoms/icons/ArrowDropDownIcon',
    component: ArrowDropDownIcon,
}

const Template = args => <ArrowDropDownIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
