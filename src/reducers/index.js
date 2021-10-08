import {goodReducer} from './goodReducer'
import goodTypeReducer from './goodTypeSlice'
import {combineReducers} from '@reduxjs/toolkit'
import headerReducer from './headerSlice'
import addCategoryReducer from './addCategorySlice'
import attributeGroupReducer from './attributeGroupSlice'
import statisticsSlice from './statisticsSlice'
import categoriesListSlice from './categoriesListSlice';

export const rootReducer = combineReducers({
    good: goodReducer,
    goodType: goodTypeReducer,
    header: headerReducer,
    addCategory: addCategoryReducer,
    attributeGroup: attributeGroupReducer,
    categoriesList: categoriesListSlice,
    statistics: statisticsSlice

})
