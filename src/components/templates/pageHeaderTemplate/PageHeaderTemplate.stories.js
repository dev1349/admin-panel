import React from 'react'
import PageHeaderTemplate from './PageHeaderTemplate'

export default {
    title: 'templates/PageHeaderTemplate',
    component: PageHeaderTemplate,
}

const Template = args => <PageHeaderTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ backgroundColor: 'yellow', height: '200px' }} />,
}
