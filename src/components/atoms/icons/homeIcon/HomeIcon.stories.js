import React from 'react'
import HomeIcon from './HomeIcon'

export default {
    title: 'atoms/icons/HomeIcon',
    component: HomeIcon,
}

const Template = args => <HomeIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
