import React from 'react'
import Delivery from './Delivery'

export default {
    title: 'organisms/Delivery',
    component: Delivery,
}

const Template = args => <Delivery {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
