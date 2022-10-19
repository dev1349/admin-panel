import React from 'react'
import { Provider } from 'react-redux'
import StorybookReduxProvider from './StorybookReduxProvider'
import i18n from '../src/i18n'
import { I18nextProvider } from 'react-i18next'
import { store } from '../src/reducers'

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
                    <I18nextProvider i18n={i18n}>
                        <Story />
                    </I18nextProvider>
                </StorybookReduxProvider>
            </Provider>
            // </div>
        )
    },
]
