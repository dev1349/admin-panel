import React from 'react'
import AttributeGroupContainer from './AttributeGroupContainer'

import { Provider } from 'react-redux'
import { store } from '../../../index'

export default {
    title: 'pages/AttributeGroupContainer',
    component: AttributeGroupContainer,
}

const Template = args => (
    <Provider store={store}>
        <AttributeGroupContainer {...args} />
    </Provider>
)

export const Example1 = Template.bind({})
Example1.args = {}
