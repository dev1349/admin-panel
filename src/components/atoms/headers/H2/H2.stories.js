import React from 'react'
import H2 from './H2'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/headers/H2',
    component: H2,
}

const Template = args => <H2 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some h2 text',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: 'Some h2 text',
    color: 'red',
}

export const Example3 = Template.bind({})
Example3.args = {
    children: 'Some h2 text',
    color: 'green',
}
