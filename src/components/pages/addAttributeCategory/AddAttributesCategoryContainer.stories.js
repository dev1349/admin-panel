import React from 'react'
import AddAttributeCategoryContainer from './AddAttributeCategoryContainer'

export default {
    title: 'pages/AddAttributesCategoryContainer',
    component: AddAttributeCategoryContainer,
}

const Template = args => <AddAttributeCategoryContainer {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
