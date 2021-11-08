import React from 'react'
import TitleTextPaddingLeftTemplate from './TitleTextPaddingLeftTemplate'

export default {
    title: 'templates/TitleTextPaddingLeftTemplate',
    component: TitleTextPaddingLeftTemplate,
}

const Template = args => <TitleTextPaddingLeftTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ backgroundColor: 'red' }}>Some text...</div>,
}
