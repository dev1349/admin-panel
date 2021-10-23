import React from 'react'
import Wrapper from './Wrapper'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/Wrapper',
    component: Wrapper,
}

const Template = args => <Wrapper {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
