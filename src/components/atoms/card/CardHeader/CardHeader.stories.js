import React from 'react'
import CardHeader from './CardHeader'

export default {
    title: 'atoms/CardHeader',
    component: CardHeader,
}

const Template = args => <CardHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
