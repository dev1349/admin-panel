import React from 'react'
import CatalogIcon from './CatalogIcon'

export default {
    title: 'atoms/icons/CatalogIcon',
    component: CatalogIcon,
}

const Template = args => <CatalogIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
