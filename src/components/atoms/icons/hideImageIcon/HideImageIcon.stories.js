import React from 'react'
import ImageIcon from './HideImageIcon'

export default {
    title: 'atoms/icons/HideImageIcon',
    component: ImageIcon,
}

const Template = args => <ImageIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
