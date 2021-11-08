import React from 'react'
import AddAttributesCategory from './AddAttributesCategory'

export default {
    title: 'organisms/forms/AddAttributesCategory',
    component: AddAttributesCategory,
}

const Template = args => <AddAttributesCategory {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    fieldsValues: { name: 'name 01', description: '' },
    setFieldsValue: () => console.log('set fields value'),
    onSave: () => console.log('save'),
    onReturn: () => console.log('return'),
    fetchStatus: 'idle',
    isSaveButtonDisabled: true,
    isReturnButtonDisabled: false,
    modalsData: [
        {
            fetchStatus: 'error',
            modalProperties: {
                modalText: 'Ошибка! Невозможно добавить категорию атрибутов(',
                modalType: 'error',
                action: () => console.log('action'),
            },
        },
        {
            fetchStatus: 'success',
            modalProperties: {
                modalText: 'Вы добавили новую категорию абтрибутов!',
                modalType: 'success',
                action: () => console.log('action'),
            },
        },
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    fieldsValues: { name: 'name 01', description: '' },
    setFieldsValue: () => console.log('set fields value'),
    onSave: () => console.log('save'),
    onReturn: () => console.log('return'),
    fetchStatus: 'error',
    isSaveButtonDisabled: true,
    isReturnButtonDisabled: false,
    modalsData: [
        {
            fetchStatus: 'error',
            modalProperties: {
                modalText: 'Ошибка! Невозможно добавить категорию атрибутов(',
                modalType: 'error',
                action: () => console.log('action'),
            },
        },
        {
            fetchStatus: 'success',
            modalProperties: {
                modalText: 'Вы добавили новую категорию абтрибутов!',
                modalType: 'success',
                action: () => console.log(1),
            },
        },
    ],
}

export const Example3 = Template.bind({})
Example3.args = {
    fieldsValues: { name: 'name 01', description: '' },
    setFieldsValue: () => console.log('set fields value'),
    onSave: () => console.log('save'),
    onReturn: () => console.log('return'),
    fetchStatus: 'success',
    isSaveButtonDisabled: true,
    isReturnButtonDisabled: false,
    modalsData: [
        {
            fetchStatus: 'error',
            modalProperties: {
                modalText: 'Ошибка! Невозможно добавить категорию атрибутов(',
                modalType: 'error',
                action: () => console.log('action'),
            },
        },
        {
            fetchStatus: 'success',
            modalProperties: {
                modalText: 'Вы добавили новую категорию абтрибутов!',
                modalType: 'success',
                action: () => console.log('action'),
            },
        },
    ],
}
