import React from 'react'
import ClientsIcon from './ClientsIcon'

export default {
    title: 'atoms/icons/ClientsIcon',
    component: ClientsIcon,
}

const Template = args => <ClientsIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
