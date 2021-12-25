import { createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/usersInitialState'

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser(state, action) {
            state.users.splice(action.payload, 1)
        },
    },
})

export const { deleteUser } = usersSlice.actions

export default usersSlice.reducer

export const getAllUsers = state => state.users.users
