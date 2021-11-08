import React from 'react'
import H2 from './H2'

export default {
    title: 'atoms/headers/H2',
    component: H2,
}

const Template = args => <H2 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some h2 text',
}
