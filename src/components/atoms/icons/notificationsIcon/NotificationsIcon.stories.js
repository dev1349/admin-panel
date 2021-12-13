import React from 'react'
import NotificationsIcon from './NotificationsIcon'

export default {
    title: 'atoms/icons/NotificationsIcon',
    component: NotificationsIcon,
}

const Template = args => <NotificationsIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
