import {
    ADD_CATEGORY_ROUTE,
    ATTRIBUTE_GROUP,
    ATTRIBUTE_LIST,
    CATEGORIES_LIST_ROUTE,
    COUPONS_LIST_ROUTE,
    EDIT_GOOD,
    GOOD_ADD_ROUTE,
    GOODS,
    GOODS_FILTER_ROUTE,
    GOODS_LIST_ROUTE,
    LOGIN_ROUTE,
    MADE_COMPONENT_LIST,
    MAIN_ROUTE,
    MY_GOODS_LIST_ROUTE,
    ORDER_INFO,
    ORDERS,
    USERS,
    ADD_USER,
    NEW_ORDER,
    ADD_CLIENT,
    EXPORT,
} from './routerConsts'
import { LoginContainer } from '../components/login/LoginContainer'
import MainContainer from '../components/main/MainContainer'
import AddGoodContainer from '../components/pages/addGood/AddGoodContainer'
import AttributesListContainer from '../components/attributeList/AttributesListContainer'
import GoodsFilterContainer from '../components/pages/goodsFilter/GoodsFilterContainer'
import AddAttributeCategoryContainer from '../components/pages/addAttributeCategory/AddAttributeCategoryContainer'
import AttributeGroupContainer from '../components/pages/AttributeGroup/AttributeGroupContainer'
import MyGoodsList from '../components/pages/myGoodsList/MyGoodsList'
import { GoodPageA } from '../components/pages/goodPageA/GoodPageA'
import CouponsListContainer from '../components/couponsList/CouponsListContainer'
import NewOrder from '../components/pages/newOrder/NewOrder'
import ComponentsTable from '../components/pages/componentsTable/ComponentsTable'
import OrderInfoContainer from '../components/newOrder/orderInfo/OrderInfoContainer'
import GoodsList from '../components/pages/goodsList/GoodsList'
import EditGood from '../components/pages/editGood/EditGood'
import AddUser from '../components/pages/addUser/AddUser'
import UsersTable from '../components/pages/usersTable/UsersTable'
import Categories from '../components/pages/categories/Categories'
import Goods from '../components/pages/goods/Goods'
import AddClient from '../components/pages/addClient/AddClient'
import Export from '../components/pages/export/Export'

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainContainer,
    },
    {
        path: GOODS_LIST_ROUTE,
        Component: GoodsList,
    },
    {
        path: GOOD_ADD_ROUTE,
        Component: AddGoodContainer,
    },
    {
        path: ATTRIBUTE_LIST,
        Component: AttributesListContainer,
    },
    {
        path: GOODS_FILTER_ROUTE,
        Component: GoodsFilterContainer,
    },
    {
        path: ADD_CATEGORY_ROUTE,
        Component: AddAttributeCategoryContainer,
    },
    {
        path: ATTRIBUTE_GROUP,
        Component: AttributeGroupContainer,
    },
    {
        path: MY_GOODS_LIST_ROUTE,
        Component: MyGoodsList,
    },
    {
        path: MADE_COMPONENT_LIST,
        Component: ComponentsTable,
    },
    {
        path: CATEGORIES_LIST_ROUTE,
        Component: Categories,
    },
    {
        path: COUPONS_LIST_ROUTE,
        Component: CouponsListContainer,
    },

    {
        path: EDIT_GOOD,
        Component: EditGood,
    },
    {
        path: ORDERS,
        Component: NewOrder,
    },
    {
        path: ORDER_INFO,
        Component: OrderInfoContainer,
    },
    {
        path: USERS,
        Component: UsersTable,
    },
    {
        path: ADD_USER,
        Component: AddUser,
    },
    {
        path: GOODS,
        Component: Goods,
    },
    {
        path: NEW_ORDER,
        Component: NewOrder,
    },
    {
        path: ADD_CLIENT,
        Component: AddClient,
    },
    {
        path: EXPORT,
        Component: Export,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer,
    },
    {
        path: '/goodA',
        Component: GoodPageA,
    },
]
