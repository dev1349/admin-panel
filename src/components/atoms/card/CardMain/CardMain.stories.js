import React from 'react'
import CardMain from './CardMain'

export default {
    title: 'atoms/CardMain',
    component: CardMain,
}

const Template = args => <CardMain {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
