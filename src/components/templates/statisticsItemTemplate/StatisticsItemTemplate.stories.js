import React from 'react'
import StatisticsItemTemplate from './StatisticsItemTemplate'

export default {
    title: 'templates/StatisticsItemTemplate',
    component: StatisticsItemTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <StatisticsItemTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{ height: '30px', width: '30px', backgroundColor: 'yellow' }}
        />,
        <div
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'red' }}
        />,
    ],
}
