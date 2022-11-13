import { createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/headerInitialState'

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActiveSubMenu(state, action) {
            state.activeSubMenu = action.payload
        },
    },
})

export const { setActiveSubMenu } = headerSlice.actions

export default headerSlice.reducer

export const getHeaderItems = state => state.header.headerItems
export const getActiveSubMenu = state => state.header.activeSubMenu
export const getHeaderItemsConf = state => state.header.headerItemsConf
export const getNavItems = state => state.header.navItemsConf.items
