import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CategoryItem from './CategoryItem'

export default {
    title: 'molecules/list/CategoryItem',
    component: CategoryItem,
}

const Template = args => (
    <BrowserRouter>
        <CategoryItem {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    key: 1,
    category: {
        id: 1,
        name: 'Футболки',
        subCategories: [
            {
                id: 11,
                name: 'Детские',
                subCategories: null,
                parent: 1,
                categoryType: 'WITH_GOODS',
            },
            {
                id: 12,
                name: 'Мужские',
                subCategories: null,
                parent: 1,
                categoryType: 'WITH_GOODS',
            },
            {
                id: 13,
                name: 'Женские',
                subCategories: null,
                parent: 1,
                categoryType: 'WITH_GOODS',
            },
        ],
        parent: null,
        categoryType: 'WITH_CATEGORIES',
    },
    draggingCategory: {
        id: 13,
        name: 'Женские',
        subCategories: null,
        parent: 1,
        categoryType: 'WITH_GOODS',
    },
    setDraggingCategory: () => console.log('set dragging category'),
    moveCategory: () => console.log('move category'),
    categoryUrl: '/someUrl',
    activeCategoryId: 6,
    editCategory: () => console.log('edit category'),
    openCategories: [1, 2, 3],
}
