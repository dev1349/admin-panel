import React from 'react'
import HorizontalLabeledSwitch from './HorizontalLabeledSwitch'

export default {
    title: 'molecules/inputs/HorizontalLabeledSwitch',
    component: HorizontalLabeledSwitch,
}

const Template = args => <HorizontalLabeledSwitch {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'cash',
    label: 'Наличными при получении',
    checked: true,
    onChange: () => console.log('change checked'),
}
