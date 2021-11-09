import React from 'react'
import AddGoodContainer from './AddGoodContainer'

import { Provider } from 'react-redux'
import { store } from '../../../index'

export default {
    title: 'pages/AddGood',
    component: AddGoodContainer,
}

const Template = args => (
    <Provider store={store}>
        <AddGoodContainer {...args} />
    </Provider>
)

export const Example1 = Template.bind({})
Example1.args = {}
