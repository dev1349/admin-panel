import React from 'react'
import ListItemText from './ListItemText'

export default {
    title: 'atoms/list/ListItemText',
    component: ListItemText,
}

const Template = args => <ListItemText {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    primary: 'list item text...',
}
