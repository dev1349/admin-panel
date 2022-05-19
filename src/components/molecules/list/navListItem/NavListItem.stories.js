import React from 'react'
import NavListItem from './NavListItem'
import HomeIcon from '../../../atoms/icons/homeIcon/HomeIcon'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'molecules/list/NavListItem',
    component: NavListItem,
}

const Template = args => (
    <BrowserRouter>
        <NavListItem {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    id: 'mainPage',
    title: 'Главная',
    link: '#',
    icon: <HomeIcon />,
}

export const Example2 = Template.bind({})
Example2.args = {
    id: 'catalog',
    title: 'Каталог',
    icon: <HomeIcon />,
    link: '#',
    subItems: [
        {
            id: 'category',
            title: 'Категории',
            link: '#',
        },
        {
            id: 'goods',
            title: 'Товары',
            link: '#',
        },
    ],
    open: false,
    onClick: () => console.log('click to submenu'),
}
