import React from 'react'
import DateField from './DateField'

export default {
    title: 'molecules/inputs/DateField',
    component: DateField,
}

const Template = args => <DateField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: '01',
    name: 'date',
    value: null,
    autoFocus: true,
    fullWidth: true,
    onChange: payload => console.log('Date', payload),
}

export const Example2 = Template.bind({})
Example2.args = {
    id: '01',
    name: 'date',
    value: '2010-10-10',
    autoFocus: true,
    fullWidth: true,
    onChange: payload => console.log('Date', payload),
    dateForFilter: true,
}
