import React from 'react'
import ArrowBackIcon from './ArrowBackIcon'

export default {
    title: 'atoms/icons/ArrowBackIcon',
    component: ArrowBackIcon,
}

const Template = args => <ArrowBackIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
