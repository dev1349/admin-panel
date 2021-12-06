import React from 'react'
import AutocompleteItem from './AutocompleteItem'

export default {
    title: 'atoms/inputs/AutocompleteItem',
    component: AutocompleteItem,
}

const Template = args => <AutocompleteItem {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'One Items',
}
