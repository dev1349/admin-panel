import React from 'react'
import CheckIcon from './CheckIcon'

export default {
    title: 'atoms/icons/CheckIcon',
    component: CheckIcon,
}

const Template = args => <CheckIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    dialogIcon: true,
}
