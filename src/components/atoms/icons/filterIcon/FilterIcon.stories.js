import React from 'react'
import FilterIcon from './FilterIcon'

export default {
    title: 'atoms/icons/FilterIcon',
    component: FilterIcon,
}

const Template = args => <FilterIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
