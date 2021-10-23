import React from 'react'
import InfoModals from './InfoModals'

//todo: удалить после перехода на atomic design
export default {
    title: 'organisms/InfoModals',
    component: InfoModals,
}

const Template = args => <InfoModals {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    modalData: [
        {
            fetchStatus: 'errorGetAllGroup',
            modalProperties: {
                modalText:
                    'Ошибка! Невозможно получить список групп атрибутов(',
                modalType: 'error',
                action: () => console.log(1),
            },
        },
        {
            fetchStatus: 'successAddGroup',
            modalProperties: {
                modalText: 'Вы добавили новую группу!',
                modalType: 'success',
                action: () => console.log(1),
            },
        },
        {
            fetchStatus: 'errorAddGroup',
            modalProperties: {
                modalText: 'Ошибка! Группа не добавлена!',
                modalType: 'error',
                action: () => console.log(1),
            },
        },
        {
            fetchStatus: 'successEditGroup',
            modalProperties: {
                modalText: 'Вы отредактировали группу!',
                modalType: 'success',
                action: () => console.log(1),
            },
        },
        {
            fetchStatus: 'errorEditGroup',
            modalProperties: {
                modalText: 'Ошибка! Группа не отредактированна!',
                modalType: 'error',
                action: () => console.log(1),
            },
        },
        {
            fetchStatus: 'successDeleteGroup',
            modalProperties: {
                modalText: 'Выделенная(ые) группа(ы) удалена(ы)!',
                modalType: 'success',
                action: () => console.log(1),
            },
        },
        {
            fetchStatus: 'errorDeleteGroup',
            modalProperties: {
                modalText: 'Ошибка! Группа(ы) не удалена(ы)!',
                modalType: 'error',
                action: () => console.log(1),
            },
        },
    ],
    fetchStatus: 'errorDeleteGroup',
}
