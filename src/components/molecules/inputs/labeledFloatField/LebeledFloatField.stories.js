import React from 'react'
import LabeledFloatField from './LabeledFloatField'

export default {
    title: 'molecules/inputs/LabeledFloatField',
    component: LabeledFloatField,
}

const Template = args => <LabeledFloatField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel01',
    label: 'Some label text...',
    value: 345,
    pattern:
        '^(|0|0[.]|0[.][0-9]+|[1-9]|[1-9][0-9]*|[1-9][0-9]*[.]|[1-9][0-9]*[.][0-9]+)$',
    onChange: () => console.log('change'),
    autoFocus: false,
    name: 'sortOrder',
}
