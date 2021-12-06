import React from 'react'
import TextBetweenInputs from './TextBetweenInputs'

export default {
    title: 'atoms/textElements/TextBetweenInputs',
    component: TextBetweenInputs,
}

const Template = args => <TextBetweenInputs {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'c',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: 'до',
}
