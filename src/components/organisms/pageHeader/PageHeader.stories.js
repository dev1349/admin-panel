import React from 'react'
import PageHeader from './PageHeader'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'organisms/PageHeader',
    component: PageHeader,
}

const Template = args => (
    <BrowserRouter>
        <PageHeader {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    onClickMenu: () => console.log('Click menu icon'),
    logo: {
        link: '/',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
        altTextImg: 'logo',
    },
    statisticsProps: {
        id: 0,
        menuItems: [
            {
                id: 1,
                title: 'Заказы',
                subItems: [
                    {
                        id: 11,
                        title: 'В прогрессе',
                        count: 2,
                    },
                    {
                        id: 12,
                        title: 'Завершено',
                        count: 5,
                    },
                    {
                        id: 13,
                        title: 'Возвраты',
                        count: 5,
                    },
                ],
            },
            {
                id: 2,
                title: 'Покупатели',
                subItems: [
                    {
                        id: 21,
                        title: 'Онлайн',
                        count: 2,
                    },
                    {
                        id: 22,
                        title: 'В ожидании',
                        count: 0,
                    },
                ],
            },

            {
                id: 3,
                title: 'Товары',
                subItems: [
                    {
                        id: 31,
                        title: 'Нет в наличии',
                        count: 2,
                    },
                    {
                        id: 32,
                        title: 'Отзывы',
                        count: 0,
                    },
                ],
            },
            {
                id: 4,
                title: 'Магазин ',
                subItems: [
                    {
                        id: 41,
                        title: 'Отзывы о магазине',
                        count: 2,
                    },
                    {
                        id: 42,
                        title: 'Заказ обратн. звонка',
                        count: 15,
                    },

                    {
                        id: 43,
                        title: 'Вопросы о товарах',
                        count: 0,
                    },
                    {
                        id: 44,
                        title: 'Комментарии',
                        count: 0,
                    },
                ],
            },
            {
                id: 5,
                title: 'Партнерская программа',
                subItems: [
                    {
                        id: 55,
                        title: 'В ожидании',
                        count: 2,
                    },
                ],
            },
        ],
    },
    importExportProps: {
        id: 1,
        menuItems: [
            {
                id: 'importExportItem0',
                title: 'Основное',
                link: '#',
            },
            {
                id: 'importExportItem1',
                title: 'Товары',
                link: '#',
            },
            {
                id: 'importExportItem2',
                title: 'Категории',
                link: '#',
            },
            {
                id: 'importExportItem3',
                title: 'Производители',
                link: '#',
            },
            {
                id: 'importExportItem4',
                title: 'Клиенты',
                link: '#',
            },
            {
                id: 'importExportItem5',
                title: 'Заказы',
                link: '#',
            },
            {
                id: 'importExportItem6',
                title: 'Планировщик',
                link: '#',
            },
            {
                id: 'importExportItem7',
                title: 'О модуле',
                link: '#',
            },
        ],
    },
    shopsProps: {
        id: 2,
        menuItems: [
            {
                id: 0,
                title: 'Магазин кроссовок',
                link: '#',
            },
        ],
    },
    helpProps: {
        id: 3,
        menuItems: [
            {
                id: 0,
                title: 'Главная',
                link: '#',
            },
            {
                id: 1,
                title: 'Документация',
                link: '#',
            },
            {
                id: 2,
                title: 'Форум',
                link: '#',
            },
        ],
    },
    onClickLogout: () => console.log('logout'),
}
