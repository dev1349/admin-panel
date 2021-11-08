import React from 'react'
import ListIcon from './ListIcon'

export default {
    title: 'atoms/icons/ListIcon',
    component: ListIcon,
}

const Template = args => <ListIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
