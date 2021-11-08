import React from 'react'
import LabeledTextFieldMultiline from './LabeledTextFieldMultiline'

export default {
    title: 'molecules/inputs/LabeledTextFieldMultiline',
    component: LabeledTextFieldMultiline,
}

const Template = args => <LabeledTextFieldMultiline {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    label: 'Some label text...',
    value: 'some multiline text',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'description',
}
