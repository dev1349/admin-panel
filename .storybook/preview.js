import React from 'react'
import { store } from '../src'
import { Provider } from 'react-redux'
import StorybookReduxProvider from './StorybookReduxProvider'

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
    Story => {
        return (
            // <div style={{ border: '1px solid red', boxSizing: 'border-box' }}>
            <Provider store={store}>
                <StorybookReduxProvider>
                    <Story />
                </StorybookReduxProvider>
            </Provider>
            // </div>
        )
    },
]
