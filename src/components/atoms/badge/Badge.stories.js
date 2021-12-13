import React from 'react'
import Badge from './Badge'
import NotificationsIcon from '../icons/notificationsIcon/NotificationsIcon'

export default {
    title: 'atoms/Badge',
    component: Badge,
}

const Template = args => <Badge {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <NotificationsIcon />,
    badgeContent: '4',
}
