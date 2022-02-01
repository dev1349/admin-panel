import React from 'react'
import FileDownloadIcon from './FileDownloadIcon'

export default {
    title: 'atoms/icons/FileDownloadIcon',
    component: FileDownloadIcon,
}

const Template = args => <FileDownloadIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
