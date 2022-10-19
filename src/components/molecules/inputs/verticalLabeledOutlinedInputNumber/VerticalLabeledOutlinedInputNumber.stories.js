import React from 'react'
import VerticalLabeledOutlinedInputNumber from './VerticalLabeledOutlinedInputNumber'

export default {
    title: 'molecules/inputs/VerticalLabeledOutlinedInputNumber',
    component: VerticalLabeledOutlinedInputNumber,
}

const Template = args => <VerticalLabeledOutlinedInputNumber {...args} />

export const DefaultVerticalLabeledOutlinedInputNumber = Template.bind({})
DefaultVerticalLabeledOutlinedInputNumber.args = {
    id: '1',
    labelText: 'Simple input label',
    value: '4',
    onChange: value => console.log(value),
    autoFocus: true,
}
