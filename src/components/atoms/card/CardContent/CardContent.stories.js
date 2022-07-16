import React from 'react'
import CardContent from './CardContent'

export default {
    title: 'atoms/CardContent',
    component: CardContent,
}

const Template = args => <CardContent {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
