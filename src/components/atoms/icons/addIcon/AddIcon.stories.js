import React from 'react'
import AddIcon from './AddIcon'

export default {
    title: 'atoms/icons/AddIcon',
    component: AddIcon,
}

const Template = args => <AddIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
