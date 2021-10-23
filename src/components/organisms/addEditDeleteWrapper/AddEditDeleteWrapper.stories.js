import React from 'react'
import AddEditDeleteWrapper from './AddEditDeleteWrapper'
import ListIcon from '../../atoms/icons/listIcon/ListIcon'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'

//todo: удалить после перехода на atomic design
export default {
    title: 'organisms/AddEditDeleteWrapper',
    component: AddEditDeleteWrapper,
}

const Template = args => <AddEditDeleteWrapper {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    mode: 'list',
    header1Label: 'Группы атрибутов',
    modeData: {
        list: {
            label: 'Список групп атрибутов',
            icon: <ListIcon />,
            displayedComponent: <div>Таблица групп атрибутов</div>,
        },
        add: {
            label: 'Добавление группы атрибутов',
            icon: <AddIcon />,
            displayedComponent: <div>Добавление групп атрибутов</div>,
        },
        edit: {
            label: 'Редактирование группы атрибутов',
            icon: <EditIcon />,
            displayedComponent: <div>Редактирование групп атрибутов</div>,
        },
    },
    toAddGroup: null,
    returnToListMode: null,
    saveGroup: null,
    isSaveGroupButtonDisabled: false,
    deleteGroup: null,
    isDeleteButtonDisabled: true,
    fetchStatus: 'idle',
    modalData: [
        {
            fetchStatus: 'errorGetAllGroup',
            modalProperties: {
                modalText:
                    'Ошибка! Невозможно получить список групп атрибутов(',
                modalType: 'error',
                action: null,
            },
        },
        {
            fetchStatus: 'successAddGroup',
            modalProperties: {
                modalText: 'Вы добавили новую группу!',
                modalType: 'success',
                action: null,
            },
        },
        {
            fetchStatus: 'errorAddGroup',
            modalProperties: {
                modalText: 'Ошибка! Группа не добавлена!',
                modalType: 'error',
                action: null,
            },
        },
        {
            fetchStatus: 'successEditGroup',
            modalProperties: {
                modalText: 'Вы отредактировали группу!',
                modalType: 'success',
                action: null,
            },
        },
        {
            fetchStatus: 'errorEditGroup',
            modalProperties: {
                modalText: 'Ошибка! Группа не отредактированна!',
                modalType: 'error',
                action: null,
            },
        },
        {
            fetchStatus: 'successDeleteGroup',
            modalProperties: {
                modalText: 'Выделенная(ые) группа(ы) удалена(ы)!',
                modalType: 'success',
                action: null,
            },
        },
        {
            fetchStatus: 'errorDeleteGroup',
            modalProperties: {
                modalText: 'Ошибка! Группа(ы) не удалена(ы)!',
                modalType: 'error',
                action: null,
            },
        },
    ],
}
