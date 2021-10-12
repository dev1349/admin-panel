import initialState from '../mock/addCategoryInitialState'
import { createSlice } from '@reduxjs/toolkit'
import { postCategoryFetch } from '../api/addCategoryApi'

const todosSlice = createSlice({
    name: 'addCategory',
    initialState,
    reducers: {
        setAttributes(state, action) {
            const key = Object.keys(action.payload)[0]
            state.categoryFields[key] = action.payload[key]
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

export const postCategory = () => (dispatch, getState) => {
    const name = getState().addCategory.categoryFields.name
    if (!name) {
        dispatch(changeFetchStatus('required'))
        return
    }

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

export const notFillRequireFields = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
}
