import React from 'react'
import EditIcon from './EditIcon'

export default {
    title: 'atoms/icons/EditIcon',
    component: EditIcon,
}

const Template = args => <EditIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
