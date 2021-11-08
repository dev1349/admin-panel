import React from 'react'
import InfoModals from './InfoModals'

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
    fetchStatus: 'errorGetAllGroup',
}

export const Example2 = Template.bind({})
Example2.args = {
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
    fetchStatus: 'successAddGroup',
}

export const Example3 = Template.bind({})
Example3.args = {
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
    fetchStatus: 'errorAddGroup',
}

export const Example4 = Template.bind({})
Example4.args = {
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
    fetchStatus: 'successEditGroup',
}

export const Example5 = Template.bind({})
Example5.args = {
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
    fetchStatus: 'errorEditGroup',
}

export const Example6 = Template.bind({})
Example6.args = {
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
    fetchStatus: 'successDeleteGroup',
}

export const Example7 = Template.bind({})
Example7.args = {
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
