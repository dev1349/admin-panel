import React from 'react'
import ArrowDropUpIcon from './ArrowDropUpIcon'

export default {
    title: 'atoms/icons/ArrowDropUpIcon',
    component: ArrowDropUpIcon,
}

const Template = args => <ArrowDropUpIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
