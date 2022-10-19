import React from 'react'
import ChevronForward from './ChevronForward'

export default {
    title: 'atoms/icons/ChevronForward',
    component: ChevronForward,
}

const Template = args => <ChevronForward {...args} />

export const ChevronForwardDefault = Template.bind({})
ChevronForwardDefault.args = {
    children: 'Some catalog item...',
}

export const LightChevronForwardDefault = Template.bind({})
LightChevronForwardDefault.args = {
    light: true,
}

export const CatalogItemChevronForwardDefault = Template.bind({})
CatalogItemChevronForwardDefault.args = {
    catalogItem: true,
}
