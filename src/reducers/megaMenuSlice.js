import { createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/megaMenuInitialState'

const megaMenuSlice = createSlice({
    name: 'megaMenu',
    initialState,
    reducers: {
        setActiveSubMenu(state, action) {
            state.activeSubMenu = action.payload
        },
    },
})

export const { setActiveSubMenu } = megaMenuSlice.actions

export default megaMenuSlice.reducer

export const getMegaMenuItems = state => state.megaMenu.megaMenuItems
