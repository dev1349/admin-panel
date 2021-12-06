import React from 'react'
import H3 from './H3'

export default {
    title: 'atoms/textElements/headers/H3',
    component: H3,
}

const Template = args => <H3 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some h3 text',
}
