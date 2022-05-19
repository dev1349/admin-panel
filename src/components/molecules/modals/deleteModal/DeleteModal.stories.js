import React from 'react'
import DeleteModal from './DeleteModal'

export default {
    title: 'molecules/modals/DeleteModal',
    component: DeleteModal,
}

const Template = args => <DeleteModal {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    open: true,
    onClose: () => console.log('close deleting modal window'),
    onYes: () => console.log('click to yes button'),
    title: 'Подтверждение удаления',
    description: 'Вы действительно хотите удалить категорию?',
}
