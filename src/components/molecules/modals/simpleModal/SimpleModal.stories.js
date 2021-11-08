import React from 'react'
import SimpleModal from './SimpleModal'

export default {
    title: 'molecules/modals/SimpleModal',
    component: SimpleModal,
}

const Template = args => <SimpleModal {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    modalText: 'Some text',
    modalType: 'success',
    action: () => console.log('Some action'),
    open: true,
    onClose: () => console.log('close'),
}

export const Example2 = Template.bind({})
Example2.args = {
    modalText: 'Some text',
    modalType: 'error',
    action: () => console.log('Some action'),
    open: true,
    onClose: () => console.log('close'),
}
