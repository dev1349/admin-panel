import React from 'react'
import SelectField from './SelectField'

export default {
    title: 'molecules/inputs/SelectField',
    component: SelectField,
}

const Template = args => <SelectField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    name: 'selectDelivery',
    value: '',
    onChange: payload => console.log('change selection value: ', payload),
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
    fullWidth: true,
    defaultLabel: 'Выберите что-нибудь',
    isStartItemDisabled: true,
}

export const Example2 = Template.bind({})
Example2.args = {
    name: 'selectDelivery',
    value: '',
    onChange: payload => console.log('change selection value: ', payload),
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
    fullWidth: false,
    defaultLabel: 'Выберите что-нибудь',
    isStartItemDisabled: true,
    disabled: true,
    forTable: true,
}
