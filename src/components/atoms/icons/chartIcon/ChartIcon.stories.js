import React from 'react'
import ChartIcon from './ChartIcon'

export default {
    title: 'atoms/icons/ChartIcon',
    component: ChartIcon,
}

const Template = args => <ChartIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
