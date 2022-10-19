import React from 'react'
import RouterLink from './RouterLink'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'atoms/RouterLink',
    component: RouterLink,
}

const Template = args => (
    <BrowserRouter>
        <RouterLink {...args} />
    </BrowserRouter>
)

export const DefaultRouterLink = Template.bind({})
DefaultRouterLink.args = {
    to: '/',
    children: 'Some catalog item...',
}

export const CatalogItemRouterLink = Template.bind({})
CatalogItemRouterLink.args = {
    to: '/',
    children: 'Some catalog item...',
    catalogItem: true,
}
