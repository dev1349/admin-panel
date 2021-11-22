import React from 'react'
import ImportExportIcon from './ImportExportIcon'

export default {
    title: 'atoms/icons/ImportExportIcon',
    component: ImportExportIcon,
}

const Template = args => <ImportExportIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
