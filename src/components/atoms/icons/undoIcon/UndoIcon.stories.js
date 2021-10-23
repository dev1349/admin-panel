import React from 'react'
import UndoIcon from './UndoIcon'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/icons/UndoIcon',
    component: UndoIcon,
}

const Template = args => <UndoIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
    fontSize: 'large',
}

export const Example2 = Template.bind({})
Example2.args = {
    htmlColor: '#ff0000',
    fontSize: 'medium',
}

export const Example3 = Template.bind({})
Example3.args = {
    color: 'info',
    fontSize: 'small',
}
