import React from 'react'
import ListItemButton from './ListItemButton'
import SaveIcon from '../../icons/saveIcon/SaveIcon'
import { ListItemText } from '@mui/material'
import ListItemIcon from '../listItemIcon/ListItemIcon'

export default {
    title: 'atoms/list/listItemButton/ListItemButton',
    component: ListItemButton,
}

const Template = args => <ListItemButton {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <ListItemIcon key={0}>
            <SaveIcon />
        </ListItemIcon>,
        <ListItemText key={1} primary={'some list item text'} />,
    ],
    onClick: () => console.log('click to list item button!'),
}
