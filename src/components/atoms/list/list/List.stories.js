import React from 'react'
import List from './List'
import { ListItem, ListSubheader } from '@mui/material'

export default {
    title: 'atoms/list/List',
    component: List,
}

const Template = args => <List {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [<ListItem key={0}>one</ListItem>, <ListItem key={1}>two</ListItem>, <ListItem key={2}>three</ListItem>],
    component: 'nav',
    'aria-labelledby': 'nested-list-subheader',
    subheader: (
        <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
        </ListSubheader>
    ),
}
