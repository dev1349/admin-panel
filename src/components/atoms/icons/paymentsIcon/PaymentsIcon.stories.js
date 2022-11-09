import React from 'react'
import PaymentsIcon from './PaymentsIcon'

export default {
    title: 'atoms/icons/PaymentsIcon',
    component: PaymentsIcon,
}

const Template = args => <PaymentsIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogIcon: true,
}
