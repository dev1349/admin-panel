import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Categories from './Categories'

export default {
    title: 'organisms/Categories',
    component: Categories,
}

const Template = args => (
    <BrowserRouter>
        <Categories {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    categories: [
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
    title: 'Категории',
    buttons: {
        addCategory: {
            title: 'Добавить категорию',
            onClick: () => console.log('add category'),
        },
        addSubCategory: {
            title: 'Добавить подкатегорию',
            onClick: () => console.log('add sub category'),
        },
        deleteCategory: {
            title: 'Удалить категорию',
            categoryId: null,
            onClick: () => console.log('delete category'),
            disabled: true,
        },
    },
    changeCategories: () => console.log('changeCategories'),
    changeSubCategories: () => console.log('changeSubCategories'),
}
