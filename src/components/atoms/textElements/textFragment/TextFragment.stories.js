import React from 'react'
import TextFragment from './TextFragment'

export default {
    title: 'atoms/textElements/TextFragment',
    component: TextFragment,
}

const Template = args => <TextFragment {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: '*',
    redStar: true,
}
