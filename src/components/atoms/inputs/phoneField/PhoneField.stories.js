import React from 'react'
import PhoneField from './PhoneField'

export default {
    title: 'atoms/inputs/PhoneField',
    component: PhoneField,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <PhoneField {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
