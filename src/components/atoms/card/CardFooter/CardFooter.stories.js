import React from 'react'
import CardFooter from './CardFooter'

export default {
    title: 'atoms/CardFooter',
    component: CardFooter,
}

const Template = args => <CardFooter {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
