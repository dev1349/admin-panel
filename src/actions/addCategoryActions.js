import {CHANGE_CATEGORY_FETCH_STATUS, RESET_CATEGORY, SET_CATEGORY_ATTRIBUTES} from './actionTypes'
import {postCategoryFetch} from '../api/addCategoryApi'

export const setCategoryAttributes = (attr) => {
    return {
        type: SET_CATEGORY_ATTRIBUTES,
        payload: attr,
    }
}

export const postCategory = () => {
    return (dispatch, getState) => {
        dispatch(changeFetchStatus('pending'))
        postCategoryFetch(getState().addCategory.categoryFields)
            .then(data => {
                dispatch(changeFetchStatus('success'))
            })
            .catch(error => {
                dispatch(changeFetchStatus('error'))
            })
    }
}

export const changeFetchStatus = (status) => {
    return {
        type: CHANGE_CATEGORY_FETCH_STATUS,
        payload: status
    }
}

export const resetCategory = () => {
    return {
        type: RESET_CATEGORY,
    }
}