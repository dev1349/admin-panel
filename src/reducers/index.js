import goodsSlice from './goodsSlice'
import goodTypeReducer from './goodTypeSlice'
import {combineReducers} from '@reduxjs/toolkit'
import statisticsSlice from './statisticsSlice'
import categoriesListSlice from './categoriesListSlice'
import styleSlice from './styleSlice'
import couponsReducer from './couponsSlice'
import {attributeReducer} from './attributeReducer'
import headerSlice from './headerSlice'
import addCategorySlice from './addCategorySlice'
import attributeGroupSlice from './attributeGroupSlice'

export const rootReducer = combineReducers({
    goods: goodsSlice,
    attributes: attributeReducer,
    goodType: goodTypeReducer,
    header: headerSlice,
    addCategory: addCategorySlice,
    attributeGroup: attributeGroupSlice,
    categoriesList: categoriesListSlice,
    statistics: statisticsSlice,
    style: styleSlice,
    coupons: couponsReducer,
})
