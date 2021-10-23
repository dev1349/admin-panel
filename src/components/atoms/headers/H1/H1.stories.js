import React from 'react'
import H1 from './H1'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/headers/H1',
    component: H1,
}

const Template = args => <H1 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some h1 text',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: 'Some h1 text',
    color: 'red',
}

export const Example3 = Template.bind({})
Example3.args = {
    children: 'Some h1 text',
    color: 'green',
}
