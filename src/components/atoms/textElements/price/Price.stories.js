import React from 'react'
import Price from './Price'

export default {
    title: 'atoms/textElements/Price',
    component: Price,
}

const Template = args => <Price {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: '240000',
    variant: 'span',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: '250000',
    oldPrice: true,
    variant: 'span',
}
