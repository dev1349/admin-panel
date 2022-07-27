import React from 'react'
import CardStock from './CardStock'

export default {
    title: 'atoms/CardStock',
    component: CardStock,
}

const Template = args => <CardStock {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
