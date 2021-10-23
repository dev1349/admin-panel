import React from 'react'
import Loader from './Loader'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/Loader',
    component: Loader,
}

const Template = args => <Loader {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
