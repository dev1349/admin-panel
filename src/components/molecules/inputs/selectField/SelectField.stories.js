import React from 'react'
import SelectField from './SelectField'

export default {
    title: 'molecules/inputs/SelectField',
    component: SelectField,
}

const Template = args => <SelectField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    value: '',
    onChange: null,
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
    fullWidth: true,
}
