import React from 'react'
import MaxWidthTemplate from './MaxWidthTemplate'

export default {
    title: 'templates/MaxWidthTemplate',
    component: MaxWidthTemplate,
}

const Template = args => <MaxWidthTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ height: '200px', backgroundColor: 'yellow' }} />,
}
