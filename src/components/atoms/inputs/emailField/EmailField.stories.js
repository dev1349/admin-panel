import React from 'react'
import EmailField from './EmailField'

export default {
    title: 'atoms/inputs/EmailField',
    component: EmailField,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <EmailField {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
