import React from 'react'
import CardStock from './ContainerStock'

export default {
    title: 'atoms/ContainerStock',
    component: CardStock,
}

const Template = args => <CardStock {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
