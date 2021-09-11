import {GOOD_ADD_ROUTE, GOOD_FILTER_ROUTE, GOOD_LIST_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from './routerConsts'
import {LoginContainer} from '../components/login/LoginContainer'
import MainContainer from '../components/main/MainContainer'
import GoodListContainer from '../components/goodList/GoodListContainer'
import AddGoodContainer from '../components/addGood/AddGoodContainer'
import GoodFilterContainer from "../components/goodFilter/GoodFilterContainer";


export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainContainer
    },
    {
        path: GOOD_LIST_ROUTE,
        Component: GoodListContainer
    },
    {
        path: GOOD_ADD_ROUTE,
        Component: AddGoodContainer
    },
    {
        path: GOOD_FILTER_ROUTE,
        Component: GoodFilterContainer
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer
    }
]
