import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import { authRoutes, publicRoutes } from '../../router/routes'
import './Reset.css'
import './App.sass'
import './Constants.sass'
import PageHeader from '../pages/pageHeader/PageHeader'
import ReduxThemeProvider from '../molecules/reduxThemeProvider/ReduxThemeProvider'
import Container from '../templates/container/Container'
import NavMenu from '../pages/navMenu/NavMenu'

const App = () => {
    const isAuth = true

    return (
        <BrowserRouter>
            <ReduxThemeProvider>
                <Container mainContainer>
                    <PageHeader />
                    <Container adminNavAndContentContainer>
                        <Container sideNavContainer>
                            <NavMenu />
                        </Container>
                        <Container adminMainContentContainer>
                            {isAuth &&
                                authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
                            {publicRoutes.map(({ path, Component }) => (
                                <Route key={path} path={path} component={Component} exact />
                            ))}
                        </Container>
                    </Container>
                </Container>
            </ReduxThemeProvider>
        </BrowserRouter>
    )
}

export default App
