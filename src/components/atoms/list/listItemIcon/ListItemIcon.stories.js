import React from 'react'
import ListItemIcon from './ListItemIcon'
import SaveIcon from '../../icons/saveIcon/SaveIcon'

export default {
    title: 'atoms/list/listItemIcon/ListItemIcon',
    component: ListItemIcon,
}

const Template = args => <ListItemIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <SaveIcon />,
}
