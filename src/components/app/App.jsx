import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import { authRoutes, publicRoutes } from '../../router/routes'
import './Reset.css'
import './App.sass'
import './Constants.sass'
import HeaderContainer from '../header/HeaderContainer'
import { ThemeProvider } from '@mui/material'
import globalTheme from '../../theme'
import PageHeader from '../pages/pageHeader/PageHeader'

const App = () => {
    const isAuth = true
    return (
        <BrowserRouter>
            <ThemeProvider theme={globalTheme}>
                <HeaderContainer />{' '}
                {/* После рефакторинга statistics компонент <HeaderContainer/> удалить*/}
                <PageHeader />
                {isAuth &&
                    authRoutes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            component={Component}
                            exact
                        />
                    ))}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))}
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
