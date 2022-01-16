import React from 'react'
import FlexTemplate from './FlexTemplate'

export default {
    title: 'templates/FlexTemplate',
    component: FlexTemplate,
}

const Template = args => <FlexTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{ height: '20px', width: '30px', backgroundColor: 'blue' }}
        />,
        <div
            key={1}
            style={{ height: '40px', width: '60px', backgroundColor: 'red' }}
        />,
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    children: [
        <div
            key={0}
            style={{ height: '20px', width: '30px', backgroundColor: 'blue' }}
        />,
        <div
            key={1}
            style={{ height: '40px', width: '60px', backgroundColor: 'red' }}
        />,
    ],
    alignItemsCenter: true,
}
