import React from 'react'
import AdminModalHeader from './AdminModalHeader'

export default {
    title: 'molecules/headers/AdminModalHeader',
    component: AdminModalHeader,
}

const Template = args => <AdminModalHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some header modal window text...',
}
