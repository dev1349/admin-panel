import React from 'react'
import LabeledTextField from './LabeledTextField'

export default {
    title: 'molecules/inputs/LabeledTextField',
    component: LabeledTextField,
}

const Template = args => <LabeledTextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId0',
    label: 'Some label text...',
    name: 'name',
    value: '4',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    pattern: '^[0-9]*$',
}

export const Example2 = Template.bind({})
Example2.args = {
    id: 'someId0',
    label: 'Some label text...',
    name: 'name',
    value: '4',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
}

export const Example3 = Template.bind({})
Example3.args = {
    id: 'someId0',
    label: 'Some label text...',
    name: 'name',
    value: '',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    placeholder: 'Имя*',
}
