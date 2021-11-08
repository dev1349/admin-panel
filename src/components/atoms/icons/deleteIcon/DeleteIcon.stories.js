import React from 'react'
import DeleteIcon from './DeleteIcon'

export default {
    title: 'atoms/icons/DeleteIcon',
    component: DeleteIcon,
}

const Template = args => <DeleteIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
