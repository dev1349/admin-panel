import React from 'react'
import LabeledNumberField from './LabeledNumberField'

export default {
    title: 'molecules/inputs/LabeledNumberField',
    component: LabeledNumberField,
}

const Template = args => <LabeledNumberField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    label: 'Some label text...',
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^[1-9]+[,.]?[0-9]*$',
}
