import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CategoriesSubList from './CategoriesSubList'

export default {
    title: 'molecules/list/CategoriesSubList',
    component: CategoriesSubList,
}

const Template = args => (
    <BrowserRouter>
        <CategoriesSubList {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    component: 'div',
    category: {
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
    open: true,
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
