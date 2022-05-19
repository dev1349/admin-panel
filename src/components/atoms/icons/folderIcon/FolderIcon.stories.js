import React from 'react'
import FolderIcon from './FolderIcon'

export default {
    title: 'atoms/icons/FolderIcon',
    component: FolderIcon,
}

const Template = args => <FolderIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    color: 'action',
}

export const Example3 = Template.bind({})
Example3.args = {
    dialogIcon: true,
}
