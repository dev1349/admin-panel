import React from 'react'
import AddAttributeCategoryContainer from './AddAttributeCategoryContainer'

import { Provider } from 'react-redux'
import { store } from '../../../index'

export default {
    title: 'pages/AddAttributesCategoryContainer',
    component: AddAttributeCategoryContainer,
}

const Template = args => (
    <Provider store={store}>
        <AddAttributeCategoryContainer {...args} />
    </Provider>
)

export const Example1 = Template.bind({})
Example1.args = {}
