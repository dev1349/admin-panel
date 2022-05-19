import React from 'react'
import LabeledTextFields from './LabeledTextFields'

export default {
    title: 'molecules/inputs/LabeledTextFields',
    component: LabeledTextFields,
}

const Template = args => <LabeledTextFields {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId0',
    label: 'Some label text...',
    name: 'name',
}
