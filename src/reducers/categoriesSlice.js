import { categoriesMockData } from '../mock/categoriesMockData'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { deepCopyCategories, findCategoryById } from '../components/pages/addCategory/categoryOperations'
import { deleteCategoryFetch, getAllCategoriesFetch, putCategoryFetch } from '../api/categoriesApi'
import { getBehaviorMode } from './behaviorServerInteraction'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoriesMockData,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        },
        changeFetchStatus(state, action) {
            state.fetchStatus = action.payload
        },
        changePostPutDeleteFetchStatus(state, action) {
            state.fetchPostPutDeleteStatus = action.payload
        },
    },
})

export default categoriesSlice.reducer

export const { setCategories, changeFetchStatus, changePostPutDeleteFetchStatus } = categoriesSlice.actions

export const getCategories = state => state.categories.categories
export const getFetchStatus = state => state.categories.fetchStatus
export const getFetchPostPutDeleteStatus = state => state.categories.fetchPostPutDeleteStatus
export const canFetchGetPostPutDelete = createSelector(
    getFetchStatus,
    getFetchPostPutDeleteStatus,
    (fetchAllCategoriesStatus, fetchPostPutDeleteStatus) => fetchAllCategoriesStatus !== 'pending' && fetchPostPutDeleteStatus !== 'pending'
)
export const getIsServerError = createSelector(
    getFetchStatus,
    getFetchPostPutDeleteStatus,
    (fetchAllCategoriesStatus, fetchPostPutDeleteStatus) => fetchAllCategoriesStatus === 'error' || fetchPostPutDeleteStatus === 'error'
)

export const getIsPending = createSelector(
    getFetchStatus,
    getFetchPostPutDeleteStatus,
    (fetchAllCategoriesStatus, fetchPostPutDeleteStatus) => fetchAllCategoriesStatus === 'pending' || fetchPostPutDeleteStatus === 'pending'
)

export const closeServerErrorModal = () => (dispatch, getState) => {
    if (getFetchStatus(getState()) === 'error') {
        dispatch(changeFetchStatus('idleAfterError'))
    }
    if (getFetchPostPutDeleteStatus(getState()) === 'error') {
        dispatch(changePostPutDeleteFetchStatus('idleAfterError'))
    }
}

export const moveCategory = (draggingCategoryId, newParentCategoryId, openCategory) => (dispatch, getState) => {
    const canFetch = canFetchGetPostPutDelete(getState())
    if (!canFetch) return

    const categoryAttr = {
        id: draggingCategoryId,
        parentCategory: { id: newParentCategoryId },
    }
    dispatch(changePostPutDeleteFetchStatus('pending'))
    putCategoryFetch(categoryAttr)
        .then(response => {
            if (!response.ok) {
                dispatch(changePostPutDeleteFetchStatus('error'))
                return
            }
            dispatch(changePostPutDeleteFetchStatus('success'))
            dispatch(changePostPutDeleteFetchStatus('idle'))

            if (getBehaviorMode(getState()) === 'FAST_MODE') {
                let categories = deepCopyCategories(getState().categories.categories)
                const draggingCategory = findCategoryById(categories, draggingCategoryId)

                const parentCategory = findCategoryById(categories, draggingCategory.parentCategory)

                const newParentCategory = findCategoryById(categories, newParentCategoryId)
                if (parentCategory) {
                    parentCategory.subCategories = parentCategory.subCategories.filter(subItem => subItem.id !== draggingCategoryId)
                } else {
                    categories = categories.filter(category => category.id !== draggingCategoryId)
                }

                const hasSubCategories = () =>
                    newParentCategory.subCategories &&
                    Array.isArray(newParentCategory.subCategories) &&
                    newParentCategory.subCategories.length !== 0 &&
                    newParentCategory.subCategories[0] !== null

                if (hasSubCategories()) {
                    newParentCategory.subCategories.push(draggingCategory)
                } else {
                    newParentCategory.subCategories = []
                    newParentCategory.subCategories.push(draggingCategory)
                }
                draggingCategory.parentCategory = newParentCategoryId
                dispatch(setCategories(categories))
                openCategory()
            }
            if (getBehaviorMode(getState()) === 'SAFE_MODE') {
                dispatch(getAllCategories())
            }
        })
        .catch(() => {
            dispatch(changePostPutDeleteFetchStatus('error'))
            dispatch(getAllCategories())
        })
}

