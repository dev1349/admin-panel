import React from 'react'
import StatisticsSubHeader from './StatisticsSubHeader'

export default {
    title: 'atoms/textElements/StatisticsSubHeader',
    component: StatisticsSubHeader,
}

const Template = args => <StatisticsSubHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Statistics subheader...',
}
