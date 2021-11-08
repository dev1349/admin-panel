import React from 'react'
import CircularProgress from './CircularProgress'

export default {
    title: 'atoms/loader/CircularProgress',
    component: CircularProgress,
}

const Template = args => <CircularProgress {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
