import React from 'react'
import LabeledSelectField from './LabeledSelectField'

export default {
    title: 'molecules/inputs/LabeledSelectField',
    component: LabeledSelectField,
}

const Template = args => <LabeledSelectField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'goodField03',
    label: 'Тип',
    name: 'type',
    value: '',
    onChange: () => console.log('change'),
    items: [
        {
            id: 0,
            label: '10',
            value: 10,
        },
        {
            id: 1,
            label: '20',
            value: 20,
        },
        {
            id: 2,
            label: '30',
            value: 30,
        },
    ],
    defaultLabel: 'Выберите тип',
    isStartItemDisabled: false,
}

export const Example2 = Template.bind({})
Example2.args = {
    id: 'goodField03',
    label: 'Тип',
    name: 'type',
    value: '',
    onChange: () => console.log('change'),
    items: [
        {
            id: 0,
            label: '10',
            value: 10,
        },
        {
            id: 1,
            label: '20',
            value: 20,
        },
        {
            id: 2,
            label: '30',
            value: 30,
        },
    ],
    defaultLabel: 'Выберите тип',
    isStartItemDisabled: true,
}
