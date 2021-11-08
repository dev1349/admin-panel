import React from 'react'
import PaddingTemplate from './PaddingTemplate'

export default {
    title: 'templates/PaddingTemplate',
    component: PaddingTemplate,
}

const Template = args => <PaddingTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ backgroundColor: 'yellow', height: '200px' }} />,
}
