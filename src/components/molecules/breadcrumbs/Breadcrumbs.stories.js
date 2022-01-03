import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'molecules/Breadcrumbs',
    component: Breadcrumbs,
}

const Template = args => (
    <BrowserRouter>
        <Breadcrumbs {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    breadcrumbs: [
        {
            title: 'Главная',
            link: '/',
        },
        {
            title: 'Товары',
        },
    ],
}
