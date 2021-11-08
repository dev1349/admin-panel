import React from 'react'
import H1 from './H1'

export default {
    title: 'atoms/headers/H1',
    component: H1,
}

const Template = args => <H1 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some h1 text',
}
