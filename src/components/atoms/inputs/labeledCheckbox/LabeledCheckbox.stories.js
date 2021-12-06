import React from 'react'
import LabeledCheckbox from './LabeledCheckbox'

export default {
    title: 'atoms/inputs/LabeledCheckbox',
    component: LabeledCheckbox,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <LabeledCheckbox {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    label: 'Надпись возле поля "Checkbox"',
    checked: false,
}
