import { createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/usersInitialState'
import { deleteUserFetch, getAllUserFetch, postUserFetch } from '../api/userApi'

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        postUserSuccess(state, action) {
            state.users.push(action.payload)
        },
        deleteUserSuccess(state, action) {
            state.users.splice(action.payload, 1)
        },
        getAllUsersSuccess(state, action) {
            state.users = action.payload
        },
        setAttributes(state, action) {
            state.userFields = {
                ...state.userFields,
                ...action.payload,
            }
        },
        resetAttributes(state) {
            state.userFields = initialState.userFields
        },
    },
})

export const {
    deleteUserSuccess,
    postUserSuccess,
    getAllUsersSuccess,
    setAttributes,
    resetAttributes,
} = usersSlice.actions

export default usersSlice.reducer

export const getAllUsers = state => state.users.users
export const getUserFields = state => state.users.userFields

export const postUser = () => (dispatch, getState) => {
    dispatch(postUserSuccess(getState().users.userFields))
    postUserFetch(getState().users.userFields).then(response => response.json())
}

export const getAllUsersData = () => dispatch => {
    getAllUserFetch().then(data =>
        dispatch(getAllUsersSuccess(Object.values(data)))
    )
}

export const deleteUser = user => dispatch => {
    deleteUserFetch(user).then(data => {
        dispatch(deleteUserSuccess(data))
    })
}
