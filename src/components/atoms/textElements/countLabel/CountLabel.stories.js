import React from 'react'
import CountLabel from './CountLabel'

export default {
    title: 'atoms/textElements/CountLabel',
    component: CountLabel,
}

const Template = args => <CountLabel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: '24',
    variant: 'span',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: '24',
    variant: 'span',
    attention: true,
}
