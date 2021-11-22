import React from 'react'
import SettingsIcon from './SettingsIcon'

export default {
    title: 'atoms/icons/SettingsIcon',
    component: SettingsIcon,
}

const Template = args => <SettingsIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
