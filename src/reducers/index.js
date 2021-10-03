import {goodReducer} from './goodReducer'
import {goodTypeReducer} from './goodTypeReducer'
import {combineReducers} from '@reduxjs/toolkit'
import {headerReducer} from './headerReducer'
import {addCategoryReducer} from './addCategoryReducer'
import {attributeGroupReducer} from './attributeGroupReducer'
import {statisticsReducer} from "./statisticsReducer";
import categoriesListSlice from './categoriesListSlice';

export const rootReducer = combineReducers({
    good: goodReducer,
    goodType: goodTypeReducer,
    header: headerReducer,
    addCategory: addCategoryReducer,
    attributeGroup: attributeGroupReducer,
    categoriesList: categoriesListSlice,
    statistics: statisticsReducer

})
