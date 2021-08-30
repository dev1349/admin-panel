import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import {authRoutes, publicRoutes} from '../../router/routes'
import './Reset.css'
import './App.sass'
import './Constants.sass'

const App = () => {
    const isAuth = true
    return (
        <BrowserRouter>
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