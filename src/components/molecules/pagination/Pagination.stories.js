import React from 'react'
import Pagination from './Pagination'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'molecules/Pagination',
    component: Pagination,
}

const Template = args => (
    <BrowserRouter>
        <Pagination {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    count: 10,
}
