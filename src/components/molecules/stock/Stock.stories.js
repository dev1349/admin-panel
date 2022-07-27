import React from 'react'
import Stock from './Stock'

export default {
    title: 'molecules/Section',
    component: Stock,
}

const Template = args => <Stock {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
