import React from 'react'
import CardText from './CardText'

export default {
    title: 'atoms/CardText',
    component: CardText,
}

const Template = args => <CardText {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
