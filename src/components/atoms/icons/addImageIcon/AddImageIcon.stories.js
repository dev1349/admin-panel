import React from 'react'
import AddImageIcon from './AddImageIcon'

export default {
    title: 'atoms/icons/AddImageIcon',
    component: AddImageIcon,
}

const Template = args => <AddImageIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
