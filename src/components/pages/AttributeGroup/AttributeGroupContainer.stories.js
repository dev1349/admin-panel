import React from 'react'
import AttributeGroupContainer from './AttributeGroupContainer'

export default {
    title: 'pages/AttributeGroupContainer',
    component: AttributeGroupContainer,
}

const Template = args => <AttributeGroupContainer {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
