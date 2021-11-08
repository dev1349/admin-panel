import React from 'react'
import FlexStartWithPaddingTemplate from './FlexStartWithPaddingTemplate'

export default {
    title: 'templates/FlexStartWithPaddingTemplate',
    component: FlexStartWithPaddingTemplate,
}

const Template = args => <FlexStartWithPaddingTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{ height: '20px', width: '30px', backgroundColor: 'blue' }}
        />,
        <div
            key={1}
            style={{ height: '20px', width: '30px', backgroundColor: 'red' }}
        />,
    ],
}
