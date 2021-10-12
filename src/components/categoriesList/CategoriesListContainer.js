import { CategoriesList } from './CategoriesList'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { compose } from '@reduxjs/toolkit'
import { withRouter } from 'react-router-dom'
import {
    getCategories,
    getSubcategories,
    deleteCategory,
} from '../../reducers/categoriesListSlice'

const CategoriesListContainer = props => {
    const categories = useSelector(state => state.categoriesList.categories)

    const [draggingCategory, setDraggingCategory] = useState(null)
    const [currentCategory, setCurrentCategory] = useState(null)
    const [currentSubcategory, setCurrentSubcategory] = useState(null)

    return (
        categories && (
            <CategoriesList
                categories={categories}
                getCategories={getCategories}
                getSubcategories={getSubcategories}
                setDraggingCategory={setDraggingCategory}
                draggingCategory={draggingCategory}
                match={props.match}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                deleteCategory={deleteCategory}
                currentSubcategory={currentSubcategory}
                setCurrentSubcategory={setCurrentSubcategory}
            />
        )
    )
}

export default compose(withRouter)(CategoriesListContainer)
