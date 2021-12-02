import React from 'react'
import NumberField from './NumberField'

export default {
    title: 'molecules/inputs/NumberField',
    component: NumberField,
}

const Template = args => <NumberField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^[1-9][0-9]*$',
    fullWidth: true,
}

export const Example2 = Template.bind({})
Example2.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^[1-9][0-9]*$',
    fullWidth: true,
    forTable: true,
}

export const Example3 = Template.bind({})
Example3.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^[1-9][0-9]*$',
    fullWidth: false,
    forTable: false,
    disabled: true,
}
