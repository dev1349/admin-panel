import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AddClient from './AddClient'
import { exportCities } from '../../../mock/newOrderInitialState'

export default {
    title: 'organisms/AddClient',
    component: AddClient,
}

const Template = args => (
    <BrowserRouter>
        <AddClient {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    cities: exportCities,
}
