import {
    GOOD_ADD_ROUTE,
    GOODS_FILTER_ROUTE,
    ADD_CATEGORY_ROUTE,
    GOODS_LIST_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    ATTRIBUTE_GROUP,
    MY_GOODS_LIST_ROUTE,
    CATEGORIES_LIST_ROUTE,
    MADE_COMPONENT_LIST,
    COUPONS_LIST_ROUTE,
} from './routerConsts'
import {LoginContainer} from '../components/login/LoginContainer'
import MainContainer from '../components/main/MainContainer'
import GoodsListContainer from '../components/goodsList/GoodsListContainer'
import AddGoodContainer from '../components/addGood/AddGoodContainer'
import GoodsFilterContainer from '../components/goodsFilter/GoodsFilterContainer'
import AddCategoryContainer from '../components/addCategory/AddCategoryContainer'
import AttributeGroupContainer from '../components/attributeGroup/AttributeGroupContainer'
import MyGoodsListContainer from '../components/myGoodsList/MyGoodsListContainer'
import CategoriesListContainer from "../components/categoriesList/CategoriesListContainer";
import MadeComponentList from '../components/madeComponentList/MadeComponentList'
import {GoodPageA} from '../components/pages/goodPageA/GoodPageA'
import CouponsListContainer from '../components/couponsList/CouponsListContainer'


export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainContainer
    },
    {
        path: GOODS_LIST_ROUTE,
        Component: GoodsListContainer
    },
    {
        path: GOOD_ADD_ROUTE,
        Component: AddGoodContainer
    },
    {
        path: GOODS_FILTER_ROUTE,
        Component: GoodsFilterContainer
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
        path: MY_GOODS_LIST_ROUTE,
        Component: MyGoodsListContainer
    },
    {
        path: MADE_COMPONENT_LIST,
        Component: MadeComponentList
    },
    {
        path: CATEGORIES_LIST_ROUTE,
        Component: CategoriesListContainer
    },
    {
        path: COUPONS_LIST_ROUTE,
        Component: CouponsListContainer
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer
    },
    {
        path: "/goodA",
        Component: GoodPageA
    }
]
