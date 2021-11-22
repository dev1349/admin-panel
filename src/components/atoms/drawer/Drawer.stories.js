import React from 'react'
import Drawer from './Drawer'

export default {
    title: 'atoms/Drawer',
    component: Drawer,
}

const Template = args => <Drawer {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some text in drawer...',
    anchor: 'left',
    open: true,
    onClose: () => console.log('close drawer'),
}
