import React from 'react'
import InputLabel from './InputLabel'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/inputs/InputLabel',
    component: InputLabel,
}

const Template = args => <InputLabel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Label text...',
}
