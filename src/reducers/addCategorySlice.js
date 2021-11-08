import initialState from '../mock/addCategoryInitialState'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { postCategoryFetch } from '../api/addCategoryApi'

const todosSlice = createSlice({
    name: 'addCategory',
    initialState,
    reducers: {
        setAttributes(state, action) {
            state.categoryFields = {
                ...state.categoryFields,
                ...action.payload,
            }
        },
        changeFetchStatus(state, action) {
            state.fetchStatus = action.payload
        },
        resetAttributes() {
            return initialState
        },
    },
})

export const { setAttributes, changeFetchStatus, resetAttributes } =
    todosSlice.actions

export default todosSlice.reducer

export const getCategoryFields = state => state.addCategory.categoryFields
export const getFetchStatus = state => state.addCategory.fetchStatus
export const isButtonDisabled = state =>
    state.addCategory.fetchStatus !== 'idle'
export const isCategoryNameFieldsValueEmpty = state =>
    !state.addCategory.categoryFields.name
export const isSaveButtonDisabled = createSelector(
    isButtonDisabled,
    isCategoryNameFieldsValueEmpty,
    (isButtonDisabled, isCategoryNameFieldsValueEmpty) => {
        return isButtonDisabled || isCategoryNameFieldsValueEmpty
    }
)

export const postCategory = () => (dispatch, getState) => {
    dispatch(changeFetchStatus('pending'))
    postCategoryFetch(getState().addCategory.categoryFields)
        .then(() => {
            dispatch(changeFetchStatus('success'))
        })
        .catch(() => {
            dispatch(changeFetchStatus('error'))
        })
}

export const addedCategory = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
    dispatch(resetAttributes())
}

export const notAddedCategory = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
}
