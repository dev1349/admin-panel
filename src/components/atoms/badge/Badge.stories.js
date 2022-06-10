import React from 'react'
import Badge from './Badge'
import NotificationsIcon from '../icons/notificationsIcon/NotificationsIcon'
import SetIcon from '../icons/setIcon/SetIcon'

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

export const Example2 = Template.bind({})
Example2.args = {
    children: <NotificationsIcon />,
    badgeContent: <SetIcon dialogIcon />,
}

export const Example3 = Template.bind({})
Example3.args = {
    children: <NotificationsIcon />,
    badgeContent: '444',
}
