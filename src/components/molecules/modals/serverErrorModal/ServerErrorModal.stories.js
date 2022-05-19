import React from 'react'
import ServerErrorModal from './ServerErrorModal'

export default {
    title: 'molecules/modals/ServerErrorModal',
    component: ServerErrorModal,
}

const Template = args => <ServerErrorModal {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    open: true,
    onClose: () => console.log('close deleting modal window'),
    title: 'Ошибка сервера',
    description: 'Сервер не может выполнить указанную операцию :(',
}
