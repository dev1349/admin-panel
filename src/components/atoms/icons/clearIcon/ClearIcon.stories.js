import React from 'react'
import ClearIcon from './ClearIcon'

export default {
    title: 'atoms/icons/ClearIcon',
    component: ClearIcon,
}

const Template = args => <ClearIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
