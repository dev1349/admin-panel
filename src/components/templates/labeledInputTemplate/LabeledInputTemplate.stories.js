import React from 'react'
import LabeledInputTemplate from './LabeledInputTemplate'

export default {
    title: 'templates/LabeledInputTemplate',
    component: LabeledInputTemplate,
}

const Template = args => <LabeledInputTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0}>Label text</div>,
        <div key={1} style={{ height: '20px', border: '1px solid red' }} />,
    ],
}
