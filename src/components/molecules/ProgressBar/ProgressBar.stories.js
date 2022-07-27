import React from 'react'
import ProgressBar from './ProgressBar'

export default {
    title: 'molecules/ProgressBar',
    component: ProgressBar,
}

const Template = args => <ProgressBar {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