export const moveCategoryToRoot = draggingCategoryId => (dispatch, getState) => {
    const canFetch = canFetchGetPostPutDelete(getState())
    if (!canFetch) return

    const categoryAttr = {
        id: draggingCategoryId,
        command: 'DELETE_FROM_PARENT',
    }
    dispatch(changePostPutDeleteFetchStatus('pending'))
    putCategoryFetch(categoryAttr)
        .then(response => {
            if (!response.ok) {
                dispatch(changePostPutDeleteFetchStatus('error'))
                return
            }
            dispatch(changePostPutDeleteFetchStatus('success'))
            dispatch(changePostPutDeleteFetchStatus('idle'))
            if (getBehaviorMode(getState()) === 'FAST_MODE') {
                let categories = deepCopyCategories(getState().categoriesList.categories)
                const draggingCategory = findCategoryById(categories, draggingCategoryId)

                const parentCategory = findCategoryById(categories, draggingCategory.parentCategory)
                parentCategory.subCategories = parentCategory.subCategories.filter(subItem => subItem.id !== draggingCategoryId)

                draggingCategory.parentCategory = null
                categories.push(draggingCategory)
                dispatch(setCategories(categories))
            }
            if (getBehaviorMode(getState()) === 'SAFE_MODE') {
                dispatch(getAllCategories())
            }
        })
        .catch(() => {
            dispatch(changePostPutDeleteFetchStatus('error'))
            dispatch(getAllCategories())
        })
}

export const getAllCategories = () => (dispatch, getState) => {
    const canFetch = canFetchGetPostPutDelete(getState())
    if (!canFetch) return
    dispatch(changeFetchStatus('pending'))
    getAllCategoriesFetch()
        .then(categories => {
            dispatch(setCategories(categories))
            dispatch(changeFetchStatus('success'))
        })
        .catch(() => {
            dispatch(changeFetchStatus('error'))
        })
}

export const deleteCategories = (categoryId, callback) => (dispatch, getState) => {
    const canFetch = canFetchGetPostPutDelete(getState())
    if (!canFetch) return

    dispatch(changePostPutDeleteFetchStatus('pending'))
    deleteCategoryFetch(categoryId)
        .then(response => {
            if (!response.ok) {
                dispatch(changePostPutDeleteFetchStatus('error'))
                return
            }
            dispatch(changePostPutDeleteFetchStatus('success'))
            dispatch(changePostPutDeleteFetchStatus('idle'))
            if (getBehaviorMode(getState()) === 'FAST_MODE') {
                let categories = deepCopyCategories(getState().categoriesList.categories)
                const deletingCategory = findCategoryById(categories, parseInt(categoryId))
                let parentCategory = findCategoryById(categories, deletingCategory.parentCategory)
                if (parentCategory) {
                    parentCategory.subCategories = parentCategory.subCategories.filter(
                        subCategory => subCategory.id !== parseInt(categoryId)
                    )
                } else {
                    categories = categories.filter(category => category.id !== parseInt(categoryId))
                }
                dispatch(setCategories(categories))
            }

            if (getBehaviorMode(getState()) === 'SAFE_MODE') {
                dispatch(getAllCategories())
            }
            callback()
        })
        .catch(() => {
            dispatch(changePostPutDeleteFetchStatus('error'))
            dispatch(getAllCategories())
        })
}

export const addNewCategory = newCategory => (dispatch, getState) => {
    if (newCategory.subCategories === null) newCategory.subCategories = []
    let categories = deepCopyCategories(getState().categoriesList.categories)
    let parentCategory = findCategoryById(categories, newCategory.parentCategory)
    if (parentCategory) {
        parentCategory.subCategories = [...parentCategory.subCategories, newCategory]
    } else {
        categories = [...categories, newCategory]
    }

    dispatch(setCategories(categories))
}

export const changeCategory = changedCategory => (dispatch, getState) => {
    let categories = deepCopyCategories(getState().categoriesList.categories)
    const category = findCategoryById(categories, changedCategory.id)

    if (
        category.parentCategory !== null &&
        changedCategory.parentCategory !== null &&
        category.parentCategory !== changedCategory.parentCategory.id
    ) {
        const oldParentCategory = findCategoryById(categories, category.parentCategory)
        const newParentCategory = findCategoryById(categories, changedCategory.parentCategory.id)
        oldParentCategory.subCategories = oldParentCategory.subCategories.filter(subCategory => subCategory.id !== changedCategory.id)
        newParentCategory.subCategories = [...newParentCategory.subCategories, category]
        category.parentCategory = changedCategory.parentCategory.id
    }

    if (category.parentCategory === null && changedCategory.parentCategory !== null) {
        const newParentCategory = findCategoryById(categories, changedCategory.parentCategory.id)
        categories = categories.filter(subCategory => subCategory.id !== changedCategory.id)

        newParentCategory.subCategories = [...newParentCategory.subCategories, category]
        category.parentCategory = changedCategory.parentCategory.id
    }

    if (category.parentCategory !== null && changedCategory.parentCategory === null) {
        const oldParentCategory = findCategoryById(categories, category.parentCategory)
        oldParentCategory.subCategories = oldParentCategory.subCategories.filter(subCategory => subCategory.id !== changedCategory.id)
        categories = [...categories, category]
        category.parentCategory = null
    }

    category.name = changedCategory.name
    category.categoryType = changedCategory.categoryType
    category.characteristicSets = changedCategory.characteristicSets

    dispatch(setCategories(categories))
}
