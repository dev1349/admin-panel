import React from 'react'
import InfoIcon from './InfoIcon'

export default {
    title: 'atoms/icons/InfoIcon',
    component: InfoIcon,
}

const Template = args => <InfoIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    dialogIcon: true,
}
