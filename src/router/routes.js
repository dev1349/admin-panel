import {
    ADD_CATEGORY_ROUTE,
    ADD_CHARACTERISTIC,
    ADD_CHARACTERISTIC_GROUP,
    ADD_CHARACTERISTIC_SET,
    ADD_CLIENT,
    ADD_PRODUCT,
    ADD_USER,
    ATTRIBUTE_GROUP,
    ATTRIBUTE_LIST,
    CATEGORIES_LIST_ROUTE,
    CHARACTERISTICS,
    CHARACTERISTIC_GROUPS,
    CHARACTERISTIC_SETS,
    CHECKOUTS,
    CLIENTSID,
    CONTACTS,
    COUPONS_LIST_ROUTE,
    DELIVERIES,
    EDIT_CATEGORY_ROUTE,
    EDIT_CHARACTERISTIC,
    EDIT_CHARACTERISTIC_GROUP,
    EDIT_CHARACTERISTIC_SET,
    EDIT_GOOD,
    EXPORT,
    GOOD_ADD_ROUTE,
    GOODS,
    GOODS_FILTER_ROUTE,
    GOODS_LIST_ROUTE,
    LAST_ORDERS,
    LOGIN_ROUTE,
    MADE_COMPONENT_LIST,
    MAIN_ROUTE,
    MENU_AND_PAGES,
    MY_GOODS_LIST_ROUTE,
    NEW_ORDER,
    NOVELITIES,
    ORDER_INFO,
    ORDERS,
    UPLOAD_THEME,
    USERS,
    Np,
    CARDS,
} from './routerConsts'
import { LoginContainer } from '../components/login/LoginContainer'
import MainContainer from '../components/main/MainContainer'
import AddGoodContainer from '../components/pages/addGood/AddGoodContainer'
import AttributesListContainer from '../components/attributeList/AttributesListContainer'
import GoodsFilterContainer from '../components/pages/goodsFilter/GoodsFilterContainer'
import AttributeGroupContainer from '../components/pages/AttributeGroup/AttributeGroupContainer'
import MyGoodsList from '../components/pages/myGoodsList/MyGoodsList'
import CouponsListContainer from '../components/couponsList/CouponsListContainer'
import NewOrder from '../components/pages/newOrder/NewOrder'
import AddProduct from '../components/organisms/forms/addProduct/AddProduct'
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
import MegaMenu from '../components/pages/megaMenu/MegaMenu'
import Clients from '../components/pages/clients/Clients'
import Contacts from '../components/pages/contacts/Contacts'
import LastOrders from '../components/organisms/tables/lastOrdersTable/LastOrders'
import Delivery from '../components/pages/twoInputsImgPrev/Delivery'
import Checkout from '../components/pages/twoInputsImgPrev/Checkout'
import Novelities from '../components/pages/novelitiesPage/NovelitiesPage'
import AddCategory from '../components/pages/addCategory/AddCategory'
import EditCategory from '../components/pages/editCategory/EditCategory'
import Characteristics from '../components/pages/characteristics/Characteristics'
import AddCharacteristic from '../components/pages/addCharacteristic/AddCharacteristic'
import EditCharacteristic from '../components/pages/editCharacteristic/EditCharacteristic'
import UploadTheme from '../components/pages/refreshStyle/UploadTheme'
import CharacteristicGroups from '../components/pages/characteristicGroups/CharacteristicGroups'
import AddCharacteristicGroup from '../components/pages/addCharacteristicGroup/AddCharacteristicGroup'
import EditCharacteristicGroup from '../components/pages/editCharacteristicGroup/EditCharacteristicGroup'
import Novaposhta from '../components/pages/novaPoshta/NovaPoshta'
import CharacteristicSets from '../components/pages/characteristicSets/CharacteristicSets'
import AddCharacteristicSet from '../components/pages/addCharacteristicSet/AddCharacteristicSet'
import EditCharacteristicSet from '../components/pages/editCharacteristicSet/EditCharacteristicSet'
import Card from '../components/molecules/card/Card'

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
        Component: AddCategory,
    },
    {
        path: EDIT_CATEGORY_ROUTE,
        Component: EditCategory,
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
        path: ADD_PRODUCT,
        Component: AddProduct,
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
    {
        path: MENU_AND_PAGES,
        Component: MegaMenu,
    },
    {
        path: CLIENTSID,
        Component: Clients,
    },
    {
        path: CONTACTS,
        Component: Contacts,
    },
    {
        path: DELIVERIES,
        Component: Delivery,
    },
    {
        path: LAST_ORDERS,
        Component: LastOrders,
    },
    {
        path: CHECKOUTS,
        Component: Checkout,
    },
    {
        path: NOVELITIES,
        Component: Novelities,
    },
    {
        path: CHARACTERISTICS,
        Component: Characteristics,
    },
    {
        path: ADD_CHARACTERISTIC,
        Component: AddCharacteristic,
    },
    {
        path: EDIT_CHARACTERISTIC,
        Component: EditCharacteristic,
    },
    {
        path: CHARACTERISTIC_GROUPS,
        Component: CharacteristicGroups,
    },
    {
        path: ADD_CHARACTERISTIC_GROUP,
        Component: AddCharacteristicGroup,
    },
    {
        path: EDIT_CHARACTERISTIC_GROUP,
        Component: EditCharacteristicGroup,
    },
    {
        path: CHARACTERISTIC_SETS,
        Component: CharacteristicSets,
    },
    {
        path: ADD_CHARACTERISTIC_SET,
        Component: AddCharacteristicSet,
    },
    {
        path: EDIT_CHARACTERISTIC_SET,
        Component: EditCharacteristicSet,
    },
    {
        path: Np,
        Component: Novaposhta,
    },
    {
        path: CARDS,
        Component: Card,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer,
    },
    {
        path: UPLOAD_THEME,
        Component: UploadTheme,
    },
]
