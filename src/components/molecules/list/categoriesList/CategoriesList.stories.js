import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CategoriesList from './CategoriesList'

export default {
    title: 'molecules/list/CategoriesList',
    component: CategoriesList,
}

const Template = args => (
    <BrowserRouter>
        <CategoriesList {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    component: 'nav',
    items: [
        {
            id: 1,
            name: 'Футболки',
            description: 'Описание',
            subcategories: [
                {
                    id: 11,
                    name: 'Детские',
                    description: 'Описание',
                },
                {
                    id: 12,
                    name: 'Мужские',
                    description: 'Описание',
                },
                {
                    id: 13,
                    name: 'Женские',
                    description: 'Описание',
                },
            ],
        },
        {
            id: 2,
            name: 'Кроссовки',
            description: 'Описание',
            subcategories: [
                {
                    id: 14,
                    name: 'Кеды',
                    description: 'Описание',
                },
                {
                    id: 15,
                    name: 'Летние',
                    description: 'Описание',
                },
            ],
        },
        {
            id: 3,
            name: 'Брюки',
            description: 'Описание',
            subcategories: [],
        },
        {
            id: 4,
            name: 'Шапки',
            description: 'Описание',
            subcategories: [
                {
                    id: 16,
                    name: 'Ушанки',
                    description: 'Описание',
                },
            ],
        },
    ],
    open: { 1: true },
    openCloseSubCategories: () => console.log('open/close subcategories'),
    draggingCategory: { id: 1 },
    setDraggingCategory: () => console.log('set dragging category'),
    draggingSubCategory: { id: 11 },
    setDraggingSubCategory: () => console.log('set dragging sub category'),
    draggingFromCategory: { id: 3 },
    setDraggingFromCategory: () => console.log('set dragging from category'),
    changeCategory: () => console.log('change category'),
    changeSubCategory: () => console.log('change subcategory'),
}
