import React from 'react'
import LogoutIcon from './LogoutIcon'

export default {
    title: 'atoms/icons/LogoutIcon',
    component: LogoutIcon,
}

const Template = args => <LogoutIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
