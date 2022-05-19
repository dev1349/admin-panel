import React from 'react'
import ListItem from './ListItem'
import List from '../list/List'

export default {
    title: 'atoms/list/ListItem',
    component: ListItem,
}

const Template = args => (
    <List>
        <ListItem {...args} />
    </List>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: 'one',
}
