import React from 'react'
import AddGoodContainer from './AddGoodContainer'

export default {
    title: 'pages/AddGood',
    component: AddGoodContainer,
}

const Template = args => <AddGoodContainer {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
