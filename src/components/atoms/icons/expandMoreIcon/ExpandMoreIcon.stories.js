import React from 'react'
import ExpandMoreIcon from './ExpandMoreIcon'

export default {
    title: 'atoms/icons/ExpandMoreIcon',
    component: ExpandMoreIcon,
}

const Template = args => <ExpandMoreIcon {...args} />

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
