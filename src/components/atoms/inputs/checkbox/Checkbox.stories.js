import React from 'react'
import Checkbox from './Checkbox'

export default {
    title: 'atoms/inputs/Checkbox',
    component: Checkbox,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <Checkbox {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    checked: true,
}
