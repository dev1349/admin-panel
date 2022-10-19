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
