import React from 'react'
import ExpendLessIcon from './ExpandLessIcon'

export default {
    title: 'atoms/icons/ExpendLessIcon',
    component: ExpendLessIcon,
}

const Template = args => <ExpendLessIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    color: 'action',
}

export const Example3 = Template.bind({})
Example3.args = {
    dialogIcon: true,
}
