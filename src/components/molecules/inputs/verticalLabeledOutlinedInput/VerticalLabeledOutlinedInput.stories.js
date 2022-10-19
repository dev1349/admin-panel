import React from 'react'
import VerticalLabeledOutlinedInput from './VerticalLabeledOutlinedInput'

export default {
    title: 'molecules/inputs/VerticalLabeledOutlinedInput',
    component: VerticalLabeledOutlinedInput,
}

const Template = args => <VerticalLabeledOutlinedInput {...args} />

export const DefaultVerticalLabeledOutlinedInput = Template.bind({})
DefaultVerticalLabeledOutlinedInput.args = {
    id: '1',
    labelText: 'Simple input label',
    value: 'some value',
    onChange: value => console.log(value),
    autoFocus: true,
}
