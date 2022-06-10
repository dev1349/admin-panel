import React from 'react'
import LabeledTextFields from './LabeledTextFields'

export default {
    title: 'molecules/inputs/LabeledTextFields',
    component: LabeledTextFields,
}

const Template = args => <LabeledTextFields {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'characteristicValues',
    label: 'Значения характеристики',
    characteristicValues: [{ value: null }, { value: null }, { value: null }],
    changeCharacteristicValue: payload => console.log('change characteristic value ', payload),
    deleteCharacteristicValue: id => () => console.log('delete characteristic value ', id),
    addCharacteristicValue: () => console.log('add characteristic value'),
}
