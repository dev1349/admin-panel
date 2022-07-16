import React from 'react'
import PackageIcon from './PackageIcon'

export default {
    title: 'atoms/icons/PackageIcon',
    component: PackageIcon,
}

const Template = args => <PackageIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
