import React from 'react'
import GoodsHeader from './GoodsHeader'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'molecules/headers/GoodsHeader',
    component: GoodsHeader,
}

const Template = args => (
    <BrowserRouter>
        <GoodsHeader {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    title: 'Товары',
    buttons: {
        add: {
            addGood: () => console.log('Добавление товара...'),
        },
        delete: {
            deleteGood: () => console.log('Удаление товара...'),
            isDeleteButtonDisabled: true,
        },
    },
    breadcrumbs: [
        {
            title: 'Главная',
            link: '/',
        },
        {
            title: 'Товары',
        },
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    title: 'Товары',
    buttons: {
        add: {
            addGood: () => console.log('Добавление товара...'),
        },
        delete: {
            deleteGood: () => console.log('Удаление товара...'),
            isDeleteButtonDisabled: false,
        },
    },
}
