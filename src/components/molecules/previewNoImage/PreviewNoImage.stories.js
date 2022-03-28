import React from 'react'
import PreviewNoImage from './PreviewNoImage'

export default {
    title: 'molecules/PreviewNoImage',
    component: PreviewNoImage,
}

const Template = args => <PreviewNoImage {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
