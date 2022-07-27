import React from 'react'
import Scroll from './Scroll'

export default {
    title: 'atoms/Scroll',
    component: Scroll,
}

const Template = args => <Scroll {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
