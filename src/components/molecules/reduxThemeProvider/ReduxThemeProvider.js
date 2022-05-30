import React from 'react'
import { ThemeProvider } from '@mui/material'
import { useTheme } from '../../../hooks/useTheme'

const ReduxThemeProvider = ({ children }) => {
    const globalTheme = useTheme()
    return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
}

export default ReduxThemeProvider
