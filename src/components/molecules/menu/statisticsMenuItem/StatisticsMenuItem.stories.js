import React from 'react'
import StatisticsMenuItem from './StatisticsMenuItem'

export default {
    title: 'molecules/menu/StatisticsMenuItem',
    component: StatisticsMenuItem,
}

const Template = args => <StatisticsMenuItem {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    itemText: 'Some item text...',
    itemCount: '3',
}
