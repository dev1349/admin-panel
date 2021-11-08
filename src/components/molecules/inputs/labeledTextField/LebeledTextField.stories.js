import React from 'react'
import LabeledTextField from './LabeledTextField'

export default {
    title: 'molecules/inputs/LabeledTextField',
    component: LabeledTextField,
}

const Template = args => <LabeledTextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    label: 'Some label text...',
    value: 'some text',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'name',
}
