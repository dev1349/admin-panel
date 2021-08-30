import {LOGIN_ROUTE, MAIN_ROUTE} from './routerConsts'
import {MainContainer} from '../components/main/MainContainer'
import {LoginContainer} from '../components/login/LoginContainer'


export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainContainer
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer
    }
]
