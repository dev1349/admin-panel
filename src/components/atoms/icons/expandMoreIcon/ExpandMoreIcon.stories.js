import React from 'react'
import ExpandMoreIcon from './ExpandMoreIcon'

export default {
    title: 'atoms/icons/ExpandMoreIcon',
    component: ExpandMoreIcon,
}

const Template = args => <ExpandMoreIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
