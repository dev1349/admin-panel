import {CHANGE_CATEGORY_FETCH_STATUS, RESET_CATEGORY, SET_CATEGORY_ATTRIBUTES} from '../actions/actionTypes'

const initialState = {
    categoryFields: {
        categoryName: '',
        categoryDescription: '',
        categoryNameEnglish: '',
        categoryDescriptionEnglish: '',
    },
    fetchStatus: 'idle'
}

export function addCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY_ATTRIBUTES:
            return {
                ...state,
                categoryFields: {...state.categoryFields, ...action.payload},
            }
        case CHANGE_CATEGORY_FETCH_STATUS:
            return {
                ...state,
                fetchStatus: action.payload,
            }
        case RESET_CATEGORY:
            return initialState
        default:
            return state
    }
}