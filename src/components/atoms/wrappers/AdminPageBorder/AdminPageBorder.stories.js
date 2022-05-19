import React from 'react'
import AdminPageBorder from './AdminPageBorder'

export default {
    title: 'atoms/wrappers/AdminPageBorder',
    component: AdminPageBorder,
}

const Template = args => <AdminPageBorder {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some admin page content...',
}
