import React from 'react'
import Carousel from './Carousel'

export default {
    title: 'molecules/Carousel',
    component: Carousel,
}

const Template = args => <Carousel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    list: [],
}
