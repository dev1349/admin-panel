import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Categories from './Categories'
import CategoryIcon from '../../atoms/icons/categoryIcon/CategoryIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'

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
            subCategories: [
                {
                    id: 11,
                    name: 'Детские',
                    subCategories: null,
                    parent: 1,
                    categoryType: 'WITH_GOODS',
                    characteristicSets: [],
                },
                {
                    id: 12,
                    name: 'Мужские',
                    subCategories: null,
                    parent: 1,
                    categoryType: 'WITH_GOODS',
                    characteristicSets: [],
                },
                {
                    id: 13,
                    name: 'Женские',
                    subCategories: null,
                    parent: 1,
                    categoryType: 'WITH_GOODS',
                    characteristicSets: [],
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
                                    characteristicSets: [],
                                },
                                {
                                    id: 35,
                                    name: 'Летние 2',
                                    subCategories: null,
                                    parent: 24,
                                    categoryType: 'WITH_GOODS',
                                    characteristicSets: [],
                                },
                            ],
                            parent: 14,
                            categoryType: 'WITH_CATEGORIES',
                            characteristicSets: [],
                        },
                        {
                            id: 25,
                            name: 'Летние суперские',
                            subCategories: null,
                            parent: 14,
                            categoryType: 'WITH_GOODS',
                            characteristicSets: [],
                        },
                    ],
                    parent: 2,
                    categoryType: 'WITH_CATEGORIES',
                    characteristicSets: [],
                },
                {
                    id: 15,
                    name: 'Летние',
                    subCategories: null,
                    parent: 2,
                    categoryType: 'WITH_GOODS',
                    characteristicSets: [],
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
                    characteristicSets: [],
                },
            ],
            parent: null,
            categoryType: 'WITH_CATEGORIES',
            characteristicSets: [],
        },
    ],
    draggingCategory: {
        id: 16,
        name: 'Ушанки',
        subCategories: null,
        parent: 4,
        categoryType: 'WITH_GOODS',
        characteristicSets: [],
    },
    // setDraggingCategory: id => () => console.log('set dragging category ', id),
    moveCategory: () => console.log('move category'),
    moveCategoryToRoot: () => console.log('move category to root'),
    categoryUrl: '/someCategoryUrl',
    activeCategoryId: 1,
    editCategory: () => () => console.log('edit category'),
    openCategories: [1, 2, 14],
    icon: <CategoryIcon dialogIcon />,
    title: 'Список категорий',
    buttons: [
        <IconButton key={0} dialogButton onClick={() => console.log('click add category button')}>
            <AddIcon />
        </IconButton>,
        <IconButton key={1} dialogButton onClick={() => console.log('click delete caetgory button')} disabled={true}>
            <DeleteIcon />
        </IconButton>,
    ],
    openCategoriesAfterDragging: [1, 2, 14],
    setDraggedCategory: id => () => console.log('set dragging category ', id),
}
