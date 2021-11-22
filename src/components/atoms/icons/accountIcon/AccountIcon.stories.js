import React from 'react'
import AccountIcon from './AccountIcon'

export default {
    title: 'atoms/icons/AccountIcon',
    component: AccountIcon,
}

const Template = args => <AccountIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
