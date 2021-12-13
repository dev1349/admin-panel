import React from 'react'
import StatisticsCount from './StatisticsCount'

export default {
    title: 'atoms/textElements/StatisticsCount',
    component: StatisticsCount,
}

const Template = args => (
    <div style={{ display: 'flex' }}>
        <StatisticsCount {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: '32',
    attention: true,
}

export const Example2 = Template.bind({})
Example2.args = {
    children: '0',
}
