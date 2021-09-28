import {
    GOOD_ADD_ROUTE,
    GOOD_FILTER_ROUTE,
    ADD_CATEGORY_ROUTE,
    GOOD_LIST_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    ATTRIBUTE_GROUP,
    MY_GOOD_LIST_ROUTE,
    CATEGORIES_LIST_ROUTE,
    MADE_COMPONENT_LIST,
} from './routerConsts'
import {LoginContainer} from '../components/login/LoginContainer'
import MainContainer from '../components/main/MainContainer'
import GoodListContainer from '../components/goodList/GoodListContainer'
import AddGoodContainer from '../components/addGood/AddGoodContainer'
import GoodFilterContainer from '../components/goodFilter/GoodFilterContainer'
import AddCategoryContainer from '../components/addCategory/AddCategoryContainer'
import AttributeGroupContainer from '../components/attributeGroup/AttributeGroupContainer'
import MyGoodListContainer from '../components/myGoodList/MyGoodListContainer'
import CategoriesListContainer from "../components/categoriesList/CategoriesListContainer";
import MadeComponentList from '../components/madeComponentList/MadeComponentList'


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
    {
        path: ADD_CATEGORY_ROUTE,
        Component: AddCategoryContainer
    },
    {
        path: ATTRIBUTE_GROUP,
        Component: AttributeGroupContainer
    },
    {
        path: MY_GOOD_LIST_ROUTE,
        Component: MyGoodListContainer
    },
    {
        path: MADE_COMPONENT_LIST,
        Component: MadeComponentList
    },
    {
        path: CATEGORIES_LIST_ROUTE,
        Component: CategoriesListContainer
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer
    }
]
