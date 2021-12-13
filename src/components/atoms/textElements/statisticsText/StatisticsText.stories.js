import React from 'react'
import StatisticsText from './StatisticsText'

export default {
    title: 'atoms/textElements/StatisticsText',
    component: StatisticsText,
}

const Template = args => (
    <div style={{ display: 'flex' }}>
        <StatisticsText {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some statistics items text...',
}
