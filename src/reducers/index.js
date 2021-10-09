import goodsSlice from './goodsSlice'
import goodTypeReducer from './goodTypeSlice'
import {combineReducers} from '@reduxjs/toolkit'
import headerReducer from './headerSlice'
import addCategoryReducer from './addCategorySlice'
import attributeGroupReducer from './attributeGroupSlice'
import statisticsSlice from './statisticsSlice'
import categoriesListSlice from './categoriesListSlice';
import styleSlice from './styleSlice'

export const rootReducer = combineReducers({
    goods: goodsSlice,
    goodType: goodTypeReducer,
    header: headerReducer,
    addCategory: addCategoryReducer,
    attributeGroup: attributeGroupReducer,
    categoriesList: categoriesListSlice,
    statistics: statisticsSlice,
    style: styleSlice

})
