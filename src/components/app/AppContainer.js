import React from 'react'
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import App from './App'

const AppContainer = () => {
    if (i18n.isInitialized) {
        return <App />
    } else {
        return <div />
    }
}

export default withTranslation()(AppContainer)
