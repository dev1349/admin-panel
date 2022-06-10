import React from 'react'
import GroupIcon from './GroupIcon'

export default {
    title: 'atoms/icons/GroupIcon',
    component: GroupIcon,
}

const Template = args => <GroupIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogIcon: true,
}
