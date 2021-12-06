import React from 'react'
import TextField from './TextField'

export default {
    title: 'molecules/inputs/TextField',
    component: TextField,
}

const Template = args => <TextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId0',
    name: 'someFieldsName',
    value: '3',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
    pattern: '^[0-9]*$',
}

export const Example2 = Template.bind({})
Example2.args = {
    id: 'someId0',
    name: 'someFieldsName',
    value: '3',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
}
