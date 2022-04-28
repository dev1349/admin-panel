import { useEffect } from 'react'
import { createTheme } from '@mui/material'
import {
    getTheme,
    isThemeLoadedSelector,
    styleFromSelector,
    themeNameSelector,
    themeSelector
} from '../reducers/styleSlice'
import { useDispatch, useSelector } from 'react-redux'

export const useTheme = () => {
    const dispatch = useDispatch()
    const themeName = useSelector(themeNameSelector)
    const loadType = useSelector(styleFromSelector)
    const isThemeLoaded = useSelector(isThemeLoadedSelector)
    const theme = useSelector(themeSelector)

    useEffect(() => {
        if (!isThemeLoaded) {
            dispatch(getTheme(loadType, themeName))
        }
    })

    return createTheme({ components: theme })
}
