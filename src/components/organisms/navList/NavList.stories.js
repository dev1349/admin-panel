import React from 'react'
import NavList from './NavList'
import { BrowserRouter } from 'react-router-dom'
import HomeIcon from '../../atoms/icons/homeIcon/HomeIcon'
import ShoppingCartIcon from '../../atoms/icons/shopingCartIcon/ShoppingCartIcon'
import CatalogIcon from '../../atoms/icons/catalogIcon/CatalogIcon'
import ChartIcon from '../../atoms/icons/chartIcon/ChartIcon'
import ClientsIcon from '../../atoms/icons/clientsIcon/ClientsIcon'
import DialogsIcon from '../../atoms/icons/dialogsIcon/DialogsIcon'
import HelpIcon from '../../atoms/icons/helpIcon/HelpIcon'

export default {
    title: 'organisms/list/navList/NavList',
    component: NavList,
}

const Template = args => (
    <BrowserRouter>
        <NavList {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})

Example1.args = {
    navItemsConf: {
        items: [
            {
                id: 'mainPage',
                title: 'Главная',
                label: 3,
                link: '#',
                icon: <HomeIcon />,
            },
            {
                id: 'orders',
                title: 'Заказы',
                link: '#',
                icon: <ShoppingCartIcon />,
            },
            {
                id: 'catalog',
                title: 'Каталог',
                link: '#',
                subItems: {
                    items: [
                        {
                            id: 'catalog.category',
                            title: 'Категории',
                            link: '#',
                        },
                        {
                            id: 'catalog.goods',
                            title: 'Товары',
                            link: '#',
                        },
                        {
                            id: 'catalog.attributes',
                            title: 'Атрибуты',
                            link: '#',
                            subItems: {
                                items: [
                                    {
                                        id: 'catalog.attributes.subAttributes',
                                        title: 'Атрибуты',
                                        link: '#',
                                    },
                                    {
                                        id: 'catalog.attributes.attributesGroup',
                                        title: 'Группы атрибутов',
                                        link: '#',
                                    },
                                ],
                            },
                        },
                    ],
                },
                icon: <CatalogIcon />,
            },
            {
                id: 'chart',
                title: 'Показатели',
                link: '#',
                icon: <ChartIcon />,
            },
            {
                id: 'clients',
                title: 'Клиенты',
                link: '#',
                icon: <ClientsIcon />,
            },
            {
                id: 'dialogs',
                title: 'Диалоги',
                link: '#',
                icon: <DialogsIcon />,
            },
            {
                id: 'help',
                title: 'Помощь',
                link: '#',
                icon: <HelpIcon />,
            },
        ],
    },
}
