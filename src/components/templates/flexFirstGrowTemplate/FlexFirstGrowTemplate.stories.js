import React from 'react'
import FlexFirstGrowTemplate from './FlexFirstGrowTemplate'

export default {
    title: 'templates/FlexFirstGrowTemplate',
    component: FlexFirstGrowTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <FlexFirstGrowTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{
                height: '30px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'red' }}
        />,
        <div
            key={2}
            style={{ height: '30px', width: '30px', backgroundColor: 'blue' }}
        />,
    ],
}
