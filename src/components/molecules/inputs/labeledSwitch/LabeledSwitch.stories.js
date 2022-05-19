import React from 'react'
import LabeledSwitch from './LabeledSwitch'

export default {
    title: 'molecules/inputs/LabeledSwitch',
    component: LabeledSwitch,
}

const Template = args => <LabeledSwitch {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId',
    label: 'Label for switch',
    name: 'switch',
    checked: true,
    onChange: payload => console.log('switch changed: ', payload),
}

export const Example2 = Template.bind({})
Example2.args = {
    id: 'someId',
    label: 'Label for switch',
    name: 'switch',
    checked: true,
    onChange: payload => console.log('switch changed: ', payload),
    tooltip: 'some help text',
}
