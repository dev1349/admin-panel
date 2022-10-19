import React from 'react'
import CatalogItem from './CatalogItem'

export default {
    title: 'atoms/CatalogItem',
    component: CatalogItem,
}

const Template = args => <CatalogItem {...args} />

export const CatalogItemDefault = Template.bind({})
CatalogItemDefault.args = {
    children: 'Some catalog item...',
}

export const DarkCatalogItemDefault = Template.bind({})
DarkCatalogItemDefault.args = {
    children: 'Some catalog item...',
    darkCatalogItem: true,
}

export const HoveredCatalogItemDefault = Template.bind({})
HoveredCatalogItemDefault.args = {
    children: 'Some catalog item...',
    hoveredCatalogItem: true,
}
