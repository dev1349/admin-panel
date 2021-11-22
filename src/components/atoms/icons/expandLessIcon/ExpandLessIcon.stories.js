import React from 'react'
import ExpendLessIcon from './ExpendLessIcon'

export default {
    title: 'atoms/icons/ExpendLessIcon',
    component: ExpendLessIcon,
}

const Template = args => <ExpendLessIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
