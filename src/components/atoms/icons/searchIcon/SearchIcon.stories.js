import React from 'react'
import SearchIcon from './SearchIcon'

export default {
    title: 'atoms/icons/SearchIcon',
    component: SearchIcon,
}

const Template = args => <SearchIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
