import React from 'react'
import Checkbox from './Checkbox'

export default {
    title: 'molecules/inputs/Checkbox',
    component: Checkbox,
}

const Template = args => <Checkbox {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    label: 'some label',
    checked: true,
    onChange: () => console.log('change checkbox'),
    labelPlacement: 'end',
    forFilter: true,
}
