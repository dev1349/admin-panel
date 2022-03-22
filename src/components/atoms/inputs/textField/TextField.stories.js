import React from 'react'
import TextField from './TextField'

export default {
    title: 'atoms/inputs/TextField',
    component: TextField,
    argTypes: {
        onKeyDown: { action: 'keyDown' },
        onChange: { action: 'change' },
    },
}

const Template = args => <TextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'textField01',
    fullWidth: true,
    name: 'textField',
    value: 'some text value...',
    autoFocus: true,
}
export const Example2 = Template.bind({})
Example2.args = {
    id: 'textField01',
    fullWidth: true,
    name: 'textField',
    value: 'some text value...',
    autoFocus: true,
    forTable: true,
}
export const Example3 = Template.bind({})
Example3.args = {
    id: 'textField01',
    fullWidth: true,
    name: 'textField',
    value: '2004.6',
    autoFocus: true,
    forFilter: true,
}
export const Example4 = Template.bind({})
Example4.args = {
    id: 'textField01',
    fullWidth: true,
    name: 'textField',
    value: '2022-01-11',
    autoFocus: true,
    dateForFilter: true,
    type: 'date',
}

export const Example5 = Template.bind({})
Example5.args = {
    id: 'textField01',
    fullWidth: true,
    name: 'textField',
    value: 'some text...',
    autoFocus: true,
    clientSearch: true,
    type: 'text',
}
