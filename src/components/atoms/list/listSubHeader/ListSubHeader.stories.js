import React from 'react'
import ListSubHeader from './ListSubHeader'

export default {
    title: 'atoms/list/listSubHeader/ListSubHeader',
    component: ListSubHeader,
}

const Template = args => <ListSubHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'some subheader text',
    component: 'div',
    id: 'nested-list-subheader',
}
