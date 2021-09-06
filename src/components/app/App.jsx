import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import {authRoutes, publicRoutes} from '../../router/routes'
import './Reset.css'
import './App.sass'
import './Constants.sass'
import HeaderContainer from "../header/HeaderContainer";

const App = () => {
    const isAuth = true
    return (
            <BrowserRouter>
                <HeaderContainer/>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}

                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
            </BrowserRouter>
    )
}

export default App