import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CategoriesSubListItem from './CategoriesSubListItem'

export default {
    title: 'molecules/list/CategoriesSubListItem',
    component: CategoriesSubListItem,
}

const Template = args => (
    <BrowserRouter>
        <CategoriesSubListItem {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    subcategory: {
        id: 11,
        name: 'Детские',
        description: 'Описание',
    },
    draggingCategory: { id: 1 },
    setDraggingCategory: () => console.log('set dragging category'),
    draggingSubCategory: { id: 12 },
    setDraggingSubCategory: () => console.log('set dragging sub category'),
    draggingFromCategory: { id: 2 },
    setDraggingFromCategory: () => console.log('set dragging from category'),
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
    changeSubCategories: () => console.log('change sub categories'),
}
