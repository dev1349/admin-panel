import React from 'react'
import TextFieldMultiline from './TextFieldMultiline'

export default {
    title: 'molecules/inputs/TextFieldMultiline',
    component: TextFieldMultiline,
}

const Template = args => <TextFieldMultiline {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    value: 'some multiline text',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'description',
    fullWidth: false,
}
