import React from 'react'
import UndoIcon from './UndoIcon'

export default {
    title: 'atoms/icons/UndoIcon',
    component: UndoIcon,
}

const Template = args => <UndoIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
