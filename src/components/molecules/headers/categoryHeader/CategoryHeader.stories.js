import React from 'react'
import CategoryHeader from './CategoryHeader'

export default {
    title: 'molecules/headers/CategoryHeader',
    component: CategoryHeader,
}

const Template = args => <CategoryHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    title: 'Категории',
    buttons: {
        addCategory: {
            title: 'Добавить категорию',
            link: '/addCategory',
            onClick: () => console.log('add category'),
        },
        addSubCategory: {
            title: 'Добавить подкатегорию',
            link: '/addSubCategory',
            onClick: () => console.log('add subcategory'),
        },
        deleteCategory: {
            title: 'Удалить категорию',
            categoryId: 0,
            onClick: id => console.log(`delete category ${id}`),
            disabled: true,
        },
    },
}
