import React from 'react'
import TextField from './TextField'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/inputs/TextField',
    component: TextField,
}

const Template = args => <TextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    label: 'Outlined',
    variant: 'outlined',
}

export const Example3 = Template.bind({})
Example3.args = {
    label: 'Filled',
    variant: 'filled',
}

export const Example4 = Template.bind({})
Example4.args = {
    label: 'Standard',
    variant: 'standard',
}
