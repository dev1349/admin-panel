import React from 'react'
import ShoppingCartIcon from './ShoppingCartIcon'

export default {
    title: 'atoms/icons/ShoppingCartIcon',
    component: ShoppingCartIcon,
}

const Template = args => <ShoppingCartIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
