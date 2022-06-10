import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AddCategory from './AddCategory'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'

export default {
    title: 'organisms/AddCategory',
    component: AddCategory,
}

const Template = args => (
    <BrowserRouter>
        <AddCategory {...args} />
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
            characteristicSets: [],
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
            characteristicSets: [],
        },
        {
            id: 3,
            name: 'Брюки',
            subCategories: null,
            parent: null,
            categoryType: 'WITH_GOODS',
            characteristicSets: [],
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
            characteristicSets: [],
        },
    ],

    icon: <AddIcon dialogIcon />,
    title: 'Добавить категорию товаров',
    buttons: [
        <IconButton key={0} dialogButton onClick={() => console.log('go back...')}>
            <UndoIcon />
        </IconButton>,
        <IconButton key={1} dialogButton onClick={() => console.log('save new category')} disabled={false}>
            <SaveIcon />
        </IconButton>,
    ],
    categoryFields: {
        name: null,
        categoryType: 'WITH_GOODS',
        parentCategory: null,
        characteristicSets: [],
    },
    changeCategoryFieldValues: () => console.log('change category fields values'),
    changeCategoryType: () => console.log('change category type'),
    changeCategoryParent: () => console.log('change category parent'),
    categoryTypeTooltip:
        'Категория с товарами может содержать только товары! Обычная же категория может содержать в себе только другие категории!',
    sets: [
        {
            id: 18,
            name: 'set 01',
            characteristics: [],
            characteristicsGroup: [],
        },
        {
            id: 19,
            name: 'set 02',
            characteristics: [],
            characteristicsGroup: [],
        },
        {
            id: 20,
            name: 'set 03',
            characteristics: [],
            characteristicsGroup: [],
        },
    ],
    handleAddRemoveSetInCategory: payload => () => console.log('add/remove set in category ', payload),
    isSetInCategory: () => true,
}
