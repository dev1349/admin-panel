import {
    ADD_CATEGORY_ROUTE,
    ATTRIBUTE_GROUP,
    ATTRIBUTE_LIST,
    CATEGORIES_LIST_ROUTE,
    COUPONS_LIST_ROUTE,
    EDIT_GOOD,
    GOOD_ADD_ROUTE,
    GOODS_FILTER_ROUTE,
    GOODS_LIST_ROUTE,
    LOGIN_ROUTE,
    MADE_COMPONENT_LIST,
    MAIN_ROUTE,
    MY_GOODS_LIST_ROUTE,
    ORDERS,
    ORDER_INFO,
} from './routerConsts'
import { LoginContainer } from '../components/login/LoginContainer'
import MainContainer from '../components/main/MainContainer'
import GoodsListContainer from '../components/goodsList/GoodsListContainer'
import AddGoodContainer from '../components/pages/addGood/AddGoodContainer'
import AttributesListContainer from '../components/attributeList/AttributesListContainer'
import GoodsFilterContainer from '../components/pages/goodsFilter/GoodsFilterContainer'
import AddAttributeCategoryContainer from '../components/pages/addAttributeCategory/AddAttributeCategoryContainer'
import AttributeGroupContainer from '../components/pages/AttributeGroup/AttributeGroupContainer'
import MyGoodsListContainer from '../components/pages/myGoodsList/MyGoodsListContainer'
import CategoriesListContainer from '../components/categoriesList/CategoriesListContainer'
import { GoodPageA } from '../components/pages/goodPageA/GoodPageA'
import CouponsListContainer from '../components/couponsList/CouponsListContainer'
import EditGoodContainer from '../components/editGood/EditGoodContainer'
import NewOrder from '../components/pages/newOrder/NewOrder'
import ComponentsTable from '../components/pages/componentsTable/ComponentsTable'
import OrderInfoContainer from '../components/newOrder/orderInfo/OrderInfoContainer'

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainContainer,
    },
    {
        path: GOODS_LIST_ROUTE,
        Component: GoodsListContainer,
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
        Component: MyGoodsListContainer,
    },
    {
        path: MADE_COMPONENT_LIST,
        Component: ComponentsTable,
    },
    {
        path: CATEGORIES_LIST_ROUTE,
        Component: CategoriesListContainer,
    },
    {
        path: COUPONS_LIST_ROUTE,
        Component: CouponsListContainer,
    },

    {
        path: EDIT_GOOD,
        Component: EditGoodContainer,
    },
    {
        path: ORDERS,
        Component: NewOrder,
    },
    {
        path: ORDER_INFO,
        Component: OrderInfoContainer,
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
