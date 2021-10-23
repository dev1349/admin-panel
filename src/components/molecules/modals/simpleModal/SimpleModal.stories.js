import React from 'react'
import SimpleModal from './SimpleModal'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/modals/SimpleModal',
    component: SimpleModal,
}

const Template = args => <SimpleModal {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    modalText: 'Some text',
    modalType: 'success',
    action: () => alert('Some action'),
    open: true,
}
