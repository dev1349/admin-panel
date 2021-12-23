import { categoriesListMockData } from '../mock/categoriesListMockData'
import { createSlice } from '@reduxjs/toolkit'

const categoriesListSlice = createSlice({
    name: 'categoriesList',
    initialState: categoriesListMockData,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        },
        deleteCategory(state, action) {
            state.categories = state.categories.filter(
                c => c.id !== parseInt(action.payload)
            )
        },
    },
})

const transferSubcategory = (
    categories,
    draggingFromCategoryIndex,
    draggingSubCategoryIndex,
    dropCategoryIndex,
    dropSubCategoryIndex
) => {
    if (
        draggingFromCategoryIndex === dropCategoryIndex &&
        draggingSubCategoryIndex === dropSubCategoryIndex
    ) {
        return categories
    }

    if (draggingFromCategoryIndex === dropCategoryIndex) {
        const changedCategories = [...categories]
        const changedCategory = {
            ...changedCategories[draggingFromCategoryIndex],
        }
        const changedSubCategories = [...changedCategory.subcategories]
        const removedSubCategory = changedSubCategories.splice(
            draggingSubCategoryIndex,
            1
        )
        changedSubCategories.splice(
            dropSubCategoryIndex,
            0,
            ...removedSubCategory
        )
        changedCategory.subcategories = changedSubCategories
        changedCategories[dropCategoryIndex] = changedCategory
        return changedCategories
    }

    if (draggingFromCategoryIndex !== dropCategoryIndex) {
        const changedCategories = [...categories]
        const changedDraggingFromCategory = {
            ...changedCategories[draggingFromCategoryIndex],
        }
        const changedDropCategory = { ...changedCategories[dropCategoryIndex] }
        const changedDraggingSubCategories = [
            ...changedDraggingFromCategory.subcategories,
        ]
        const changedDropSubCategories = [...changedDropCategory.subcategories]
        const removedSubCategory = changedDraggingSubCategories.splice(
            draggingSubCategoryIndex,
            1
        )
        changedDropSubCategories.splice(
            dropSubCategoryIndex,
            0,
            ...removedSubCategory
        )
        changedDropCategory.subcategories = changedDropSubCategories
        changedDraggingFromCategory.subcategories = changedDraggingSubCategories
        changedCategories[draggingFromCategoryIndex] =
            changedDraggingFromCategory
        changedCategories[dropCategoryIndex] = changedDropCategory
        return changedCategories
    }
}

export const getSubcategories =
    (
        draggingFromCategory,
        draggingSubCategory,
        dropCategory,
        dropSubCategory
    ) =>
    (dispatch, getState) => {
        const categories = getState().categoriesList.categories
        const draggingFromCategoryIndex =
            categories.indexOf(draggingFromCategory)
        const draggingSubCategoryIndex =
            categories[draggingFromCategoryIndex].subcategories.indexOf(
                draggingSubCategory
            )
        const dropCategoryIndex = categories.indexOf(dropCategory)
        const dropSubCategoryIndex =
            dropSubCategory === 'toCategory'
                ? 0
                : categories[dropCategoryIndex].subcategories.indexOf(
                      dropSubCategory
                  )
        let changedCategories = transferSubcategory(
            categories,
            draggingFromCategoryIndex,
            draggingSubCategoryIndex,
            dropCategoryIndex,
            dropSubCategoryIndex
        )
        dispatch(setCategories(changedCategories))
    }

const transferCategory = (categories, draggingIndex, dropIndex) => {
    if (draggingIndex === dropIndex) return categories
    const changedCategories = [...categories]
    const removedCategory = changedCategories.splice(draggingIndex, 1)
    changedCategories.splice(dropIndex, 0, ...removedCategory)
    return changedCategories
}

export const getCategories =
    (draggingCategory, dropCategory) => (dispatch, getState) => {
        const categories = getState().categoriesList.categories
        let changedCategories = transferCategory(
            categories,
            categories.indexOf(draggingCategory),
            categories.indexOf(dropCategory)
        )
        dispatch(setCategories(changedCategories))
    }

export default categoriesListSlice.reducer
export const { setCategories, deleteCategory } = categoriesListSlice.actions
