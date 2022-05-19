import React from 'react'
import BackIcon from './BackIcon'

export default {
    title: 'atoms/icons/BackIcon',
    component: BackIcon,
}

const Template = args => <BackIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    dialogIcon: true,
}
