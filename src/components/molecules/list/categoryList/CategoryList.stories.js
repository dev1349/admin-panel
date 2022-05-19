import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CategoryList from './CategoryList'

export default {
    title: 'molecules/list/CategoryList',
    component: CategoryList,
}

const Template = args => (
    <BrowserRouter>
        <CategoryList {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    categories: [
        {
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
        {
            id: 2,
            name: 'Кроссовки',
            subCategories: [
                {
                    id: 14,
                    name: 'Кеды',
                    subCategories: [
                        {
                            id: 24,
                            name: 'Кеды суперские',
                            subCategories: [
                                {
                                    id: 34,
                                    name: 'Кеды 2',
                                    subCategories: null,
                                    parent: 24,
                                    categoryType: 'WITH_GOODS',
                                },
                                {
                                    id: 35,
                                    name: 'Летние 2',
                                    subCategories: null,
                                    parent: 24,
                                    categoryType: 'WITH_GOODS',
                                },
                            ],
                            parent: 14,
                            categoryType: 'WITH_CATEGORIES',
                        },
                        {
                            id: 25,
                            name: 'Летние суперские',
                            subCategories: null,
                            parent: 14,
                            categoryType: 'WITH_GOODS',
                        },
                    ],
                    parent: 2,
                    categoryType: 'WITH_CATEGORIES',
                },
                {
                    id: 15,
                    name: 'Летние',
                    subCategories: null,
                    parent: 2,
                    categoryType: 'WITH_GOODS',
                },
            ],
            parent: null,
            categoryType: 'WITH_CATEGORIES',
        },
        {
            id: 3,
            name: 'Брюки',
            subCategories: null,
            parent: null,
            categoryType: 'WITH_GOODS',
        },
        {
            id: 4,
            name: 'Шапки',
            subCategories: [
                {
                    id: 16,
                    name: 'Ушанки',
                    subCategories: null,
                    parent: 4,
                    categoryType: 'WITH_GOODS',
                },
            ],
            parent: null,
            categoryType: 'WITH_CATEGORIES',
        },
    ],
    draggingCategory: {
        id: 16,
        name: 'Ушанки',
        subCategories: null,
        parent: 4,
        categoryType: 'WITH_GOODS',
    },
    setDraggingCategory: () => console.log('set dragging category'),
    moveCategory: () => console.log('move category'),
    categoryUrl: '/someCategoryUrl',
    activeCategoryId: 1,
    editCategory: () => () => console.log('edit category'),
    openCategories: [1, 2, 14],
}
