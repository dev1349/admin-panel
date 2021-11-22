import React from 'react'
import ShopsIcon from './ShopsIcon'

export default {
    title: 'atoms/icons/ShopsIcon',
    component: ShopsIcon,
}

const Template = args => <ShopsIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
