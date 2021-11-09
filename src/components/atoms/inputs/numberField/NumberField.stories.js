import React from 'react'
import NumberField from './NumberField'

export default {
    title: 'atoms/inputs/NumberField',
    component: NumberField,
    argTypes: {
        onKeyDown: { action: 'keyDown' },
        onChange: { action: 'change' },
    },
}

const Template = args => <NumberField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'numberField01',
    fullWidth: true,
    name: 'numberField',
    value: 3,
    autoFocus: true,
}
