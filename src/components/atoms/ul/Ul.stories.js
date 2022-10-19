import React from 'react'
import Ul from './Ul'

export default {
    title: 'atoms/Ul',
    component: Ul,
}

const Template = args => <Ul {...args} />

export const DefaultUl = Template.bind({})
DefaultUl.args = {
    children: [<li key={0}>item one</li>, <li key={1}>item two</li>],
}

export const catalogFirstLevelListUl = Template.bind({})
catalogFirstLevelListUl.args = {
    children: [<li key={0}>item one</li>, <li key={1}>item two</li>],
    catalogFirstLevelList: true,
}

export const CatalogSubLevelListUl = Template.bind({})
CatalogSubLevelListUl.args = {
    children: [<li key={0}>item one</li>, <li key={1}>item two</li>],
    catalogSubLevelList: true,
}

export const CatalogSubSubLevelListUl = Template.bind({})
CatalogSubSubLevelListUl.args = {
    children: [<li key={0}>item one</li>, <li key={1}>item two</li>],
    catalogSubSubLevelList: true,
}
