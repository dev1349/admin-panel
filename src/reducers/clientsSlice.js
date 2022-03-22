import { createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/clientsInitialState'

const usersSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients(state, action) {
            state.clients = action.payload
        },
        setItemsPerPage(state, action) {
            state.itemsPerPage = action.payload
        },
    },
})

export const { setClients, setItemsPerPage } = usersSlice.actions

export default usersSlice.reducer

export const getAllClients = state => state.clients.clients
export const getItemsPerPage = state => state.clients.itemsPerPage
export const getClientsQuantity = state => state.clients.clientsQuantity
