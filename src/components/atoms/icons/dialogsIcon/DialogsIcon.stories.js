import React from 'react'
import DialogsIcon from './DialogsIcon'

export default {
    title: 'atoms/icons/DialogsIcon',
    component: DialogsIcon,
}

const Template = args => <DialogsIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
