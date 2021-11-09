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
    onChange: evt => console.log(evt.target.value),
    items: [
        {
            id: 0,
            name: '10',
        },
        {
            id: 1,
            name: '20',
        },
        {
            id: 2,
            name: '30',
        },
    ],
}
