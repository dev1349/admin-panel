import React from 'react'
import ModalHeader from './ModalHeader'

export default {
    title: 'atoms/headers/ModalHeader',
    component: ModalHeader,
}

const Template = args => <ModalHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some modal text...',
}
