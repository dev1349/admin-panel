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
