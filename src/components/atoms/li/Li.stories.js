import React from 'react'
import Li from './Li'

export default {
    title: 'atoms/Li',
    component: Li,
}

const Template = args => <Li {...args} />

export const LiDefault = Template.bind({})
LiDefault.args = {
    children: 'Some catalog item...',
}

export const CatalogItemLi = Template.bind({})
CatalogItemLi.args = {
    children: 'Some catalog item...',
    catalogItem: true,
}

export const CatalogSubItemLi = Template.bind({})
CatalogSubItemLi.args = {
    children: 'Some catalog item...',
    catalogSubItem: true,
}

export const CatalogSubSubItemLi = Template.bind({})
CatalogSubSubItemLi.args = {
    children: 'Some catalog item...',
    catalogSubSubItem: true,
}
