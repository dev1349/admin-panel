import React from 'react'
import LabeledCheckboxField from './LabeledCheckboxField'

export default {
    title: 'molecules/inputs/LabeledCheckboxField',
    component: LabeledCheckboxField,
}

const Template = args => <LabeledCheckboxField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someIdValue',
    label: 'Some label text...',
    checked: true,
    onChange: () => console.log('change'),
    name: 'name',
}
