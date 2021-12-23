import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CategoriesListItem from './CategoriesListItem'

export default {
    title: 'molecules/list/CategoriesListItem',
    component: CategoriesListItem,
}

const Template = args => (
    <BrowserRouter>
        <CategoriesListItem {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
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
    open: true,
    openCloseSubCategories: () => console.log('open/close subcategories'),
    draggingCategory: { id: 1 },
    setDraggingCategory: () => console.log('set dragging category'),
    draggingSubCategory: { id: 12 },
    setDraggingSubCategory: () => console.log('set dragging sub category'),
    draggingFromCategory: { id: 2 },
    setDraggingFromCategory: () => console.log('set dragging from category'),
}
