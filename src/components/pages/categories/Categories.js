import { useDispatch, useSelector } from 'react-redux'
import {
    deleteCategory,
    getCategories,
    getSubcategories,
} from '../../../reducers/categoriesListSlice'
import React from 'react'
import Categories from '../../organisms/categories/Categories'
import { useHistory, useParams } from 'react-router-dom'

const CategoriesPages = () => {
    const categories = useSelector(state => state.categoriesList.categories)

    const { categoryId } = useParams()
    let history = useHistory()

    const dispatch = useDispatch()
    const handleDeleteCategory = id => {
        dispatch(deleteCategory(id))
        history.push('/categoriesList')
    }
    const handleAddCategory = () => {
        history.push('/addCategory')
    }
    const handleAddSubCategory = () => {
        history.push('/addSubCategory')
    }
    const changeCategories = (draggingCategory, category) => {
        dispatch(getCategories(draggingCategory, category))
    }
    const changeSubCategories = (
        draggingFromCategory,
        draggingSubCategory,
        category,
        subcategory
    ) => {
        dispatch(
            getSubcategories(
                draggingFromCategory,
                draggingSubCategory,
                category,
                subcategory
            )
        )
    }

    return (
        categories && (
            <Categories
                categories={categories}
                title={'Категории'}
                buttons={{
                    addCategory: {
                        title: 'Добавить категорию',
                        onClick: handleAddCategory,
                    },
                    addSubCategory: {
                        title: 'Добавить подкатегорию',
                        onClick: handleAddSubCategory,
                        disabled: !categoryId,
                    },
                    deleteCategory: {
                        title: 'Удалить категорию',
                        categoryId: categoryId,
                        onClick: handleDeleteCategory,
                        disabled: !categoryId,
                    },
                }}
                changeCategories={changeCategories}
                changeSubCategories={changeSubCategories}
            />
        )
    )
}

export default CategoriesPages
