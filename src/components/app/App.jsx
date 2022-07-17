import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import { authRoutes, publicRoutes } from '../../router/routes'
import './Reset.css'
import './App.sass'
import './Constants.sass'
import PageHeader from '../pages/pageHeader/PageHeader'
import ReduxThemeProvider from '../molecules/reduxThemeProvider/ReduxThemeProvider'

const App = () => {
    const isAuth = true

    return (
        <BrowserRouter>
            <ReduxThemeProvider>
                <PageHeader />
                {isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))}
            </ReduxThemeProvider>
        </BrowserRouter>
    )
}

export default App
