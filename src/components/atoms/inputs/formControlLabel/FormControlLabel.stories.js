import React from 'react'
import FormControlLabel from './FormControlLabel'
import Checkbox from '../checkbox/Checkbox'

export default {
    title: 'atoms/inputs/FormControlLabel',
    component: FormControlLabel,
}

const Template = args => <FormControlLabel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    label: 'Label',
    control: <Checkbox />,
    labelPlacement: 'end',
}
