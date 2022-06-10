import React from 'react'
import SetIcon from './SetIcon'

export default {
    title: 'atoms/icons/SetIcon',
    component: SetIcon,
}

const Template = args => <SetIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    dialogIcon: true,
}
