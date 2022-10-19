import React from 'react'
import VerticalLabeledSelect from './VerticalLabeledSelect'

export default {
    title: 'molecules/inputs/VerticalLabeledSelect',
    component: VerticalLabeledSelect,
}

const Template = args => <VerticalLabeledSelect {...args} />

export const DefaultVerticalLabeledSelect = Template.bind({})
DefaultVerticalLabeledSelect.args = {
    id: '1',
    idLabel: 'idOfLabel',
    labelText: 'Simple select label',
    value: 10,
    onChange: value => console.log(value),
    selectItems: [
        {
            id: '1',
            value: 10,
            label: '10',
        },
        {
            id: '20',
            value: 20,
            label: '20',
        },
        {
            id: '30',
            value: 30,
            label: '30',
        },
    ],
    autoFocus: true,
    defaultLabel: 'Please select the item',
}
