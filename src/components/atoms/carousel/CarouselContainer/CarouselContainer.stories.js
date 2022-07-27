import React from 'react'
import CarouselContainer from './CarouselContainer'

export default {
    title: 'atoms/CarouselContainer',
    component: CarouselContainer,
}

const Template = args => <CarouselContainer {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    list: [],
}
