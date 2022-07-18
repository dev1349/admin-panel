import React from 'react'
import FloatField from './FloatField'

export default {
    title: 'molecules/inputs/FloatField',
    component: FloatField,
}

const Template = args => <FloatField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    value: 345,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
}

export const Example2 = Template.bind({})
Example2.args = {
    value: 345,
    pattern:
        '^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    fullWidth: true,
}

export const Example3 = Template.bind({})
Example3.args = {
    value: 345,
    pattern:
        '^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    fullWidth: true,
    disabled: true,
}

export const Example4 = Template.bind({})
Example4.args = {
    value: 345,
    pattern:
        '^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    fullWidth: true,
    disabled: false,
    forTable: true,
}

Example4.args = {
    value: 345,
    pattern:
        '^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$',
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    disabled: false,
    forTable: true,
    forFilter: true,
}
