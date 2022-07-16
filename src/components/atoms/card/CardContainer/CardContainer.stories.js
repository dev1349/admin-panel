import React from 'react'
import CardContainer from './CardContainer'

export default {
    title: 'atoms/CardContainer',
    component: CardContainer,
}

const Template = args => <CardContainer {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
