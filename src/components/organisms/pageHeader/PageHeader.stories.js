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
    importExportProps: {
        id: 0,
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
        id: 1,
        menuItems: [
            {
                id: 0,
                title: 'Магазин кроссовок',
                link: '#',
            },
        ],
    },
    helpProps: {
        id: 2,
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
