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
    fullWidth: true,
}

export const Example2 = Template.bind({})
Example2.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^(|[1-9][0-9]*)$',
    fullWidth: true,
    forTable: true,
}

export const Example3 = Template.bind({})
Example3.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^(|[1-9][0-9]*)$',
    forTable: false,
    disabled: false,
}

export const Example4 = Template.bind({})
Example4.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^(|[1-9][0-9]*)$',
    forFilter: true,
    disabled: false,
}

export const Example5 = Template.bind({})
Example5.args = {
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^(|[1-9][0-9]*)$',
    clientSearch: true,
    disabled: false,
    onPaste: event => console.log(event),
}
