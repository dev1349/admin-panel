import goodsSlice from './goodsSlice'
import goodTypeReducer from './goodTypeSlice'
import { configureStore } from '@reduxjs/toolkit'
import statisticsSlice from './statisticsSlice'
import categoriesReducer from './categoriesSlice'
import styleSlice from './styleSlice'
import couponsReducer from './couponsSlice'
import { attributeReducer } from './attributeReducer'
import headerSlice from './headerSlice'
import addCategorySlice from './addCategorySlice'
import attributeGroupSlice from './attributeGroupSlice'
import newOrderSlice from './newOrderSlice'
import usersSlice from './usersSlice'
import clientsSlice from './clientsSlice'
import characteristicsReducer from './characteristicsSlice'
import characteristicsWithoutGroupReducer from './characteristicsWithoutGroupSlice'
import characteristicGroupsReducer from './characteristicGroupsSlice'
import characteristicSetsReducer from './characteristicSetsSlice'
import behaviorServerInteractionReducer from './behaviorServerInteraction'
import { goodsApi } from '../api/goodsApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { imagesApi } from '../api/imagesApi'
import { noveltiesApi } from './novelitiesSlice'
import megaMenuReducer from './megaMenuSlice'
import { categoriesApi } from '../api/categoriesApiNew'
import { facetsApi } from '../api/facetsApi'
import { megaMenuApi } from '../api/megaMenuApi'
import { liqPayApi } from '../api/liqpayApi'

export const store = configureStore({
    reducer: {
        goods: goodsSlice,
        attributes: attributeReducer,
        goodType: goodTypeReducer,
        header: headerSlice,
        addCategory: addCategorySlice,
        attributeGroup: attributeGroupSlice,
        statistics: statisticsSlice,
        style: styleSlice,
        coupons: couponsReducer,
        newOrder: newOrderSlice,
        users: usersSlice,
        clients: clientsSlice,
        categories: categoriesReducer,
        characteristics: characteristicsReducer,
        characteristicsWithoutGroup: characteristicsWithoutGroupReducer,
        characteristicGroups: characteristicGroupsReducer,
        characteristicSets: characteristicSetsReducer,
        behaviorServerInteraction: behaviorServerInteractionReducer,
        [goodsApi.reducerPath]: goodsApi.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer,
        [noveltiesApi.reducerPath]: noveltiesApi.reducer,
        megaMenu: megaMenuReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [facetsApi.reducerPath]: facetsApi.reducer,
        [megaMenuApi.reducerPath]: megaMenuApi.reducer,
        [liqPayApi.reducerPath]: liqPayApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(goodsApi.middleware)
            .concat(imagesApi.middleware)
            .concat(noveltiesApi.middleware)
            .concat(categoriesApi.middleware)
            .concat(facetsApi.middleware)
            .concat(megaMenuApi.middleware)
            .concat(liqPayApi.middleware),
})

setupListeners(store.dispatch)
