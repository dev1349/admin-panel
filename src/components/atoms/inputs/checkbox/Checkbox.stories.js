import React from 'react'
import Checkbox from './Checkbox'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/inputs/Checkbox',
    component: Checkbox,
}

const Template = args => <Checkbox {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    size: 'large',
    color: 'secondary',
}

export const Example3 = Template.bind({})
Example3.args = {
    color: 'default',
}
