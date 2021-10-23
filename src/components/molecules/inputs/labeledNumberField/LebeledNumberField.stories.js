import React from 'react'
import LabeledNumberField from './LabeledNumberField'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/inputs/LabeledNumberField',
    component: LabeledNumberField,
}

const Template = args => <LabeledNumberField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    label: 'Some label text...',
    value: 345,
    onChange: () => alert(345),
    autoFocus: false,
    name: 'sortOrder',
}
