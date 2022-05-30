import React from 'react'
import { ThemeProvider } from '@mui/material'
import { useTheme } from '../src/hooks/useTheme'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

const StorybookReduxProvider = ({ children }) => {
    const globalTheme = useTheme()
    return (
        <EmotionThemeProvider theme={globalTheme}>
            <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
        </EmotionThemeProvider>
    )
}

export default StorybookReduxProvider
