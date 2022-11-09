import React from 'react'
import OutlinedInput from './OutlinedInput'

export default {
    title: 'atoms/inputs/OutlinedInput',
    component: OutlinedInput,
    argTypes: {
        onKeyDown: { action: 'keyDown' },
        onChange: { action: 'change' },
    },
}

const Template = args => <OutlinedInput {...args} />

export const OutlinedInputDefault = Template.bind({})
OutlinedInputDefault.args = {}

export const DialogInput = Template.bind({})
DialogInput.args = {
    id: 'OutlinedInputId',
    value: 'some text value',
    onChange: event => console.log(event.target.value),
    dialogInput: true,
}
