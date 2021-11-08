import React from 'react'
import globalTheme from '../src/theme'
import { ThemeProvider } from '@mui/material'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    Story => (
        // <div style={{ border: '1px solid red', boxSizing: 'border-box' }}>
        <EmotionThemeProvider theme={globalTheme}>
            <ThemeProvider theme={globalTheme}>
                <Story />
            </ThemeProvider>
        </EmotionThemeProvider>
        // </div>
    ),
]
