import { createSlice } from '@reduxjs/toolkit'
import { putThemeFetch, } from '../api/styleApi'
import { loadStyles } from '../services/style/loadStyleService'

const styleSlice = createSlice({
    name: 'style',
    initialState: {
        styleFrom: 'local', // local/server
        refreshStyle: 'endpoint', // auto/endpoint (auto пока не реализован)
        themeName: 'fff', // задать уникальное имя своих изменений
        isThemeLoaded: false,
        styles: {}
    },
    reducers: {
        getStyleSuccess(state, action) {
            state.styles = action.payload
            state.isThemeLoaded = true
        }
    }
})

export const {
    getStyleSuccess,
} = styleSlice.actions

export default styleSlice.reducer

export const themeSelector = state => state.style.styles
export const themeNameSelector = state => state.style.themeName
export const styleFromSelector = state => state.style.styleFrom
export const isThemeLoadedSelector = state => state.style.isThemeLoaded

export const getTheme = (loadType, themeName) => dispatch => {
    loadStyles(loadType, themeName)
        .then(data => {
            dispatch(getStyleSuccess(data))
        })
}

export const putTheme = theme => {
    putThemeFetch(theme)
        .then(response => response.json())
}
